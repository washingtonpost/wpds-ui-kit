import React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";

import type { PopoverProps as RadixPopoverRootProps } from "@radix-ui/react-popover";

const NAME = "PopoverRootVE";

export type PopoverRootProps = RadixPopoverRootProps;

export const PopoverRootVE = ({ children, ...props }: PopoverRootProps) => (
  <PopoverPrimitive.Root {...props}>{children}</PopoverPrimitive.Root>
);

PopoverRootVE.displayName = NAME;
