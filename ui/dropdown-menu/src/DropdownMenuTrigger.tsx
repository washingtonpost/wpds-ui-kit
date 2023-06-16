import * as React from "react";

// import type * as WPDS from "@washingtonpost/wpds-theme";
import { theme, styled } from "@washingtonpost/wpds-theme";

import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';

import {
  DropdownMenuTriggerProps as RadixDropdownMenuTriggerProps,
} from "@radix-ui/react-dropdown-menu";

// export type DropdownMenuProps = {
//   Root: typeof DropdownMenuRoot;
// };

// export const DropdownMenuTrigger: DropdownMenuProps = {
//   Root: DropdownMenuRoot,
// };

export const StyledTrigger = styled(DropdownMenuPrimitive.Trigger, {
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


export const DropdownMenuTrigger = React.forwardRef<HTMLButtonElement, RadixDropdownMenuTriggerProps>((props: RadixDropdownMenuTriggerProps, ref) => {
  return <StyledTrigger {...props} ref={ref} />;
});

// DropdownMenu,
// DropdownMenuTrigger,
// DropdownMenuPortal,
// DropdownMenuContent,
// DropdownMenuGroup,
// DropdownMenuLabel,
// DropdownMenuItem,
// DropdownMenuCheckboxItem,
// DropdownMenuRadioGroup,
// DropdownMenuRadioItem,
// DropdownMenuItemIndicator,
// DropdownMenuSeparator,
// DropdownMenuArrow,
// DropdownMenuSub,
// DropdownMenuSubTrigger,
// DropdownMenuSubContent,