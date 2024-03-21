import { render, screen } from "@testing-library/react";
import { NavigationMenuRoot } from "./NavigationMenuRoot";
import { NavigationMenuList } from "./NavigationMenuList";
import { NavigationMenuItem } from "./NavigationMenuItem";
import { NavigationMenuSub } from "./NavigationMenuSub";

describe("NavigationMenuSub", () => {
  test("renders visibly into the document", () => {
    const testText = "Test Text";
    render(
      <NavigationMenuRoot>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuSub>{testText}</NavigationMenuSub>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenuRoot>
    );
    expect(screen.getByText(testText)).toBeVisible();
  });
});
