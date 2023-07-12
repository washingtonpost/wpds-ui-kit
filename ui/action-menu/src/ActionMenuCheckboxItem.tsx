import * as React from "react";

import WPDS, { styled, theme } from "@washingtonpost/wpds-theme";

import * as ActionMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { Divider } from "@washingtonpost/wpds-divider";

import {
  DropdownMenuCheckboxItemProps as RadixDropdownMenuCheckboxItemProps,
} from "@radix-ui/react-dropdown-menu";

import { ItemStyles } from "./ActionMenuItem"

export const StyledCheckboxItem = styled(ActionMenuPrimitive.CheckboxItem, {
  ...ItemStyles,
  position: "relative",
  paddingLeft: theme.space["125"]
});

export type ActionMenuCheckboxItemProps = {
  /** Any React node may be used as a child to allow for formatting */
  children?: React.ReactNode;
  /** Override CSS */
  css?: WPDS.CSS;
} & RadixDropdownMenuCheckboxItemProps;

export const ActionMenuCheckboxItem = React.forwardRef<HTMLDivElement, ActionMenuCheckboxItemProps>(({ children, ...props }: ActionMenuCheckboxItemProps, ref) => {
  return (
    <>
      <StyledCheckboxItem {...props} ref={ref} className="action-menu-item">
        {children}
      </StyledCheckboxItem>
      <Divider />
    </>
  );
});