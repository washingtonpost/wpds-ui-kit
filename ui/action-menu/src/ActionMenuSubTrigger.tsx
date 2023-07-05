import * as React from "react";
import WPDS, { theme, styled } from "@washingtonpost/wpds-theme";
import * as ActionMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { DropdownMenuSubTriggerProps as RadixDropdownMenuSubTriggerProps } from "@radix-ui/react-dropdown-menu";
import { Divider } from "@washingtonpost/wpds-divider";
import { Icon } from "@washingtonpost/wpds-icon";
// import { ChevronRight } from "@washingtonpost/wpds-assets";
import { ItemStyles, ItemContent } from "./ActionMenuItem";


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


// const RightIcon = styled(Icon, {
//   color: theme.colors.accessible,
//   fill: theme.colors.primary,
//   display: "flex",
//   variants: {
//     isDisabled: {
//       true: {
//         color: "inherit",
//       },
//     },
//     hidden: {
//       true: {
//         display: "none",
//       },
//       false: {
//         display: "flex"
//       }
//     }
//   },
//   marginLeft: "auto",
// });

const StyledSubTrigger = styled(ActionMenuPrimitive.SubTrigger, SubTriggerStyles);

export type ActionMenuSubTriggerProps = {
  /** Any React node may be used as a child to allow for formatting */
  children?: React.ReactNode;
  /** Override CSS */
  css?: WPDS.CSS;
} & RadixDropdownMenuSubTriggerProps;


export const ActionMenuSubTrigger = React.forwardRef<HTMLDivElement, ActionMenuSubTriggerProps>(({ children, ...props }: ActionMenuSubTriggerProps, ref) => {
  return <div>
    <StyledSubTrigger {...props} ref={ref} /* isHeading={{ "@initial": false, "@maxMd" : true, "@minMd" : false}} */ className="action-menu-item">
      <ItemContent>
        {children}
      </ItemContent>
    </StyledSubTrigger>
    <Divider />
  </div>
});