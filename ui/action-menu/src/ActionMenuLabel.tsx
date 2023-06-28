import * as React from "react";

import { styled } from "@washingtonpost/wpds-theme";

import * as ActionMenuPrimitive from '@radix-ui/react-dropdown-menu';

import {
  DropdownMenuLabelProps as RadixDropdownMenuLabelProps,
} from "@radix-ui/react-dropdown-menu";

export const StyledLabel = styled(ActionMenuPrimitive.Label, {});

export const ActionMenuLabel = React.forwardRef<HTMLDivElement, RadixDropdownMenuLabelProps>(({ children, ...props }: RadixDropdownMenuLabelProps, ref) => {
  return (
    <StyledLabel {...props} ref={ref} >
      {children}
    </StyledLabel>
  );
});