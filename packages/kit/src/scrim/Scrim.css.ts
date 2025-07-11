import { style, keyframes, globalStyle } from "@vanilla-extract/css";
import { vars } from "../theme/vanilla-extract";

const fadeInAnimation = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
});

const fadeOutAnimation = keyframes({
  from: { opacity: 1 },
  to: { opacity: 0 },
});

export const scrimContainer = style({
  backgroundColor: vars.colors.alpha50,
  position: "fixed",
  inset: 0,
  contentVisibility: "auto",

  "@media": {
    "(prefers-reduced-motion: reduce)": {
      animation: "none",
    },
  },

  selectors: {
    "&[data-state='open']": {
      animation: `${fadeInAnimation} ${vars.transitions.normal} ${vars.transitions.inOut}`,
    },
    "&[data-state='closed']": {
      animation: `${fadeOutAnimation} ${vars.transitions.normal} ${vars.transitions.inOut}`,
      opacity: 0,
    },
  },
});

// Global styles for scroll locking
globalStyle('html[data-scrim-state="open"]', {
  maxHeight: "100vh",
  overflow: "hidden",
});

globalStyle('html[data-scrim-state="closed"]', {
  maxHeight: "",
  overflow: "",
});
