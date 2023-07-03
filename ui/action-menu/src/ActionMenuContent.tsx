import * as React from "react";

import { theme, styled } from "@washingtonpost/wpds-theme";

import * as ActionMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { ActionMenuContext } from "./Contexts";

import {
  DropdownMenuContentProps as RadixDropdownMenuContentProps,
} from "@radix-ui/react-dropdown-menu";
import { ActionMenuPortal } from "./ActionMenuPortal";

export const ContentDensityVariants = {
  density: {
    loose: {
<<<<<<< HEAD
      "& .action-menu-item" : {
        paddingTop: theme.sizes["075"],
        paddingBottom: theme.sizes["075"],
      }
    },
    default: {
      "& .action-menu-item" : {
        paddingTop: theme.sizes["050"],
        paddingBottom: theme.sizes["050"],
      }
    },
    compact: {
      "& .action-menu-item" : {
        paddingTop: theme.sizes["025"],
        paddingBottom: theme.sizes["025"],
=======
      "& .action-menu-item": {
        padding: theme.sizes["075"],
      }
    },
    default: {
      "& .action-menu-item": {
        padding: theme.sizes["050"],
      }
    },
    compact: {
      "& .action-menu-item": {
        padding: theme.sizes["025"],
>>>>>>> refs/remotes/origin/feat/dropdown-menu
      }
    }
  }
}
export const ContentStyles = {
<<<<<<< HEAD
    background: theme.colors.secondary,
    border: `solid 1px ${theme.colors.subtle}`,
    borderRadius: theme.radii["100"],
    boxShadow: theme.shadows["300"],
    color: theme.colors.primary,
    width: "fit-content",
    marginTop: theme.sizes["025"],
    minWidth: "150px",
    maxHeight: "var(--radix-dropdown-menu-content-available-height)",
    maxWidth: "var(--radix-dropdown-menu-content-available-width)",
    overflow: "auto",
=======
  background: theme.colors.secondary,
  border: `solid 1px ${theme.colors.subtle}`,
  borderRadius: theme.radii["012"],
  boxShadow: theme.shadows["200"],
  color: theme.colors.primary,
  width: "fit-content",
  minWidth: "150px",
  maxHeight: "var(--radix-dropdown-menu-content-available-height)",
  maxWidth: "var(--radix-dropdown-menu-content-available-width)",
  overflow: "auto",
>>>>>>> refs/remotes/origin/feat/dropdown-menu
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

export type DensityProp = "loose" | "default" | "compact"
export type ActionMenuContentProps = {
  /** Any React node may be used as a child to allow for formatting */
  children?: React.ReactNode;
  density?: DensityProp;
} & RadixDropdownMenuContentProps;

const StyledArrow = styled(ActionMenuPrimitive.Arrow, {
  fill: theme.colors.secondary,
});

export const ActionMenuContent = React.forwardRef<HTMLDivElement, ActionMenuContentProps>(({ children, density = "default", ...props }: ActionMenuContentProps, ref) => {
  return <ActionMenuPortal>
    <StyledContent {...props} ref={ref} density={density}>
<<<<<<< HEAD
          <ActionMenuContext.Provider value={{
            density: density,
            level: 0,
            currActiveGroup: ActionMenuContent,
          }}>
            {children}
          </ActionMenuContext.Provider>
      </StyledContent>
      </ActionMenuPortal>
=======
      <StyledArrow
        stroke={theme.colors.subtle.value}
        strokeWidth="2"
        strokeDasharray="0 30 28.284"
      />
      <DensityContext.Provider value={density}>
        {children}
      </DensityContext.Provider>
    </StyledContent>
  </ActionMenuPortal>
>>>>>>> refs/remotes/origin/feat/dropdown-menu
});