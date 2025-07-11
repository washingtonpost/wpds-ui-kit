import { style, keyframes } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { vars } from "../theme/contracts.css";

// Get theme tokens
const tokens = {
  color: vars.colors,
  space: vars.space,
  transition: vars.transitions,
  shadow: vars.shadows,
};

// Keyframes for drawer animations
const animateInFromTop = keyframes({
  from: { transform: "translateY(-100%)" },
  to: { transform: "translateY(0)" },
});

const animateOutFromTop = keyframes({
  from: { transform: "translateY(0)" },
  to: { transform: "translateY(-100%)" },
});

const animateInFromRight = keyframes({
  from: { transform: "translateX(100%)" },
  to: { transform: "translateX(0)" },
});

const animateOutFromRight = keyframes({
  from: { transform: "translateX(0)" },
  to: { transform: "translateX(100%)" },
});

const animateInFromBottom = keyframes({
  from: { transform: "translateY(100%)" },
  to: { transform: "translateY(0)" },
});

const animateOutFromBottom = keyframes({
  from: { transform: "translateY(0)" },
  to: { transform: "translateY(100%)" },
});

const animateInFromLeft = keyframes({
  from: { transform: "translateX(-100%)" },
  to: { transform: "translateX(0)" },
});

const animateOutFromLeft = keyframes({
  from: { transform: "translateX(0)" },
  to: { transform: "translateX(-100%)" },
});

// Base drawer container styles
export const drawerContainerStyles = recipe({
  base: {
    backgroundColor: tokens.color.secondary,
    boxShadow: tokens.shadow["300"],
    color: tokens.color.primary,
    maxHeight: "100%",
    overflow: "auto",
    position: "fixed",
    transition: `transform ${tokens.transition.normal} ${tokens.transition.inOut}, opacity ${tokens.transition.normal} ${tokens.transition.inOut}`,
    contentVisibility: "auto",
    opacity: 0,

    "@media": {
      "(prefers-reduced-motion: reduce)": {
        transition: "none",
        animationDuration: "0.01ms !important",
        animationIterationCount: "1 !important",
      },
    },
  },

  variants: {
    position: {
      top: {
        top: 0,
        right: 0,
        left: 0,
      },
      right: {
        top: 0,
        right: 0,
        bottom: 0,
      },
      bottom: {
        right: 0,
        bottom: 0,
        left: 0,
      },
      left: {
        top: 0,
        bottom: 0,
        left: 0,
      },
    },

    state: {
      open: {
        opacity: 1,
      },
      closed: {
        opacity: 0,
      },
    },
  },

  compoundVariants: [
    // Open state animations
    {
      variants: { position: "top", state: "open" },
      style: {
        animation: `${animateInFromTop} ${tokens.transition.normal} ${tokens.transition.inOut}`,
        transform: "translateY(0)",
      },
    },
    {
      variants: { position: "right", state: "open" },
      style: {
        animation: `${animateInFromRight} ${tokens.transition.normal} ${tokens.transition.inOut}`,
        transform: "translateX(0)",
      },
    },
    {
      variants: { position: "bottom", state: "open" },
      style: {
        animation: `${animateInFromBottom} ${tokens.transition.normal} ${tokens.transition.inOut}`,
        transform: "translateY(0)",
      },
    },
    {
      variants: { position: "left", state: "open" },
      style: {
        animation: `${animateInFromLeft} ${tokens.transition.normal} ${tokens.transition.inOut}`,
        transform: "translateX(0)",
      },
    },

    // Closed state animations
    {
      variants: { position: "top", state: "closed" },
      style: {
        animation: `${animateOutFromTop} ${tokens.transition.normal} ${tokens.transition.inOut}`,
        transform: "translateY(-100%)",
      },
    },
    {
      variants: { position: "right", state: "closed" },
      style: {
        animation: `${animateOutFromRight} ${tokens.transition.normal} ${tokens.transition.inOut}`,
        transform: "translateX(100%)",
      },
    },
    {
      variants: { position: "bottom", state: "closed" },
      style: {
        animation: `${animateOutFromBottom} ${tokens.transition.normal} ${tokens.transition.inOut}`,
        transform: "translateY(100%)",
      },
    },
    {
      variants: { position: "left", state: "closed" },
      style: {
        animation: `${animateOutFromLeft} ${tokens.transition.normal} ${tokens.transition.inOut}`,
        transform: "translateX(-100%)",
      },
    },
  ],
});

// Inner content wrapper styles
export const drawerInnerStyles = style({
  padding: tokens.space["100"],
});

// Close button styles
export const drawerCloseStyles = recipe({
  base: {
    // Base button styles will be inherited from Button component
  },

  variants: {
    sticky: {
      true: {
        position: "sticky",
        top: tokens.space["100"],
        right: tokens.space["100"],
        float: "right",
      },
      false: {},
    },
  },

  defaultVariants: {
    sticky: false,
  },
});

// Scrim/overlay styles
export const drawerScrimStyles = style({
  position: "fixed",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  backgroundColor: "rgba(0, 0, 0, 0.8)",
  opacity: 0,
  transition: `opacity ${tokens.transition.normal} ${tokens.transition.inOut}`,
  pointerEvents: "none",

  selectors: {
    '&[data-state="open"]': {
      opacity: 1,
      pointerEvents: "auto",
    },
    '&[data-state="closed"]': {
      opacity: 0,
      pointerEvents: "none",
    },
  },

  "@media": {
    "(prefers-reduced-motion: reduce)": {
      transition: "none",
    },
  },
});
