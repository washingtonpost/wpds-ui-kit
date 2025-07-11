import { style, styleVariants, globalStyle } from "@vanilla-extract/css";
import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { vars } from "../theme/contracts.css";

export const actionMenuRootClass = style({});

export const actionMenuContentClass = style({
  background: vars.colors.secondary,
  border: `solid 1px ${vars.colors.outline}`,
  borderRadius: vars.radii["050"],
  boxShadow: vars.shadows["300"],
  color: vars.colors.primary,
  fontFamily: vars.fonts.body,
  fontSize: vars.fontSizes["100"],
  fontWeight: vars.fontWeights.regular,
  lineHeight: vars.sizes["100"],
  maxHeight: "var(--radix-dropdown-menu-content-available-height)",
  maxWidth: "var(--radix-dropdown-menu-content-available-width)",
  minWidth: "200px",
  overflowX: "hidden",
  overflowY: "auto",
  width: "fit-content",
});

export const actionMenuItemClass = recipe({
  base: {
    alignItems: "center",
    background: vars.colors.secondary,
    borderRadius: vars.radii["050"],
    display: "flex",
    flexBasis: "auto",
    flexDirection: "row",
    justifyContent: "flex-start",
    flexWrap: "nowrap",
    marginTop: "1px",
    marginBottom: "1px",
    marginLeft: "1px",
    transition: `background ${vars.transitions.fast} ${vars.transitions.inOut}`,
    width: "calc(100% - 2px)",
    ":hover": {
      backgroundColor: vars.colors.alpha25,
      cursor: "pointer",
    },
    ":focus-visible": {
      outline: "none",
    },
    selectors: {
      "&[data-disabled]": {
        color: vars.colors.onDisabled,
        pointerEvents: "none",
      },
    },
  },
  variants: {
    density: {
      loose: {
        padding: vars.space["100"],
      },
      default: {
        padding: vars.space["075"],
      },
      compact: {
        padding: vars.space["050"],
      },
    },
  },
  defaultVariants: {
    density: "default",
  },
});

// Global styles for disabled state svg icons
globalStyle(`${actionMenuItemClass.classNames.base}[data-disabled] svg`, {
  fill: vars.colors.onDisabled,
});

export const actionMenuSubContentClass = styleVariants({
  small: [
    actionMenuContentClass,
    {
      boxShadow: vars.shadows["400"],
    },
  ],
  large: [
    actionMenuContentClass,
    {
      boxShadow: vars.shadows["500"],
    },
  ],
});

export const actionMenuTriggerClass = style({
  all: "unset",
  background: "transparent",
  border: "none",
  cursor: "pointer",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  outline: "none",
  ":focus-visible": {
    outline: `2px solid ${vars.colors.signal}`,
    outlineOffset: "2px",
  },
});

export const actionMenuSeparatorClass = style({
  height: "1px",
  backgroundColor: vars.colors.outline,
  margin: `${vars.space["050"]} ${vars.space["075"]}`,
});

export const actionMenuLabelClass = style({
  color: vars.colors.accessible,
  fontSize: vars.fontSizes["100"],
  fontWeight: vars.fontWeights.bold,
  padding: `${vars.space["050"]} ${vars.space["075"]}`,
  margin: `${vars.space["025"]} 0`,
});

export const actionMenuIconClass = recipe({
  base: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  variants: {
    side: {
      left: {
        marginRight: vars.space["050"],
      },
      right: {
        marginLeft: vars.space["050"],
      },
    },
  },
  defaultVariants: {
    side: "left",
  },
});

export const actionMenuItemIndicatorClass = style({
  position: "absolute",
  left: "0",
  width: vars.space["050"],
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
});

export const actionMenuCheckboxItemClass = recipe({
  base: {
    alignItems: "center",
    background: vars.colors.secondary,
    borderRadius: vars.radii["050"],
    display: "flex",
    flexBasis: "auto",
    flexDirection: "row",
    justifyContent: "flex-start",
    flexWrap: "nowrap",
    marginTop: "1px",
    marginBottom: "1px",
    marginLeft: "1px",
    transition: `background ${vars.transitions.fast} ${vars.transitions.inOut}`,
    width: "calc(100% - 2px)",
    ":hover": {
      backgroundColor: vars.colors.alpha25,
      cursor: "pointer",
    },
    ":focus-visible": {
      outline: "none",
    },
    selectors: {
      "&[data-disabled]": {
        color: vars.colors.onDisabled,
        pointerEvents: "none",
      },
    },
  },
  variants: {
    density: {
      loose: {
        padding: vars.space["100"],
      },
      default: {
        padding: vars.space["075"],
      },
      compact: {
        padding: vars.space["050"],
      },
    },
  },
  defaultVariants: {
    density: "default",
  },
});

globalStyle(
  `${actionMenuCheckboxItemClass.classNames.base}[data-disabled] svg`,
  {
    fill: vars.colors.onDisabled,
  }
);

export const actionMenuRadioItemClass = recipe({
  base: {
    alignItems: "center",
    background: vars.colors.secondary,
    borderRadius: vars.radii["050"],
    display: "flex",
    flexBasis: "auto",
    flexDirection: "row",
    justifyContent: "flex-start",
    flexWrap: "nowrap",
    marginTop: "1px",
    marginBottom: "1px",
    marginLeft: "1px",
    transition: `background ${vars.transitions.fast} ${vars.transitions.inOut}`,
    width: "calc(100% - 2px)",
    ":hover": {
      backgroundColor: vars.colors.alpha25,
      cursor: "pointer",
    },
    ":focus-visible": {
      outline: "none",
    },
    selectors: {
      "&[data-disabled]": {
        color: vars.colors.onDisabled,
        pointerEvents: "none",
      },
    },
  },
  variants: {
    density: {
      loose: {
        padding: vars.space["100"],
      },
      default: {
        padding: vars.space["075"],
      },
      compact: {
        padding: vars.space["050"],
      },
    },
  },
  defaultVariants: {
    density: "default",
  },
});

globalStyle(`${actionMenuRadioItemClass.classNames.base}[data-disabled] svg`, {
  fill: vars.colors.onDisabled,
});

export const actionMenuGroupClass = style({
  padding: `${vars.space["025"]} 0`,
});

export const actionMenuSubTriggerClass = recipe({
  base: {
    alignItems: "center",
    background: vars.colors.secondary,
    borderRadius: vars.radii["050"],
    display: "flex",
    flexBasis: "auto",
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "nowrap",
    marginTop: "1px",
    marginBottom: "1px",
    marginLeft: "1px",
    transition: `background ${vars.transitions.fast} ${vars.transitions.inOut}`,
    width: "calc(100% - 2px)",
    ":hover": {
      backgroundColor: vars.colors.alpha25,
      cursor: "pointer",
    },
    ":focus-visible": {
      outline: "none",
    },
    selectors: {
      "&[data-disabled]": {
        color: vars.colors.onDisabled,
        pointerEvents: "none",
      },
      "&[data-state='open']": {
        backgroundColor: vars.colors.alpha25,
      },
    },
  },
  variants: {
    density: {
      loose: {
        padding: vars.space["100"],
      },
      default: {
        padding: vars.space["075"],
      },
      compact: {
        padding: vars.space["050"],
      },
    },
  },
  defaultVariants: {
    density: "default",
  },
});

globalStyle(`${actionMenuSubTriggerClass.classNames.base}[data-disabled] svg`, {
  fill: vars.colors.onDisabled,
});

export const actionMenuPortalClass = styleVariants({
  hidden: {
    display: "none",
  },
  visible: {
    display: "initial",
  },
});

export type ActionMenuItemVariants = RecipeVariants<typeof actionMenuItemClass>;
export type ActionMenuSubContentVariants =
  keyof typeof actionMenuSubContentClass;
export type ActionMenuIconVariants = RecipeVariants<typeof actionMenuIconClass>;
export type ActionMenuCheckboxItemVariants = RecipeVariants<
  typeof actionMenuCheckboxItemClass
>;
export type ActionMenuRadioItemVariants = RecipeVariants<
  typeof actionMenuRadioItemClass
>;
export type ActionMenuSubTriggerVariants = RecipeVariants<
  typeof actionMenuSubTriggerClass
>;
export type ActionMenuPortalVariants = keyof typeof actionMenuPortalClass;
