import * as React from "react";
import { render, screen } from "@testing-library/react";
import { DialogRoot } from "./DialogRoot";
import { DialogClose } from "./DialogClose";

const customRender = (component) => {
  return render(<DialogRoot>{component}</DialogRoot>);
};

describe("DialogClose", () => {
  test("renders visibly into the document", () => {
    customRender(<DialogClose />);
    expect(screen.getByRole("button")).toBeVisible();
  });
  test("honors asChild prop", () => {
    customRender(
      <DialogClose asChild>
        <button>Cancel</button>
      </DialogClose>
    );
    expect(screen.getByText("Cancel")).toBeVisible();
  });
});
