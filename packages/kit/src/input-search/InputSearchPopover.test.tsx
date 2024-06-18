import { render, screen } from "@testing-library/react";
// eslint-disable-next-line import/no-named-as-default
import userEvent from "@testing-library/user-event";
import { InputSearchPopover } from "./InputSearchPopover";
import { InputSearchRoot } from "./InputSearchRoot";
import { InputSearchInput } from "./InputSearchInput";

describe("InputSearchPopover", () => {
  const customRender = (ui, contextProps) => {
    return render(
      <InputSearchRoot {...contextProps} openOnFocus>
        <InputSearchInput id="test" name="test" />
        {ui}
      </InputSearchRoot>
    );
  };

  test("renders into the document", async () => {
    const user = userEvent.setup();
    customRender(<InputSearchPopover />, {});
    const inputElement = screen.getByRole("combobox");
    await user.click(inputElement);
    expect(screen.getByRole("dialog")).toBeInTheDocument();
  });

  test("renders with custom CSS class", async () => {
    const user = userEvent.setup();
    customRender(<InputSearchPopover css={{ color: "red" }} />, {});
    const inputElement = screen.getByRole("combobox");
    await user.click(inputElement);
    expect(screen.getByRole("dialog")).toHaveClass(/wpds-.*-css/);
  });

  test("renders portal false variant", async () => {
    const user = userEvent.setup();
    customRender(<InputSearchPopover portal={false} />, {});
    const inputElement = screen.getByRole("combobox");
    await user.click(inputElement);
    expect(screen.getByRole("dialog")).not.toHaveClass(
      /wpds-.*-density-default/
    );
  });
});
