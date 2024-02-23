import * as React from "react";
import { render, screen } from "@testing-library/react";
import { DialogRoot } from "./DialogRoot";
import { DialogPortal } from "./DialogPortal";

const customRender = (component, rootProps = {}) => {
  return render(<DialogRoot {...rootProps}>{component}</DialogRoot>);
};

describe("DialogPortal", () => {
  test("renders visibly into the document", () => {
    customRender(
      <DialogPortal>
        <span>test</span>
      </DialogPortal>,
      { defaultOpen: true }
    );
    expect(screen.getByText("test")).toBeVisible();
  });
});
