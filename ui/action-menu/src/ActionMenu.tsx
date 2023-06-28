import { ActionMenuRoot } from "./ActionMenuRoot";
import { ActionMenuTrigger } from "./ActionMenuTrigger";
import { ActionMenuContent } from "./ActionMenuContent";
import { ActionMenuItem } from "./ActionMenuItem";
import { ActionMenuSub } from "./ActionMenuSub";
import { ActionMenuSubContent } from "./ActionMenuSubContent";
import { ActionMenuSubTrigger } from "./ActionMenuSubTrigger";
import { ActionMenuPortal } from "./ActionMenuPortal";
import { ActionMenuGroup } from "./ActionMenuGroup";
import { ActionMenuLabel } from "./ActionMenuLabel"
import { ActionMenuRootCheckboxItem } from "./ActionMenuCheckboxItem"
import { ActionMenuRootRadioGroup } from "./ActionMenuRadioGroup"
import { ActionMenuRootRadioItem } from "./ActionMenuRadioItem"
import { ActionMenuRootItemIndicator } from "./ActionMenuItemIndicator"
import { ActionMenuRootSeparator } from "./ActionMenuSeparator"


type ActionMenuProps = {
  Root: typeof ActionMenuRoot;
  Trigger: typeof ActionMenuTrigger;
  Content: typeof ActionMenuContent;
  Item: typeof ActionMenuItem;
  Sub: typeof ActionMenuSub;
  SubContent: typeof ActionMenuSubContent;
  SubTrigger: typeof ActionMenuSubTrigger;
  Portal: typeof ActionMenuPortal;
  Group: typeof ActionMenuGroup;
  Label: typeof ActionMenuLabel;
  CheckboxItem: typeof ActionMenuRootCheckboxItem;
  RadioGroup: typeof ActionMenuRootRadioGroup;
  RadioItem: typeof ActionMenuRootRadioItem;
  ItemIndicator: typeof ActionMenuRootItemIndicator;
  Separator: typeof ActionMenuRootSeparator;
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
  Portal: ActionMenuPortal,
  Group: ActionMenuGroup,
  Label: ActionMenuLabel,
  CheckboxItem: ActionMenuRootCheckboxItem,
  RadioGroup: ActionMenuRootRadioGroup,
  RadioItem: ActionMenuRootRadioItem,
  ItemIndicator: ActionMenuRootItemIndicator,
  Separator: ActionMenuRootSeparator

};
