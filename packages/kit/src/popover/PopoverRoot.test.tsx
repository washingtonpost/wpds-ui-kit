import { render, screen } from "@testing-library/react";
import { PopoverRoot } from "./PopoverRoot";

describe("PopoverAnchor", () => {
  test("renders visibly into the document", () => {
    render(<PopoverRoot>Test</PopoverRoot>);
    expect(screen.getByText("Test")).toBeVisible();
  });
});
