import * as React from "react";
import { styled } from "@washingtonpost/wpds-theme";
import * as ActionMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { DropdownMenuSubTriggerProps as RadixDropdownMenuSubTriggerProps } from "@radix-ui/react-dropdown-menu";
import { Divider } from "@washingtonpost/wpds-divider";
import { ChevronRight } from "@washingtonpost/wpds-assets";
import { ItemStyles, LeftIcon, RightIcon, LeftIconPlaceholder, ItemContent } from "./ActionMenuItem";

const StyledSubTrigger = styled(ActionMenuPrimitive.SubTrigger, ItemStyles);

export type ActionMenuSubTriggerProps = {
  /** Any React node may be used as a child to allow for formatting */
  children?: React.ReactNode;
  leftIcon?: React.ReactNode;
} & RadixDropdownMenuSubTriggerProps;


export const ActionMenuSubTrigger = React.forwardRef<HTMLDivElement, ActionMenuSubTriggerProps>(({children, leftIcon,  ...props}: ActionMenuSubTriggerProps, ref) => {
  return <div>
  <StyledSubTrigger {...props} ref={ref} >
    {leftIcon ? <LeftIcon label="">{leftIcon}</LeftIcon> : <LeftIconPlaceholder />}
    <ItemContent>
      {children}
    </ItemContent>
    <RightIcon label="Expand submenu">
      <ChevronRight />
    </RightIcon>
  </StyledSubTrigger>
  <Divider />
  </div>
});