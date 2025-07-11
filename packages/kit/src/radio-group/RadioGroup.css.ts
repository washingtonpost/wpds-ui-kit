import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { vars } from "../theme/contracts.css";

export const radioGroupInputs = style({
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
  gap: vars.space["025"],
  selectors: {
    '[data-orientation="horizontal"] > &': {
      alignItems: "center",
      flexDirection: "row",
      gap: vars.space["050"],
    },
  },
});

export const radioButtonContainer = style({
  alignItems: "flex-start",
  display: "flex",
});

export const radioButtonBase = style({
  backgroundColor: vars.colors.onPrimary,
  borderColor: vars.colors.outline,
  borderStyle: "solid",
  borderRadius: "50%",
  borderWidth: "1px",
  cursor: "pointer",
  padding: 0,
  transition: vars.transitions.allFast,
  width: vars.sizes["125"],
  minWidth: vars.sizes["125"],
  height: vars.sizes["125"],
  
  selectors: {
    "&:focus": {
      borderColor: vars.colors.cta,
    },
    "&:focus-visible": {
      outline: "none",
    },
    "&:disabled": {
      backgroundColor: vars.colors.disabled,
      borderColor: vars.colors.onDisabled,
    },
  },
  
  "@media": {
    "(prefers-reduced-motion: reduce)": {
      transition: "none",
    },
  },
});

export const radioButtonRecipe = recipe({
  base: radioButtonBase,
  variants: {
    variant: {
      primary: {
        selectors: {
          "&[aria-checked='true']:enabled:not(:focus)": {
            borderColor: vars.colors.primary,
          },
        },
      },
      secondary: {
        selectors: {
          "&[aria-checked='true']:enabled:not(:focus)": {
            borderColor: vars.colors.secondary,
          },
          "&[aria-checked='true']:enabled": {
            backgroundColor: vars.colors.onSecondary,
          },
        },
      },
      cta: {
        selectors: {
          "&[aria-checked='true']:enabled:not(:focus)": {
            borderColor: vars.colors.cta,
          },
        },
      },
    },
    isOutline: {
      true: {
        backgroundColor: "transparent",
      },
    },
    isInvalid: {
      true: {
        borderColor: vars.colors.error,
        selectors: {
          "&[aria-checked='true']:enabled:not(:focus)": {
            borderColor: vars.colors.error,
          },
        },
      },
    },
  },
  compoundVariants: [
    {
      variants: {
        variant: "secondary",
        isOutline: true,
      },
      style: {
        selectors: {
          "&[aria-checked='true']:enabled": {
            backgroundColor: "transparent",
          },
        },
      },
    },
  ],
});

export const radioIndicatorBase = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  position: "relative",
  
  selectors: {
    "&::after": {
      content: '""',
      display: "block",
      width: "0.625rem",
      height: "0.625rem",
      borderRadius: "50%",
      backgroundColor: vars.colors.primary,
    },
  },
});

export const radioIndicatorRecipe = recipe({
  base: radioIndicatorBase,
  variants: {
    variant: {
      primary: {
        selectors: {
          "&::after": {
            backgroundColor: vars.colors.primary,
          },
        },
      },
      secondary: {
        selectors: {
          "&::after": {
            backgroundColor: vars.colors.secondary,
          },
        },
      },
      cta: {
        selectors: {
          "&::after": {
            backgroundColor: vars.colors.cta,
          },
        },
      },
    },
    isDisabled: {
      true: {
        selectors: {
          "&::after": {
            backgroundColor: vars.colors.onDisabled,
          },
        },
      },
    },
  },
});

export const radioButtonLabel = style({
  cursor: "pointer",
  paddingBlockStart: "0.125rem",
  paddingInlineStart: vars.space["050"],
});

export type RadioButtonRecipeVariants = Parameters<typeof radioButtonRecipe>[0];
export type RadioIndicatorRecipeVariants = Parameters<typeof radioIndicatorRecipe>[0];
