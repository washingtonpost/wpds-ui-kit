import { DrawerRoot } from "./DrawerRoot";
import { DrawerContent } from "./DrawerContent";
import { DrawerTrigger } from "./DrawerTrigger";
import { DrawerClose } from "./DrawerClose";
import { DrawerCustomTrigger } from "./DrawerCustomTrigger";
import { DrawerScrim } from "./DrawerScrim";

type DrawerProps = {
  Root: typeof DrawerRoot;
  Content: typeof DrawerContent;
  Trigger: typeof DrawerTrigger;
  Close: typeof DrawerClose;
  CustomTrigger: typeof DrawerCustomTrigger;
  Scrim: typeof DrawerScrim;
};

export const Drawer: DrawerProps = {
  Root: DrawerRoot,
  Content: DrawerContent,
  Trigger: DrawerTrigger,
  Close: DrawerClose,
  CustomTrigger: DrawerCustomTrigger,
  Scrim: DrawerScrim,
};
