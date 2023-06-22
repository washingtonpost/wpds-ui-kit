import * as React from "react";

import { styled } from "@washingtonpost/wpds-theme";

import * as ActionMenuPrimitive from '@radix-ui/react-dropdown-menu';

import {
  DropdownMenuSubContentProps as RadixDropdownMenuSubContentProps,
} from "@radix-ui/react-dropdown-menu";
import { ActionMenuPortal } from "./ActionMenuPortal";
import { ContentStyles } from "./ActionMenuContent";

const StyledSubContent = styled(ActionMenuPrimitive.SubContent, {
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
  ...ContentStyles
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

export const ActionMenuSubContent = React.forwardRef<HTMLDivElement, RadixDropdownMenuSubContentProps>(({children, ...props}: RadixDropdownMenuSubContentProps, ref) => {
  return <div>
    <StyledPortal hidden={{ "@maxMd" : true, "@minMd" : false}}>
    <StyledSubContent {...props} ref={ref} side="right" align="start" hidden={{ "@maxMd" : true, "minMd" : false }}>
          {children}
      </StyledSubContent>
    </StyledPortal>
    <ResponsiveSubItems hidden={{ "@maxMd" : false, "@minMd" : true}}>
          {children}
    </ResponsiveSubItems>
    </div>
});