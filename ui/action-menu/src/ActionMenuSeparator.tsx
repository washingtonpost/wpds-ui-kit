import * as React from "react";

import { styled } from "@washingtonpost/wpds-theme";

import * as ActionMenuPrimitive from '@radix-ui/react-dropdown-menu';

import {
  DropdownMenuSeparatorProps as RadixDropdownMenuSeparatorProps,
} from "@radix-ui/react-dropdown-menu";

export const StyledSeparator = styled(ActionMenuPrimitive.Separator, {});

export const ActionMenuSeparator = React.forwardRef<HTMLDivElement, RadixDropdownMenuSeparatorProps>(({ children, ...props }: RadixDropdownMenuSeparatorProps, ref) => {
  return (
    <StyledSeparator {...props} ref={ref} >
      {children}
    </StyledSeparator>
  );
});