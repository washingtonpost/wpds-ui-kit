import * as React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TabsRoot } from "./TabsRoot";
import { TabsTrigger } from "./TabsTrigger";
import { TabsList } from "./TabsList";

describe("TabsRoot Container", () => {
  test("renders visibly into the document", () => {
    render(<TabsRoot>Test</TabsRoot>);
    expect(screen.getByText("Test")).toBeVisible();
  });

  it("renders the tabs with the correct default value", () => {
    render(
      <TabsRoot defaultValue="A">
        <TabsList>
          <TabsTrigger value="A" />
        </TabsList>
      </TabsRoot>
    );

    expect(screen.getByRole("tab", { selected: true })).toBeInTheDocument();
  });

  it("renders the tabs with the correct value when the value prop is set", () => {
    render(
      <TabsRoot value="A">
        <TabsList>
          <TabsTrigger value="A" />
        </TabsList>
      </TabsRoot>
    );

    expect(screen.getByRole("tab", { selected: true })).toBeInTheDocument();
  });

  it("calls the onValueChange prop when the value changes", () => {
    const onValueChange = jest.fn();
    render(
      <TabsRoot onValueChange={onValueChange} defaultValue="A">
        <TabsList>
          <TabsTrigger value="A">A</TabsTrigger>
          <TabsTrigger value="B">B</TabsTrigger>
        </TabsList>
      </TabsRoot>
    );
    userEvent.click(screen.getByRole("tab", { selected: false }));
    expect(onValueChange).toHaveBeenCalledWith("B");
  });
});
