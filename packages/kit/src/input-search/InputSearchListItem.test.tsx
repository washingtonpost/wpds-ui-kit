import { render, screen } from "@testing-library/react";
// eslint-disable-next-line import/no-named-as-default
import userEvent from "@testing-library/user-event";
import { InputSearchListItem } from "./InputSearchListItem";
import { InputSearchRoot } from "./InputSearchRoot";
import { InputSearchInput } from "./InputSearchInput";
import { InputSearchPopover } from "./InputSearchPopover";
import { InputSearchList } from "./InputSearchList";

describe("InputSearchListItem", () => {
  const customRender = (ui) => {
    return render(
      <InputSearchRoot openOnFocus>
        <InputSearchInput name="" id="" />
        <InputSearchPopover portal={false}>
          <InputSearchList>{ui}</InputSearchList>
        </InputSearchPopover>
      </InputSearchRoot>
    );
  };
  test("renders visibly into the document", async () => {
    const user = userEvent.setup();
    customRender(<InputSearchListItem value="item" />);
    await user.click(screen.getByRole("combobox"));
    expect(screen.getByRole("option")).toBeInTheDocument();
  });
});
