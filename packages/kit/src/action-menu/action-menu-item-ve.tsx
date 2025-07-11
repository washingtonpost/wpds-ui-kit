import React from "react";
import * as ActionMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { DropdownMenuItemProps as RadixDropdownMenuItemProps } from "@radix-ui/react-dropdown-menu";
import { ActionMenuContext } from "./context";
import { actionMenuItemClass } from "./ActionMenu.css";

const NAME = "ActionMenuItemVE";

export interface ActionMenuItemVEProps extends RadixDropdownMenuItemProps {
  /** Any React node may be used as a child to allow for formatting */
  children?: React.ReactNode;
  /** Override CSS */
  className?: string;
  /** Density variant */
  density?: "loose" | "default" | "compact";
}

export const ActionMenuItemVE = React.forwardRef<
  HTMLDivElement,
  ActionMenuItemVEProps
>(({ children, className, density, ...props }, ref) => {
  const context = React.useContext(ActionMenuContext);

  return (
    <ActionMenuPrimitive.Item
      {...props}
      ref={ref}
      className={`${actionMenuItemClass({ density: density || context.density })} ${className || ""}`}
    >
      {children}
    </ActionMenuPrimitive.Item>
  );
});

ActionMenuItemVE.displayName = NAME;
