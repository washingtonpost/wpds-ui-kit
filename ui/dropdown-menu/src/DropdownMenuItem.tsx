import * as React from "react";

import WPDS, { theme, styled } from "@washingtonpost/wpds-theme";

import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';

import { DropdownMenuProps as RadixDropdownMenuProps } from "@radix-ui/react-dropdown-menu";

import { DropdownMenuItemProps as RadixDropdownMenuItemProps } from "@radix-ui/react-dropdown-menu";

import { Icon } from "@washingtonpost/wpds-icon";
import { Divider } from "@washingtonpost/wpds-divider";

export const StyledItem = styled(DropdownMenuPrimitive.Item, {
  display: "flex",
  flexDirection: "row",
  flexBasis: "auto",
  justifyContent: "flex-start",
  alignItems: "center",
  '&.left-icon': {
    width: '25%',
    height: "auto",
  },
  margin: theme.sizes["050"]
});

const LeftIcon = styled(Icon, {
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

const RightIcon = styled(Icon, {
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
  marginLeft: "auto",
});

const LeftIconPlaceholder = styled("div", {
  width: theme.sizes["100"],
  marginRight: theme.sizes["050"],
});

const RightIconPlaceholder = styled("div", {
  width: theme.sizes["100"],
  marginRight: theme.sizes["050"],
});


export type DropdownMenuItemProps = {
  /** Any React node may be used as a child to allow for formatting */
  children?: React.ReactNode;
  leftIcon?: Icon;
  rightIcon?: Icon;
} & RadixDropdownMenuProps;


export const DropdownMenuItem = React.forwardRef<HTMLDivElement, DropdownMenuItemProps>(({children, leftIcon, rightIcon, ...props}: DropdownMenuItemProps, ref) => {
  return <div>
  <StyledItem {...props} ref={ref} >
    {leftIcon ? <LeftIcon>{leftIcon}</LeftIcon> : <LeftIconPlaceholder />}
    {children}
    {rightIcon ? <RightIcon>{rightIcon}</RightIcon> : <RightIconPlaceholder />}
  </StyledItem>
  <Divider />
  </div>
});

// TODO: left and right icon as a prop i.e. <StyledItem leftIcon={<Icon/>} rightIcon={Icon/>}