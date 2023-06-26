import * as React from "react";

import type * as WPDS from "@washingtonpost/wpds-theme";
import * as ActionMenuPrimitive from '@radix-ui/react-dropdown-menu';

import {
  DropdownMenuPortalProps as RadixDropdownMenuPortalProps,
} from "@radix-ui/react-dropdown-menu";

export type ActionMenuPortalProps = {
  /** Any React node may be used as a child to allow for formatting */
  children?: React.ReactNode;
  /** Override CSS */
  css?: WPDS.CSS;
} & RadixDropdownMenuPortalProps & React.ComponentProps<typeof ActionMenuPrimitive.Portal>;

export const ActionMenuPortal = (({ children, ...props }: ActionMenuPortalProps) => {
  return <ActionMenuPrimitive.Portal {...props}>
    {children}
  </ActionMenuPrimitive.Portal>
});