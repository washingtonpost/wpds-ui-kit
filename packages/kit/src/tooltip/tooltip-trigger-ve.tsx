import React, { forwardRef } from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { tooltipTriggerClass } from './Tooltip.css';
import { TooltipTriggerProps as RadixTooltipTriggerProps } from "@radix-ui/react-tooltip";

export interface TooltipTriggerInterface extends RadixTooltipTriggerProps {
  className?: string;
}

export const TooltipTriggerVE = forwardRef<
  HTMLButtonElement,
  TooltipTriggerInterface
>(({ className, children, ...props }: TooltipTriggerInterface, ref) => (
  <TooltipPrimitive.Trigger 
    {...props} 
    ref={ref} 
    asChild
    className={[
      tooltipTriggerClass,
      className,
    ].filter(Boolean).join(' ')}
  >
    {children}
  </TooltipPrimitive.Trigger>
));

TooltipTriggerVE.displayName = "TooltipTriggerVE";
