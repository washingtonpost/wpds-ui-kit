import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { styled } from "@washingtonpost/wpds-theme";

import type * as WPDS from "@washingtonpost/wpds-theme";
import { TabsContext } from "./context";

const StyledTabsRoot = styled(TabsPrimitive.Root, {});

export type TabsRootProps = {
  /** Any React node may be used as a child to allow for formatting */
  children?: React.ReactNode;
  /** The value of the tab to select by default, if uncontrolled */
  defaultValue?: string;
  /** Override CSS */
  css?: WPDS.CSS;
} & React.ComponentPropsWithRef<typeof StyledTabsRoot>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const TabsRoot = React.forwardRef<HTMLDivElement, TabsRootProps>(
  ({ children, ...props }: TabsRootProps, ref) => {
    return (
      <TabsContext.Provider
        value={{
          initialValue: props.defaultValue || props.value,
        }}
      >
        <StyledTabsRoot {...props} ref={ref}>
          {children}
        </StyledTabsRoot>
      </TabsContext.Provider>
    );
  }
);

TabsRoot.displayName = "TabsRoot";
