import * as React from "react";

import WPDS, { styled, theme } from "../theme";

import * as ActionMenuPrimitive from "@radix-ui/react-dropdown-menu";

import { DropdownMenuRadioItemProps as RadixDropdownMenuRadioItemProps } from "@radix-ui/react-dropdown-menu";

import { ItemStyles } from "./ActionMenuItem";
import { ActionMenuContext } from "./context";

const NAME = "ActionMenuRadioItem";

export const StyledRadioItem = styled(ActionMenuPrimitive.RadioItem, {
  ...ItemStyles,
  position: "relative",
  "&[aria-checked='true']": {
    fontWeight: theme.fontWeights.bold,
  },
  variants: {
    density: {
      loose: {
        padding: theme.space["100"],
        paddingLeft: theme.space["250"],
      },
      default: {
        padding: theme.space["075"],
        paddingLeft: theme.space["225"],
      },
      compact: {
        padding: theme.space["050"],
        paddingLeft: theme.space["200"],
      },
    },
  },
  defaultVariants: {
    density: "default",
  },
});

export type ActionMenuRadioItemProps = {
  /** Any React node may be used as a child to allow for formatting */
  children?: React.ReactNode;
  /** Override CSS */
  css?: WPDS.CSS;
} & RadixDropdownMenuRadioItemProps;

export const ActionMenuRadioItem = React.forwardRef<
  HTMLDivElement,
  ActionMenuRadioItemProps
>(({ children, ...props }: ActionMenuRadioItemProps, ref) => {
  const context = React.useContext(ActionMenuContext);
  return (
    <StyledRadioItem
      {...props}
      ref={ref}
      density={context.density}
      className="action-menu-checkbox-item"
    >
      {children}
    </StyledRadioItem>
  );
});

ActionMenuRadioItem.displayName = NAME;
