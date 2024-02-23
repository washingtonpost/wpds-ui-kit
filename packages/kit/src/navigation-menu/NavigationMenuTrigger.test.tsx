import { render, screen } from "@testing-library/react";
import { NavigationMenuRoot } from "./NavigationMenuRoot";
import { NavigationMenuList } from "./NavigationMenuList";
import { NavigationMenuItem } from "./NavigationMenuItem";
import { NavigationMenuTrigger } from "./NavigationMenuTrigger";

describe("NavigationMenuTrigger", () => {
  test("renders visibly into the document", () => {
    const testText = "Test Text";
    render(
      <NavigationMenuRoot>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>{testText}</NavigationMenuTrigger>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenuRoot>
    );
    expect(screen.getByText(testText)).toBeVisible();
  });

  test("renders asChild unstyled", () => {
    const testText = "Test Text";
    render(
      <NavigationMenuRoot>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger asChild>
              <span>{testText}</span>
            </NavigationMenuTrigger>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenuRoot>
    );
    expect(screen.getByText(testText)).not.toHaveClass();
  });
});
