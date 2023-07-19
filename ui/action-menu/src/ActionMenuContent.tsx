import * as React from "react";

import WPDS, { theme, styled } from "@washingtonpost/wpds-theme";

import * as ActionMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { ActionMenuContext } from "./context";

import {
  DropdownMenuContentProps as RadixDropdownMenuContentProps,
} from "@radix-ui/react-dropdown-menu";

import { ActionMenuPortal } from "./ActionMenuPortal";
import { DensityProp } from "./ActionMenuRoot";
import { collapseTextChangeRangesAcrossMultipleVersions } from "typescript";

const NAME = "ActionMenuContent";

export const ContentDensityVariants = {
  density: {
    loose: {
      "& .action-menu-item": {
        padding: theme.space["100"],
      },
      "& .action-menu-checkbox-item": {
        padding: theme.space["100"],
        paddingLeft: theme.space["250"],
      },
      "& .action-menu-label": {
        paddingLeft: theme.space["100"],
        paddingRight: theme.space["100"],
        marginTop: theme.sizes["100"],
      },
      "& .action-menu-item-indicator": {
        left: theme.space["100"],
      },
    },
    default: {
      "& .action-menu-item": {
        padding: theme.space["075"],
      },
      "& .action-menu-checkbox-item": {
        padding: theme.space["075"],
        paddingLeft: theme.space["225"],
      },
      "& .action-menu-label": {
        paddingLeft: theme.space["075"],
        paddingRight: theme.space["075"],
        marginTop: theme.sizes["075"],
      },
      "& .action-menu-item-indicator": {
        left: theme.space["075"],
      },
    },
    compact: {
      padding: theme.space["050"],
      "& .action-menu-item": {
        padding: theme.space["050"],
      },
      "& .action-menu-checkbox-item": {
        padding: theme.space["050"],
        paddingLeft: theme.space["200"],
      },
      "& .action-menu-label": {
        paddingLeft: theme.space["050"],
        paddingRight: theme.space["050"],
        marginTop: theme.sizes["050"],
      },
      "& .action-menu-item-indicator": {
        left: theme.space["050"],
      },
    }
  }
}

export const ContentStyles = {
  background: theme.colors.secondary,
  border: `solid 1px ${theme.colors.subtle}`,
  borderRadius: theme.radii["050"],
  boxShadow: theme.shadows["300"],
  color: theme.colors.primary,
  fontFamily: theme.fonts.subhead,
  fontSize: theme.fontSizes["050"],
  fontWeight: theme.fontWeights.regular,
  lineHeight: theme.sizes["100"],
  marginTop: theme.sizes["025"],
  maxHeight: "var(--radix-dropdown-menu-content-available-height)",
  maxWidth: "var(--radix-dropdown-menu-content-available-width)",
  minWidth: "200px",
  overflow: "auto",
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
