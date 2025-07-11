import { DialogRootVE, type DialogRootVEProps } from "./dialog-root-ve";
import {
  DialogContentVE,
  type DialogContentVEProps,
} from "./dialog-content-ve";
import {
  DialogOverlayVE,
  type DialogOverlayVEProps,
} from "./dialog-overlay-ve";
import { DialogPortalVE, type DialogPortalVEProps } from "./dialog-portal-ve";
import {
  DialogTriggerVE,
  type DialogTriggerVEProps,
} from "./dialog-trigger-ve";
import { DialogHeaderVE, type DialogHeaderVEProps } from "./dialog-header-ve";
import { DialogBodyVE, type DialogBodyVEProps } from "./dialog-body-ve";
import { DialogFooterVE, type DialogFooterVEProps } from "./dialog-footer-ve";
import { DialogTitleVE, type DialogTitleVEProps } from "./dialog-title-ve";
import {
  DialogDescriptionVE,
  type DialogDescriptionVEProps,
} from "./dialog-description-ve";
import { DialogCloseVE, type DialogCloseVEProps } from "./dialog-close-ve";

// Main Dialog component using vanilla-extract
const DialogVE = DialogRootVE;

export {
  DialogVE,
  DialogRootVE as DialogRoot,
  DialogContentVE as DialogContent,
  DialogOverlayVE as DialogOverlay,
  DialogPortalVE as DialogPortal,
  DialogTriggerVE as DialogTrigger,
  DialogHeaderVE as DialogHeader,
  DialogBodyVE as DialogBody,
  DialogFooterVE as DialogFooter,
  DialogTitleVE as DialogTitle,
  DialogDescriptionVE as DialogDescription,
  DialogCloseVE as DialogClose,
};

export type {
  DialogRootVEProps as DialogRootProps,
  DialogContentVEProps as DialogContentProps,
  DialogOverlayVEProps as DialogOverlayProps,
  DialogPortalVEProps as DialogPortalProps,
  DialogTriggerVEProps as DialogTriggerProps,
  DialogHeaderVEProps as DialogHeaderProps,
  DialogBodyVEProps as DialogBodyProps,
  DialogFooterVEProps as DialogFooterProps,
  DialogTitleVEProps as DialogTitleProps,
  DialogDescriptionVEProps as DialogDescriptionProps,
  DialogCloseVEProps as DialogCloseProps,
};

// Re-export component types for convenience
export type {
  DialogRootVEProps,
  DialogContentVEProps,
  DialogOverlayVEProps,
  DialogPortalVEProps,
  DialogTriggerVEProps,
  DialogHeaderVEProps,
  DialogBodyVEProps,
  DialogFooterVEProps,
  DialogTitleVEProps,
  DialogDescriptionVEProps,
  DialogCloseVEProps,
};
