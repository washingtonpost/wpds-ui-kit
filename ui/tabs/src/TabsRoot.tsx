import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

import type * as WPDS from "@washingtonpost/wpds-theme";

export type TabsRootProps = {
  /** Any React node may be used as a child to allow for formatting */
  children?: React.ReactNode;
  /** The value for the selected tab, if controlled */
  value?: string;
  /** The value of the tab to select by default, if uncontrolled */
  defaultValue?: string;
  /** A function called when a new tab is selected */
  onValueChange?: (value: string) => void;
  /** Override CSS */
  css?: WPDS.CSS;
} & typeof TabsPrimitive.Root;

export const TabsRoot = React.forwardRef<HTMLDivElement, TabsRootProps>(
  ({ children, ...props }, ref) => {
    return (
      <TabsPrimitive.Root {...props} ref={ref}>
        {children}
      </TabsPrimitive.Root>
    );
  }
);

TabsRoot.displayName = "TabsRoot";
