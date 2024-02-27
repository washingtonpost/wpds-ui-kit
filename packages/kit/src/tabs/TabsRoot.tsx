import React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { styled } from "../theme";

import type * as WPDS from "../theme";
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

export const TabsRoot = React.forwardRef<HTMLDivElement, TabsRootProps>(
  ({ children, ...props }: TabsRootProps, ref) => {
    const [currentValue, setCurrentValue] = React.useState<string | undefined>(
      props.defaultValue || props.value
    );
    const [previousRect, setPreviousRect] = React.useState<
      DOMRect | undefined
    >();
    React.useEffect(() => {
      if (props.value) {
        setCurrentValue(props.value);
      }
    }, [props.value]);
    return (
      <TabsContext.Provider
        value={{
          currentValue: currentValue,
          previousRect: previousRect,
          setPreviousRect: setPreviousRect,
        }}
      >
        <StyledTabsRoot
          {...props}
          ref={ref}
          onValueChange={(newValue) => {
            setCurrentValue(newValue);
            if (props.onValueChange) {
              props.onValueChange(newValue);
            }
          }}
        >
          {children}
        </StyledTabsRoot>
      </TabsContext.Provider>
    );
  }
);

TabsRoot.displayName = "TabsRoot";
