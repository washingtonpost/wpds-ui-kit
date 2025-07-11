import React from "react";
import * as ActionMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { DropdownMenuTriggerProps as RadixDropdownMenuTriggerProps } from "@radix-ui/react-dropdown-menu";
import { actionMenuTriggerClass } from "./ActionMenu.css";

const NAME = "ActionMenuTriggerVE";

export interface ActionMenuTriggerVEProps extends RadixDropdownMenuTriggerProps {
  /** Any React node may be used as a child to allow for formatting */
  children?: React.ReactNode;
  /** Override CSS */
  className?: string;
}

export const ActionMenuTriggerVE = React.forwardRef<
  HTMLButtonElement,
  ActionMenuTriggerVEProps
>(({ children, className, ...props }, ref) => {
  return (
    <ActionMenuPrimitive.Trigger
      {...props}
      ref={ref}
      className={`${actionMenuTriggerClass} ${className || ""}`}
    >
      {children}
    </ActionMenuPrimitive.Trigger>
  );
});

ActionMenuTriggerVE.displayName = NAME;
