import React from "react";

import { theme, styled } from "../theme";

import type * as WPDS from "../theme";

import * as ActionMenuPrimitive from "@radix-ui/react-dropdown-menu";

import { DropdownMenuItemProps as RadixDropdownMenuItemProps } from "@radix-ui/react-dropdown-menu";
import { ActionMenuContext } from "./context";

const NAME = "ActionMenuItem";

export const ItemStyles = {
  alignItems: "center",
  background: theme.colors.secondary,
  borderRadius: theme.radii["050"],
  display: "flex",
  flexBasis: "auto",
  flexDirection: "row",
  justifyContent: "flex-start",
  flexWrap: "none",
  marginTop: "1px",
  marginBottom: "1px",
  marginLeft: "1px",
  transition: `background ${theme.transitions.fast} ${theme.transitions.inOut}`,
  width: "calc(100% - 2px)",
  "&:hover": {
    backgroundColor: theme.colors.alpha25,
    cursor: "pointer",
    "&:focus-visible": {
      outline: "none",
    },
  },
  "&[data-disabled]": {
    color: theme.colors.onDisabled,
    pointerEvents: "none",
  },
  "&[data-disabled] svg": {
    fill: theme.colors.onDisabled,
  },
  variants: {
    density: {
      loose: {
        padding: theme.space["100"],
      },
      default: {
        padding: theme.space["075"],
      },
      compact: {
        padding: theme.space["050"],
      },
    },
  },
  defaultVariants: {
    density: "default",
  },
};

export const ContentDensityVariants = {};

// export const ItemContent = styled("div", {
//   display: "flex",
//   flexDirection: "row",
// });

const StyledItem = styled(ActionMenuPrimitive.Item, ItemStyles);

export type ActionMenuItemProps = {
  /** Any React node may be used as a child to allow for formatting */
  children?: React.ReactNode;
  /** Override CSS */
  css?: WPDS.CSS;
} & RadixDropdownMenuItemProps;

export const ActionMenuItem = React.forwardRef<
  HTMLDivElement,
  ActionMenuItemProps
>(({ children, ...props }: ActionMenuItemProps, ref) => {
  const context = React.useContext(ActionMenuContext);

  return (
    <StyledItem
      {...props}
      ref={ref}
      density={context.density}
      className="action-menu-item"
    >
      {children}
    </StyledItem>
  );
});

ActionMenuItem.displayName = NAME;
