import React from "react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { styled, theme } from "../theme";

import type * as WPDS from "../theme";

const NAME = "NavigationMenuLink";

const StyledNavigationMenuLink = styled(NavigationMenuPrimitive.Link, {
  color: theme.colors.disabled,
  display: "block",
  fontFamily: theme.fonts.meta,
  fontSize: theme.fontSizes["100"],
  padding: theme.space["050"],
  pointerEvents: "none",
  textDecoration: "none",
  "&:link, &:visited": {
    color: theme.colors.primary,
    pointerEvents: "auto",
  },
  "&:hover": {
    color: theme.colors.accessible,
  },
  "&[data-active]": {
    color: theme.colors.accessible,
    fontWeight: theme.fontWeights.bold,
  },
});

export type NavigationMenuLinkProps = {
  /** Any React node may be used as a child to allow for formatting */
  children?: React.ReactNode;
  /** Override CSS */
  css?: WPDS.CSS;
} & React.ComponentPropsWithRef<typeof StyledNavigationMenuLink>;

export const NavigationMenuLink = React.forwardRef<
  HTMLAnchorElement,
  NavigationMenuLinkProps
>(({ children, ...props }, ref) => {
  return (
    <>
      {props.asChild ? (
        <NavigationMenuPrimitive.Link {...props} ref={ref}>
          {children}
        </NavigationMenuPrimitive.Link>
      ) : (
        <StyledNavigationMenuLink {...props} ref={ref}>
          {children}
        </StyledNavigationMenuLink>
      )}
    </>
  );
});

NavigationMenuLink.displayName = NAME;
