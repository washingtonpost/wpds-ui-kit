import * as React from "react";

import WPDS, { styled } from "@washingtonpost/wpds-theme";

import * as ActionMenuPrimitive from '@radix-ui/react-dropdown-menu';

import {
  DropdownMenuRadioItemProps as RadixDropdownMenuRadioItemProps,
} from "@radix-ui/react-dropdown-menu";

export const StyledRadioItem = styled(ActionMenuPrimitive.RadioItem, {});

export type ActionMenuRadioItemProps = {
  /** Any React node may be used as a child to allow for formatting */
  children?: React.ReactNode;
  /** Override CSS */
  css?: WPDS.CSS;
} & RadixDropdownMenuRadioItemProps;

export const ActionMenuRadioItem = React.forwardRef<HTMLDivElement, ActionMenuRadioItemProps>(({ children, ...props }: ActionMenuRadioItemProps, ref) => {
  return (
    <StyledRadioItem {...props} ref={ref} >
      {children}
    </StyledRadioItem>
  );
});