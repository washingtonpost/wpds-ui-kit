import { useRef } from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useActiveDescendant } from "./useActiveDescendant";
import { CarouselRoot } from "./CarouselRoot";
import { CarouselContent } from "./CarouselContent";
import { CarouselItem } from "./CarouselItem";

const ComponentWrapper = ({ onClick }: { onClick?: () => void }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { handleDescendantFocus, contentProps, addDescendant, focusClassName } =
    useActiveDescendant(containerRef);

  return (
    <CarouselRoot onDescendantFocus={handleDescendantFocus}>
      <CarouselContent {...contentProps} ref={containerRef}>
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
            className={focusClassName(`test-1-link`)}
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
            className={focusClassName(`test-1-link-2`)}
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
                id: "test-2-button",
                parentId: "test-2",
              });
            }}
            onClick={onClick}
            className={focusClassName(`test-2-button`)}
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

  test("uses the down arrow to navigate to child elements", async () => {
    const user = userEvent.setup();
    render(<ComponentWrapper />);
    const groups = screen.getAllByRole("group");
    const content = groups[1];
    await user.tab();
    expect(content).toHaveFocus();
    expect(content).toHaveAttribute("aria-activedescendant", "test-1");
    await user.keyboard("[ArrowDown]");
    expect(screen.getByText("Test 1")).toHaveClass(activeClassname);
    expect(content).toHaveAttribute("aria-activedescendant", "test-1-link");
  });

  test("uses the up arrow to navigate away from child elements", async () => {
    const user = userEvent.setup();
    render(<ComponentWrapper />);
    await user.tab();
    await user.keyboard("[ArrowDown]");
    await user.keyboard("[ArrowUp]");
    expect(screen.getByText("Test 1")).not.toHaveClass(activeClassname);
  });

  test("uses the up and down arrow to navigate between child elements", async () => {
    const user = userEvent.setup();
    render(<ComponentWrapper />);
    const groups = screen.getAllByRole("group");
    const content = groups[1];
    await user.tab();
    await user.keyboard("[ArrowDown]");
    await user.keyboard("[ArrowDown]");
    expect(screen.getByText("Test 1.2")).toHaveClass(activeClassname);
    expect(content).toHaveAttribute("aria-activedescendant", "test-1-link-2");
    await user.keyboard("[ArrowUp]");
    expect(screen.getByText("Test 1")).toHaveClass(activeClassname);
    expect(screen.getByText("Test 1.2")).not.toHaveClass(activeClassname);
    expect(content).toHaveAttribute("aria-activedescendant", "test-1-link");
  });

  test("removes active child when new parent becomes active", async () => {
    const user = userEvent.setup();
    render(<ComponentWrapper />);
    const groups = screen.getAllByRole("group");
    const content = groups[1];
    await user.tab();
    await user.keyboard("[ArrowDown]");
    await user.keyboard("[ArrowRight]");
    expect(screen.getByText("Test 1")).not.toHaveClass(activeClassname);
    expect(content).toHaveAttribute("aria-activedescendant", "test-2");
  });

  test("removes active child when content loses focus", async () => {
    const user = userEvent.setup();
    render(<ComponentWrapper />);
    await user.tab();
    await user.keyboard("[ArrowDown]");
    await user.tab();
    expect(screen.getByText("Test 1")).not.toHaveClass(activeClassname);
  });

  test("replaces active child when content returns focus", async () => {
    const user = userEvent.setup();
    render(<ComponentWrapper />);
    await user.tab();
    await user.keyboard("[ArrowDown]");
    await user.tab();
    await user.tab();
    expect(screen.getByText("Test 1")).toHaveClass(activeClassname);
  });

  test("fires child click event from keyboard interaction", async () => {
    const user = userEvent.setup();
    const handleClick = jest.fn();
    render(<ComponentWrapper onClick={handleClick} />);
    await user.tab();
    await user.keyboard("[ArrowRight]");
    await user.keyboard("[ArrowDown]");
    await user.keyboard("[Space]");
    await user.keyboard("[Enter]");
    expect(handleClick).toHaveBeenCalledTimes(2);
  });
});
