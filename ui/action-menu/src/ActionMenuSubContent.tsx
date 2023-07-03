import * as React from "react";

import { styled } from "@washingtonpost/wpds-theme";

import * as ActionMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { useContext } from 'react';
import { DensityContext } from './Contexts';

import {
  DropdownMenuSubContentProps as RadixDropdownMenuSubContentProps,
} from "@radix-ui/react-dropdown-menu";

import { ActionMenuPortal } from "./ActionMenuPortal";

import { ContentStyles, ContentDensityVariants, ActionMenuContent } from "./ActionMenuContent";
import type { ActionMenuContentProps, DensityProp } from "./ActionMenuContent";

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

// const ResponsiveSubItems = styled("div", {
//   padding: 0,
//   margin: 0,
//   variants: {
//     hidden: {
//       true: {
//         display: "none"
//       },
//       false: {
//         display: "content"
//       }
//     }
//   },
//   scrollbarWidth: "none",
// })

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

type ActionMenuSubContentProps = React.ComponentPropsWithRef<typeof ActionMenuContent> & RadixDropdownMenuSubContentProps & ActionMenuContentProps;

export const ActionMenuSubContent = React.forwardRef<HTMLDivElement, ActionMenuSubContentProps>(({ children, ...props }: ActionMenuSubContentProps, ref) => {
  const density: DensityProp = useContext(DensityContext) as DensityProp;

  // have some way to get screen size
  // set screen size in a useeffect
  // isMediumAndabove screenWidth > 900px
  // could be a bool like isSmallScreen 

  return (
    <div>
      <StyledPortal
      // hidden={{ "@maxMd": true, "@minMd": false }}
      >
        <StyledSubContent
          {...props}
          ref={ref}
          density={density}
        // hidden={{ "@maxMd": true, "minMd": false }}
        // sideOffset={-5} alignOffset={5}
        >
          {children}
        </StyledSubContent>
      </StyledPortal>
      {/* <ResponsiveSubItems hidden={{ "@maxMd": false, "@minMd": true }}>
        {children}
      </ResponsiveSubItems> */}
    </div>
  )
});