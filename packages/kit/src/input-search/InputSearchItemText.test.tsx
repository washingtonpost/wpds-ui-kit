import { render, screen } from "@testing-library/react";
// eslint-disable-next-line import/no-named-as-default
import userEvent from "@testing-library/user-event";
import { InputSearchItemText } from "./InputSearchItemText";
import { InputSearchRoot } from "./InputSearchRoot";
import { InputSearchListItem } from "./InputSearchListItem";
import { InputSearchList } from "./InputSearchList";
import { InputSearchPopover } from "./InputSearchPopover";
import { InputSearchInput } from "./InputSearchInput";

describe("InputSearchItemText", () => {
  const customRender = (ui, contextProps) => {
    return render(
      <InputSearchRoot openOnFocus>
        <InputSearchInput name="" id="" />
        <InputSearchPopover portal={false}>
          <InputSearchList>
            <InputSearchListItem {...contextProps}>{ui}</InputSearchListItem>
          </InputSearchList>
        </InputSearchPopover>
      </InputSearchRoot>
    );
  };
  test("renders visibly into the document", async () => {
    const user = userEvent.setup();
    customRender(<InputSearchItemText>test</InputSearchItemText>, {});

    await user.click(screen.getByRole("combobox"));
    expect(screen.getByText("test")).toBeInTheDocument();
  });
});
