import * as React from "react";

import WPDS, { styled } from "@washingtonpost/wpds-theme";

import * as ActionMenuPrimitive from '@radix-ui/react-dropdown-menu';

import {
  DropdownMenuItemIndicatorProps as RadixDropdownMenuItemIndicatorProps,
} from "@radix-ui/react-dropdown-menu";

export const StyledItemIndicator = styled(ActionMenuPrimitive.ItemIndicator, {});

export type ActionMenuItemIndicatorProps = {
  /** Any React node may be used as a child to allow for formatting */
  children?: React.ReactNode;
  /** Override CSS */
  css?: WPDS.CSS;
} & RadixDropdownMenuItemIndicatorProps;

export const ActionMenuItemIndicator = React.forwardRef<HTMLDivElement, ActionMenuItemIndicatorProps>(({ children, ...props }: ActionMenuItemIndicatorProps, ref) => {
  return (
    <StyledItemIndicator {...props} ref={ref} >
      {children}
    </StyledItemIndicator>
  );
});