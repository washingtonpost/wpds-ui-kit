import * as React from "react";

// import type * as WPDS from "@washingtonpost/wpds-theme";
import WPDS, { theme, styled } from "@washingtonpost/wpds-theme";

import * as ActionMenuPrimitive from '@radix-ui/react-dropdown-menu';

import {
  DropdownMenuTriggerProps as RadixDropdownMenuTriggerProps,
} from "@radix-ui/react-dropdown-menu";

const NAME = "ActionMenuTrigger";

export const StyledTrigger = styled(ActionMenuPrimitive.Trigger, {
  appearance: "none",
  background: "transparent",
  border: "none",
  color: theme.colors.primary,
  cursor: "pointer",
  display: "inline-flex",
  alignItems: "center",
  gap: theme.space["025"],
  fontFamily: theme.fonts.meta,
  fontSize: theme.fontSizes["100"],
  lineHeight: theme.lineHeights.meta,
  margin: "auto",
});

export type ActionMenuTriggerProps = {
  /** Any React node may be used as a child to allow for formatting */
  children?: React.ReactNode;
  /** Override CSS */
  css?: WPDS.CSS;
} & RadixDropdownMenuTriggerProps;

export const ActionMenuTrigger = React.forwardRef<HTMLButtonElement, ActionMenuTriggerProps>((props: ActionMenuTriggerProps, ref) => {
  return <StyledTrigger {...props} ref={ref} />;
});

ActionMenuTrigger.displayName = NAME;
