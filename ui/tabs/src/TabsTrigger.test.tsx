import * as React from "react";
import { render, screen } from "@testing-library/react";
import { TabsRoot } from "./TabsRoot";
import { TabsList } from "./TabsList";
import { TabsTrigger } from "./TabsTrigger";
import { userEvent } from "@storybook/testing-library";

describe("TabsTrigger", () => {
  test("renders visibly into the document", () => {
    render(
      <TabsRoot>
        <TabsList>
          <TabsTrigger value="val1">Test</TabsTrigger>
        </TabsList>
      </TabsRoot>
    );
    expect(screen.getByText("Test")).toBeVisible();
  });

  test("correctly sets trigger to active", () => {
    jest.fn();
    render(
      <TabsRoot>
        <TabsList>
          <TabsTrigger value="val1">Test</TabsTrigger>
          <TabsTrigger value="val2">Test2</TabsTrigger>
          <TabsTrigger value="val3">Test3</TabsTrigger>
        </TabsList>
      </TabsRoot>
    );

    const trigger2 = screen.getAllByRole("tab")[2];
    expect(trigger2).toHaveAttribute("data-state", "inactive");
    expect(trigger2).toHaveStyle("borderBottom: none");
    userEvent.click(trigger2);
    expect(trigger2).toHaveAttribute("data-state", "active");
    expect(trigger2).toHaveStyle("borderBottom: 1px solid ##111111");
  });
});
