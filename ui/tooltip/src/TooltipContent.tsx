import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { styled, keyframes, theme } from "@washingtonpost/wpds-theme";
import type * as WPDS from "@washingtonpost/wpds-theme";
import { TooltipContentProps as RadixTooltipContentProps } from "@radix-ui/react-tooltip";
import { getPixelsFromRem } from "./utils";

export const enum TOOLTIP_CONTENT_SIDE {
  left = "left",
  right = "right",
  top = "top",
  bottom = "bottom",
}

export const enum TOOLTIP_CONTENT_ALIGN {
  start = "start",
  center = "center",
  end = "end",
}

const slideUpAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateY(2px)" },
  "100%": { opacity: 1, transform: "translateY(0)" },
});

const slideRightAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateX(-2px)" },
  "100%": { opacity: 1, transform: "translateX(0)" },
});

const slideDownAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateY(-2px)" },
  "100%": { opacity: 1, transform: "translateY(0)" },
});

const slideLeftAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateX(2px)" },
  "100%": { opacity: 1, transform: "translateX(0)" },
});

const StyledArrow = styled(TooltipPrimitive.Arrow, {
  fill: theme.colors.secondary,
});

type WPDSThemeSpaceObject = {
  token: string;
  value: string;
  scale: string;
  prefix: string;
};

const StyledContentWrapper = styled(TooltipPrimitive.Content, {
  borderRadius: theme.radii["012"],
  padding: theme.space["050"],
  color: theme.colors.primary,
  border: `solid 1px ${theme.colors.subtle}`,
  backgroundColor: theme.colors.secondary,
  width: "144px", //set width as per design specs
  userSelect: "none",
  "@media (prefers-reduced-motion: no-preference)": {
    animationDuration: theme.transitions.normal,
    animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
    willChange: "transform, opacity",
    '&[data-state="delayed-open"]': {
      '&[data-side="top"]': { animationName: slideDownAndFade },
      '&[data-side="right"]': { animationName: slideLeftAndFade },
      '&[data-side="bottom"]': { animationName: slideUpAndFade },
      '&[data-side="left"]': { animationName: slideRightAndFade },
    },
  },
  variants: {
    /** Specify the amount of padding for the inner components. */
    density: {
      compact: {
        padding: theme.space["025"],
      },
      default: {},
    },
  },
});

type TooltipContentVariants = WPDS.VariantProps<typeof StyledContentWrapper>;
type ContentCombinedProps = RadixTooltipContentProps & TooltipContentVariants;

export interface TooltipContentInterface extends ContentCombinedProps {
  /** Override CSS */
  css?: WPDS.CSS;
  /** Prevent the tooltip from showing up */
  disabled?: boolean;
  /** How far away from the side of the parent should the tooltip be? */
  /** @default theme.space["025"] */
  offsetSide?: number | string | WPDSThemeSpaceObject;
  /** @default TOOLTIP_CONTENT_SIDE.top */
  side?: TOOLTIP_CONTENT_SIDE;
  /** @default TOOLTIP_CONTENT_ALIGN.center */
  align?: TOOLTIP_CONTENT_ALIGN;
  /** how far away from the center do you want the tooltip to be? */
  /** @default 0 */
  offsetAlign?: number | string | WPDSThemeSpaceObject;
}

export const TooltipContent = React.forwardRef<
  HTMLDivElement,
  TooltipContentInterface
>(
  (
    {
      children,
      offsetSide = theme.space["025"],
      disabled = false,
      side = TOOLTIP_CONTENT_SIDE.top,
      align = TOOLTIP_CONTENT_ALIGN.center,
      offsetAlign = 0,
      ...props
    }: TooltipContentInterface,
    ref
  ) =>
    disabled ? null : (
      <TooltipPrimitive.Portal>
        <StyledContentWrapper
          {...props}
          sideOffset={getPixelsFromRem(offsetSide)}
          side={side}
          align={align}
          alignOffset={getPixelsFromRem(offsetAlign)}
          ref={ref}
        >
          {children}
          <StyledArrow
            stroke={theme.colors.subtle.value}
            strokeWidth="2"
            strokeDasharray="0 30 28.284"
          />
        </StyledContentWrapper>
      </TooltipPrimitive.Portal>
    )
);

TooltipContent.displayName = "TooltipContent";
