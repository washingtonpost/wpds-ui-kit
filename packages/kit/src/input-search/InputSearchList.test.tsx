import { render, screen } from "@testing-library/react";
import { InputSearchList } from "./InputSearchList";
import { InputSearchRoot } from "./InputSearchRoot";

describe("InputSearchList", () => {
  const customRender = (ui, contextProps) => {
    return render(<InputSearchRoot {...contextProps}>{ui}</InputSearchRoot>);
  };

  test("renders visibly into the document", () => {
    customRender(<InputSearchList />, {});
    expect(screen.getByRole("listbox")).toBeInTheDocument();
  });
});
