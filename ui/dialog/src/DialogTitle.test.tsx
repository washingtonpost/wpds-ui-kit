import * as React from "react";
import { render, screen } from "@testing-library/react";
import { DialogRoot } from "./DialogRoot";
import { DialogTitle } from "./DialogTitle";

const customRender = (component, rootProps = {}) => {
  return render(<DialogRoot {...rootProps}>{component}</DialogRoot>);
};

describe("DialogTitle", () => {
  test("renders visibly into the document", () => {
    customRender(<DialogTitle />, { defaultOpen: true });
    expect(screen.getByRole("heading")).toBeVisible();
  });
});
