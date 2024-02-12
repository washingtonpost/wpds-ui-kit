import * as React from "react";

import type * as WPDS from "@washingtonpost/wpds-theme";
import { styled } from "@washingtonpost/wpds-theme";

import * as ActionMenuPrimitive from "@radix-ui/react-dropdown-menu";

import { DropdownMenuProps as RadixDropdownMenuProps } from "@radix-ui/react-dropdown-menu";
import { ActionMenuContext } from "./context";

const NAME = "ActionMenuRoot";

const StyledActionMenu = styled(ActionMenuPrimitive.Root, {});

export type DensityProp = "loose" | "default" | "compact";

export type ActionMenuRootProps = {
  /** Any React node may be used as a child to allow for formatting */
  children?: React.ReactNode;
  /** Override CSS */
  css?: WPDS.CSS;
  density?: DensityProp;
} & RadixDropdownMenuProps;

export const ActionMenuRoot = ({
  density = "default",
  ...props
}: ActionMenuRootProps) => {
  return (
    <ActionMenuContext.Provider
      value={{
        density,
        level: 1,
      }}
    >
      <StyledActionMenu {...props} />
    </ActionMenuContext.Provider>
  );
};

ActionMenuRoot.displayName = NAME;
