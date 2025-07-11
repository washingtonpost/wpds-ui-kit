import { style, keyframes } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { vars } from "../theme/contracts.css";

// Animations
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

export const tooltipArrowClass = style({
  fill: vars.colors.secondary,
});

export const tooltipContentRecipe = recipe({
  base: {
    borderRadius: vars.radii["012"],
    padding: vars.space["050"],
    color: vars.colors.primary,
    border: `solid 1px ${vars.colors.outline}`,
    backgroundColor: vars.colors.secondary,
    width: "144px",
    userSelect: "none",
    "@media": {
      "(prefers-reduced-motion: no-preference)": {
        animationDuration: vars.transitions.normal,
        animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
        willChange: "transform, opacity",
        selectors: {
          '&[data-state="delayed-open"][data-side="top"]': {
            animationName: slideDownAndFade,
          },
          '&[data-state="delayed-open"][data-side="right"]': {
            animationName: slideLeftAndFade,
          },
          '&[data-state="delayed-open"][data-side="bottom"]': {
            animationName: slideUpAndFade,
          },
          '&[data-state="delayed-open"][data-side="left"]': {
            animationName: slideRightAndFade,
          },
        },
      },
    },
  },
  variants: {
    density: {
      compact: {
        padding: vars.space["025"],
      },
      default: {},
    },
  },
  defaultVariants: {
    density: "default",
  },
});

export const tooltipTriggerClass = style({
  color: vars.colors.primary,
});
