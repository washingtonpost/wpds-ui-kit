import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { vars } from "../theme/contracts.css";

export const checkboxBase = style({
  appearance: "none",
  borderRadius: vars.radii["012"],
  border: "1px solid",
  display: "block",
  cursor: "pointer",
  overflow: "hidden",
  padding: 0,
  flexShrink: 0,
  transition: `background ${vars.transitions.fast} ${vars.transitions.inOut}`,

  ":focus": {
    outline: `1px solid ${vars.colors.signal}`,
    outlineOffset: "2px",
  },

  ":disabled": {
    borderColor: vars.colors.onDisabled,
    color: vars.colors.outline,
    cursor: "not-allowed",
  },

  "@media": {
    "(prefers-reduced-motion: reduce)": {
      transition: "none",
    },
  },

  selectors: {
    "&[aria-checked='false']:not(:disabled)": {
      borderColor: vars.colors.outline,
    },
  },
});

export const checkboxRecipe = recipe({
  base: checkboxBase,
  variants: {
    size: {
      "087": {
        width: vars.sizes["087"],
        height: vars.sizes["087"],
      },
      "125": {
        width: vars.sizes["125"],
        height: vars.sizes["125"],
      },
    },
    variant: {
      primary: {
        selectors: {
          "&:not([aria-checked='false']):not(:disabled)": {
            backgroundColor: vars.colors.primary,
            color: "transparent",
          },
        },
      },
      secondary: {
        selectors: {
          "&:not([aria-checked='false']):not(:disabled)": {
            backgroundColor: vars.colors.secondary,
            color: vars.colors.outline,
          },
        },
      },
      cta: {
        selectors: {
          "&:not([aria-checked='false']):not(:disabled)": {
            backgroundColor: vars.colors.cta,
            color: "transparent",
          },
        },
      },
    },
    isOutline: {
      true: {},
      false: {},
    },
    disabled: {
      true: {
        backgroundColor: vars.colors.disabled,
        color: vars.colors.onDisabled,
        borderColor: vars.colors.onDisabled,
      },
    },
  },
  compoundVariants: [
    {
      variants: { isOutline: true, variant: "primary" },
      style: {
        selectors: {
          "&:not([aria-checked='false']):not(:disabled)": {
            backgroundColor: "transparent",
            color: vars.colors.primary,
          },
        },
      },
    },
    {
      variants: { isOutline: true, variant: "secondary" },
      style: {
        selectors: {
          "&:not([aria-checked='false']):not(:disabled)": {
            backgroundColor: "transparent",
            color: vars.colors.secondary,
          },
        },
      },
    },
    {
      variants: { isOutline: true, variant: "cta" },
      style: {
        selectors: {
          "&:not([aria-checked='false']):not(:disabled)": {
            backgroundColor: "transparent",
            color: vars.colors.cta,
          },
        },
      },
    },
  ],
  defaultVariants: {
    size: "125",
    variant: "primary",
    isOutline: false,
    disabled: false,
  },
});

export const checkboxIndicatorRecipe = recipe({
  base: {
    flex: `0 0 ${vars.sizes["125"]}`,
    lineHeight: "0",
  },
  variants: {
    size: {
      "087": {
        width: vars.sizes["087"],
        height: vars.sizes["087"],
      },
      "125": {
        width: vars.sizes["125"],
        height: vars.sizes["125"],
      },
    },
    variant: {
      primary: {
        color: vars.colors.onPrimary,
      },
      secondary: {
        color: vars.colors.onSecondary,
      },
      cta: {
        color: vars.colors.onCta,
      },
    },
    isOutline: {
      true: {},
      false: {},
    },
    disabled: {
      true: {
        color: vars.colors.onDisabled,
        borderColor: vars.colors.outline,
      },
    },
  },
  compoundVariants: [
    {
      variants: { isOutline: true, variant: "primary" },
      style: {
        color: vars.colors.primary,
      },
    },
    {
      variants: { isOutline: true, variant: "secondary" },
      style: {
        color: vars.colors.secondary,
      },
    },
    {
      variants: { isOutline: true, variant: "cta" },
      style: {
        color: vars.colors.cta,
      },
    },
    {
      variants: { isOutline: false, variant: "primary" },
      style: {
        color: vars.colors.onPrimary,
      },
    },
    {
      variants: { isOutline: false, variant: "secondary" },
      style: {
        color: vars.colors.onSecondary,
      },
    },
    {
      variants: { isOutline: false, variant: "cta" },
      style: {
        color: vars.colors.onCta,
      },
    },
  ],
  defaultVariants: {
    size: "125",
    variant: "primary",
    isOutline: false,
    disabled: false,
  },
});

export const checkboxIcon = style({
  display: "block",
  width: "100%",
  height: "100%",
});

export const checkboxLabel = style({
  cursor: "pointer",

  selectors: {
    "&:has(input:disabled)": {
      cursor: "not-allowed",
    },
  },
});

export const checkboxContainer = style({
  alignItems: "flex-start",
  display: "flex",
  gap: vars.space["050"],
});

export type CheckboxVariants = Parameters<typeof checkboxRecipe>[0];
export type CheckboxIndicatorVariants = Parameters<
  typeof checkboxIndicatorRecipe
>[0];
