import React, { forwardRef } from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { clsx } from "clsx";
import { Button } from "../button/button-ve";
import { IconVE } from "../icon/icon-ve";
import { Close } from "@washingtonpost/wpds-assets";
import { popoverCloseButton } from "./Popover.css";

import type { PopoverCloseProps as RadixPopoverCloseProps } from "@radix-ui/react-popover";

const NAME = "PopoverCloseVE";

export type PopoverCloseVEProps = {
  /** Override CSS */
  className?: string;
} & RadixPopoverCloseProps;

export const PopoverCloseVE = forwardRef<
  HTMLButtonElement,
  PopoverCloseVEProps
>(({ children, asChild, className, ...props }, ref) => (
  <PopoverPrimitive.Close {...props} asChild ref={ref}>
    {asChild ? (
      children
    ) : (
      <Button
        className={clsx(popoverCloseButton, className)}
        isOutline
        icon="center"
        variant="primary"
      >
        <IconVE size="100" label="Close popup">
          <Close />
        </IconVE>
      </Button>
    )}
  </PopoverPrimitive.Close>
));

PopoverCloseVE.displayName = NAME;
