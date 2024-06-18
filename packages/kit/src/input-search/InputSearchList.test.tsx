import { render, screen } from "@testing-library/react";
// eslint-disable-next-line import/no-named-as-default
import userEvent from "@testing-library/user-event";

import { InputSearchList } from "./InputSearchList";
import { InputSearchRoot } from "./InputSearchRoot";
import { InputSearchInput } from "./InputSearchInput";
import { InputSearchPopover } from "./InputSearchPopover";
import { InputSearchListItem } from "./InputSearchListItem";

describe("InputSearchList", () => {
  const customRender = (ui, contextProps) => {
    return render(<InputSearchRoot {...contextProps}>{ui}</InputSearchRoot>);
  };

  test("renders visibly into the document", () => {
    customRender(<InputSearchList>test</InputSearchList>, {});
    expect(screen.getByRole("listbox")).toBeInTheDocument();
  });

  test("renders with custom CSS class", () => {
    customRender(
      <InputSearchList css={{ color: "red" }}>test</InputSearchList>,
      {}
    );
    expect(screen.getByRole("listbox")).toHaveClass(/wpds-.*-css/);
  });

  /** test persistSelection prop */
  test("uses persistSelection prop", async () => {
    const user = userEvent.setup();
    customRender(
      <>
        <InputSearchInput name="test" id="test" />
        <InputSearchPopover portal={false}>
          <InputSearchList persistSelection>
            <InputSearchListItem value="Test item 1" />
            <InputSearchListItem value="Test item 2" />
            <InputSearchListItem value="Test item 3" />
          </InputSearchList>
        </InputSearchPopover>
      </>,
      { openOnFocus: true }
    );
    const input = screen.getByRole("combobox");
    await user.click(input);

    await user.keyboard("[ArrowDown]");
    await user.keyboard("[ArrowDown]");
    await user.keyboard("[Enter]");

    await user.click(document.body);
    await user.click(input);

    const item = screen.getAllByRole("option")[1];
    expect(item).toHaveAttribute("aria-selected", "true");
    expect(item).toHaveClass(/wpds-.*-focused-true/);
  });
});
