import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { useControllableState } from "@radix-ui/react-use-controllable-state";

import type { DialogProps as RadixDialogProps } from "@radix-ui/react-dialog";

type DialogContextInterface = {
  open: boolean | undefined;
};

export const DialogContext = React.createContext({} as DialogContextInterface);

const NAME = "DialogRoot";

export type DialogRootProps = RadixDialogProps;

export const DialogRoot = ({
  open: openProp,
  defaultOpen,
  onOpenChange,
  ...props
}: DialogRootProps) => {
  const [open, setOpen] = useControllableState({
    prop: openProp,
    defaultProp: defaultOpen,
    onChange: onOpenChange,
  });
  return (
    <DialogContext.Provider
      value={{
        open,
      }}
    >
      <DialogPrimitive.Root
        open={open}
        onOpenChange={(val) => setOpen(val)}
        {...props}
      />
    </DialogContext.Provider>
  );
};

DialogRoot.displayName = NAME;
