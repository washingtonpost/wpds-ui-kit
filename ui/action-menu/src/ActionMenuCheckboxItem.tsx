import * as React from "react";

import WPDS, { styled } from "@washingtonpost/wpds-theme";

import * as ActionMenuPrimitive from '@radix-ui/react-dropdown-menu';

import {
  DropdownMenuCheckboxItemProps as RadixDropdownMenuCheckboxItemProps,
} from "@radix-ui/react-dropdown-menu";

export const StyledCheckboxItem = styled(ActionMenuPrimitive.CheckboxItem, {});

export type ActionMenuCheckboxItemProps = {
  /** Any React node may be used as a child to allow for formatting */
  children?: React.ReactNode;
  /** Override CSS */
  css?: WPDS.CSS;
} & RadixDropdownMenuCheckboxItemProps;

export const ActionMenuCheckboxItem = React.forwardRef<HTMLDivElement, ActionMenuCheckboxItemProps>(({ children, ...props }: ActionMenuCheckboxItemProps, ref) => {
  return (
    <StyledCheckboxItem {...props} ref={ref} >
      {children}
    </StyledCheckboxItem>
  );
});