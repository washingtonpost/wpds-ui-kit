import React, { forwardRef } from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { Button } from "../button/button-ve";

import type { PopoverTriggerProps as RadixPopoverTriggerProps } from "@radix-ui/react-popover";

const NAME = "PopoverTriggerVE";

export type PopoverTriggerProps = {
  /** Override CSS */
  css?: React.CSSProperties;
} & RadixPopoverTriggerProps;

export const PopoverTriggerVE = forwardRef<
  HTMLButtonElement,
  PopoverTriggerProps
>(({ children, asChild, ...props }, ref) => {
  return (
    <PopoverPrimitive.Trigger {...props} asChild ref={ref}>
      {asChild ? children : <Button>{children}</Button>}
    </PopoverPrimitive.Trigger>
  );
});

PopoverTriggerVE.displayName = NAME;
