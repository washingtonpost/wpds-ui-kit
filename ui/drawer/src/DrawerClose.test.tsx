import * as React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { DrawerClose } from "./DrawerClose";
import { DrawerRoot } from "./DrawerRoot";

describe("DrawerTrigger", () => {
  const customRender = (ui, contextProps) => {
    return render(<DrawerRoot {...contextProps}>{ui}</DrawerRoot>);
  };

  test("renders visibly into the document", () => {
    render(<DrawerClose />);

    expect(screen.getByRole("button")).toBeVisible();
  });

  test("uses the sticky property to add a class", () => {
    render(<DrawerClose sticky />);

    // eslint-disable-next-line jest-dom/prefer-to-have-class
    expect(screen.getByRole("button")).toHaveAttribute(
      "class",
      expect.stringContaining("sticky")
    );
  });

  test("uses openChange handler from context", () => {
    const handleChange = jest.fn();
    customRender(<DrawerClose />, {
      onOpenChange: handleChange,
    });
    userEvent.click(screen.getByRole("button"));
    expect(handleChange).toHaveBeenCalledWith(false);
  });
});
