import React from "react";
import { clsx } from "clsx";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { tabsContent } from "./Tabs.css";

export interface TabsContentProps
  extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content> {
  /** Children content */
  children?: React.ReactNode;
  /** Value of the content */
  value: string;
  /** Additional CSS class */
  className?: string;
}

export const TabsContentVE = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  TabsContentProps
>(({ children, value, className, ...props }, ref) => {
  return (
    <TabsPrimitive.Content
      ref={ref}
      value={value}
      className={clsx(tabsContent(), className)}
      {...props}
    >
      {children}
    </TabsPrimitive.Content>
  );
});

TabsContentVE.displayName = "TabsContentVE";
