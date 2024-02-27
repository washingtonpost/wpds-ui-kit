import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { DrawerCustomTrigger } from "./DrawerCustomTrigger";
import { DrawerRoot } from "./DrawerRoot";

describe("DrawerCustomTrigger", () => {
  const customRender = (ui, contextProps) => {
    return render(<DrawerRoot {...contextProps}>{ui}</DrawerRoot>);
  };

  test("renders visibly into the document", () => {
    render(<DrawerCustomTrigger>Trigger Drawer</DrawerCustomTrigger>);

    expect(screen.getByText("Trigger Drawer")).toBeVisible();
  });

  test("sets aria-expanded based on context open", () => {
    customRender(<DrawerCustomTrigger>Trigger Drawer</DrawerCustomTrigger>, {
      open: true,
    });
    expect(screen.getByRole("button", { expanded: true })).toBeVisible();
  });

  test("sets aria-controls based on context contentId", () => {
    customRender(<DrawerCustomTrigger>Trigger Drawer</DrawerCustomTrigger>, {
      id: "test-id",
    });
    expect(screen.getByRole("button")).toHaveAttribute(
      "aria-controls",
      "test-id"
    );
  });

  test("uses openChange handler from context", async () => {
    const user = userEvent.setup();
    const handleChange = jest.fn();
    customRender(<DrawerCustomTrigger>Trigger Drawer</DrawerCustomTrigger>, {
      onOpenChange: handleChange,
    });
    await user.click(screen.getByRole("button"));
    expect(handleChange).toHaveBeenCalledWith(true);
  });

  test("has keyboard accessibility", async () => {
    const user = userEvent.setup();
    const handleChange = jest.fn();
    customRender(
      <DrawerCustomTrigger as="span">Trigger Drawer</DrawerCustomTrigger>,
      {
        onOpenChange: handleChange,
      }
    );
    await user.tab();
    expect(screen.getByRole("button")).toHaveFocus();
    await user.keyboard("a");
    expect(handleChange).not.toHaveBeenCalled();
    await user.keyboard("{enter}");
    expect(handleChange).toHaveBeenCalledWith(true);
  });
});
