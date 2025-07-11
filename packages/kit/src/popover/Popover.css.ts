import { style, keyframes, styleVariants } from "@vanilla-extract/css";
import { vars } from "../theme/contracts.css";

// Animation keyframes
export const slideUpAndFade = keyframes({
  from: {
    opacity: 0,
    transform: "translateY(2px)",
  },
  to: {
    opacity: 1,
    transform: "translateY(0)",
  },
});

export const slideRightAndFade = keyframes({
  from: {
    opacity: 0,
    transform: "translateX(-2px)",
  },
  to: {
    opacity: 1,
    transform: "translateX(0)",
  },
});

export const slideDownAndFade = keyframes({
  from: {
    opacity: 0,
    transform: "translateY(-2px)",
  },
  to: {
    opacity: 1,
    transform: "translateY(0)",
  },
});

export const slideLeftAndFade = keyframes({
  from: {
    opacity: 0,
    transform: "translateX(2px)",
  },
  to: {
    opacity: 1,
    transform: "translateX(0)",
  },
});

// Base content styles
export const popoverContentBase = style({
  backgroundColor: vars.colors.secondary,
  border: `1px solid ${vars.colors.gray300}`,
  boxShadow: vars.shadows["200"],
  color: vars.colors.primary,
  animationDuration: vars.transitions.normal,
  "@media": {
    "(prefers-reduced-motion: reduce)": {
      animationDuration: "0s",
      animationFillMode: "none",
    },
  },
  animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
  willChange: "transform, opacity",
  selectors: {
    '&[data-state="open"][data-side="top"]': {
      animationName: slideDownAndFade,
    },
    '&[data-state="open"][data-side="right"]': {
      animationName: slideLeftAndFade,
    },
    '&[data-state="open"][data-side="bottom"]': {
      animationName: slideUpAndFade,
    },
    '&[data-state="open"][data-side="left"]': {
      animationName: slideRightAndFade,
    },
  },
});

// Density variants
export const popoverContent = styleVariants({
  default: [
    popoverContentBase,
    {
      padding: vars.space["050"],
    },
  ],
  compact: [
    popoverContentBase,
    {
      padding: vars.space["025"],
    },
  ],
});

// PopoverClose button styles
export const popoverCloseButton = style({
  position: "absolute",
  top: vars.space["025"],
  right: vars.space["025"],
  border: "none !important",
});
