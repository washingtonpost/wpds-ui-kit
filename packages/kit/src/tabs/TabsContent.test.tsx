import { render, screen } from "@testing-library/react";
import { TabsRoot } from "./TabsRoot";
import { TabsContent } from "./TabsContent";

describe("TabsRoot Container", () => {
  test("renders visibly into the document", () => {
    render(
      <TabsRoot defaultValue="tab1">
        <TabsContent value="tab1">Test</TabsContent>
      </TabsRoot>
    );
    expect(screen.getByText("Test")).toBeVisible();
  });
});
