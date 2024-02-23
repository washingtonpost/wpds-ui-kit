import * as React from "react";
import { render, screen } from "@testing-library/react";
import { PopoverRoot } from "./PopoverRoot";
import { PopoverPortal } from "./PopoverPortal";

describe("PopoverPortal", () => {
  const customRender = (ui, contextProps) => {
    return render(<PopoverRoot {...contextProps}>{ui}</PopoverRoot>);
  };

  test("renders visibly into the document", () => {
    customRender(
      <PopoverPortal>
        <div>Test</div>
      </PopoverPortal>,
      { open: true }
    );
    expect(screen.getByText("Test")).toBeVisible();
  });
});
