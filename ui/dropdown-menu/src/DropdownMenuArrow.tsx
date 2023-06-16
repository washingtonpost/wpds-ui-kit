import * as React from "react";

// import type * as WPDS from "@washingtonpost/wpds-theme";
import { theme, styled } from "@washingtonpost/wpds-theme";

import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';

import {
  DropdownMenuArrowProps as RadixDropdownMenuArrowProps,
} from "@radix-ui/react-dropdown-menu";

export const StyledArrow = styled(DropdownMenuPrimitive.Arrow, {
  fill: theme.colors.primary,
});


export const DropdownMenuArrow = React.forwardRef<SVGSVGElement, RadixDropdownMenuArrowProps>((props: RadixDropdownMenuArrowProps, ref) => {
  return <StyledArrow {...props} ref={ref} />;
});