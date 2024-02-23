import { render, screen } from "@testing-library/react";
import { PopoverRoot } from "./PopoverRoot";
import { PopoverClose } from "./PopoverClose";

describe("PopoverClose", () => {
  const customRender = (ui, contextProps) => {
    return render(<PopoverRoot {...contextProps}>{ui}</PopoverRoot>);
  };

  test("renders visibly into the document", () => {
    customRender(<PopoverClose />, {});
    expect(screen.getByRole("button", { name: "Close popup" })).toBeVisible();
  });

  test("renders as its child", () => {
    customRender(
      <PopoverClose asChild>
        <button>Child</button>
      </PopoverClose>,
      {}
    );
    expect(screen.getByRole("button", { name: "Child" })).toBeVisible();
  });
});
