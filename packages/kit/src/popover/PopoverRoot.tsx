import React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";

import type { PopoverProps as RadixPopoverRootProps } from "@radix-ui/react-popover";

const NAME = "PopoverRoot";

export type PopoverRootProps = RadixPopoverRootProps;

export const PopoverRoot = ({ children, ...props }: PopoverRootProps) => (
  <PopoverPrimitive.Root {...props}>{children}</PopoverPrimitive.Root>
);

PopoverRoot.displayName = NAME;
