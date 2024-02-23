import * as React from "react";
import { render, screen } from "@testing-library/react";
import { NavigationMenuRoot } from "./NavigationMenuRoot";

describe("NavigationMenu Root", () => {
  test("renders visibly into the document", () => {
    const testText = "Test Text";
    render(<NavigationMenuRoot>{testText}</NavigationMenuRoot>);
    expect(screen.getByText(testText)).toBeVisible();
  });
});
