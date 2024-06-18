import { render, screen } from "@testing-library/react";
// eslint-disable-next-line import/no-named-as-default
import userEvent from "@testing-library/user-event";
import { InputSearchRoot } from "./InputSearchRoot";
import { InputSearchInput } from "./InputSearchInput";
import { InputSearchPopover } from "./InputSearchPopover";
import { InputSearchList } from "./InputSearchList";
import { InputSearchListItem } from "./InputSearchListItem";

describe("InputSearchRoot", () => {
  test("renders visibly into the document", () => {
    render(<InputSearchRoot>Test</InputSearchRoot>);
    expect(screen.getByText("Test")).toBeInTheDocument();
  });

  test("accepts children", () => {
    const testText = "Test child component";
    render(
      <InputSearchRoot>
        <div>{testText}</div>
      </InputSearchRoot>
    );
    expect(screen.getByText(testText)).toBeInTheDocument();
  });

  test("disables input with disabled prop", () => {
    render(
      <InputSearchRoot disabled>
        <InputSearchInput name="" id="" />
      </InputSearchRoot>
    );
    expect(screen.getByRole("combobox")).toBeDisabled();
  });

  test("renders with custom CSS class", () => {
    render(
      <InputSearchRoot css={{ color: "red" }} data-testid="root">
        Test
      </InputSearchRoot>
    );
    expect(screen.getByTestId("root")).toHaveClass(/wpds-.*-css/);
  });

  test("renders with aria-label attribute", () => {
    const ariaLabel = "Search";
    render(
      <InputSearchRoot aria-label={ariaLabel}>
        <InputSearchInput name="" id="" />
      </InputSearchRoot>
    );

    expect(screen.getByRole("combobox")).toHaveAttribute(
      "aria-label",
      ariaLabel
    );
  });

  test("renders with aria-labelledby attribute", () => {
    const labelId = "search-label";
    render(
      <InputSearchRoot aria-labelledby={labelId}>
        <InputSearchInput name="" id="" />
      </InputSearchRoot>
    );

    expect(screen.getByRole("combobox")).toHaveAttribute(
      "aria-labelledby",
      expect.stringContaining(labelId)
    );
  });

  test("renders portal false variant", () => {
    render(
      <InputSearchRoot data-testid="root">
        <InputSearchPopover portal={false} />
      </InputSearchRoot>
    );

    expect(screen.getByTestId("root")).toHaveClass(/wpds-.*-portal-false/);
  });

  test("opens the dropdown on focus", async () => {
    const user = userEvent.setup();

    render(
      <InputSearchRoot openOnFocus>
        <InputSearchInput name="" id="" />
        <InputSearchPopover portal={false}>popover</InputSearchPopover>
      </InputSearchRoot>
    );

    const inputElement = screen.getByRole("combobox");
    await user.click(inputElement);

    expect(await screen.findByText("popover")).toBeInTheDocument();
  });

  test("calls onSelect callback when an option is selected", async () => {
    const user = userEvent.setup();
    const onSelect = jest.fn();
    render(
      <InputSearchRoot onSelect={onSelect} openOnFocus>
        <InputSearchInput name="city" id="city" />
        <InputSearchPopover portal={false}>
          <InputSearchList>
            <InputSearchListItem key="1" value="Option 1" />
          </InputSearchList>
        </InputSearchPopover>
      </InputSearchRoot>
    );

    const inputElement = screen.getByRole("combobox");
    await user.click(inputElement);
    const item = screen.getByRole("option");
    expect(item).toBeInTheDocument();
    await user.click(item);
    expect(onSelect).toHaveBeenCalledWith("Option 1");
  });
});
