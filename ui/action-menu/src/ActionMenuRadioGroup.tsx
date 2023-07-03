import * as React from "react";

import { styled } from "@washingtonpost/wpds-theme";

import * as ActionMenuPrimitive from '@radix-ui/react-dropdown-menu';

import {
  DropdownMenuRadioGroupProps as RadixDropdownMenuRadioGroupProps,
} from "@radix-ui/react-dropdown-menu";

export const StyledRadioGroup = styled(ActionMenuPrimitive.RadioGroup, {});

export const ActionMenuRadioGroup = React.forwardRef<HTMLDivElement, RadixDropdownMenuRadioGroupProps>(({ children, ...props }: RadixDropdownMenuRadioGroupProps, ref) => {
  return (
    <StyledRadioGroup {...props} ref={ref} >
      {children}
    </StyledRadioGroup>
  );
});