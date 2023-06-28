import * as React from "react";

import type * as WPDS from "@washingtonpost/wpds-theme";
import * as ActionMenuPrimitive from '@radix-ui/react-dropdown-menu';

import {
  DropdownMenuGroupProps as RadixDropdownMenuGroupProps,
} from "@radix-ui/react-dropdown-menu";

export type ActionMenuGroupProps = {
  /** Any React node may be used as a child to allow for formatting */
  children?: React.ReactNode;
  /** Override CSS */
  css?: WPDS.CSS;
} & RadixDropdownMenuGroupProps & React.ComponentProps<typeof ActionMenuPrimitive.Group>;

export const ActionMenuGroup = (({ children, ...props }: ActionMenuGroupProps) => {
  return <ActionMenuPrimitive.Group {...props}>
    {children}
  </ActionMenuPrimitive.Group>
});