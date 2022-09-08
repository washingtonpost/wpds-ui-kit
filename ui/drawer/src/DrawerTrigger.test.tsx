import * as React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { DrawerTrigger } from "./DrawerTrigger";
import { DrawerRoot } from "./DrawerRoot";

describe("DrawerTrigger", () => {
  const customRender = (ui, contextProps) => {
    return render(<DrawerRoot {...contextProps}>{ui}</DrawerRoot>);
  };

  test("renders visibly into the document", () => {
    render(<DrawerTrigger>Trigger Drawer</DrawerTrigger>);

    expect(screen.getByText("Trigger Drawer")).toBeVisible();
  });

  test("sets aria-expanded based on context open", () => {
    customRender(<DrawerTrigger>Trigger Drawer</DrawerTrigger>, {
      open: true,
    });
    expect(screen.getByRole("button", { expanded: true })).toBeVisible();
  });

  test("sets aria-controls based on context contentId", () => {
    customRender(<DrawerTrigger>Trigger Drawer</DrawerTrigger>, {
      id: "test-id",
    });
    expect(screen.getByRole("button")).toHaveAttribute(
      "aria-controls",
      "test-id"
    );
  });

  test("uses openChange handler from context", () => {
    const handleChange = jest.fn();
    customRender(<DrawerTrigger>Trigger Drawer</DrawerTrigger>, {
      onOpenChange: handleChange,
    });
    userEvent.click(screen.getByRole("button"));
    expect(handleChange).toHaveBeenCalledWith(true);
  });
});
