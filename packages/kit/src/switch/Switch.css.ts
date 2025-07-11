import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { vars } from "../theme/contracts.css";

export const switchRootBase = style({
  // reset button styles
  fontSize: vars.fontSizes["100"],
  boxSizing: "border-box",
  display: "inline-flex",
  overflow: "hidden",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: vars.radii.round,
  cursor: "pointer",
  appearance: "none",
  transition: `all ${vars.transitions.fast} ${vars.transitions.inOut}`,
  padding: 0,
  margin: 0,
  // end reset button styles
  height: vars.sizes["100"],
  width: vars.sizes["200"],
  border: "1px solid",

  selectors: {
    "&:focus": {
      outline: `1px solid ${vars.colors.signal}`,
      outlineOffset: "1px",
    },
    "&:disabled": {
      backgroundColor: vars.colors.disabled,
      borderColor: vars.colors.disabled,
    },
  },

  "@media": {
    "(prefers-reduced-motion: reduce)": {
      transition: "none",
    },
  },
});

export const switchRootRecipe = recipe({
  base: switchRootBase,
  variants: {
    variant: {
      primary: {
        backgroundColor: vars.colors.primary,
        borderColor: vars.colors.primary,
        selectors: {
          '&[data-state="unchecked"]': {
            backgroundColor: "transparent",
            borderColor: vars.colors.alpha50,
          },
          "&:disabled": {
            backgroundColor: vars.colors.disabled,
            borderColor: vars.colors.disabled,
          },
        },
      },
      cta: {
        backgroundColor: vars.colors.cta,
        borderColor: vars.colors.cta,
        selectors: {
          '&[data-state="unchecked"]': {
            backgroundColor: "transparent",
            borderColor: vars.colors.alpha50,
          },
          "&:disabled": {
            backgroundColor: vars.colors.disabled,
            borderColor: vars.colors.disabled,
          },
        },
      },
    },
    error: {
      true: {
        outline: `1px solid ${vars.colors.error}`,
        outlineOffset: "1px",
      },
      false: {},
    },
  },
  defaultVariants: {
    variant: "primary",
    error: false,
  },
});

export const switchThumbBase = style({
  display: "inline-block",
  padding: `calc(${vars.sizes["050"]} - 1px)`,
  borderRadius: vars.radii.round,
  transition: vars.transitions.allFast,
  transform: `translateX(-${vars.sizes["050"]})`,
  willChange: "transform",

  selectors: {
    '&[data-state="checked"]': {
      transform: `translateX(${vars.sizes["050"]})`,
    },
  },

  "@media": {
    "(prefers-reduced-motion: reduce)": {
      transition: "none",
    },
  },
});

export const switchThumbRecipe = recipe({
  base: switchThumbBase,
  variants: {
    variant: {
      primary: {
        backgroundColor: vars.colors.secondary,
        selectors: {
          "&:disabled": {
            backgroundColor: vars.colors.disabled,
          },
        },
      },
      cta: {
        backgroundColor: vars.colors.secondary,
        selectors: {
          "&:disabled": {
            backgroundColor: vars.colors.disabled,
          },
        },
      },
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

export type SwitchRootRecipeVariants = Parameters<typeof switchRootRecipe>[0];
export type SwitchThumbRecipeVariants = Parameters<typeof switchThumbRecipe>[0];
