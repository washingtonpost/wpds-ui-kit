import * as React from "react";

import { theme, styled } from "@washingtonpost/wpds-theme";

import * as ActionMenuPrimitive from '@radix-ui/react-dropdown-menu';

import { DropdownMenuItemProps as RadixDropdownMenuItemProps } from "@radix-ui/react-dropdown-menu";

import { Icon } from "@washingtonpost/wpds-icon";
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

export const LeftIcon = styled(Icon, {
  color: theme.colors.accessible,
  fill: theme.colors.primary,
  display: "flex",
  variants: {
    isDisabled: {
      true: {
        color: "inherit",
      },
    },
  },
  marginRight: theme.sizes["050"]
});

export const RightIcon = styled(Icon, {
  color: theme.colors.accessible,
  fill: theme.colors.primary,
  display: "flex",
  variants: {
    isDisabled: {
      true: {
        color: "inherit",
      },
    },
    hidden: {
      true: {
        display: "none",
      },
      false: {
        display: "flex"
      }
    }
  },
  marginLeft: "auto",
});

export const LeftIconPlaceholder = styled("div", {
  width: theme.sizes["100"],
  marginRight: theme.sizes["050"],
});

const RightIconPlaceholder = styled("div", {
  width: theme.sizes["100"],
  marginRight: theme.sizes["050"],
});

export const ItemContent = styled("div", {
  width: "fit-content",
  marginRight: theme.sizes["050"],
});


export type ActionMenuItemProps = {
  /** Any React node may be used as a child to allow for formatting */
  children?: React.ReactNode;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
} & RadixDropdownMenuItemProps;


export const ActionMenuItem = React.forwardRef<HTMLDivElement, ActionMenuItemProps>(({children, leftIcon, rightIcon, ...props}: ActionMenuItemProps, ref) => {
  return <div>
  <StyledItem {...props} ref={ref} >
    {leftIcon ? <LeftIcon label="">{leftIcon}</LeftIcon> : <LeftIconPlaceholder />}
    <ItemContent>
      {children}
    </ItemContent>
    {rightIcon ? <RightIcon label="">{rightIcon}</RightIcon> : <RightIconPlaceholder />}
  </StyledItem>
  <Divider />
  </div>
});
