import React, { forwardRef } from "react";
import * as Separator from "@radix-ui/react-separator";
import type { SeparatorProps } from "@radix-ui/react-separator";
import { dividerBase, dividerVariants } from "./Divider.css";

const NAME = "Divider";

interface DividerProps extends SeparatorProps {
  /** Override CSS class */
  className?: string;
  /** Sets the color of the divider
   * @default default
   */
  variant?: "default" | "strong";
}

export const DividerVE = forwardRef<HTMLDivElement, DividerProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <Separator.Root
        className={`${dividerBase} ${dividerVariants[variant]} ${
          className || ""
        }`}
        ref={ref}
        {...props}
      />
    );
  }
);

DividerVE.displayName = NAME;

export type { DividerProps };
