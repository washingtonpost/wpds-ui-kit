import * as React from "react";

import { theme, styled } from "@washingtonpost/wpds-theme";

import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';

import {
  DropdownMenuContentProps as RadixDropdownMenuContentProps,
} from "@radix-ui/react-dropdown-menu";

export const StyledContent = styled(DropdownMenuPrimitive.Content, {
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


export const DropdownMenuContent = React.forwardRef<HTMLDivElement, RadixDropdownMenuContentProps>((props: RadixDropdownMenuContentProps, ref) => {
  return <StyledContent {...props} ref={ref} />;
});