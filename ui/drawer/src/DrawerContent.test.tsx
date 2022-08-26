import * as React from "react";
import { render, screen } from "@testing-library/react";
import { DrawerContent } from "./DrawerContent";
import { DrawerTrigger } from "./DrawerTrigger";
import { DrawerRoot } from "./DrawerRoot";

describe("DrawerContent", () => {
  const customRender = (ui, contextProps) => {
    return render(<DrawerRoot {...contextProps}>{ui}</DrawerRoot>);
  };

  test("renders hidden into the document", () => {
    render(<DrawerContent>Drawer Content</DrawerContent>);

    expect(screen.queryByText("Drawer Content")).not.toBeInTheDocument();
  });

  test("uses the context open property to be visible", () => {
    customRender(<DrawerContent>Drawer Content</DrawerContent>, {
      open: true,
    });

    expect(screen.getByText("Drawer Content")).toBeVisible();
  });

  test("uses the context defaultOpen property to be visible", () => {
    customRender(<DrawerContent>Drawer Content</DrawerContent>, {
      defaultOpen: true,
    });

    expect(screen.getByText("Drawer Content")).toBeVisible();
  });

  test("uses the height property to add css", () => {
    customRender(
      <DrawerContent data-testid="drawer-content" height={100}>
        Drawer Content
      </DrawerContent>,
      {
        defaultOpen: true,
      }
    );

    expect(screen.getByTestId("drawer-content")).toHaveStyle("height: 100px;");
  });

  test("uses the width property to add css", () => {
    customRender(
      <DrawerContent data-testid="drawer-content" width={100} position="left">
        Drawer Content
      </DrawerContent>,
      {
        defaultOpen: true,
      }
    );

    expect(screen.getByTestId("drawer-content")).toHaveStyle("width: 100px;");
  });

  test("uses the position property to add a class", () => {
    customRender(
      <DrawerContent data-testid="drawer-content" position="top">
        Drawer Content
      </DrawerContent>,
      {
        defaultOpen: true,
      }
    );

    // eslint-disable-next-line jest-dom/prefer-to-have-class
    expect(screen.getByTestId("drawer-content")).toHaveAttribute(
      "class",
      expect.stringContaining("position-top")
    );
  });

  test("uses the in-place position property", () => {
    customRender(
      <>
        <DrawerTrigger />
        <DrawerContent data-testid="drawer-content" position="in-place">
          Drawer Content
        </DrawerContent>
      </>,
      {
        defaultOpen: true,
      }
    );
    expect(screen.getByTestId("drawer-content")).toBeVisible();
  });

  test("uses the inPlaceRef property", () => {
    customRender(
      <>
        <DrawerTrigger />
        <DrawerContent
          data-testid="drawer-content"
          position="in-place"
          inPlaceRef={{
            current: { getBoundingClientRect: () => ({}) } as HTMLElement,
          }}
        >
          Drawer Content
        </DrawerContent>
      </>,
      {
        defaultOpen: true,
      }
    );
    expect(screen.getByTestId("drawer-content")).toBeVisible();
  });
});
