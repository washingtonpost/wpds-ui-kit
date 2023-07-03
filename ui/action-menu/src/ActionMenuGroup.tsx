import * as React from "react";

import { styled } from "@washingtonpost/wpds-theme";

import * as ActionMenuPrimitive from '@radix-ui/react-dropdown-menu';

import {
  DropdownMenuGroupProps as RadixDropdownMenuGroupProps,
} from "@radix-ui/react-dropdown-menu";

export const StyledGroup = styled(ActionMenuPrimitive.Group, {});

export const ActionMenuGroup = React.forwardRef<HTMLDivElement, RadixDropdownMenuGroupProps>(({ children, ...props }: RadixDropdownMenuGroupProps, ref) => {
  return (
    <StyledGroup {...props} ref={ref} >
      {children}
    </StyledGroup>
  );
});