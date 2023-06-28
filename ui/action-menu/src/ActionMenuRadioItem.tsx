import * as React from "react";

import { styled } from "@washingtonpost/wpds-theme";

import * as ActionMenuPrimitive from '@radix-ui/react-dropdown-menu';

import {
  DropdownMenuRadioItemProps as RadixDropdownMenuRadioItemProps,
} from "@radix-ui/react-dropdown-menu";

export const StyledRadioItem = styled(ActionMenuPrimitive.RadioItem, {});

export const ActionMenuRadioItem = React.forwardRef<HTMLDivElement, RadixDropdownMenuRadioItemProps>(({ children, ...props }: RadixDropdownMenuRadioItemProps, ref) => {
  return (
    <StyledRadioItem {...props} ref={ref} >
      {children}
    </StyledRadioItem>
  );
});