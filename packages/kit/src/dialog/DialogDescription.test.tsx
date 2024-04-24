import * as React from "react";
import { render, screen } from "@testing-library/react";
import { DialogRoot } from "./DialogRoot";
import { DialogDescription } from "./DialogDescription";

const customRender = (component, rootProps = {}) => {
  return render(<DialogRoot {...rootProps}>{component}</DialogRoot>);
};

describe("DialogDescription", () => {
  test("renders visibly into the document", () => {
    customRender(<DialogDescription>test</DialogDescription>, {
      defaultOpen: true,
    });
    expect(screen.getByText("test")).toBeVisible();
  });
});
