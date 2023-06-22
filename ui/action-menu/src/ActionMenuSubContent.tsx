import * as React from "react";

import { theme, styled } from "@washingtonpost/wpds-theme";

import * as ActionMenuPrimitive from '@radix-ui/react-dropdown-menu';

import {
  DropdownMenuSubContentProps as RadixDropdownMenuContentProps,
} from "@radix-ui/react-dropdown-menu";
import { ActionMenuPortal } from "./ActionMenuPortal";
import { ContentStyles } from "./ActionMenuContent";

export const StyledSubContent = styled(ActionMenuPrimitive.Content, ContentStyles);

export const ActionMenuSubContent = React.forwardRef<HTMLDivElement, RadixDropdownMenuContentProps>(({children, ...props}: RadixDropdownMenuContentProps, ref) => {
  return <ActionMenuPortal>
    <StyledSubContent {...props} ref={ref} side="right" align="start">
          {children}
      </StyledSubContent>
    </ActionMenuPortal>
});