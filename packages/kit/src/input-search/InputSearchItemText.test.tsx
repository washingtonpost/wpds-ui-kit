import { render, screen } from "@testing-library/react";
import { InputSearchItemText } from "./InputSearchItemText";
import { InputSearchRoot } from "./InputSearchRoot";
import { InputSearchListItem } from "./InputSearchListItem";
import { InputSearchList } from "./InputSearchList";

describe("InputSearchItemText", () => {
  const customRender = (ui, contextProps) => {
    return render(
      <InputSearchRoot>
        <InputSearchList>
          <InputSearchListItem {...contextProps}>{ui}</InputSearchListItem>
        </InputSearchList>
      </InputSearchRoot>
    );
  };
  test("renders visibly into the document", () => {
    customRender(<InputSearchItemText>&#x2766;</InputSearchItemText>, {
      value: "test",
    });
    expect(screen.getByText("test")).toBeInTheDocument();
  });
});
