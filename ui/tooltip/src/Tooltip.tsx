import * as React from "react";
import { styled, keyframes, theme } from "@washingtonpost/wpds-theme";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import type * as WPDS from "@washingtonpost/wpds-theme";

export const enum TOOLTIP_CONTENT_SIDE {
  left = "left",
  right = "right",
  top = "top",
  bottom = "bottom",
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

const StyledContentWrapper = styled(TooltipPrimitive.Content, {
  borderRadius: theme.radii["012"],
  padding: theme.space["050"],
  color: theme.colors.primary,
  border: `solid 1px ${theme.colors.subtle}`,
  backgroundColor: theme.colors.secondary,
  width: "144px",
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

const StyledArrow = styled(TooltipPrimitive.Arrow, {
  fill: theme.colors.secondary,
});

// Radix offset only accepts a number of pixels it should be offsetting
const convertRemToPixels = (valToConvert) => {
  let remVal = "";
  if (valToConvert.value) {
    remVal = valToConvert.value.split("rem")[0];
  } else {
    // handles storybook examples of directly passing in rem values only
    remVal = valToConvert.split("rem")[0];
  }

  return (remVal as unknown as number) * 16;
};

type TooltipContentVariants = React.ComponentPropsWithRef<
  typeof StyledContentWrapper
>;

type TooltipContentType = TooltipContentVariants & {
  css?: WPDS.CSS;
  disabled?: boolean;
  sideOffset?: string | { value: string };
  side?: string;
};

const TooltipContent = React.forwardRef<HTMLDivElement, TooltipContentType>(
  (
    { children, sideOffset = theme.space["025"], disabled = false, ...props },
    ref
  ) =>
    disabled ? null : (
      <TooltipPrimitive.Portal>
        <StyledContentWrapper
          {...props}
          sideOffset={convertRemToPixels(sideOffset)}
          ref={ref}
        >
          {children}
          <StyledArrow />
        </StyledContentWrapper>
      </TooltipPrimitive.Portal>
    )
);

TooltipContent.displayName = "TooltipComponentContent";

const StyledTrigger = styled(TooltipPrimitive.Trigger, {
  color: theme.colors.primary,
});

type TooltipTriggerType = React.ComponentPropsWithRef<typeof StyledTrigger>;

const TooltipTrigger = React.forwardRef<HTMLButtonElement, TooltipTriggerType>(
  ({ children, ...props }, ref) => (
    <StyledTrigger {...props} ref={ref} asChild>
      {children}
    </StyledTrigger>
  )
);

TooltipTrigger.displayName = "TooltipComponentTrigger";

const Provider = TooltipPrimitive.Provider;
const Root = TooltipPrimitive.Root;
const Trigger = TooltipTrigger;
const Content = TooltipContent;

export const Tooltip = {
  Provider,
  Root,
  Content,
  Trigger,
};
