import * as React from "react";
import { render, screen } from "@testing-library/react";
import { DialogRoot } from "./DialogRoot";
import { DialogContent } from "./DialogContent";

const customRender = (component, rootProps = {}) => {
  return render(<DialogRoot {...rootProps}>{component}</DialogRoot>);
};

describe("DialogContent", () => {
  test("renders visibly into the document", () => {
    customRender(<DialogContent />, { defaultOpen: true });
    expect(screen.getByRole("dialog")).toBeVisible();
  });
});
