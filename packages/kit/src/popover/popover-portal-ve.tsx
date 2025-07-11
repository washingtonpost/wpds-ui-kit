import React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";

import type { PopoverPortalProps as RadixPopoverPortalProps } from "@radix-ui/react-popover";

const NAME = "PopoverPortalVE";

export type PopoverPortalProps = RadixPopoverPortalProps;

export const PopoverPortalVE = ({ children, ...props }: PopoverPortalProps) => (
  <PopoverPrimitive.Portal {...props}>{children}</PopoverPrimitive.Portal>
);

PopoverPortalVE.displayName = NAME;
