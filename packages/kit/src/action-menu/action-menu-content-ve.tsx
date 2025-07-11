import React from "react";
import * as ActionMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { DropdownMenuContentProps as RadixDropdownMenuContentProps } from "@radix-ui/react-dropdown-menu";
import { actionMenuContentClass } from "./ActionMenu.css";
import { ActionMenuPortalVE } from "./action-menu-portal-ve";

const NAME = "ActionMenuContentVE";

export interface ActionMenuContentVEProps
  extends RadixDropdownMenuContentProps {
  /** Any React node may be used as a child to allow for formatting */
  children?: React.ReactNode;
  /** Override CSS */
  className?: string;
}

export const ActionMenuContentVE = React.forwardRef<
  HTMLDivElement,
  ActionMenuContentVEProps
>(({ children, className, ...props }, ref) => {
  const [clicked, setClicked] = React.useState(false);

  return (
    <ActionMenuPortalVE>
      <ActionMenuPrimitive.Content
        {...props}
        ref={ref}
        sideOffset={4}
        className={`${actionMenuContentClass} ${className || ""}`}
        onMouseDown={() => {
          setClicked(true);
        }}
        onPointerDownOutside={() => {
          setClicked(true);
        }}
        onCloseAutoFocus={(event) => {
          if (clicked) {
            setClicked(false);
            event.preventDefault();
          }
        }}
      >
        {children}
      </ActionMenuPrimitive.Content>
    </ActionMenuPortalVE>
  );
});

ActionMenuContentVE.displayName = NAME;
