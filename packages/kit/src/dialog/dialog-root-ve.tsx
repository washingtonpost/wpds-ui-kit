import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { useControllableState } from "@radix-ui/react-use-controllable-state";

import type { DialogProps as RadixDialogProps } from "@radix-ui/react-dialog";

type DialogContextInterface = {
  open: boolean | undefined;
};

export const DialogContextVE = React.createContext(
  {} as DialogContextInterface
);

const NAME = "DialogRootVE";

export type DialogRootVEProps = RadixDialogProps;

export const DialogRootVE = ({
  open: openProp,
  defaultOpen,
  onOpenChange,
  ...props
}: DialogRootVEProps) => {
  const [open, setOpen] = useControllableState({
    prop: openProp,
    defaultProp: defaultOpen,
    onChange: onOpenChange,
  });
  return (
    <DialogContextVE.Provider
      value={{
        open,
      }}
    >
      <DialogPrimitive.Root
        open={open}
        onOpenChange={(val) => setOpen(val)}
        {...props}
      />
    </DialogContextVE.Provider>
  );
};

DialogRootVE.displayName = NAME;
