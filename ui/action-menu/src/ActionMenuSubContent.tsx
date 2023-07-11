import * as React from "react";

import WPDS, { theme, styled } from "@washingtonpost/wpds-theme";

import * as ActionMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { useContext } from 'react';
import { ActionMenuContext } from './context';

import {
  DropdownMenuSubContentProps as RadixDropdownMenuSubContentProps,
} from "@radix-ui/react-dropdown-menu";

import { ActionMenuPortal } from "./ActionMenuPortal";

import { ContentStyles, ContentDensityVariants } from "./ActionMenuContent";

const StyledSubContent = styled(ActionMenuPrimitive.SubContent, {
  ...ContentStyles,
  //boxShadow: theme.shadows["500"],
  variants: {
    ...ContentDensityVariants,
    hidden: {
      true: {
        display: "none"
      },
      false: {
        display: "content"
      }
    },
    shadowSize: {
      small: {
        boxShadow: theme.shadows["300"],
      },
      large: {
        boxShadow: theme.shadows["500"],
      }
    }
  },
  defaultVariants: {
    hidden: false,
    density: "default",
  }
});

const ResponsiveSubItems = styled("div", {
  padding: 0,
  margin: 0,
  variants: {
    hidden: {
      true: {
        display: "none"
      },
      false: {
        display: "content"
      }
    }
  },
  scrollbarWidth: "none",
})

const StyledPortal = styled(ActionMenuPortal, {
  variants: {
    hidden: {
      true: {
        display: "none"
      },
      false: {
        display: "initial"
      }
    }
  },
})

export type ActionMenuSubContentProps = {
  /** Any React node may be used as a child to allow for formatting */
  children?: React.ReactNode;
  /** Override CSS */
  css?: WPDS.CSS;
  shadowSize?: "small" | "large";
} & RadixDropdownMenuSubContentProps;


export const ActionMenuSubContent = React.forwardRef<HTMLDivElement, ActionMenuSubContentProps>(({ children, ...props }: ActionMenuSubContentProps, ref) => {
  const context = useContext(ActionMenuContext);

  const [_shadowSize, setShadowSize] = React.useState("small")

  React.useEffect(() => {
    setShadowSize(
      context?.stack.findIndex(item => item === context.currentId) >= 1
        ? "large"
        : "small"
    );
  }, [])

  return (
    <div>
      <StyledPortal>
        <StyledSubContent
          {...props}
          ref={ref}
          shadowSize={_shadowSize}
          sideOffset={-10}
          alignOffset={5}
        >
          {children}
        </StyledSubContent>
      </StyledPortal>

    </div>
  )
});