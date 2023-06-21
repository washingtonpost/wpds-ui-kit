import * as React from "react";

import WPDS, { styled } from "@washingtonpost/wpds-theme";

import * as ActionMenuPrimitive from '@radix-ui/react-dropdown-menu';

import {
  DropdownMenuSubProps as RadixDropdownMenuSubProps,
} from "@radix-ui/react-dropdown-menu";

export const StyledSub = styled(ActionMenuPrimitive.Sub, {
});

export type ActionMenuSubProps = {
  /** Any React node may be used as a child to allow for formatting */
  children?: React.ReactNode;
  /** Override CSS */
  css?: WPDS.CSS;
} & RadixDropdownMenuSubProps;

/*
export const ActionMenuContent = React.forwardRef<HTMLDivElement, RadixDropdownMenuSubProps>(({children, ...props}: RadixDropdownMenuSubProps, ref) => {
  return <ActionMenuPrimitive.Portal>
    <StyledContent {...props} ref={ref}>
          {children}
      </StyledContent>
    </ActionMenuPrimitive.Portal>
});
*/

export const ActionMenuSub = ({ ...props }: ActionMenuSubProps) => {
  return <StyledSub {...props} />;
}