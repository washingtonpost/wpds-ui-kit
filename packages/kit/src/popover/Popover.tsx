import { PopoverRoot } from "./PopoverRoot";
import { PopoverPortal } from "./PopoverPortal";
import { PopoverContent } from "./PopoverContent";
import { PopoverTrigger } from "./PopoverTrigger";
import { PopoverAnchor } from "./PopoverAnchor";
import { PopoverClose } from "./PopoverClose";

export type PopoverProps = {
  Root: typeof PopoverRoot;
  Portal: typeof PopoverPortal;
  Content: typeof PopoverContent;
  Trigger: typeof PopoverTrigger;
  Anchor: typeof PopoverAnchor;
  Close: typeof PopoverClose;
};

export const Popover: PopoverProps = {
  Root: PopoverRoot,
  Portal: PopoverPortal,
  Content: PopoverContent,
  Trigger: PopoverTrigger,
  Anchor: PopoverAnchor,
  Close: PopoverClose,
};
