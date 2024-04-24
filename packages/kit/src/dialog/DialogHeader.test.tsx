import * as React from "react";
import { render, screen } from "@testing-library/react";
import { DialogHeader } from "./DialogHeader";

describe("DialogHeader", () => {
  test("renders visibly into the document", () => {
    render(<DialogHeader />);
    expect(screen.getByRole("banner")).toBeVisible();
  });
});
