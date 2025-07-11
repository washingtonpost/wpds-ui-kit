import React, { forwardRef } from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { clsx } from "clsx";
import { popoverContent } from "./Popover.css";
import { vars } from "../theme/contracts.css";
import type { PopoverContentProps as RadixPopoverContentProps } from "@radix-ui/react-popover";

const NAME = "PopoverContentVE";

export type PopoverContentVEProps = {
  /** Override CSS */
  className?: string;
  /** Distance between trigger and content */
  sideOffset?: number | string;
  /** Width of the popover content */
  width?: number;
  /** Density variant */
  density?: "default" | "compact";
} & Omit<RadixPopoverContentProps, "sideOffset">;

export const PopoverContentVE = forwardRef<
  HTMLDivElement,
  PopoverContentVEProps
>(
  (
    {
      children,
      className,
      density = "default",
      sideOffset = vars.space["025"],
      width = 240,
      style,
      ...props
    },
    ref
  ) => {
    let _sideOffset;
    if (typeof sideOffset !== "number") {
      const baseFontSize = parseFloat(
        window
          .getComputedStyle(document.documentElement)
          .getPropertyValue("font-size")
      );
      _sideOffset = parseFloat(sideOffset.split("rem")[0]) * baseFontSize;
    } else {
      _sideOffset = sideOffset;
    }

    return (
      <PopoverPrimitive.Content
        className={clsx(popoverContent[density], className)}
        sideOffset={_sideOffset}
        style={{ width: `${width}px`, ...style }}
        {...props}
        ref={ref}
      >
        {children}
      </PopoverPrimitive.Content>
    );
  }
);

PopoverContentVE.displayName = NAME;
