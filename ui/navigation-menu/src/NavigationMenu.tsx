import { NavigationMenuRoot } from "./NavigationMenuRoot";
import { NavigationMenuList } from "./NavigationMenuList";
import { NavigationMenuItem } from "./NavigationMenuItem";
import { NavigationMenuLink } from "./NavigationMenuLink";
import { NavigationMenuTrigger } from "./NavigationMenuTrigger";
import { NavigationMenuContent } from "./NavigationMenuContent";
import { NavigationMenuSub } from "./NavigationMenuSub";

export type NavigationMenuProps = {
  Root: typeof NavigationMenuRoot;
  List: typeof NavigationMenuList;
  Item: typeof NavigationMenuItem;
  Link: typeof NavigationMenuLink;
  Trigger: typeof NavigationMenuTrigger;
  Content: typeof NavigationMenuContent;
  Sub: typeof NavigationMenuSub;
};

export const NavigationMenu: NavigationMenuProps = {
  Root: NavigationMenuRoot,
  List: NavigationMenuList,
  Item: NavigationMenuItem,
  Link: NavigationMenuLink,
  Trigger: NavigationMenuTrigger,
  Content: NavigationMenuContent,
  Sub: NavigationMenuSub,
};
