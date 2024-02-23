import { forwardRef } from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { Button } from "../button";

import type * as WPDS from "../theme";
import type { PopoverTriggerProps as RadixPopoverTriggerProps } from "@radix-ui/react-popover";

const NAME = "PopoverTrigger";

export type PopoverTriggerProps = {
  /** Override CSS */
  css?: WPDS.CSS;
} & RadixPopoverTriggerProps;

export const PopoverTrigger = forwardRef<
  HTMLButtonElement,
  PopoverTriggerProps
>(({ children, asChild, ...props }, ref) => {
  return (
    <PopoverPrimitive.Trigger {...props} asChild ref={ref}>
      {asChild ? children : <Button>{children}</Button>}
    </PopoverPrimitive.Trigger>
  );
});

PopoverTrigger.displayName = NAME;
