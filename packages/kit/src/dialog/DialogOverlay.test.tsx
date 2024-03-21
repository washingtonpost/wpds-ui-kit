import * as React from "react";
import { render, screen } from "@testing-library/react";
import { DialogRoot } from "./DialogRoot";
import { DialogOverlay } from "./DialogOverlay";

const customRender = (component, rootProps = {}) => {
  return render(<DialogRoot {...rootProps}>{component}</DialogRoot>);
};

describe("DialogOverlay", () => {
  test("renders visibly into the document", () => {
    customRender(<DialogOverlay data-testid="test" />, { defaultOpen: true });
    expect(screen.getByTestId("test")).toBeVisible();
  });
});
