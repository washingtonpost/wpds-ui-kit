import { render, screen } from "@testing-library/react";
import { InputSearchInput } from "./InputSearchInput";
import { InputSearchRoot } from "./InputSearchRoot";
import { InputSearchPopover } from "./InputSearchPopover";

describe("InputSearchInput", () => {
  const customRender = (ui, contextProps) => {
    return render(
      <InputSearchRoot>
        {ui}
        <InputSearchPopover {...contextProps} />
      </InputSearchRoot>
    );
  };
  test("renders visibly into the document", () => {
    customRender(<InputSearchInput name="test" id="test" label="Test" />, {});
    expect(screen.getByLabelText("Test")).toBeInTheDocument();
  });
  test("uses contexts portal prop", () => {
    customRender(<InputSearchInput name="test" id="test" label="Test" />, {
      portal: false,
    });
    expect(screen.getByTestId("border-style-override")).toHaveStyle(
      "--wpds-colors-signal: var(--wpds-colors-subtle)"
    );
  });
});
