import React from "react";

import { styled, theme } from "../theme";

import type * as WPDS from "../theme";

import * as ActionMenuPrimitive from "@radix-ui/react-dropdown-menu";

import { DropdownMenuItemIndicatorProps as RadixDropdownMenuItemIndicatorProps } from "@radix-ui/react-dropdown-menu";
import { ActionMenuContext } from "./context";
import { Icon } from "../icon";
import { Check } from "@washingtonpost/wpds-assets";

const NAME = "ActionMenuItemIndicator";

export const StyledItemIndicator = styled(ActionMenuPrimitive.ItemIndicator, {
  position: "absolute",
  top: 0,
  height: "100%",
  width: theme.sizes["100"],
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  variants: {
    density: {
      loose: {
        left: theme.space["100"],
      },
      default: {
        left: theme.space["075"],
      },
      compact: {
        left: theme.space["050"],
      },
    },
  },
  defaultVariants: {
    density: "default",
  },
});

export type ActionMenuItemIndicatorProps = {
  /** Any React node may be used as a child to allow for formatting */
  children?: React.ReactNode;
  /** Override CSS */
  css?: WPDS.CSS;
} & RadixDropdownMenuItemIndicatorProps;

export const ActionMenuItemIndicator = React.forwardRef<
  HTMLDivElement,
  ActionMenuItemIndicatorProps
>(({ ...props }: ActionMenuItemIndicatorProps, ref) => {
  const context = React.useContext(ActionMenuContext);

  return (
    <StyledItemIndicator
      {...props}
      ref={ref}
      density={context.density}
      className="action-menu-item-indicator"
    >
      <Icon label="check">
        <Check />
      </Icon>
    </StyledItemIndicator>
  );
});

ActionMenuItemIndicator.displayName = NAME;
