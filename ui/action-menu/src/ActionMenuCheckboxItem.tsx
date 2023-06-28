import * as React from "react";

import { styled } from "@washingtonpost/wpds-theme";

import * as ActionMenuPrimitive from '@radix-ui/react-dropdown-menu';

import {
  DropdownMenuCheckboxItemProps as RadixDropdownMenuCheckboxItemProps,
} from "@radix-ui/react-dropdown-menu";

export const StyledCheckboxItem = styled(ActionMenuPrimitive.CheckboxItem, {});

export const ActionMenuCheckboxItem = React.forwardRef<HTMLDivElement, RadixDropdownMenuCheckboxItemProps>(({ children, ...props }: RadixDropdownMenuCheckboxItemProps, ref) => {
  return (
    <StyledCheckboxItem {...props} ref={ref} >
      {children}
    </StyledCheckboxItem>
  );
});