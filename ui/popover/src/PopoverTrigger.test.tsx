import * as React from "react";
import { render, screen } from "@testing-library/react";
import { PopoverRoot } from "./PopoverRoot";
import { PopoverTrigger } from "./PopoverTrigger";

describe("PopoverTrigger", () => {
  const customRender = (ui, contextProps) => {
    return render(<PopoverRoot {...contextProps}>{ui}</PopoverRoot>);
  };

  test("renders visibly into the document", () => {
    customRender(<PopoverTrigger>Test</PopoverTrigger>, {});
    expect(screen.getByRole("button", { name: "Test" })).toBeVisible();
  });

  test("renders as its child", () => {
    customRender(
      <PopoverTrigger asChild>
        <button>Child</button>
      </PopoverTrigger>,
      {}
    );
    expect(screen.getByRole("button", { name: "Child" })).toBeVisible();
  });
});
