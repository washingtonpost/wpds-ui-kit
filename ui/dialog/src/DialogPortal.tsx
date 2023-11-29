import * as DialogPrimitive from "@radix-ui/react-dialog";

import type { DialogPortalProps as RadixDialogPortalProps } from "@radix-ui/react-dialog";

const NAME = "DialogPortal";

export type DialogPortalProps = RadixDialogPortalProps;

export const DialogPortal = DialogPrimitive.Portal;

DialogPortal.displayName = NAME;
