import { useContext } from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { InputSearchRoot, InputSearchContext } from "./InputSearchRoot";
import { InputSearchInput } from "./InputSearchInput";
import { InputSearchPopover } from "./InputSearchPopover";
import { InputSearchList } from "./InputSearchList";
import { InputSearchListItem } from "./InputSearchListItem";

describe("InputSearchRoot", () => {
  const TestComponent = () => {
    const { rootRect } = useContext(InputSearchContext);
    return <div>{rootRect && rootRect.top}</div>;
  };

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

  test("provides root rect in context", () => {
    render(
      <InputSearchRoot>
        <TestComponent />
      </InputSearchRoot>
    );
    expect(screen.getByText("0")).toBeInTheDocument();
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
      labelId
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

  test("opens the dropdown on focus", () => {
    render(
      <InputSearchRoot openOnFocus>
        <InputSearchInput name="" id="" />
        <InputSearchPopover>popover</InputSearchPopover>
      </InputSearchRoot>
    );

    const inputElement = screen.getByRole("combobox");
    fireEvent.focus(inputElement);

    expect(screen.getByText("popover")).toBeInTheDocument();
  });

  test("calls onSelect callback when an option is selected", () => {
    const onSelect = jest.fn();
    render(
      <InputSearchRoot onSelect={onSelect}>
        <InputSearchInput name="city" id="city" />
        <InputSearchPopover>
          <InputSearchList>
            <InputSearchListItem key="1" value="Option 1" />
          </InputSearchList>
        </InputSearchPopover>
      </InputSearchRoot>
    );

    const inputElement = screen.getByRole("combobox");
    fireEvent.focus(inputElement);
    fireEvent.keyPress(inputElement, { key: "o" });

    const optionElement = screen.getByText("Option 1");
    fireEvent.click(optionElement);

    expect(onSelect).toHaveBeenCalledWith("Option 1");
  });
});
