import { DrawerRootVE, type DrawerRootVEProps } from "./drawer-root-ve";
import { DrawerContentVE, type DrawerContentVEProps } from "./drawer-content-ve";
import { DrawerTriggerVE, type DrawerTriggerVEProps } from "./drawer-trigger-ve";
import { DrawerCloseVE, type DrawerCloseVEProps } from "./drawer-close-ve";
import { DrawerCustomTriggerVE, type DrawerCustomTriggerVEProps } from "./drawer-custom-trigger-ve";
import { DrawerScrimVE, type DrawerScrimVEProps } from "./drawer-scrim-ve";

type DrawerVEProps = {
  Root: typeof DrawerRootVE;
  Content: typeof DrawerContentVE;
  Trigger: typeof DrawerTriggerVE;
  Close: typeof DrawerCloseVE;
  CustomTrigger: typeof DrawerCustomTriggerVE;
  Scrim: typeof DrawerScrimVE;
};

export const DrawerVE: DrawerVEProps = {
  Root: DrawerRootVE,
  Content: DrawerContentVE,
  Trigger: DrawerTriggerVE,
  Close: DrawerCloseVE,
  CustomTrigger: DrawerCustomTriggerVE,
  Scrim: DrawerScrimVE,
};

// Re-export individual components for convenience
export {
  DrawerRootVE as DrawerRoot,
  DrawerContentVE as DrawerContent,
  DrawerTriggerVE as DrawerTrigger,
  DrawerCloseVE as DrawerClose,
  DrawerCustomTriggerVE as DrawerCustomTrigger,
  DrawerScrimVE as DrawerScrim,
};

// Re-export types
export type {
  DrawerRootVEProps as DrawerRootProps,
  DrawerContentVEProps as DrawerContentProps,
  DrawerTriggerVEProps as DrawerTriggerProps,
  DrawerCloseVEProps as DrawerCloseProps,
  DrawerCustomTriggerVEProps as DrawerCustomTriggerProps,
  DrawerScrimVEProps as DrawerScrimProps,
};

// Re-export component types for convenience
export type {
  DrawerRootVEProps,
  DrawerContentVEProps,
  DrawerTriggerVEProps,
  DrawerCloseVEProps,
  DrawerCustomTriggerVEProps,
  DrawerScrimVEProps,
};
