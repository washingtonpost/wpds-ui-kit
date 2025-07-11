import React from "react";
import { clsx } from "clsx";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { tabsRoot } from "./Tabs.css";

export interface TabsRootProps
  extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Root> {
  /** Any React node may be used as a child to allow for formatting */
  children?: React.ReactNode;
  /** The value of the tab to select by default, if uncontrolled */
  defaultValue?: string;
  /** Additional CSS class */
  className?: string;
}

export const TabsRootVE = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Root>,
  TabsRootProps
>(({ children, className, ...props }, ref) => {
  return (
    <TabsPrimitive.Root
      ref={ref}
      className={clsx(tabsRoot, className)}
      {...props}
    >
      {children}
    </TabsPrimitive.Root>
  );
});

TabsRootVE.displayName = "TabsRootVE";
