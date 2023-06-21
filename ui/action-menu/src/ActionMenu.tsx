import { ActionMenuRoot } from "./ActionMenuRoot";
import { ActionMenuTrigger } from "./ActionMenuTrigger";
import { ActionMenuContent } from "./ActionMenuContent";
import { ActionMenuItem } from "./ActionMenuItem";
import { ActionMenuSub } from "./ActionMenuSub";
import { ActionMenuSubContent } from "./ActionMenuSubContent";
import { ActionMenuSubTrigger } from "./ActionMenuSubTrigger";

type ActionMenuProps = {
  Root: typeof ActionMenuRoot;
  Trigger: typeof ActionMenuTrigger;
  Content: typeof ActionMenuContent;
  Item: typeof ActionMenuItem;
  Sub: typeof ActionMenuSub;
  SubContent: typeof ActionMenuSubContent;
  SubTrigger: typeof ActionMenuSubTrigger;
};

/**
 * ActionMenu
 */
export const ActionMenu: ActionMenuProps = {
  Root: ActionMenuRoot,
  Trigger: ActionMenuTrigger,
  Content: ActionMenuContent,
  Item: ActionMenuItem,
  Sub: ActionMenuSub,
  SubContent: ActionMenuSubContent,
  SubTrigger: ActionMenuSubTrigger,
};
