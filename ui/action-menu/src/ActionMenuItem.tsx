import * as React from "react";

import { theme, styled } from "@washingtonpost/wpds-theme";

import * as ActionMenuPrimitive from '@radix-ui/react-dropdown-menu';

import { DropdownMenuItemProps as RadixDropdownMenuItemProps } from "@radix-ui/react-dropdown-menu";

// import { Icon } from "@washingtonpost/wpds-icon";
import { Divider } from "@washingtonpost/wpds-divider";

export const ItemStyles = {
  width: "100%",
  backgroundColor: theme.colors.secondary,
  display: "flex",
  flexDirection: "row",
  flexBasis: "auto",
  justifyContent: "flex-start",
  alignItems: "center",
  '&.left-icon': {
    width: '25%',
    height: "auto",
  },
  padding: theme.sizes["075"],
  transition: `background ${theme.transitions.fast} ${theme.transitions.inOut}`,

  "&:hover": {
    backgroundColor: theme.colors.alpha25,
    cursor: "pointer",
  },

  "&[data-disabled]": {
    color: theme.colors.disabled,
    pointerEvents: "none",
  },

  "&[data-disabled] svg": {
    fill: theme.colors.disabled,
  },

}

const StyledItem = styled(ActionMenuPrimitive.Item, ItemStyles);

export type ActionMenuItemProps = {
  /** Any React node may be used as a child to allow for formatting */
  children?: React.ReactNode;
} & RadixDropdownMenuItemProps;


export const ActionMenuItem = React.forwardRef<HTMLDivElement, ActionMenuItemProps>(({ children, ...props }: ActionMenuItemProps, ref) => {
  return <div>
    <StyledItem {...props} ref={ref} >
      {children}
    </StyledItem>
    <Divider />
  </div>
});
