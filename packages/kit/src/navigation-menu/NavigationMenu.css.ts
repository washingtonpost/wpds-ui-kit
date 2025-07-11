import { style } from "@vanilla-extract/css";
import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { vars } from "../theme/contracts.css";

export const navigationMenuRootClass = style({});

export const navigationMenuListClass = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.space["025"],
  padding: vars.space["025"],
});

export const navigationMenuItemClass = style({
  listStyle: "none",
});

export const navigationMenuLinkClass = recipe({
  base: {
    display: "block",
    padding: `${vars.space["050"]} ${vars.space["075"]}`,
    borderRadius: vars.radii["050"],
    color: vars.colors.primary,
    textDecoration: "none",
    fontSize: vars.fontSizes["100"],
    fontWeight: vars.fontWeights.regular,
    lineHeight: vars.sizes["125"],
    transition: `color ${vars.transitions.fast} ${vars.transitions.inOut}`,
    ":hover": {
      color: vars.colors.accessible,
    },
    ":focus": {
      outline: `2px solid ${vars.colors.signal}`,
      outlineOffset: "2px",
    },
  },
  variants: {
    active: {
      true: {
        fontWeight: vars.fontWeights.bold,
      },
      false: {},
    },
    disabled: {
      true: {
        color: vars.colors.onDisabled,
        pointerEvents: "none",
      },
      false: {},
    },
  },
  defaultVariants: {
    active: false,
    disabled: false,
  },
});

export const navigationMenuTriggerClass = recipe({
  base: {
    all: "unset",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: `${vars.space["050"]} ${vars.space["075"]}`,
    borderRadius: vars.radii["050"],
    color: vars.colors.primary,
    fontSize: vars.fontSizes["100"],
    fontWeight: vars.fontWeights.regular,
    lineHeight: vars.sizes["125"],
    cursor: "pointer",
    transition: `color ${vars.transitions.fast} ${vars.transitions.inOut}`,
    ":hover": {
      color: vars.colors.accessible,
    },
    ":focus": {
      outline: `2px solid ${vars.colors.signal}`,
      outlineOffset: "2px",
    },
    selectors: {
      "&[data-state='open']": {
        color: vars.colors.accessible,
      },
    },
  },
  variants: {
    disabled: {
      true: {
        color: vars.colors.onDisabled,
        pointerEvents: "none",
      },
      false: {},
    },
  },
  defaultVariants: {
    disabled: false,
  },
});

export const navigationMenuContentClass = style({
  position: "absolute",
  background: vars.colors.secondary,
  border: `1px solid ${vars.colors.outline}`,
  borderRadius: vars.radii["050"],
  boxShadow: vars.shadows["300"],
  padding: vars.space["050"],
  zIndex: 1000,
  minWidth: "200px",
});

export const navigationMenuSubClass = style({});

export type NavigationMenuLinkVariants = RecipeVariants<typeof navigationMenuLinkClass>;
export type NavigationMenuTriggerVariants = RecipeVariants<typeof navigationMenuTriggerClass>;
