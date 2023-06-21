import * as React from "react";

import * as ActionMenuPrimitive from '@radix-ui/react-dropdown-menu';

import {
  DropdownMenuPortalProps as RadixDropdownMenuPortalProps,
} from "@radix-ui/react-dropdown-menu";


export const ActionMenuPortal = (({ children, ...props }: RadixDropdownMenuPortalProps) => {
  return <ActionMenuPrimitive.Portal {...props}>
    {children}
  </ActionMenuPrimitive.Portal>
});