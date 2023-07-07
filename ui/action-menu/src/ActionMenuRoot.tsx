import * as React from "react";

import type * as WPDS from "@washingtonpost/wpds-theme";
import { styled } from "@washingtonpost/wpds-theme";

import * as ActionMenuPrimitive from '@radix-ui/react-dropdown-menu';

import {
  DropdownMenuProps as RadixDropdownMenuProps,
} from "@radix-ui/react-dropdown-menu";

// import type * as RadixDropdownTypes from "@radix-ui/react-dropdown-menu";

const NAME = "ActionMenuRoot";

const StyledActionMenu = styled(ActionMenuPrimitive.Root, {
  minWidth: "max-content"
})


// type DropdownRootVariants = WPDS.VariantProps<typeof StyledDropdown>;

// export type DropdownRootCombined = (
//   | RadixDropdownSingleProps
//   | RadixDropdownMultipleProps
// ) &
//   DropdownRootVariants;


export type ActionMenuRootProps = {
  /** Any React node may be used as a child to allow for formatting */
  children?: React.ReactNode;
  /** Override CSS */
  css?: WPDS.CSS;
} & RadixDropdownMenuProps;

export const ActionMenuRoot = ({ ...props }: ActionMenuRootProps) => {
  return <StyledActionMenu {...props} />;
}

ActionMenuRoot.displayName = NAME;
