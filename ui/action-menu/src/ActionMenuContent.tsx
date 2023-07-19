import * as React from "react";

import WPDS, { theme, styled } from "@washingtonpost/wpds-theme";

import * as ActionMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { ActionMenuContext } from "./context";

import {
  DropdownMenuContentProps as RadixDropdownMenuContentProps,
} from "@radix-ui/react-dropdown-menu";

import { ActionMenuPortal } from "./ActionMenuPortal";
import { DensityProp } from "./ActionMenuRoot";

const NAME = "ActionMenuContent";

export const ContentDensityVariants = {
  density: {
    loose: {
      "& .action-menu-item": {
        paddingTop: theme.sizes["100"],
        paddingBottom: theme.sizes["100"],
      }
    },
    default: {
      "& .action-menu-item": {
        paddingTop: theme.sizes["075"],
        paddingBottom: theme.sizes["075"],
      }
    },
    compact: {
      "& .action-menu-item": {
        paddingTop: theme.sizes["050"],
        paddingBottom: theme.sizes["050"],
      }
    }
  }
}

export const ContentStyles = {
  background: theme.colors.secondary,
  border: `solid 1px ${theme.colors.subtle}`,
  borderRadius: theme.radii["075"],
  boxShadow: theme.shadows["300"],
  color: theme.colors.primary,
  marginTop: theme.sizes["025"],
  maxHeight: "var(--radix-dropdown-menu-content-available-height)",
  maxWidth: "var(--radix-dropdown-menu-content-available-width)",
  minWidth: "150px",
  overflow: "auto",
  padding: theme.space["050"],
  width: "fit-content",
}

export const StyledContent = styled(ActionMenuPrimitive.Content, {
  ...ContentStyles,
  variants: {
    ...ContentDensityVariants,
  },
  defaultVariants: {
    density: "default",
  }
});

export type ActionMenuContentProps = {
  /** Any React node may be used as a child to allow for formatting */
  children?: React.ReactNode;
  density?: DensityProp;
  /** Override CSS */
  css?: WPDS.CSS;
} & RadixDropdownMenuContentProps;

export const ActionMenuContent = React.forwardRef<HTMLDivElement, ActionMenuContentProps>(({ children, ...props }: ActionMenuContentProps, ref) => {
  const context = React.useContext(ActionMenuContext)

  const handleInteractOutside = () => {
    const item = context?.stack.shift()

    context?.setStack([item]);
  }
  return <ActionMenuPortal>
    <StyledContent {...props} ref={ref} onInteractOutside={handleInteractOutside}>
      {children}
    </StyledContent>
  </ActionMenuPortal>
});

ActionMenuContent.displayName = NAME;
