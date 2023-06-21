import * as React from "react";

import { theme, styled } from "@washingtonpost/wpds-theme";

import * as ActionMenuPrimitive from '@radix-ui/react-dropdown-menu';

import {
  ActionMenuContentProps as RadixDropdownMenuContentProps,
} from "@radix-ui/react-dropdown-menu";

export const StyledContent = styled(ActionMenuPrimitive.Content, {
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

const StyledArrow = styled(ActionMenuPrimitive.Arrow, {
  fill: theme.colors.secondary,
});

export const ActionMenuContent = React.forwardRef<HTMLDivElement, RadixDropdownMenuContentProps>(({children, ...props}: RadixDropdownMenuContentProps, ref) => {
  return <ActionMenuPrimitive.Portal>
    <StyledContent {...props} ref={ref}>
          <StyledArrow
            stroke={theme.colors.subtle.value}
            strokeWidth="2"
            strokeDasharray="0 30 28.284"
          />
          {children}
      </StyledContent>
    </ActionMenuPrimitive.Portal>
});