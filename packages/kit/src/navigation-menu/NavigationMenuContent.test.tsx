import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { NavigationMenuRoot } from "./NavigationMenuRoot";
import { NavigationMenuList } from "./NavigationMenuList";
import { NavigationMenuItem } from "./NavigationMenuItem";
import { NavigationMenuTrigger } from "./NavigationMenuTrigger";
import { NavigationMenuContent } from "./NavigationMenuContent";

describe("NavigationMenuContent", () => {
  test("renders visibly into the document", () => {
    const testText = "Test Text";
    render(
      <NavigationMenuRoot>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuContent>{testText}</NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenuRoot>
    );
    expect(screen.getByText(testText)).toBeVisible();
  });

  test("shows popper on hover", () => {
    render(
      <NavigationMenuRoot>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Trigger</NavigationMenuTrigger>
            <NavigationMenuContent />
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenuRoot>
    );
    userEvent.hover(screen.getByRole("button"));
    const content = screen.getByTestId("wpds-nav-menu-content-popper");
    expect(content).toBeVisible();
  });

  test("accepts a ref", () => {
    const testRef = { current: null };
    render(
      <NavigationMenuRoot>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuContent ref={testRef} />
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenuRoot>
    );
    expect(testRef.current).toBeInTheDocument();
  });

  test("accepts a function ref", () => {
    const funcRef = jest.fn();
    render(
      <NavigationMenuRoot>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuContent ref={funcRef} />
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenuRoot>
    );
    expect(funcRef).toHaveBeenCalled();
  });

  describe("uses the side prop", () => {
    test("bottom", async () => {
      const testText = "Test Text";
      render(
        <NavigationMenuRoot>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Trigger</NavigationMenuTrigger>
              <NavigationMenuContent>{testText}</NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenuRoot>
      );
      userEvent.hover(screen.getByRole("button"));
      const content = screen.getByText(testText);
      expect(content).toHaveStyle("--initialposition: 0, -0.25rem");
      const popper = screen.getByTestId("wpds-nav-menu-content-popper");
      await waitFor(() => {
        // eslint-disable-next-line jest-dom/prefer-to-have-attribute
        expect(popper.getAttribute("data-popper-placement")).toEqual(
          "bottom-start"
        );
      });
    });

    test("top", async () => {
      const testText = "Test Text";
      render(
        <NavigationMenuRoot>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Trigger</NavigationMenuTrigger>
              <NavigationMenuContent side="top">
                {testText}
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenuRoot>
      );
      userEvent.hover(screen.getByRole("button"));
      const content = screen.getByText(testText);
      expect(content).toHaveStyle("--initialposition: 0, 0.25rem");
      const popper = screen.getByTestId("wpds-nav-menu-content-popper");
      await waitFor(() => {
        // eslint-disable-next-line jest-dom/prefer-to-have-attribute
        expect(popper.getAttribute("data-popper-placement")).toEqual(
          "top-start"
        );
      });
    });

    test("left", async () => {
      const testText = "Test Text";
      render(
        <NavigationMenuRoot>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Trigger</NavigationMenuTrigger>
              <NavigationMenuContent side="left">
                {testText}
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenuRoot>
      );
      userEvent.hover(screen.getByRole("button"));
      const content = screen.getByText(testText);
      expect(content).toHaveStyle("--initialposition: 0.25rem, 0");
      const popper = screen.getByTestId("wpds-nav-menu-content-popper");
      await waitFor(() => {
        // eslint-disable-next-line jest-dom/prefer-to-have-attribute
        expect(popper.getAttribute("data-popper-placement")).toEqual(
          "left-start"
        );
      });
    });

    test("right", async () => {
      const testText = "Test Text";
      render(
        <NavigationMenuRoot>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Trigger</NavigationMenuTrigger>
              <NavigationMenuContent side="right">
                {testText}
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenuRoot>
      );
      userEvent.hover(screen.getByRole("button"));
      const content = screen.getByText(testText);
      expect(content).toHaveStyle("--initialposition: -0.25rem, 0");
      const popper = screen.getByTestId("wpds-nav-menu-content-popper");
      await waitFor(() => {
        // eslint-disable-next-line jest-dom/prefer-to-have-attribute
        expect(popper.getAttribute("data-popper-placement")).toEqual(
          "right-start"
        );
      });
    });
  });

  describe("uses the align prop", () => {
    test("start", async () => {
      render(
        <NavigationMenuRoot>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Trigger</NavigationMenuTrigger>
              <NavigationMenuContent />
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenuRoot>
      );
      userEvent.hover(screen.getByRole("button"));
      const popper = screen.getByTestId("wpds-nav-menu-content-popper");
      await waitFor(() => {
        // eslint-disable-next-line jest-dom/prefer-to-have-attribute
        expect(popper.getAttribute("data-popper-placement")).toEqual(
          "bottom-start"
        );
      });
    });

    test("center", async () => {
      render(
        <NavigationMenuRoot>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Trigger</NavigationMenuTrigger>
              <NavigationMenuContent align="center" />
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenuRoot>
      );
      userEvent.hover(screen.getByRole("button"));
      const popper = screen.getByTestId("wpds-nav-menu-content-popper");
      await waitFor(() => {
        // eslint-disable-next-line jest-dom/prefer-to-have-attribute
        expect(popper.getAttribute("data-popper-placement")).toEqual("bottom");
      });
    });

    test("end", async () => {
      render(
        <NavigationMenuRoot>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Trigger</NavigationMenuTrigger>
              <NavigationMenuContent align="end" />
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenuRoot>
      );
      userEvent.hover(screen.getByRole("button"));
      const popper = screen.getByTestId("wpds-nav-menu-content-popper");
      await waitFor(() => {
        // eslint-disable-next-line jest-dom/prefer-to-have-attribute
        expect(popper.getAttribute("data-popper-placement")).toEqual(
          "bottom-end"
        );
      });
    });
  });

  test("accepts popperOptions", async () => {
    render(
      <NavigationMenuRoot>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Trigger</NavigationMenuTrigger>
            <NavigationMenuContent
              popperOptions={{
                modifiers: [
                  {
                    name: "offset",
                    options: {
                      offset: [0, 16],
                    },
                  },
                ],
              }}
            />
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenuRoot>
    );
    userEvent.hover(screen.getByRole("button"));
    const popper = screen.getByTestId("wpds-nav-menu-content-popper");
    await waitFor(() => {
      // eslint-disable-next-line jest-dom/prefer-to-have-attribute
      expect(popper).toHaveStyle("transform: translate(0px, 16px)");
    });
  });
});
