import * as React from "react";
import WPDS, { theme, styled } from "@washingtonpost/wpds-theme";
import * as ActionMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { DropdownMenuSubTriggerProps as RadixDropdownMenuSubTriggerProps } from "@radix-ui/react-dropdown-menu";
import { Divider } from "@washingtonpost/wpds-divider";
import { Icon } from "@washingtonpost/wpds-icon";
import { ChevronRight } from "@washingtonpost/wpds-assets";
import { ItemStyles } from "./ActionMenuItem";
import { ActionMenuContext } from "./context";
import { useContext } from "react";


const SubTriggerStyles = {
  variants: {
    isHeading: {
      true: {
        fontWeight: theme.fontWeights.bold,
        margin: 0,
      },
      false: {
        ...ItemStyles,
      },
    }
  },
  defaultVariants: {
    isHeading: false,
    density: "default",
  }
}

const RightIcon = styled(Icon, {
  color: theme.colors.accessible,
  fill: theme.colors.primary,
  display: "flex",
  variants: {
    isDisabled: {
      true: {
        color: "inherit",
      },
    },
    hidden: {
      true: {
        display: "none",
      },
      false: {
        display: "flex"
      }
    }
  },
  marginLeft: "auto",
});

const StyledSubTrigger = styled(ActionMenuPrimitive.SubTrigger, SubTriggerStyles);

export type ActionMenuSubTriggerProps = {
  /** Any React node may be used as a child to allow for formatting */
  children?: React.ReactNode;
  /** Override CSS */
  css?: WPDS.CSS;
  onClick?: Function;
} & RadixDropdownMenuSubTriggerProps;


export const ActionMenuSubTrigger = React.forwardRef<HTMLDivElement, ActionMenuSubTriggerProps>(({ children, ...props }: ActionMenuSubTriggerProps, ref) => {
  const context = useContext(ActionMenuContext);

  return <>
    <StyledSubTrigger
      {...props}
      onPointerMove={() => { }}
      ref={ref}
      className="action-menu-item"
      isHeading={context.slider}
    >
      {children}
      <RightIcon label="Expand submenu">
        <ChevronRight />
      </RightIcon>
    </StyledSubTrigger >
    <Divider />
  </>
});