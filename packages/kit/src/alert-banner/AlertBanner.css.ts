import { style } from "@vanilla-extract/css";
import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { vars } from "../theme/contracts.css";

export const alertBannerRootClass = recipe({
  base: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    color: vars.colors.primary,
    alignItems: "center",
    fontFamily: vars.fonts.meta,
    fontSize: vars.fontSizes["100"],
    fontWeight: vars.fontWeights.light,
    lineHeight: vars.sizes["125"],
    minHeight: "40px",
  },
  variants: {
    variant: {
      error: {
        background: vars.colors.error,
      },
      success: {
        background: vars.colors.success,
      },
      warning: {
        background: vars.colors.warning,
      },
      information: {
        background: vars.colors.blue60,
      },
    },
    dismissable: {
      false: {
        paddingRight: vars.space["050"],
      },
      true: {},
    },
  },
  defaultVariants: {
    variant: "information",
    dismissable: true,
  },
});

export const alertBannerIconClass = recipe({
  base: {
    flex: "0 0 auto",
  },
  variants: {
    variant: {
      error: {
        fill: vars.colors.error,
      },
      success: {
        fill: vars.colors.success,
      },
      warning: {
        fill: vars.colors.warning,
      },
      information: {
        fill: vars.colors.signal,
      },
    },
  },
  defaultVariants: {
    variant: "information",
  },
});

export const alertBannerButtonClass = style({
  alignSelf: "flex-start",
  border: "none",
  borderRadius: "0",
  cursor: "auto",
  ":hover": {
    background: "none",
  },
});

export type AlertBannerRootVariants = RecipeVariants<typeof alertBannerRootClass>;
export type AlertBannerIconVariants = RecipeVariants<typeof alertBannerIconClass>;
