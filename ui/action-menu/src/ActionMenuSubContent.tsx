import * as React from "react";

import { styled } from "@washingtonpost/wpds-theme";

import * as ActionMenuPrimitive from '@radix-ui/react-dropdown-menu';

import { useContext } from 'react';
import { DensityContext } from './Contexts';

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

export const ActionMenuSubContent = React.forwardRef<HTMLDivElement, RadixDropdownMenuSubContentProps>(({ children, ...props }: RadixDropdownMenuSubContentProps, ref) => {
  const density = useContext(DensityContext);
  return <div>
    <StyledPortal hidden={{ "@maxMd": true, "@minMd": false }}>
      <StyledSubContent {...props} ref={ref} density={density} hidden={{ "@maxMd": true, "minMd": false }} /*sideOffset={-5} alignOffset={5} */>
        {children}
      </StyledSubContent>
    </StyledPortal>
    <ResponsiveSubItems hidden={{ "@maxMd": false, "@minMd": true }}>
      {children}
    </ResponsiveSubItems>
  </div>
});