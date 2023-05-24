import * as React from "react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import type * as WPDS from "@washingtonpost/wpds-theme";

const NAME = "NavigationMenuRoot";

export type NavigationMenuRootProps = {
  /** Any React node may be used as a child to allow for formatting */
  children?: React.ReactNode;
  /** Override CSS */
  css?: WPDS.CSS;
} & React.ComponentPropsWithRef<typeof NavigationMenuPrimitive.Root>;

export const NavigationMenuRoot = React.forwardRef<
  HTMLDivElement,
  NavigationMenuRootProps
>(({ children, ...props }, ref) => {
  return (
    <NavigationMenuPrimitive.Root {...props} ref={ref}>
      {children}
    </NavigationMenuPrimitive.Root>
  );
});

NavigationMenuRoot.displayName = NAME;
