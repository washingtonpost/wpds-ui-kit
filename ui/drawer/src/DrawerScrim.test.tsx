import * as React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { DrawerScrim } from "./DrawerScrim";
import { DrawerRoot } from "./DrawerRoot";

describe("DrawerTrigger", () => {
  const customRender = (ui, contextProps) => {
    return render(<DrawerRoot {...contextProps}>{ui}</DrawerRoot>);
  };

  test("renders visibly into the document", () => {
    render(<DrawerScrim data-testid="test" />);

    expect(screen.getByTestId("test")).toBeVisible();
  });

  test("uses the open property to add a class", () => {
    customRender(<DrawerScrim data-testid="test" />, {
      open: true,
    });

    // eslint-disable-next-line jest-dom/prefer-to-have-class
    expect(screen.getByTestId("test")).toHaveAttribute(
      "class",
      expect.stringContaining("open")
    );
  });

  test("uses the defautOpen property to add a class", () => {
    customRender(<DrawerScrim data-testid="test" />, {
      defaultOpen: true,
    });

    // eslint-disable-next-line jest-dom/prefer-to-have-class
    expect(screen.getByTestId("test")).toHaveAttribute(
      "class",
      expect.stringContaining("open")
    );
  });

  test("uses openChange handler from context", () => {
    const handleChange = jest.fn();
    customRender(<DrawerScrim data-testid="test" />, {
      onOpenChange: handleChange,
    });
    userEvent.click(screen.getByTestId("test"));
    expect(handleChange).toHaveBeenCalledWith(false);
  });
});
