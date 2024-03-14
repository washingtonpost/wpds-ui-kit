import * as React from "react";
import { render, screen } from "@testing-library/react";
import { DialogFooter } from "./DialogFooter";

describe("DialogFooter", () => {
  test("renders visibly into the document", () => {
    render(<DialogFooter />);
    expect(screen.getByRole("contentinfo")).toBeVisible();
  });
});
