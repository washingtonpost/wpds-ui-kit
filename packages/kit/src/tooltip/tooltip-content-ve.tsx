import React, { forwardRef } from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { tooltipContentRecipe, tooltipArrowClass } from './Tooltip.css';
import { vars } from '../theme/contracts.css';
import { TooltipContentProps as RadixTooltipContentProps } from "@radix-ui/react-tooltip";
import { getPixelsFromRem } from "./utils";

export type WPDSThemeSpaceObject = {
  token: string;
  value: string;
  scale: string;
  prefix: string;
};

export interface TooltipContentInterface extends RadixTooltipContentProps {
  /** Prevent the tooltip from showing up */
  disabled?: boolean;
  /** How far away from the side of the parent should the tooltip be? */
  /** @default vars.space["025"] */
  offsetSide?: number | string | WPDSThemeSpaceObject;
  /** @default "top"*/
  side?: "left" | "right" | "top" | "bottom";
  /** @default "center" */
  align?: "start" | "center" | "end";
  /** how far away from the center do you want the tooltip to be? */
  /** @default 0 */
  offsetAlign?: number | string | WPDSThemeSpaceObject;
  /** Specify the amount of padding for the inner components. */
  density?: 'compact' | 'default';
}

/**
 * Tooltip.Content
 * @see Docs https://build.washingtonpost.com/components/tooltip
 * @see Source https://github.com/washingtonpost/wpds-ui-kit/tree/main/ui/tooltip
 */

export const TooltipContentVE = forwardRef<
  HTMLDivElement,
  TooltipContentInterface
>(
  (
    {
      children,
      offsetSide = vars.space["025"],
      disabled = false,
      side = "top",
      align = "center",
      offsetAlign = 0,
      density,
      className,
      ...props
    }: TooltipContentInterface,
    ref
  ) =>
    disabled ? null : (
      <TooltipPrimitive.Portal>
        <TooltipPrimitive.Content
          {...props}
          className={[
            tooltipContentRecipe({ density }),
            className,
          ].filter(Boolean).join(' ')}
          sideOffset={getPixelsFromRem(offsetSide)}
          side={side}
          align={align}
          alignOffset={getPixelsFromRem(offsetAlign)}
          ref={ref}
        >
          {children}
          <TooltipPrimitive.Arrow
            className={tooltipArrowClass}
            stroke={vars.colors.outline}
            strokeWidth="2"
            strokeDasharray="0 30 28.284"
          />
        </TooltipPrimitive.Content>
      </TooltipPrimitive.Portal>
    )
);

TooltipContentVE.displayName = 'TooltipContentVE';
