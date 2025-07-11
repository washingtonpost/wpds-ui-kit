import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { vars } from "../theme/contracts.css";
import { focusableStyles } from "../theme/accessibility.css";

// InputTextarea container
export const inputTextareaContainer = style({
  display: "flex",
  flexDirection: "column",
  position: "relative",
  width: "100%",
});

// Main textarea styles
export const inputTextarea = recipe({
  base: [
    focusableStyles,
    {
      borderRadius: vars.radii["012"],
      borderColor: vars.colors.outline,
      borderStyle: "solid",
      borderWidth: "1px",
      backgroundColor: vars.colors.secondary,
      color: vars.colors.primary,
      fontFamily: vars.fonts.meta,
      fontSize: vars.fontSizes["100"],
      fontWeight: vars.fontWeights.light,
      lineHeight: vars.lineHeights["125"],

      display: "block",
      minHeight: vars.sizes["500"],
      paddingTop: vars.space["125"],
      paddingBottom: vars.space["050"],
      paddingLeft: vars.space["050"],
      paddingRight: vars.space["050"],
      width: "100%",

      resize: "vertical",

      selectors: {
        "&:focus": {
          borderColor: vars.colors.signal,
          outline: "none",
        },

        "&::placeholder": {
          color: "transparent",
        },

        "&:invalid": {
          borderColor: vars.colors.error,
        },

        '&[aria-invalid="true"]': {
          borderColor: vars.colors.error,
        },

        // Autofill styles
        "&:-webkit-autofill": {
          WebkitBoxShadow: `0 0 0 100px ${vars.colors.secondary} inset`,
          WebkitTextFillColor: vars.colors.primary,
          animation: "jsTriggerAutoFillStart 200ms",
        },

        "&:not(:-webkit-autofill)": {
          animation: "jsTriggerAutoFillCancel 200ms",
        },
      },
    },
  ],

  variants: {
    isInvalid: {
      true: {
        borderColor: vars.colors.error,
        selectors: {
          "&:focus": {
            borderColor: vars.colors.error,
          },
        },
      },
    },

    isDisabled: {
      true: {
        backgroundColor: vars.colors.disabled,
        borderColor: vars.colors.disabled,
        color: vars.colors.onDisabled,
        cursor: "not-allowed",
      },
    },

    canResize: {
      false: {
        resize: "none",
      },
    },
  },

  defaultVariants: {
    isInvalid: false,
    isDisabled: false,
    canResize: true,
  },
});

// Floating label
export const textareaLabel = style({
  position: "absolute",
  top: vars.space["050"],
  left: vars.space["050"],
  fontSize: vars.fontSizes["100"],
  lineHeight: vars.lineHeights["125"],
  color: vars.colors.onSurfaceVariant,
  pointerEvents: "none",
  transition: `all ${vars.transitions.fast}`,
  transformOrigin: "left top",

  "@media": {
    "(prefers-reduced-motion: reduce)": {
      transition: "none",
    },
  },
});

export const textareaLabelFloating = style({
  fontSize: vars.fontSizes["075"],
  lineHeight: vars.lineHeights["100"],
  transform: "translateY(0) scale(1)",
});

export const textareaLabelError = style({
  color: vars.colors.error,
});

// Helper and error text wrapper
export const textareaSubText = style({
  width: "100%",
  marginTop: vars.space["025"],
});
