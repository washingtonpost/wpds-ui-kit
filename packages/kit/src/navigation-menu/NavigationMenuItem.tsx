import * as React from "react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { NavigationMenuTrigger } from "./NavigationMenuTrigger";
import { NavigationMenuContent } from "./NavigationMenuContent";

import type * as WPDS from "@washingtonpost/wpds-theme";

const NAME = "NavigationMenuItem";

export type NavigationMenuItemProps = {
  /** Any React node may be used as a child to allow for formatting */
  children?: React.ReactNode;
  /** Override CSS */
  css?: WPDS.CSS;
} & React.ComponentPropsWithRef<typeof NavigationMenuPrimitive.Item>;

export const NavigationMenuItem = React.forwardRef<
  HTMLLIElement,
  NavigationMenuItemProps
>(({ children, ...props }, ref) => {
  const [referenceElement, setReferenceElement] =
    React.useState<HTMLButtonElement | null>(null);

  return (
    <NavigationMenuPrimitive.Item {...props} ref={ref}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          if (child.type === NavigationMenuTrigger) {
            return React.cloneElement(child, {
              ref: setReferenceElement,
            });
          } else if (child.type === NavigationMenuContent) {
            return React.cloneElement(child, {
              referenceElement: referenceElement,
            });
          }
          return child;
        }
        return child;
      })}
    </NavigationMenuPrimitive.Item>
  );
});

NavigationMenuItem.displayName = NAME;
