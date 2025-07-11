import React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";

import type { PopoverAnchorProps as RadixPopoverAnchorProps } from "@radix-ui/react-popover";

const NAME = "PopoverAnchorVE";

export type PopoverAnchorProps = RadixPopoverAnchorProps;

export const PopoverAnchorVE = ({ children, ...props }: PopoverAnchorProps) => (
  <PopoverPrimitive.Anchor {...props}>{children}</PopoverPrimitive.Anchor>
);

PopoverAnchorVE.displayName = NAME;
