import * as React from "react";

import WPDS, { theme, styled } from "@washingtonpost/wpds-theme";

import * as ActionMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { useContext } from 'react';
import { ActionMenuContext } from './Contexts';

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

export type ActionMenuSubContentProps = {
  /** Any React node may be used as a child to allow for formatting */
  children?: React.ReactNode;
  /** Override CSS */
  css?: WPDS.CSS;
} & RadixDropdownMenuSubContentProps;


export const ActionMenuSubContent = React.forwardRef<HTMLDivElement, ActionMenuSubContentProps>(({ children, ...props }: ActionMenuSubContentProps, ref) => {
  const context = useContext(ActionMenuContext);

  // have some way to get screen size
  // set screen size in a useeffect
  // isMediumAndabove screenWidth > 900px
  // could be a bool like isSmallScreen 

  return (
    <div>
      <StyledPortal
      // hidden={{ "@maxMd": true, "@minMd": false }}
      >
        <ActionMenuContext.Provider value = {{
          ...context,
          level: context.level + 1,
        }}>
          <StyledSubContent
            {...props}
            ref={ref}
            density={context.density}
            shadowSize={context.level + 1 >= 3 ? "large" : "small"}
          // hidden={{ "@maxMd": true, "minMd": false }}
            sideOffset={-10} alignOffset={5}
          >
            {children}
          </StyledSubContent>
        </ActionMenuContext.Provider>
      </StyledPortal>
      {/* <ResponsiveSubItems hidden={{ "@maxMd": false, "@minMd": true }}>
        {children}
      </ResponsiveSubItems> */}
    </div>
  )
});