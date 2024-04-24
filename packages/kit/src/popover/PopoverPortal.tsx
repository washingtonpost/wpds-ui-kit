import React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";

import type { PopoverPortalProps as RadixPopoverPortalProps } from "@radix-ui/react-popover";

const NAME = "PopoverPortal";

export type PopoverPortalProps = RadixPopoverPortalProps;

export const PopoverPortal = (props: PopoverPortalProps) => (
  <PopoverPrimitive.Portal {...props}>{props.children}</PopoverPrimitive.Portal>
);

PopoverPortal.displayName = NAME;
