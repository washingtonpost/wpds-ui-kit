import React, { forwardRef } from "react";
import { styled, theme, keyframes } from "../theme";
import * as PopoverPrimitive from "@radix-ui/react-popover";

import type { Token } from "@stitches/react/types/theme";
import * as Tokens from "../theme/tokens";
import type * as WPDS from "../theme";
import type { PopoverContentProps as RadixPopoverContentProps } from "@radix-ui/react-popover";

const NAME = "PopoverContent";

const slideUpAndFade = keyframes({
  from: {
    opacity: 0,
    transform: "translateY(2px)",
  },
  to: {
    opacity: 1,
    transform: "translateY(0)",
  },
});

const slideRightAndFade = keyframes({
  from: {
    opacity: 0,
    transform: "translateX(-2px)",
  },
  to: {
    opacity: 1,
    transform: "translateX(0)",
  },
});

const slideDownAndFade = keyframes({
  from: {
    opacity: 0,
    transform: "translateY(-2px)",
  },
  to: {
    opacity: 1,
    transform: "translateY(0)",
  },
});

const slideLeftAndFade = keyframes({
  from: {
    opacity: 0,
    transform: "translateX(2px)",
  },
  to: {
    opacity: 1,
    transform: "translateX(0)",
  },
});

const StyledContent = styled(PopoverPrimitive.Content, {
  backgroundColor: theme.colors.secondary,
  border: `1px solid ${theme.colors.gray300}`,
  boxShadow: theme.shadows["200"],
  color: theme.colors.primary,
  animationDuration: theme.transitions.normal,
  "@reducedMotion": {
    animationDuration: "0s",
    animationFillMode: "none",
  },
  animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
  willChange: "transform, opacity",
  "&[data-state='open'][data-side='top']": {
    animationName: slideDownAndFade,
  },
  "&[data-state='open'][data-side='right']": {
    animationName: slideLeftAndFade,
  },
  "&[data-state='open'][data-side='bottom']": {
    animationName: slideUpAndFade,
  },
  "&[data-state='open'][data-side='left']": {
    animationName: slideRightAndFade,
  },
  variants: {
    density: {
      default: { padding: theme.space["050"] },
      compact: { padding: theme.space["025"] },
    },
  },
});

export type PopoverContentProps = {
  /** Override CSS */
  css?: WPDS.CSS;
  /** Distance between trigger and content */
  sideOffset?:
    | number
    | Token<keyof typeof Tokens.sizes, string, "space", "wpds">;
  /** Width of the popover content */
  width?: number;
} & WPDS.VariantProps<typeof StyledContent> &
  Omit<RadixPopoverContentProps, "sideOffset">;

export const PopoverContent = forwardRef<HTMLDivElement, PopoverContentProps>(
  (
    {
      children,
      css,
      density = "default",
      sideOffset = theme.space["025"],
      width = 240,
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
      _sideOffset = parseFloat(sideOffset.value.split("rem")[0]) * baseFontSize;
    } else {
      _sideOffset = sideOffset;
    }
    return (
      <StyledContent
        density={density}
        sideOffset={_sideOffset}
        css={{ width: `${width}px`, ...css }}
        {...props}
        ref={ref}
      >
        {children}
      </StyledContent>
    );
  }
);

PopoverContent.displayName = NAME;
