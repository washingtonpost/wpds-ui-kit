import * as React from "react";
import WPDS, { theme, styled } from "../theme";
import * as ActionMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { DropdownMenuSubTriggerProps as RadixDropdownMenuSubTriggerProps } from "@radix-ui/react-dropdown-menu";
import { Icon } from "../icon";
import { ChevronRight } from "@washingtonpost/wpds-assets";
import { ActionMenuContext } from "./context";
import { useContext } from "react";
import { ItemStyles } from "./ActionMenuItem";

const NAME = "ActionMenuSubTrigger";

const SubTriggerStyles = {
  ...ItemStyles,
  "&[data-state=open]": {
    outline: "none",
    backgroundColor: theme.colors.alpha25,
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

const RightIcon = styled(Icon, {
  width: theme.sizes["100"],
  color: theme.colors.accessible,
  fill: theme.colors.primary,
  display: "flex",
  marginLeft: "auto",
});

const StyledSubTrigger = styled(
  ActionMenuPrimitive.SubTrigger,
  SubTriggerStyles
);

export type ActionMenuSubTriggerProps = {
  /** Any React node may be used as a child to allow for formatting */
  children?: React.ReactNode;
  /** Override CSS */
  css?: WPDS.CSS;
  onClick?: () => void;
} & RadixDropdownMenuSubTriggerProps;

export const ActionMenuSubTrigger = React.forwardRef<
  HTMLDivElement,
  ActionMenuSubTriggerProps
>(({ children, ...props }: ActionMenuSubTriggerProps, ref) => {
  const context = useContext(ActionMenuContext);

  return (
    <StyledSubTrigger
      {...props}
      ref={ref}
      className="action-menu-item"
      density={context.density}
    >
      {children}
      <RightIcon label="Expand submenu">
        <ChevronRight />
      </RightIcon>
    </StyledSubTrigger>
  );
});

ActionMenuSubTrigger.displayName = NAME;
