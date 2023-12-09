import * as React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { DrawerContent } from "./DrawerContent";
import { DrawerRoot } from "./DrawerRoot";

jest.mock("react-transition-group", () => {
  const MocCSSTransition = jest.fn(({ children, ...props }) => {
    if (props.in) {
      props.onEnter && props.onEnter();
      return children;
    } else if (props.in === false) {
      props.onExit && props.onExit();
    }
    return setTimeout(() => null, 0);
  });
  return { CSSTransition: MocCSSTransition };
});

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

  test("adds a key listener to the document after open", () => {
    const spy = jest.spyOn(document, "addEventListener");
    customRender(<DrawerContent>Drawer Content</DrawerContent>, {
      defaultOpen: true,
    });
    expect(spy).toHaveBeenCalled();
  });

  test("removes a key listener from the document after close", async () => {
    const spy = jest.spyOn(document, "removeEventListener");
    customRender(<DrawerContent>Drawer Content</DrawerContent>, {
      defaultOpen: true,
    });
    fireEvent.keyDown(document, { key: "Escape", code: "Escape" });
    expect(spy).toHaveBeenCalled();
  });

  test("closes with esc key", async () => {
    const handleChange = jest.fn();
    customRender(<DrawerContent>Drawer Content</DrawerContent>, {
      defaultOpen: true,
      onOpenChange: handleChange,
    });
    fireEvent.keyDown(document, { key: "Escape", code: "Escape" });
    expect(handleChange).toHaveBeenCalledWith(false);
  });
});
