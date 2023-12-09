import * as React from "react";
import { render, screen } from "@testing-library/react";
import { PopoverRoot } from "./PopoverRoot";
import { PopoverContent } from "./PopoverContent";

global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

describe("PopoverContent", () => {
  const customRender = (ui, contextProps) => {
    return render(<PopoverRoot {...contextProps}>{ui}</PopoverRoot>);
  };

  test("is initially hidden", () => {
    customRender(<PopoverContent>Test</PopoverContent>, {});
    expect(screen.queryByText("Test")).not.toBeInTheDocument();
  });

  test("renders visibly into the document", () => {
    customRender(<PopoverContent>Test</PopoverContent>, { open: true });
    expect(screen.getByRole("dialog")).toBeVisible();
  });

  test("uses a number as sideOffset", () => {
    customRender(<PopoverContent sideOffset={10}>Test</PopoverContent>, {
      open: true,
    });
    // eslint-disable-next-line testing-library/no-node-access
    expect(screen.getByRole("dialog").parentElement).toHaveStyle(
      "transform: translate(0, -200%)"
    );
  });
});
