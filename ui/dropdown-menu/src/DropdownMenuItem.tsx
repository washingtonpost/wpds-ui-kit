import * as React from "react";

import { theme, styled } from "@washingtonpost/wpds-theme";

import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';

import {
  DropdownMenuItemProps as RadixDropdownMenuItemProps,
} from "@radix-ui/react-dropdown-menu";

export const StyledItem = styled(DropdownMenuPrimitive.Item, {
});


export const DropdownMenuItem = React.forwardRef<HTMLDivElement, RadixDropdownMenuItemProps>((props: RadixDropdownMenuItemProps, ref) => {
  return <StyledItem {...props} ref={ref} />;
});