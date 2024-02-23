import * as React from "react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { styled, theme } from "../theme";

import type * as WPDS from "../theme";

const NAME = "NavigationMenuTrigger";

const StyledNavigationMenuTrigger = styled(NavigationMenuPrimitive.Trigger, {
  appearance: "none",
  background: "transparent",
  border: "none",
  color: theme.colors.primary,
  cursor: "pointer",
  display: "inline-flex",
  alignItems: "center",
  gap: theme.space["025"],
  fontFamily: theme.fonts.meta,
  fontSize: theme.fontSizes["100"],
  lineHeight: theme.lineHeights.meta,
  padding: theme.space["050"],
});

export type NavigationMenuTriggerProps = {
  /** Any React node may be used as a child */
  children?: React.ReactNode;
  /** Override CSS */
  css?: WPDS.CSS;
} & React.ComponentPropsWithRef<typeof StyledNavigationMenuTrigger>;

export const NavigationMenuTrigger = React.forwardRef<
  HTMLButtonElement,
  NavigationMenuTriggerProps
>(({ children, ...props }, ref) => {
  return (
    <>
      {props.asChild ? (
        <NavigationMenuPrimitive.Trigger {...props} ref={ref}>
          {children}
        </NavigationMenuPrimitive.Trigger>
      ) : (
        <StyledNavigationMenuTrigger {...props} ref={ref}>
          {children}
        </StyledNavigationMenuTrigger>
      )}
    </>
  );
});

NavigationMenuTrigger.displayName = NAME;
