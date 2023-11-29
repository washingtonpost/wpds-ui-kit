import { DialogRoot } from "./DialogRoot";
import { DialogContent } from "./DialogContent";
import { DialogTrigger } from "./DialogTrigger";
import { DialogPortal } from "./DialogPortal";
import { DialogOverlay } from "./DialogOverlay";
import { DialogTitle } from "./DialogTitle";
import { DialogDescription } from "./DialogDescription";
import { DialogClose } from "./DialogClose";
import { DialogHeader } from "./DialogHeader";
import { DialogBody } from "./DialogBody";
import { DialogFooter } from "./DialogFooter";

export type DialogProps = {
  Root: typeof DialogRoot;
  Content: typeof DialogContent;
  Trigger: typeof DialogTrigger;
  Portal: typeof DialogPortal;
  Overlay: typeof DialogOverlay;
  Title: typeof DialogTitle;
  Description: typeof DialogDescription;
  Close: typeof DialogClose;
  Header: typeof DialogHeader;
  Body: typeof DialogBody;
  Footer: typeof DialogFooter;
};

export const Dialog: DialogProps = {
  Root: DialogRoot,
  Content: DialogContent,
  Trigger: DialogTrigger,
  Portal: DialogPortal,
  Overlay: DialogOverlay,
  Title: DialogTitle,
  Description: DialogDescription,
  Close: DialogClose,
  Header: DialogHeader,
  Body: DialogBody,
  Footer: DialogFooter,
};
