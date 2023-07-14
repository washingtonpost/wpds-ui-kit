import * as React from "react";
import { render, screen } from "@testing-library/react";
import { InputSearchPopover } from "./InputSearchPopover";
import { InputSearchRoot } from "./InputSearchRoot";

describe("InputSearchPopover", () => {
  const customRender = (ui, contextProps) => {
    return render(<InputSearchRoot {...contextProps}>{ui}</InputSearchRoot>);
  };
  test("renders invisibly into the document", () => {
    customRender(<InputSearchPopover>test</InputSearchPopover>, {});
    const popover = screen.getByText("test");
    expect(popover).toBeInTheDocument();
    expect(popover).not.toBeVisible();
  });
});
