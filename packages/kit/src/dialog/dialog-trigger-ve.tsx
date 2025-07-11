import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";

const NAME = "DialogTriggerVE";

export type DialogTriggerVEProps = {
  /** Any React node may be used as a child */
  children?: React.ReactNode;
  /** Override CSS */
  className?: string;
} & React.ComponentPropsWithRef<typeof DialogPrimitive.Trigger>;

export const DialogTriggerVE = React.forwardRef<
  HTMLButtonElement,
  DialogTriggerVEProps
>(({ ...props }, ref) => <DialogPrimitive.Trigger {...props} ref={ref} />);

DialogTriggerVE.displayName = NAME;
