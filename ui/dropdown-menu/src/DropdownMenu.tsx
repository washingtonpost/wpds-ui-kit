import { DropdownMenuRoot } from "./DropdownMenuRoot";
import { DropdownMenuTrigger } from "./DropdownMenuTrigger";

type DropdownMenuProps = {
  Root: typeof DropdownMenuRoot;
  Trigger: typeof DropdownMenuTrigger
};

/**
 * DropdownMenu
 */
export const DropdownMenu: DropdownMenuProps = {
  Root: DropdownMenuRoot,
  Trigger: DropdownMenuTrigger,
};
