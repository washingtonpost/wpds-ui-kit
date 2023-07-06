import * as React from "react";

import WPDS, { styled, theme } from "@washingtonpost/wpds-theme";

import * as ActionMenuPrimitive from '@radix-ui/react-dropdown-menu';

import {
  DropdownMenuLabelProps as RadixDropdownMenuLabelProps,
} from "@radix-ui/react-dropdown-menu";

export const StyledLabel = styled(ActionMenuPrimitive.Label, {
  fontFamily: theme.fonts.meta, // font family example
  fontSize: theme.fontSizes["075"],
  color: theme.colors.accessible,
  fontWeight: "bold",
  paddingLeft: theme.space["100"]
});

export type ActionMenuLabelProps = {
  /** Any React node may be used as a child to allow for formatting */
  children?: React.ReactNode;
  /** Override CSS */
  css?: WPDS.CSS;
} & RadixDropdownMenuLabelProps;

export const ActionMenuLabel = React.forwardRef<HTMLDivElement, ActionMenuLabelProps>(({ children, ...props }: ActionMenuLabelProps, ref) => {
  return (
    <StyledLabel {...props} ref={ref} >
      {children}
    </StyledLabel>
  );
});