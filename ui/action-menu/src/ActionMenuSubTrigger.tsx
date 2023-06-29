import * as React from "react";
import { theme, styled } from "@washingtonpost/wpds-theme";
import * as ActionMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { DropdownMenuSubTriggerProps as RadixDropdownMenuSubTriggerProps } from "@radix-ui/react-dropdown-menu";
import { Divider } from "@washingtonpost/wpds-divider";
import { ChevronRight } from "@washingtonpost/wpds-assets";
import { ItemStyles, LeftIcon, RightIcon, LeftIconPlaceholder, ItemContent } from "./ActionMenuItem";


const SubTriggerStyles = {
  variants: {
    isHeading: {
      false: {
        ...ItemStyles,
      },
      true: {
        fontWeight: theme.fontWeights.bold,
        margin: 0,
        pointerEvents: "none",
      }
    }
  },
  defaultVariants: {
    isHeading: false,
    density: "default",
  }
}

const StyledSubTrigger = styled(ActionMenuPrimitive.SubTrigger, SubTriggerStyles);

export type ActionMenuSubTriggerProps = {
  /** Any React node may be used as a child to allow for formatting */
  children?: React.ReactNode;
  leftIcon?: React.ReactNode;
} & RadixDropdownMenuSubTriggerProps;


export const ActionMenuSubTrigger = React.forwardRef<HTMLDivElement, ActionMenuSubTriggerProps>(({children, leftIcon,  ...props}: ActionMenuSubTriggerProps, ref) => {
  return <div>
  <StyledSubTrigger {...props} ref={ref} isHeading={{ "@initial": false, "@maxMd" : true, "@minMd" : false}} className="action-menu-item">
    {leftIcon ? <LeftIcon label="">{leftIcon}</LeftIcon> : <LeftIconPlaceholder />}
    <ItemContent>
      {children}
    </ItemContent>
    <RightIcon label="Expand submenu" hidden={{ "@initial": false, "@maxMd" : true, "@minMd" : false}}>
      <ChevronRight />
    </RightIcon>
  </StyledSubTrigger>
  <Divider />
  </div>
});