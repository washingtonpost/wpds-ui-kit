import * as React from "react";

import { styled, theme } from "@washingtonpost/wpds-theme";

import * as ActionMenuPrimitive from '@radix-ui/react-dropdown-menu';

import {
  DropdownMenuLabelProps as RadixDropdownMenuLabelProps,
} from "@radix-ui/react-dropdown-menu";

export const StyledLabel = styled(ActionMenuPrimitive.Label, {
  fontFamily: theme.fonts.meta, // font family example
  fontSize: theme.fontSizes["075"],
  color: theme.colors.accessible,
  marginBlock: 0,
  fontWeight: "bold",
  paddingLeft: theme.space["050"]
});

export const ActionMenuLabel = React.forwardRef<HTMLDivElement, RadixDropdownMenuLabelProps>(({ children, ...props }: RadixDropdownMenuLabelProps, ref) => {
  return (
    <StyledLabel {...props} ref={ref} >
      {children}
    </StyledLabel>
  );
});