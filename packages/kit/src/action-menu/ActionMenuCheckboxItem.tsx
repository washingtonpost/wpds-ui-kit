import { useContext, forwardRef } from "react";
import * as ActionMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { ItemStyles } from "./ActionMenuItem";
import { ActionMenuContext } from "./context";
import { styled, theme } from "../theme";

import type { DropdownMenuCheckboxItemProps as RadixDropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";
import type * as WPDS from "../theme";

const NAME = "ActionMenuCheckboxItem";

const StyledCheckboxItem = styled(ActionMenuPrimitive.CheckboxItem, {
  ...ItemStyles,
  position: "relative",
  paddingLeft: theme.space["125"],
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

export type ActionMenuCheckboxItemProps = {
  /** Any React node may be used as a child to allow for formatting */
  children?: React.ReactNode;
  /** Override CSS */
  css?: WPDS.CSS;
} & RadixDropdownMenuCheckboxItemProps;

export const ActionMenuCheckboxItem = forwardRef<
  HTMLDivElement,
  ActionMenuCheckboxItemProps
>(({ children, ...props }: ActionMenuCheckboxItemProps, ref) => {
  const context = useContext(ActionMenuContext);

  return (
    <StyledCheckboxItem
      {...props}
      ref={ref}
      density={context.density}
      className="action-menu-checkbox-item"
    >
      {children}
    </StyledCheckboxItem>
  );
});

ActionMenuCheckboxItem.displayName = NAME;
