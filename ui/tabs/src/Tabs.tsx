import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

import type * as WPDS from "@washingtonpost/wpds-theme";

import { styled } from "@washingtonpost/wpds-theme";

import { TabsList } from "./TabsList";
import { TabsTrigger } from "./TabsTrigger";

const StyledTabs = styled(TabsPrimitive.Root, {});

type TabsRootVariants = WPDS.VariantProps<typeof StyledTabs>;

export type TabsProps = {
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
  /**
   * Whether a tab is activated automatically or manually.
   * @defaultValue automatic
   * */
  activationMode?: "automatic" | "manual";
} & TabsRootVariants;

export const TabsRoot = React.forwardRef<HTMLDivElement, TabsProps>(
  ({ activationMode = "automatic", ...props }, ref) => {
    return (
      <StyledTabs
        activationMode={activationMode}
        defaultValue={"tab0"}
        {...props}
        ref={ref}
      />
    );
  }
);

TabsRoot.displayName = "TabsRoot";

const Root = TabsRoot;
const List = TabsList;
const Trigger = TabsTrigger;

export const Tabs = {
  Root,
  List,
  Trigger,
};
