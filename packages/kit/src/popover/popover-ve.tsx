import { PopoverRootVE } from "./popover-root-ve";
import { PopoverPortalVE } from "./popover-portal-ve";
import { PopoverContentVE } from "./popover-content-ve";
import { PopoverTriggerVE } from "./popover-trigger-ve";
import { PopoverAnchorVE } from "./popover-anchor-ve";
import { PopoverCloseVE } from "./popover-close-ve";

export type PopoverVEProps = {
  Root: typeof PopoverRootVE;
  Portal: typeof PopoverPortalVE;
  Content: typeof PopoverContentVE;
  Trigger: typeof PopoverTriggerVE;
  Anchor: typeof PopoverAnchorVE;
  Close: typeof PopoverCloseVE;
};

export const PopoverVE: PopoverVEProps = {
  Root: PopoverRootVE,
  Portal: PopoverPortalVE,
  Content: PopoverContentVE,
  Trigger: PopoverTriggerVE,
  Anchor: PopoverAnchorVE,
  Close: PopoverCloseVE,
};

// Individual exports for convenience
export {
  PopoverRootVE,
  PopoverPortalVE,
  PopoverContentVE,
  PopoverTriggerVE,
  PopoverAnchorVE,
  PopoverCloseVE,
};
