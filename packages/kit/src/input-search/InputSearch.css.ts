import {
  style,
  styleVariants,
  keyframes,
  globalStyle,
} from "@vanilla-extract/css";
import { vars } from "../theme/contracts.css";

// Base styles for InputSearchRoot
export const inputSearchRootBase = style({
  width: "100%",
  position: "relative",
});

export const inputSearchRoot = styleVariants({
  portal: [inputSearchRootBase],
  "portal-false": [
    inputSearchRootBase,
    {
      selectors: {
        "&:focus-within::after": {
          content: '""',
          borderRadius: vars.radii["012"],
          border: `1px solid ${vars.colors.signal}`,
          inset: 0,
          position: "absolute",
          pointerEvents: "none",
          zIndex: 1,
        },
      },
    },
  ],
});

// Styles for InputSearchPopover (StyledContent)
export const inputSearchPopoverContent = style({
  backgroundColor: vars.colors.background,
  borderTop: `1px solid ${vars.colors.gray300}`,
  color: vars.colors.primary,
  marginTop: "-1px",
  overflow: "hidden",
});

// Styles for InputSearchList
export const inputSearchList = style({
  marginBlock: 0,
  maxHeight: "300px",
  overflowY: "auto",
  paddingInlineStart: 0,
  position: "relative",
  listStyleType: "none",
});

// Base styles for InputSearchListItem
export const inputSearchListItemBase = style({
  color: vars.colors.primary,
  fontFamily: vars.fonts.meta,
  fontSize: vars.fontSizes["100"],
  fontWeight: vars.fontWeights.light,
  paddingBlock: vars.space["050"],
  paddingInline: vars.space["075"],
});

// Global style for mark elements inside list items
globalStyle(`${inputSearchListItemBase} > span > mark`, {
  backgroundColor: "transparent",
  fontWeight: vars.fontWeights.bold,
});

export const inputSearchListItem = styleVariants({
  default: [inputSearchListItemBase],
  selected: [
    inputSearchListItemBase,
    {
      backgroundColor: vars.colors.gray400,
    },
  ],
  focused: [
    inputSearchListItemBase,
    {
      backgroundColor: vars.colors.gray400,
    },
  ],
  disabled: [
    inputSearchListItemBase,
    {
      color: vars.colors.onDisabled,
    },
  ],
  "selected-focused": [
    inputSearchListItemBase,
    {
      backgroundColor: vars.colors.gray400,
    },
  ],
  "selected-disabled": [
    inputSearchListItemBase,
    {
      backgroundColor: vars.colors.gray400,
      color: vars.colors.onDisabled,
    },
  ],
  "focused-disabled": [
    inputSearchListItemBase,
    {
      backgroundColor: vars.colors.gray400,
      color: vars.colors.onDisabled,
    },
  ],
  "selected-focused-disabled": [
    inputSearchListItemBase,
    {
      backgroundColor: vars.colors.gray400,
      color: vars.colors.onDisabled,
    },
  ],
});

// Styles for InputSearchOtherState
export const inputSearchStateContainer = style({
  display: "flex",
  height: "200px",
  width: "100%",
  justifyContent: "center",
  alignItems: "center",
});

export const inputSearchContentContainer = style({
  height: "120px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
});

export const inputSearchIconContainer = style({
  background: vars.colors.alpha25,
  height: vars.sizes[350],
  width: vars.sizes[350],
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: vars.radii["050"],
});

// Styles for InputSearchEmptyState
export const inputSearchEmptyStateText = style({
  color: vars.colors.gray80,
  marginTop: vars.space["100"],
});

// Styles for InputSearchLoadingState
export const rotate = keyframes({
  "0%": { transform: "rotate(0deg)" },
  "100%": { transform: "rotate(359deg)" },
});

export const inputSearchLoadingIcon = style({
  animation: `${rotate} linear 1.25s infinite`,
});

// Styles for InputSearchListHeading
export const inputSearchListHeadingBase = style({
  color: vars.colors.gray80,
  fontFamily: vars.fonts.meta,
  fontSize: vars.fontSizes["087"],
  fontWeight: vars.fontWeights.bold,
  paddingBlock: vars.space["050"],
  paddingInline: vars.space["075"],
  textTransform: "uppercase",
});

export const inputSearchListHeading = styleVariants({
  default: [inputSearchListHeadingBase],
  "with-title": [
    inputSearchListHeadingBase,
    { paddingBlock: vars.space["075"] },
  ],
});
