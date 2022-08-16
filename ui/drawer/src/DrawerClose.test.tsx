import * as React from "react";
import { render, screen } from "@testing-library/react";
//import userEvent from "@testing-library/user-event";
import { DrawerClose } from "./DrawerClose";
//import { DrawerRoot } from "./DrawerRoot";

describe("DrawerTrigger", () => {
  test("renders visibly into the document", () => {
    render(<DrawerClose />);

    expect(screen.getByText("Trigger Drawer")).toBeVisible();
  });
});
