import { render, screen } from "@testing-library/react";
import { TabsRoot } from "./TabsRoot";
import { TabsList } from "./TabsList";

describe("TabsList", () => {
  test("renders visibly into the document", () => {
    render(
      <TabsRoot>
        <TabsList>Test</TabsList>
      </TabsRoot>
    );
    expect(screen.getByRole("tablist")).toBeVisible();
  });
});
