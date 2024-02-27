import * as React from "react";
import { render, screen } from "@testing-library/react";
import { DialogRoot } from "./DialogRoot";

describe("DialogRoot", () => {
  test("renders visibly into the document", () => {
    render(<DialogRoot>test</DialogRoot>);
    expect(screen.getByText("test")).toBeVisible();
  });
});
