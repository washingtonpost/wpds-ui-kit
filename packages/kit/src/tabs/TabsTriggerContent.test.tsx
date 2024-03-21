import { render, screen } from "@testing-library/react";
import { TabsRoot } from "./TabsRoot";
import { TabsList } from "./TabsList";
import { TabsTriggerContent } from "./TabsTriggerContent";

describe("TabsTriggerContent", () => {
  test("renders visibly into the document", () => {
    render(
      <TabsRoot>
        <TabsList>
          <TabsTriggerContent>Test</TabsTriggerContent>
        </TabsList>
      </TabsRoot>
    );
    expect(screen.getByText("Test")).toBeVisible();
    expect(
      screen.queryByTestId("tabs-tooltip-trigger")
    ).not.toBeInTheDocument();
  });

  test("renders tooltip when content is too long", async () => {
    Object.defineProperty(HTMLElement.prototype, "scrollWidth", {
      configurable: true,
      value: 500,
    });
    Object.defineProperty(HTMLElement.prototype, "clientWidth", {
      configurable: true,
      value: 10,
    });

    render(
      <TabsRoot>
        <TabsList>
          <TabsTriggerContent>
            The Democratic Republic of the Congo
          </TabsTriggerContent>
        </TabsList>
      </TabsRoot>
    );

    expect(screen.getByTestId("tabs-tooltip-trigger")).toBeVisible();
  });

  test("renders non text nodes", () => {
    render(
      <TabsRoot>
        <TabsList>
          <TabsTriggerContent>
            <div>Test</div>
          </TabsTriggerContent>
        </TabsList>
      </TabsRoot>
    );
    expect(screen.getByText("Test")).toBeVisible();
  });
});
