import * as React from "react";

// import type * as WPDS from "@washingtonpost/wpds-theme";
import { theme, styled } from "@washingtonpost/wpds-theme";

import * as ActionMenuPrimitive from '@radix-ui/react-dropdown-menu';

import {
  DropdownMenuTriggerProps as RadixDropdownMenuTriggerProps,
} from "@radix-ui/react-dropdown-menu";

// export type ActionMenuProps = {
//   Root: typeof ActionMenuRoot;
// };

// export const ActionMenuTrigger: DropdownMenuProps = {
//   Root: ActionMenuRoot,
// };

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
  padding: theme.space["050"],
});


export const ActionMenuTrigger = React.forwardRef<HTMLButtonElement, RadixDropdownMenuTriggerProps>((props: RadixDropdownMenuTriggerProps, ref) => {
  return <StyledTrigger {...props} ref={ref} />;
});

// ActionMenu,
// ActionMenuTrigger,
// ActionMenuPortal,
// ActionMenuContent,
// ActionMenuGroup,
// ActionMenuLabel,
// ActionMenuItem,
// ActionMenuCheckboxItem,
// ActionMenuRadioGroup,
// ActionMenuRadioItem,
// ActionMenuItemIndicator,
// ActionMenuSeparator,
// ActionMenuArrow,
// ActionMenuSub,
// ActionMenuSubTrigger,
// ActionMenuSubContent,