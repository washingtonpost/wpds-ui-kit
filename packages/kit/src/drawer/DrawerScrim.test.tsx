import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { DrawerScrim } from "./DrawerScrim";
import { DrawerRoot } from "./DrawerRoot";

describe("DrawerScrim", () => {
  const customRender = (ui, contextProps) => {
    return render(<DrawerRoot {...contextProps}>{ui}</DrawerRoot>);
  };

  test("renders visibly into the document", () => {
    customRender(<DrawerScrim data-testid="test" />, { defaultOpen: true });

    expect(screen.getByTestId("test")).toBeVisible();
  });

  test("uses the open property to be visible", () => {
    customRender(<DrawerScrim data-testid="test" />, {
      open: true,
    });

    expect(screen.getByTestId("test")).toBeVisible();
  });

  test("uses openChange handler from context", async () => {
    const user = userEvent.setup();
    const handleChange = jest.fn();
    customRender(<DrawerScrim data-testid="test" />, {
      onOpenChange: handleChange,
      defaultOpen: true,
    });
    await user.click(screen.getByTestId("test"));
    expect(handleChange).toHaveBeenCalledWith(false);
  });
});
