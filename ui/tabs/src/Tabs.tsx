import * as React from "react";

import type * as WPDS from "@washingtonpost/wpds-theme";

const NAME = "Tabs";

export type TabsProps = {
  /** Any React node may be used as a child to allow for formatting */
  children?: React.ReactNode;
  /** Override CSS */
  css?: WPDS.CSS;
} & React.ComponentPropsWithRef<"div">

export const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(
  ({ ...props }, ref) => {
    return <div {...props} ref={ref} />;
  }
);

Tabs.displayName = NAME;
