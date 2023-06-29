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
import { ActionMenuCheckboxItem } from "./ActionMenuCheckboxItem"
import { ActionMenuRadioGroup } from "./ActionMenuRadioGroup"
import { ActionMenuRadioItem } from "./ActionMenuRadioItem"
import { ActionMenuItemIndicator } from "./ActionMenuItemIndicator"
import { ActionMenuSeparator } from "./ActionMenuSeparator"


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
  CheckboxItem: typeof ActionMenuCheckboxItem;
  RadioGroup: typeof ActionMenuRadioGroup;
  RadioItem: typeof ActionMenuRadioItem;
  ItemIndicator: typeof ActionMenuItemIndicator;
  Separator: typeof ActionMenuSeparator;
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
  CheckboxItem: ActionMenuCheckboxItem,
  RadioGroup: ActionMenuRadioGroup,
  RadioItem: ActionMenuRadioItem,
  ItemIndicator: ActionMenuItemIndicator,
  Separator: ActionMenuSeparator
};
