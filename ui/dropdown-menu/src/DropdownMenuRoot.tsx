import * as React from "react";

import type * as WPDS from "@washingtonpost/wpds-theme";
import { styled } from "@washingtonpost/wpds-theme";

import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';

import {
  DropdownMenuProps as RadixDropdownMenuProps,
} from "@radix-ui/react-dropdown-menu";

// import type * as RadixDropdownTypes from "@radix-ui/react-dropdown-menu";

const NAME = "DropdownMenuRoot";

const StyledDropdown = styled(DropdownMenuPrimitive.Root, {
  color: "blue"
})


// type DropdownRootVariants = WPDS.VariantProps<typeof StyledDropdown>;

// export type DropdownRootCombined = (
//   | RadixDropdownSingleProps
//   | RadixDropdownMultipleProps
// ) &
//   DropdownRootVariants;


export type DropdownMenuRootProps = {
  /** Any React node may be used as a child to allow for formatting */
  children?: React.ReactNode;
  /** Override CSS */
  css?: WPDS.CSS;
} & RadixDropdownMenuProps;

export const DropdownMenuRoot = ({ ...props }: DropdownMenuRootProps) => {
  return <StyledDropdown {...props} />;
}

DropdownMenuRoot.displayName = NAME;