import * as React from "react";

import WPDS from "@washingtonpost/wpds-theme";
import * as ActionMenuPrimitive from '@radix-ui/react-dropdown-menu';

import {
  DropdownMenuPortalProps as RadixDropdownMenuPortalProps,
} from "@radix-ui/react-dropdown-menu";

const NAME = "ActionMenuPortal";

export type ActionMenuPortalProps = {
  /** Any React node may be used as a child to allow for formatting */
  children?: React.ReactNode;
  /** Override CSS */
  css?: WPDS.CSS;
} & RadixDropdownMenuPortalProps;

export const ActionMenuPortal = (({ children, ...props }: ActionMenuPortalProps) => {
  return <ActionMenuPrimitive.Portal {...props}>
    {children}
  </ActionMenuPrimitive.Portal>
});

ActionMenuPortal.displayName = NAME;
