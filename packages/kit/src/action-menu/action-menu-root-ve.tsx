import React from "react";
import * as ActionMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { DropdownMenuProps as RadixDropdownMenuProps } from "@radix-ui/react-dropdown-menu";
import { ActionMenuContext } from "./context";

const NAME = "ActionMenuRootVE";

export type DensityProp = "loose" | "default" | "compact";

export interface ActionMenuRootVEProps extends RadixDropdownMenuProps {
  /** Any React node may be used as a child to allow for formatting */
  children?: React.ReactNode;
  density?: DensityProp;
}

export const ActionMenuRootVE: React.FC<ActionMenuRootVEProps> = ({
  density = "default",
  ...props
}) => {
  return (
    <ActionMenuContext.Provider
      value={{
        density,
        level: 1,
      }}
    >
      <ActionMenuPrimitive.Root {...props} />
    </ActionMenuContext.Provider>
  );
};

ActionMenuRootVE.displayName = NAME;
