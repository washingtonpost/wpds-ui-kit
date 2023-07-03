import * as React from "react";

import { styled } from "@washingtonpost/wpds-theme";

import * as ActionMenuPrimitive from '@radix-ui/react-dropdown-menu';

import {
  DropdownMenuItemIndicatorProps as RadixDropdownMenuItemIndicatorProps,
} from "@radix-ui/react-dropdown-menu";

export const StyledItemIndicator = styled(ActionMenuPrimitive.ItemIndicator, {});

export const ActionMenuItemIndicator = React.forwardRef<HTMLDivElement, RadixDropdownMenuItemIndicatorProps>(({ children, ...props }: RadixDropdownMenuItemIndicatorProps, ref) => {
  return (
    <StyledItemIndicator {...props} ref={ref} >
      {children}
    </StyledItemIndicator>
  );
});