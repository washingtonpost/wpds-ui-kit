import { TabsRootVE } from "./tabs-root-ve";
import { TabsListVE } from "./tabs-list-ve";
import { TabsTriggerVE } from "./tabs-trigger-ve";
import { TabsContentVE } from "./tabs-content-ve";

export type TabsVEProps = {
  Root: typeof TabsRootVE;
  List: typeof TabsListVE;
  Trigger: typeof TabsTriggerVE;
  Content: typeof TabsContentVE;
};

/**
 * Tabs (vanilla-extract implementation)
 */
export const TabsVE: TabsVEProps = {
  Root: TabsRootVE,
  List: TabsListVE,
  Trigger: TabsTriggerVE,
  Content: TabsContentVE,
};

// Individual exports
export { TabsRootVE, TabsListVE, TabsTriggerVE, TabsContentVE };

// Default export
export default TabsVE;
