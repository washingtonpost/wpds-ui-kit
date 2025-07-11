import { style, keyframes } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { vars } from "../theme/contracts.css";
import { focusableStyles } from "../theme/accessibility.css";

// Animation keyframes
export const fadeIn = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
});

export const fadeOut = keyframes({
  from: { opacity: 1 },
  to: { opacity: 0 },
});

// TabsRoot styles
export const tabsRoot = style({
  // Basic styling, most handled by Radix
});

// TabsList styles
export const tabsList = recipe({
  base: {
    display: "flex",
    alignItems: "center",
    // Add styling for tabs list container
  },

  variants: {
    orientation: {
      horizontal: {
        flexDirection: "row",
      },
      vertical: {
        flexDirection: "column",
      },
    },
  },

  defaultVariants: {
    orientation: "horizontal",
  },
});

// TabsTrigger styles
export const tabsTrigger = recipe({
  base: [
    focusableStyles,
    {
      cursor: "pointer",
      border: "none",
      background: "transparent",
      appearance: "none",
      fontFamily: vars.fonts.meta,
      fontSize: vars.fontSizes["100"],
      color: vars.colors.primary,
      position: "relative",
      paddingTop: vars.space["075"],
      paddingBottom: vars.space["075"],
      paddingLeft: 0,
      paddingRight: 0,

      selectors: {
        "&::after": {
          content: "",
          position: "absolute",
          width: "100%",
          bottom: 0,
          left: 0,
          right: 0,
        },

        "&:hover::after": {
          borderBottom: `1px solid ${vars.colors.gray300}`,
        },

        // Focus styles
        "&:focus-visible": {
          outline: "-webkit-focus-ring-color auto 1px",
        },

        "&:focus-visible::after": {
          borderBottom: "none", // Remove border so outline is visible
        },
      },
    },
  ],

  variants: {
    active: {
      true: {
        fontWeight: vars.fontWeights.bold,

        selectors: {
          "&::after": {
            borderBottom: `1px solid ${vars.colors.primary}`,
            transformOrigin: "top left",
          },

          "&:hover::after": {
            borderBottom: `1px solid ${vars.colors.primary}`,
          },

          "&.move-enter::after": {
            transform: "translateX(var(--startx)) scaleX(var(--startscale))",

            "@media": {
              "(prefers-reduced-motion: reduce)": {
                transition: "none",
              },
            },
          },

          "&.move-enter-active::after": {
            transform: "translateX(0) scaleX(1)",
            transition: `transform ${vars.transitions.normal} ${vars.transitions.inOut}`,

            "@media": {
              "(prefers-reduced-motion: reduce)": {
                transition: "none",
              },
            },
          },
        },
      },
    },

    density: {
      compact: {
        fontSize: vars.fontSizes["087"],
      },
      default: {},
      loose: {
        fontSize: vars.fontSizes["112"],
      },
    },
  },

  defaultVariants: {
    active: false,
    density: "default",
  },
});

// TabsContent styles
export const tabsContent = recipe({
  base: {
    outline: "none",

    selectors: {
      "&:focus-visible": {
        outline: `2px solid ${vars.colors.signal}`,
        outlineOffset: "2px",
      },
    },
  },

  variants: {
    // Add animation variants if needed
    state: {
      entering: {
        animation: `${fadeIn} 300ms ease-out`,
      },
      entered: {
        opacity: 1,
      },
      exiting: {
        animation: `${fadeOut} 300ms ease-out`,
      },
      exited: {
        display: "none",
      },
    },
  },
});

// TabsTriggerContent styles
export const tabsTriggerContent = style({
  display: "flex",
  alignItems: "center",
  gap: vars.space["050"],
});
