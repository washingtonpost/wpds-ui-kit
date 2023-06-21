import * as React from "react";

import { theme, styled } from "@washingtonpost/wpds-theme";

import * as ActionMenuPrimitive from '@radix-ui/react-dropdown-menu';

import {
  DropdownMenuSubContentProps as RadixDropdownMenuContentProps,
} from "@radix-ui/react-dropdown-menu";

export const StyledSubContent = styled(ActionMenuPrimitive.Content, {
    background: theme.colors.secondary,
    border: `solid 1px ${theme.colors.subtle}`,
    borderRadius: theme.radii["012"],
    boxShadow: theme.shadows["200"],
    color: theme.colors.primary,
    minWidth: "150px",
    maxHeight: "inherit",
    overflow: "auto",
    padding: theme.space["050"],
});

export const ActionMenuSubContent = React.forwardRef<HTMLDivElement, RadixDropdownMenuContentProps>(({children, ...props}: RadixDropdownMenuContentProps, ref) => {
  return <ActionMenuPrimitive.Portal>
    <StyledSubContent {...props} ref={ref} side="right" align="start">
          {children}
      </StyledSubContent>
    </ActionMenuPrimitive.Portal>
});