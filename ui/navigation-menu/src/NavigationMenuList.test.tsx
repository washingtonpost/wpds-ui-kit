import * as React from "react";
import { render, screen } from "@testing-library/react";
import { NavigationMenuRoot } from "./NavigationMenuRoot";
import { NavigationMenuList } from "./NavigationMenuList";

describe("NavigationMenuList", () => {
  test("renders visibly into the document", () => {
    const testText = "Test Text";
    render(
      <NavigationMenuRoot>
        <NavigationMenuList>{testText}</NavigationMenuList>
      </NavigationMenuRoot>
    );
    expect(screen.getByText(testText)).toBeVisible();
  });

});
