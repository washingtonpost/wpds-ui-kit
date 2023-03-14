import * as React from "react";
import { render, screen } from "@testing-library/react";
import { TabsRoot } from "./TabsRoot";
import { TabsList } from "./TabsList";

describe("TabsList", () => {
  // const customRender = (ui, contextProps) => {
  //   return render(<TabsRoot {...contextProps}>{ui}</TabsRoot>);
  // };

  test("renders visibly into the document", () => {
    // customRender(<TabsList>Test</TabsList>, {});
    render(
      <TabsRoot>
        <TabsList>Test</TabsList>
      </TabsRoot>
    );
    expect(screen.getByRole("tabslist", { name: "Test" })).toBeVisible();
  });

  // test("renders as its child", () => {
  //   customRender(
  //     <PopoverTrigger asChild>
  //       <button>Child</button>
  //     </PopoverTrigger>,
  //     {}
  //   );
  //   expect(screen.getByRole("button", { name: "Child" })).toBeVisible();
  // });
});
