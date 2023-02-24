import * as React from "react";
import { render, screen } from "@testing-library/react";
import { PopoverRoot } from "./PopoverRoot";
import { PopoverAnchor } from "./PopoverAnchor";

describe("PopoverAnchor", () => {
  const customRender = (ui, contextProps) => {
    return render(<PopoverRoot {...contextProps}>{ui}</PopoverRoot>);
  };

  test("renders visibly into the document", () => {
    customRender(<PopoverAnchor>Test</PopoverAnchor>, {});
    expect(screen.getByText("Test")).toBeVisible();
  });
});
