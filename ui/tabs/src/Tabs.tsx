import { TabsRoot } from "./TabsRoot";
import { TabsList } from "./TabsList";
import { TabsTrigger } from "./TabsTrigger";
import * as TabsPrimitive from "@radix-ui/react-tabs";

export type TabsProps = {
  Root: typeof TabsRoot;
  List: typeof TabsList;
  Trigger: typeof TabsTrigger;
  Content: typeof TabsPrimitive.Content;
};

export const Tabs: TabsProps = {
  Root: TabsRoot,
  List: TabsList,
  Trigger: TabsTrigger,
  Content: TabsPrimitive.Content,
};
