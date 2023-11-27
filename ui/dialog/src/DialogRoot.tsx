import * as DialogPrimitive from "@radix-ui/react-dialog";

import type { DialogProps as RadixDialogProps } from "@radix-ui/react-dialog";

const NAME = "DialogRoot";

export type DialogRootProps = RadixDialogProps;

export const DialogRoot = DialogPrimitive.Root;

DialogRoot.displayName = NAME;
