import React from "react";
import * as ActionMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { DropdownMenuPortalProps as RadixDropdownMenuPortalProps } from "@radix-ui/react-dropdown-menu";

const NAME = "ActionMenuPortalVE";

export interface ActionMenuPortalVEProps extends RadixDropdownMenuPortalProps {
  /** Any React node may be used as a child to allow for formatting */
  children?: React.ReactNode;
}

export const ActionMenuPortalVE: React.FC<ActionMenuPortalVEProps> = (
  props
) => {
  return <ActionMenuPrimitive.Portal {...props} />;
};

ActionMenuPortalVE.displayName = NAME;
