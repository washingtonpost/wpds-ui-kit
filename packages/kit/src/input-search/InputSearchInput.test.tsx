import { render, screen } from "@testing-library/react";
// eslint-disable-next-line import/no-named-as-default
import userEvent from "@testing-library/user-event";
import { InputSearchInput } from "./InputSearchInput";
import { InputSearchRoot } from "./InputSearchRoot";
import { InputSearchPopover } from "./InputSearchPopover";
import { InputSearchList } from "./InputSearchList";
import { InputSearchListItem } from "./InputSearchListItem";
import { theme } from "../theme";

describe("InputSearchInput", () => {
  const customRender = (ui, contextProps) => {
    return render(
      <InputSearchRoot
        css={{
          fontWeight: theme.fontWeights.bold,
          fontSize: theme.fontSizes["100"],
        }}
      >
        {ui}
        <InputSearchPopover {...contextProps}>
          <InputSearchList>
            <InputSearchListItem value="Test item" />
          </InputSearchList>
        </InputSearchPopover>
      </InputSearchRoot>
    );
  };

  test("renders visibly into the document", () => {
    customRender(<InputSearchInput name="test" id="test" />, {});
    expect(screen.getByRole("combobox")).toBeInTheDocument();
  });

  test("renders with custom CSS class", () => {
    customRender(
      <InputSearchInput name="test" id="test" css={{ color: "red" }} />,
      {}
    );
    expect(screen.getByRole("combobox")).toHaveClass(/wpds-.*-css/);
  });

  test("uses the error prop", () => {
    customRender(<InputSearchInput name="test" id="test" error />, {});
    expect(screen.getByTestId("input-text-container")).toHaveClass(
      /wpds-.*-isInvalid-true/
    );
  });

  test("uses the success prop", () => {
    customRender(<InputSearchInput name="test" id="test" success />, {});
    expect(screen.getByTestId("input-text-container")).toHaveClass(
      /wpds-.*-isSuccessful-true/
    );
  });

  test("uses the disabled prop", () => {
    customRender(<InputSearchInput name="test" id="test" disabled />, {});
    expect(screen.getByRole("combobox")).toBeDisabled();
  });

  test("uses the label", () => {
    const labelText = "Test";
    customRender(
      <InputSearchInput name="test" id="test" label={labelText} />,
      {}
    );
    expect(screen.getByLabelText(labelText)).toBeInTheDocument();
  });

  /** must be managed by react-stately / react-aria */
  test.skip("uses id", () => {
    customRender(<InputSearchInput name="test" id="test" />, {});
    expect(screen.getByRole("combobox")).toHaveAttribute("id", "test");
  });

  test("uses name", () => {
    customRender(<InputSearchInput name="test" id="test" />, {});
    expect(screen.getByRole("combobox")).toHaveAttribute("name", "test");
  });

  test("uses name", () => {
    customRender(<InputSearchInput name="test" id="test" />, {});
    expect(screen.getByRole("combobox")).toHaveAttribute("name", "test");
  });

  test("uses placeholder", () => {
    customRender(
      <InputSearchInput name="test" id="test" placeholder="Test" />,
      {}
    );
    expect(screen.getByRole("combobox")).toHaveAttribute("placeholder", "Test");
  });

  test("renders with custom CSS class", () => {
    customRender(
      <InputSearchInput name="test" id="test" css={{ color: "red" }} />,
      {}
    );
    expect(screen.getByRole("combobox")).toHaveClass(/wpds-.*-css/);
  });

  test("shows as required", () => {
    customRender(<InputSearchInput name="test" id="test" required />, {});
    expect(screen.getByText("*")).toBeInTheDocument();
  });

  test("uses the value prop", () => {
    customRender(<InputSearchInput name="test" id="test" value="Test" />, {});
    expect(screen.getByRole("combobox")).toHaveValue("Test");
  });

  test("uses the buttonIconText prop", () => {
    const buttonIconText = "Click to search";
    customRender(
      <InputSearchInput
        name="test"
        id="test"
        buttonIconText={buttonIconText}
      />,
      {}
    );
    expect(screen.getByText(buttonIconText)).toBeInTheDocument();
  });

  test("uses the buttonIconType prop", () => {
    customRender(
      <InputSearchInput name="test" id="test" buttonIconType="submit" />,
      {}
    );
    expect(screen.getByRole("button")).toHaveAttribute("type", "submit");
  });

  test("uses the errorMessage prop", () => {
    customRender(
      <InputSearchInput name="test" id="test" errorMessage="Error" />,
      {}
    );
    expect(screen.getByText("Error")).toBeInTheDocument();
  });

  test("uses the helperText prop", () => {
    customRender(
      <InputSearchInput name="test" id="test" helperText="Help" />,
      {}
    );
    expect(screen.getByText("Help")).toBeInTheDocument();
  });

  test("uses the onFocus event handler", () => {
    const onFocus = jest.fn();
    customRender(
      <InputSearchInput name="test" id="test" onFocus={onFocus} />,
      {}
    );
    screen.getByRole("combobox").focus();
    expect(onFocus).toHaveBeenCalled();
  });

  test("uses the onBlur event handler", () => {
    const onBlur = jest.fn();
    customRender(
      <InputSearchInput name="test" id="test" onBlur={onBlur} />,
      {}
    );
    const input = screen.getByRole("combobox");
    input.focus();
    input.blur();

    expect(onBlur).toHaveBeenCalled();
  });

  test("uses the onChange event handler", async () => {
    const user = userEvent.setup();
    const onChange = jest.fn();
    customRender(
      <InputSearchInput name="test" id="test" onChange={onChange} />,
      {}
    );

    await user.keyboard("Test");

    expect(onChange).toHaveBeenCalled;
  });

  test("uses the onButtonIconClick event handler", async () => {
    const user = userEvent.setup();
    const onButtonIconClick = jest.fn();
    customRender(
      <InputSearchInput
        name="test"
        id="test"
        onButtonIconClick={onButtonIconClick}
      />,
      {}
    );
    await user.click(screen.getByRole("button"));
    expect(onButtonIconClick).toHaveBeenCalled();
  });

  test("updates the value when an item is highlighted", async () => {
    const user = userEvent.setup();
    customRender(<InputSearchInput name="test" id="test" />, {});
    const inputElement = screen.getByRole("combobox");
    await user.click(inputElement);
    await user.keyboard("T");
    await user.keyboard("[ArrowDown]");
    expect(inputElement).toHaveValue("Test item");
  });
});
