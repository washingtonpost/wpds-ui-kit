import { ActionMenuCheckboxItem } from "./ActionMenuCheckboxItem"
import { ActionMenuContent } from "./ActionMenuContent";
import { ActionMenuGroup } from "./ActionMenuGroup";
import { ActionMenuItem } from "./ActionMenuItem";
import { ActionMenuItemIndicator } from "./ActionMenuItemIndicator"
import { ActionMenuLabel } from "./ActionMenuLabel"
import { ActionMenuPortal } from "./ActionMenuPortal";
import { ActionMenuRadioGroup } from "./ActionMenuRadioGroup"
import { ActionMenuRadioItem } from "./ActionMenuRadioItem"
import { ActionMenuRoot } from "./ActionMenuRoot";
import { ActionMenuSeparator } from "./ActionMenuSeparator"
import { ActionMenuSub } from "./ActionMenuSub";
import { ActionMenuSubContent } from "./ActionMenuSubContent";
import { ActionMenuSubTrigger } from "./ActionMenuSubTrigger";
import { ActionMenuTrigger } from "./ActionMenuTrigger";


type ActionMenuProps = {
  CheckboxItem: typeof ActionMenuCheckboxItem;
  Content: typeof ActionMenuContent;
  Group: typeof ActionMenuGroup;
  Item: typeof ActionMenuItem;
  ItemIndicator: typeof ActionMenuItemIndicator;
  Label: typeof ActionMenuLabel;
  Portal: typeof ActionMenuPortal;
  RadioGroup: typeof ActionMenuRadioGroup;
  RadioItem: typeof ActionMenuRadioItem;
  Root: typeof ActionMenuRoot;
  Separator: typeof ActionMenuSeparator;
  Sub: typeof ActionMenuSub;
  SubContent: typeof ActionMenuSubContent;
  SubTrigger: typeof ActionMenuSubTrigger;
  Trigger: typeof ActionMenuTrigger;
};

/**
 * ActionMenu
 */
export const ActionMenu: ActionMenuProps = {
  CheckboxItem: ActionMenuCheckboxItem,
  Content: ActionMenuContent,
  Group: ActionMenuGroup,
  Item: ActionMenuItem,
  ItemIndicator: ActionMenuItemIndicator,
  Label: ActionMenuLabel,
  Portal: ActionMenuPortal,
  RadioGroup: ActionMenuRadioGroup,
  RadioItem: ActionMenuRadioItem,
  Root: ActionMenuRoot,
  Separator: ActionMenuSeparator,
  Sub: ActionMenuSub,
  SubContent: ActionMenuSubContent,
  SubTrigger: ActionMenuSubTrigger,
  Trigger: ActionMenuTrigger,
};
