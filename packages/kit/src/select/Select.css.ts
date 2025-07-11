import { style, createVar } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { vars } from "../theme/contracts.css";
import { focusableStyles } from "../theme/accessibility.css";

// Variables for Select
export const selectContentWidth = createVar();

// SelectTrigger styles
export const selectTrigger = recipe({
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

      display: "grid",
      gridTemplateAreas: "'label icon' 'value icon'",
      gridTemplateColumns: "1fr auto",
      gridTemplateRows: "0px auto",
      width: "100%",
      cursor: "pointer",

      selectors: {
        "&:focus": {
          borderColor: vars.colors.signal,
          outline: "none",
        },
        "&:disabled": {
          backgroundColor: vars.colors.disabled,
          borderColor: vars.colors.disabled,
          color: vars.colors.onDisabled,
          cursor: "not-allowed",
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
    success: {
      true: {
        borderColor: vars.colors.success,
      },
    },
    error: {
      true: {
        borderColor: vars.colors.error,
      },
    },
  },

  defaultVariants: {
    isInvalid: false,
    isDisabled: false,
  },
});

// SelectValue styles
export const selectValue = style({
  gridArea: "value",
  paddingBlockStart: vars.space["125"],
  paddingBlockEnd: vars.space["050"],
  paddingInline: vars.space["050"],
  textOverflow: "ellipsis",
  overflow: "hidden",
  whiteSpace: "nowrap",
  textAlign: "left",
});

// SelectLabel styles
export const selectLabel = style({
  gridArea: "label",
  fontSize: vars.fontSizes["075"],
  lineHeight: vars.lineHeights["100"],
  color: vars.colors.onSurfaceVariant,
  paddingInline: vars.space["050"],
  paddingTop: vars.space["050"],
  pointerEvents: "none",
  transition: `all ${vars.transitions.fast}`,
  transformOrigin: "left top",

  selectors: {
    "[data-placeholder] &": {
      fontSize: vars.fontSizes["100"],
      lineHeight: vars.lineHeights["125"],
      paddingTop: vars.space["125"],
    },
  },
});

// Icon wrapper and animation
export const iconWrapper = recipe({
  base: {
    all: "unset",
    borderRadius: vars.radii["025"],
    marginInlineEnd: vars.space["050"],
    margin: "auto",
    cursor: "pointer",
    paddingTop: vars.space["050"],
    paddingBottom: vars.space["050"],
    paddingLeft: vars.space["050"],
    paddingRight: vars.space["050"],
    fontSize: "0",
    lineHeight: "0",
    gap: "0",
    maxWidth: "fit-content",
    gridArea: "icon",
  },

  variants: {
    isDisabled: {
      true: {
        cursor: "not-allowed",
      },
    },
  },
});

export const animatedIcon = style({
  transition: `transform ${vars.transitions.normal} ${vars.transitions.inOut}`,

  "@media": {
    "(prefers-reduced-motion: reduce)": {
      transition: "none",
    },
  },

  selectors: {
    '[aria-expanded="true"] &': {
      transform: "rotate(180deg)",
    },
  },
});

// SelectContent styles
export const selectContent = style({
  backgroundColor: vars.colors.surface,
  borderRadius: vars.radii["050"],
  border: `1px solid ${vars.colors.outline}`,
  boxShadow: vars.shadows["200"],
  overflow: "hidden",
  zIndex: vars.zIndices.page,

  vars: {
    [selectContentWidth]: "100%",
  },

  minWidth: selectContentWidth,
  maxHeight: "200px",
});

export const selectViewport = style({
  padding: vars.space["025"],
});

// SelectItem styles
export const selectItem = recipe({
  base: [
    focusableStyles,
    {
      fontSize: vars.fontSizes["100"],
      lineHeight: vars.lineHeights["125"],
      borderRadius: vars.radii["025"],
      display: "flex",
      alignItems: "center",
      paddingTop: vars.space["050"],
      paddingBottom: vars.space["050"],
      paddingLeft: vars.space["050"],
      paddingRight: vars.space["050"],
      position: "relative",
      userSelect: "none",
      cursor: "pointer",
      color: vars.colors.onSurface,

      selectors: {
        "&[data-highlighted]": {
          backgroundColor: vars.colors.gray20,
          color: vars.colors.onSurface,
        },
        "&[data-disabled]": {
          color: vars.colors.onDisabled,
          pointerEvents: "none",
        },
      },
    },
  ],
});

export const selectItemText = style({
  flexGrow: 1,
});

export const selectItemIndicator = style({
  position: "absolute",
  right: vars.space["050"],
  width: vars.sizes["100"],
  height: vars.sizes["100"],
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
});

// SelectGroup styles
export const selectGroup = style({
  // Styling for select groups if needed
});

export const selectGroupLabel = style({
  paddingTop: vars.space["050"],
  paddingBottom: vars.space["025"],
  paddingLeft: vars.space["050"],
  paddingRight: vars.space["050"],
  fontSize: vars.fontSizes["075"],
  lineHeight: vars.lineHeights["100"],
  color: vars.colors.onSurfaceVariant,
  fontWeight: vars.fontWeights.bold,
});

// Separator
export const selectSeparator = style({
  height: "1px",
  backgroundColor: vars.colors.outline,
  marginTop: vars.space["025"],
  marginBottom: vars.space["025"],
});

// SubText wrapper
export const subTextWrapper = style({
  width: "100%",
});
