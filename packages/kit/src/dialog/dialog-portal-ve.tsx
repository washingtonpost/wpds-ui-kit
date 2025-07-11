import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";

import type { DialogPortalProps as RadixDialogPortalProps } from "@radix-ui/react-dialog";

const NAME = "DialogPortalVE";

export type DialogPortalVEProps = RadixDialogPortalProps;

export const DialogPortalVE = ({
  forceMount = true,
  ...props
}: DialogPortalVEProps) => (
  <DialogPrimitive.Portal forceMount={forceMount} {...props} />
);

DialogPortalVE.displayName = NAME;
