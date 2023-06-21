import { ActionMenuRoot } from "./ActionMenuRoot";
import { ActionMenuTrigger } from "./ActionMenuTrigger";
import { ActionMenuContent } from "./ActionMenuContent";
import { ActionMenuItem } from "./ActionMenuItem";

type ActionMenuProps = {
  Root: typeof ActionMenuRoot;
  Trigger: typeof ActionMenuTrigger;
  Content: typeof ActionMenuContent;
  Item: typeof ActionMenuItem;
};

/**
 * ActionMenu
 */
export const ActionMenu: ActionMenuProps = {
  Root: ActionMenuRoot,
  Trigger: ActionMenuTrigger,
  Content: ActionMenuContent,
  Item: ActionMenuItem,
};
