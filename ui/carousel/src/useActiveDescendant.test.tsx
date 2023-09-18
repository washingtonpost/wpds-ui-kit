import * as React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useActiveDescendant } from "./useActiveDescendant";
import { CarouselRoot } from "./CarouselRoot";
import { CarouselContent } from "./CarouselContent";
import { CarouselItem } from "./CarouselItem";

const ComponentWrapper = ({ onClick }: { onClick?: () => void }) => {
  const { handleDescendantFocus, contentProps, addDescendant } =
    useActiveDescendant();

  return (
    <CarouselRoot onDescendantFocus={handleDescendantFocus}>
      <CarouselContent {...contentProps}>
        <CarouselItem id="test-1">
          <a
            href="#"
            tabIndex={-1}
            id="test-1-link"
            ref={(el) => {
              addDescendant({
                element: el,
                id: "test-1-link",
                parentId: "test-1",
              });
            }}
          >
            Test 1
          </a>
          <a
            href="#"
            tabIndex={-1}
            id="test-1-link-2"
            ref={(el) => {
              addDescendant({
                element: el,
                id: "test-1-link-2",
                parentId: "test-1",
              });
            }}
          >
            Test 1.2
          </a>
        </CarouselItem>
        <CarouselItem id="test-2">
          <button
            tabIndex={-1}
            id="test-2-button"
            ref={(el) => {
              addDescendant({
                element: el,
                id: "test-2-link",
                parentId: "test-2",
              });
            }}
            onClick={onClick}
          >
            Test 2
          </button>
        </CarouselItem>
      </CarouselContent>
    </CarouselRoot>
  );
};

const activeClassname = "wpds-c-cDbbMU";

describe("useActiveDescendant", () => {
  test("renders visibly into the document", () => {
    render(<ComponentWrapper />);
    expect(screen.getByText("Test 1")).toBeVisible();
  });

  test("uses the down arrow to navigate to child elements", () => {
    render(<ComponentWrapper />);
    const groups = screen.getAllByRole("group");
    const content = groups[1];
    userEvent.tab();
    expect(content).toHaveFocus();
    expect(content).toHaveAttribute("aria-activedescendant", "test-1");
    userEvent.keyboard("[ArrowDown]");
    expect(screen.getByText("Test 1")).toHaveClass(activeClassname);
    expect(content).toHaveAttribute("aria-activedescendant", "test-1-link");
  });

  test("uses the up arrow to navigate away from child elements", () => {
    render(<ComponentWrapper />);
    userEvent.tab();
    userEvent.keyboard("[ArrowDown]");
    userEvent.keyboard("[ArrowUp]");
    expect(screen.getByText("Test 1")).not.toHaveClass(activeClassname);
  });

  test("uses the up and down arrow to navigate between child elements", () => {
    render(<ComponentWrapper />);
    const groups = screen.getAllByRole("group");
    const content = groups[1];
    userEvent.tab();
    userEvent.keyboard("[ArrowDown]");
    userEvent.keyboard("[ArrowDown]");
    expect(screen.getByText("Test 1.2")).toHaveClass(activeClassname);
    expect(content).toHaveAttribute("aria-activedescendant", "test-1-link-2");
    userEvent.keyboard("[ArrowUp]");
    expect(screen.getByText("Test 1")).toHaveClass(activeClassname);
    expect(screen.getByText("Test 1.2")).not.toHaveClass(activeClassname);
    expect(content).toHaveAttribute("aria-activedescendant", "test-1-link");
  });

  test("removes active child when new parent becomes active", () => {
    render(<ComponentWrapper />);
    const groups = screen.getAllByRole("group");
    const content = groups[1];
    userEvent.tab();
    userEvent.keyboard("[ArrowDown]");
    userEvent.keyboard("[ArrowRight]");
    expect(screen.getByText("Test 1")).not.toHaveClass(activeClassname);
    expect(content).toHaveAttribute("aria-activedescendant", "test-2");
  });

  test("removes active child when content loses focus", () => {
    render(<ComponentWrapper />);
    userEvent.tab();
    userEvent.keyboard("[ArrowDown]");
    userEvent.tab();
    expect(screen.getByText("Test 1")).not.toHaveClass(activeClassname);
  });

  test("replaces active child when content returns focus", () => {
    render(<ComponentWrapper />);
    userEvent.tab();
    userEvent.keyboard("[ArrowDown]");
    userEvent.tab();
    userEvent.tab();
    expect(screen.getByText("Test 1")).toHaveClass(activeClassname);
  });

  test("fires child click event from keyboard interaction", () => {
    const handleClick = jest.fn();
    render(<ComponentWrapper onClick={handleClick} />);
    userEvent.tab();
    userEvent.keyboard("[ArrowRight]");
    userEvent.keyboard("[ArrowDown]");
    userEvent.keyboard("[Space]");
    userEvent.keyboard("[Enter]");
    expect(handleClick).toHaveBeenCalledTimes(2);
  });
});
