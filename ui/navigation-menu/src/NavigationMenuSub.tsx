import * as React from "react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import type * as WPDS from "@washingtonpost/wpds-theme";

const NAME = "NavigationMenuSub";

export type NavigationMenuSubProps = {
  /** Any React node may be used as a child to allow for formatting */
  children?: React.ReactNode;
  /** Override CSS */
  css?: WPDS.CSS;
} & React.ComponentPropsWithRef<typeof NavigationMenuPrimitive.Sub>;

export const NavigationMenuSub = React.forwardRef<
  HTMLDivElement,
  NavigationMenuSubProps
>(({ children, ...props }, ref) => {
  return (
    <NavigationMenuPrimitive.Sub {...props} ref={ref}>
      {children}
    </NavigationMenuPrimitive.Sub>
  );
});

NavigationMenuSub.displayName = NAME;
