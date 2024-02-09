import * as React from "react";
import { render, screen } from "@testing-library/react";
import { DialogRoot } from "./DialogRoot";
import { DialogTrigger } from "./DialogTrigger";

const customRender = (component, rootProps = {}) => {
  return render(<DialogRoot {...rootProps}>{component}</DialogRoot>);
};

describe("DialogTrigger", () => {
  test("renders visibly into the document", () => {
    customRender(<DialogTrigger />, { defaultOpen: true });
    expect(screen.getByRole("button")).toBeVisible();
  });
});
