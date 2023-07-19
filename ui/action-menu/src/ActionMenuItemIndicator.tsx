import * as React from "react";

import WPDS, { styled, theme } from "@washingtonpost/wpds-theme";

import * as ActionMenuPrimitive from '@radix-ui/react-dropdown-menu';

import {
  DropdownMenuItemIndicatorProps as RadixDropdownMenuItemIndicatorProps,
} from "@radix-ui/react-dropdown-menu";

const NAME = "ActionMenuItemIndicator";

export const StyledItemIndicator = styled(ActionMenuPrimitive.ItemIndicator, {
  position: "absolute",
  top: 0,
  height: "100%",
  width: theme.sizes["100"],
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center"
});

export type ActionMenuItemIndicatorProps = {
  /** Any React node may be used as a child to allow for formatting */
  children?: React.ReactNode;
  /** Override CSS */
  css?: WPDS.CSS;
} & RadixDropdownMenuItemIndicatorProps;

export const ActionMenuItemIndicator = React.forwardRef<HTMLDivElement, ActionMenuItemIndicatorProps>(({ children, ...props }: ActionMenuItemIndicatorProps, ref) => {
  return (
    <StyledItemIndicator {...props} ref={ref} className="action-menu-item-indicator">
      {children}
    </StyledItemIndicator>
  );
});

ActionMenuItemIndicator.displayName = NAME;
