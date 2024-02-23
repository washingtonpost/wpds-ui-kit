import * as React from "react";

import type * as WPDS from "../theme";
import type { TabsContentProps as RadixTabsContentProps } from "@radix-ui/react-tabs";

import * as RadixTabs from "@radix-ui/react-tabs";

export type TabsContentProps = {
  children?: React.ReactNode;
  value: string;
  /** Overrides for the input text styles. Padding overrides affect the input container and  */
  css?: WPDS.CSS;
} & RadixTabsContentProps;

export const TabsContent = ({
  children,
  value,
  ...props
}: TabsContentProps) => {
  return (
    <RadixTabs.Content value={value} {...props}>
      {children}
    </RadixTabs.Content>
  );
};

TabsContent.displayName = "TabsContent";
