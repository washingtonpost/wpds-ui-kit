import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { styled, keyframes, theme } from "@washingtonpost/wpds-theme";
import type * as WPDS from "@washingtonpost/wpds-theme";

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
// Radix offset only accepts a number of pixels it should be offsetting
const convertRemToPixels = (
  valToConvert: number | string | WPDSThemeSpaceObject
): number => {
  let val = "";

  if (typeof valToConvert === "number" && valToConvert === 0) {
    val = "0";
  }

  // if we pass a string that includes the words rem
  //mainly used for docs site examples and storybook example
  if (typeof valToConvert === "string" && valToConvert.includes("rem")) {
    val = valToConvert.split("rem")[0];
  }

  if (typeof valToConvert === "object") {
    // if we pass in an object and it has a value
    val = valToConvert.value.split("rem")[0];
  }

  return (val as unknown as number) * 16;
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
    density: {
      compact: {
        padding: theme.space["025"],
      },
    },
  },
});

type TooltipContentVariants = React.ComponentPropsWithRef<
  typeof StyledContentWrapper
>;

type TooltipContentType = TooltipContentVariants & {
  css?: WPDS.CSS;
  disabled?: boolean;
  sideOffset?: string | WPDSThemeSpaceObject;
  /** @default TOOLTIP_CONTENT_SIDE.top */
  side?: string;
  /** @default TOOLTIP_CONTENT_ALIGN.center */
  align?: string;
};

export const TooltipContent = React.forwardRef<
  HTMLDivElement,
  TooltipContentType
>(
  (
    {
      children,
      sideOffset = theme.space["025"],
      disabled = false,
      side = TOOLTIP_CONTENT_SIDE.top,
      align = TOOLTIP_CONTENT_ALIGN.center,
      ...props
    },
    ref
  ) =>
    disabled ? null : (
      <TooltipPrimitive.Portal>
        <StyledContentWrapper
          {...props}
          sideOffset={convertRemToPixels(sideOffset)}
          side={side}
          align={align}
          ref={ref}
        >
          {children}
          <StyledArrow />
        </StyledContentWrapper>
      </TooltipPrimitive.Portal>
    )
);

TooltipContent.displayName = "TooltipComponentContent";
