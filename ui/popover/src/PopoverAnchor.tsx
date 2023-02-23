import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";

import type { PopoverAnchorProps as RadixPopoverAnchorProps } from "@radix-ui/react-popover";

const NAME = "PopoverAnchor";

export type PopoverAnchorProps = RadixPopoverAnchorProps;

export const PopoverAnchor = (props: PopoverAnchorProps) => (
  <PopoverPrimitive.Anchor {...props}>{props.children}</PopoverPrimitive.Anchor>
);

PopoverAnchor.displayName = NAME;
