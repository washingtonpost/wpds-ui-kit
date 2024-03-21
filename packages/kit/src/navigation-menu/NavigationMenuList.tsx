import React from "react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { styled } from "../theme";

import type * as WPDS from "../theme";

const NAME = "NavigationMenuList";

const StyledNavigationMenuList = styled(NavigationMenuPrimitive.List, {
  display: "flex",
  listStyle: "none",
  marginBlock: 0,
  paddingInlineStart: 0,
  "&[data-orientation='vertical']": {
    flexDirection: "column",
  },
});

export type NavigationMenuListProps = {
  /** Any React node may be used as a child to allow for formatting */
  children?: React.ReactNode;
  /** Override CSS */
  css?: WPDS.CSS;
} & React.ComponentPropsWithRef<typeof StyledNavigationMenuList>;

export const NavigationMenuList = React.forwardRef<
  HTMLUListElement,
  NavigationMenuListProps
>(({ children, ...props }, ref) => {
  return (
    <StyledNavigationMenuList {...props} ref={ref}>
      {children}
    </StyledNavigationMenuList>
  );
});

NavigationMenuList.displayName = NAME;
