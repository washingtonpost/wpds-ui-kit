import * as React from "react";
import { render, screen } from "@testing-library/react";
import { NavigationMenuRoot } from "./NavigationMenuRoot";
import { NavigationMenuList } from "./NavigationMenuList";
import { NavigationMenuItem } from "./NavigationMenuItem";
import { NavigationMenuTrigger } from "./NavigationMenuTrigger";
import { NavigationMenuContent } from "./NavigationMenuContent";

describe("NavigationMenuItem", () => {
  test("renders visibly into the document", () => {
    const testText = "Test Text";
    render(
      <NavigationMenuRoot>
        <NavigationMenuList>
          <NavigationMenuItem>{testText}</NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenuRoot>
    );
    expect(screen.getByText(testText)).toBeVisible();
  });

  test("renders a trigger as a child", () => {
    render(
      <NavigationMenuRoot>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger />
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenuRoot>
    );
    expect(screen.getByRole("button")).toBeVisible();
  });

  test("renders content as a child", () => {
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
});
