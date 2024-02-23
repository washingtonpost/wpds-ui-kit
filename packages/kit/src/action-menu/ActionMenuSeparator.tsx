import * as React from "react";

import WPDS, { styled } from "../theme";

import * as ActionMenuPrimitive from "@radix-ui/react-dropdown-menu";

import { DropdownMenuSeparatorProps as RadixDropdownMenuSeparatorProps } from "@radix-ui/react-dropdown-menu";

const NAME = "ActionMenuSeparator";

export const StyledSeparator = styled(ActionMenuPrimitive.Separator, {});

export type ActionMenuSeparatorProps = {
  /** Any React node may be used as a child to allow for formatting */
  children?: React.ReactNode;
  /** Override CSS */
  css?: WPDS.CSS;
} & RadixDropdownMenuSeparatorProps;

export const ActionMenuSeparator = React.forwardRef<
  HTMLDivElement,
  ActionMenuSeparatorProps
>(({ children, ...props }: ActionMenuSeparatorProps, ref) => {
  return (
    <StyledSeparator {...props} ref={ref}>
      {children}
    </StyledSeparator>
  );
});

ActionMenuSeparator.displayName = NAME;
