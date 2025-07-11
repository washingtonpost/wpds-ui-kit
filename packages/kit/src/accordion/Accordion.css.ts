import { style, keyframes } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { vars } from "../theme/contracts.css";
import { focusableStyles } from "../theme/accessibility.css";

// Animation for accordion content
const accordionSlideDown = keyframes({
  from: { height: "0" },
  to: { height: "var(--radix-accordion-content-height)" },
});

const accordionSlideUp = keyframes({
  from: { height: "var(--radix-accordion-content-height)" },
  to: { height: "0" },
});

// AccordionRoot styles
export const accordionRoot = recipe({
  base: {
    width: "100%",
  },

  variants: {
    disabled: {
      true: {
        cursor: "not-allowed",
      },
    },
  },
});

// AccordionItem styles
export const accordionItem = style({
  borderBottom: `1px solid ${vars.colors.outline}`,

  selectors: {
    "&:last-child": {
      borderBottom: "none",
    },
  },
});

// AccordionHeader styles
export const accordionHeader = style({
  all: "unset",
  color: vars.colors.primary,
  display: "flex",

  selectors: {
    "[data-disabled] &": {
      pointerEvents: "none",
      color: vars.colors.onDisabled,
    },
  },
});

// AccordionTrigger styles
export const accordionTrigger = recipe({
  base: [
    focusableStyles,
    {
      all: "unset",
      fontFamily: "inherit",
      backgroundColor: "transparent",
      flex: 1,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      paddingTop: vars.space["150"],
      paddingBottom: vars.space["150"],

      selectors: {
        "&:hover": {
          cursor: "pointer",
        },

        "&:focus-visible": {
          position: "relative",
          zIndex: 1,
          boxShadow: `0 0 0 2px ${vars.colors.cta}`,
        },
      },
    },
  ],

  variants: {
    density: {
      default: {},
      compact: {
        paddingTop: vars.space["100"],
        paddingBottom: vars.space["100"],
      },
      loose: {
        paddingTop: vars.space["200"],
        paddingBottom: vars.space["200"],
      },
    },
  },

  defaultVariants: {
    density: "default",
  },
});

// Icon styles
export const accordionIcon = style({
  marginLeft: vars.space["150"],
  minWidth: vars.fontSizes["100"],
});

// Chevron animation
export const accordionChevron = style({
  transition: `transform ${vars.transitions.normal} cubic-bezier(0.87, 0, 0.13, 1)`,

  "@media": {
    "(prefers-reduced-motion: reduce)": {
      transition: "none",
    },
  },

  selectors: {
    "[data-state=open] &": {
      transform: "rotate(180deg)",
    },
  },
});

// AccordionContent styles
export const accordionContent = style({
  overflow: "hidden",

  selectors: {
    '&[data-state="open"]': {
      animation: `${accordionSlideDown} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
    },

    '&[data-state="closed"]': {
      animation: `${accordionSlideUp} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
    },
  },

  "@media": {
    "(prefers-reduced-motion: reduce)": {
      animation: "none",

      selectors: {
        '&[data-state="open"]': {
          animation: "none",
        },
        '&[data-state="closed"]': {
          animation: "none",
        },
      },
    },
  },
});

export const accordionContentInner = recipe({
  base: {
    paddingTop: vars.space["100"],
    paddingBottom: vars.space["150"],
  },

  variants: {
    density: {
      default: {},
      compact: {
        paddingTop: vars.space["075"],
        paddingBottom: vars.space["100"],
      },
      loose: {
        paddingTop: vars.space["150"],
        paddingBottom: vars.space["200"],
      },
    },
  },

  defaultVariants: {
    density: "default",
  },
});
