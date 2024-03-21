import { useContext, useState } from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { DrawerRoot, DrawerContext } from "./DrawerRoot";

describe("DrawerRoot", () => {
  const TestComponent = () => {
    const { contentId, open, defaultOpen, zIndex, onOpenChange } =
      useContext(DrawerContext);
    return (
      <div id={contentId} style={{ zIndex: zIndex as number }}>
        Drawer Sub-Component <br />
        {open && <span>open</span>} <br />
        {defaultOpen && <span>default open</span>} <br />
        <button
          onClick={() => {
            onOpenChange(true);
          }}
        >
          Trigger
        </button>
      </div>
    );
  };

  test("children render visibly into the document", () => {
    render(<DrawerRoot id="test-id">Test</DrawerRoot>);

    expect(screen.getByText("Test")).toBeVisible();
  });

  test("context passes id", () => {
    render(
      <DrawerRoot id="test-id">
        <TestComponent />
      </DrawerRoot>
    );

    expect(screen.getByText("Drawer Sub-Component")).toHaveAttribute(
      "id",
      "test-id"
    );
  });

  test("context passes open prop", () => {
    render(
      <DrawerRoot id="test-id" open={true}>
        <TestComponent />
      </DrawerRoot>
    );

    expect(screen.getByText("open")).toBeVisible();
  });

  test("context passes defaultOpen prop", () => {
    render(
      <DrawerRoot id="test-id" defaultOpen={true}>
        <TestComponent />
      </DrawerRoot>
    );

    expect(screen.getByText("default open")).toBeVisible();
  });

  test("context passes zIndex prop", () => {
    render(
      <DrawerRoot id="test-id" zIndex="2">
        <TestComponent />
      </DrawerRoot>
    );

    expect(screen.getByText("Drawer Sub-Component")).toHaveStyle("zIndex: 2");
  });

  test("context sets open change callback and gets called", async () => {
    const user = userEvent.setup();

    const handleChange = jest.fn();
    render(
      <DrawerRoot id="test-id" onOpenChange={handleChange}>
        <TestComponent />
      </DrawerRoot>
    );

    await user.click(screen.getByRole("button"));

    expect(handleChange).toHaveBeenCalled();
  });

  const App = ({ handleChange }) => {
    const [open] = useState(false);
    return (
      <DrawerRoot id="test-id" open={open} onOpenChange={handleChange}>
        <TestComponent />
      </DrawerRoot>
    );
  };

  test("context uses controlled open property", async () => {
    const user = userEvent.setup();
    const handleChange = jest.fn();
    render(<App handleChange={handleChange} />);
    await user.click(screen.getByRole("button"));
    expect(handleChange).toHaveBeenCalled();
  });
});
