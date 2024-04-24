import { render, screen } from "@testing-library/react";
import { InputSearchListItem } from "./InputSearchListItem";
import { InputSearchRoot } from "./InputSearchRoot";
import { InputSearchList } from "./InputSearchList";

describe("InputSearchItemText", () => {
  const customRender = (ui, contextProps) => {
    return render(
      <InputSearchRoot>
        <InputSearchList {...contextProps}>{ui}</InputSearchList>
      </InputSearchRoot>
    );
  };
  test("renders visibly into the document", () => {
    customRender(<InputSearchListItem value="test" />, {});
    expect(screen.getByRole("option")).toBeInTheDocument();
  });
});
