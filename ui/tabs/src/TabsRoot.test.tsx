import * as React from "react";
import { render, screen } from "@testing-library/react";
import { TabsRoot } from "./TabsRoot";

describe("TabsRoot Container", () => {
  test("renders visibly into the document", () => {
    render(<TabsRoot>Test</TabsRoot>);
    expect(screen.getByText("Test")).toBeVisible();
  });
});
