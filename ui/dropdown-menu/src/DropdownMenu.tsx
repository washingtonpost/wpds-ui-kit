import { DropdownMenuRoot } from "./DropdownMenuRoot";
import { DropdownMenuTrigger } from "./DropdownMenuTrigger";
import { DropdownMenuContent } from "./DropdownMenuContent";
import { DropdownMenuArrow } from "./DropdownMenuArrow";

type DropdownMenuProps = {
  Root: typeof DropdownMenuRoot;
  Trigger: typeof DropdownMenuTrigger;
  Content: typeof DropdownMenuContent;
  Arrow: typeof DropdownMenuArrow;
};

/**
 * DropdownMenu
 */
export const DropdownMenu: DropdownMenuProps = {
  Root: DropdownMenuRoot,
  Trigger: DropdownMenuTrigger,
  Content: DropdownMenuContent,
  Arrow: DropdownMenuArrow,
};
