import React from "react";
import { useControllableState } from "@radix-ui/react-use-controllable-state";
import { vars } from "../theme/contracts.css";

interface DrawerContextInterface {
  triggerRef: React.RefObject<HTMLButtonElement>;
  contentId: string;
  open: boolean | undefined;
  defaultOpen: boolean | undefined;
  zIndex: number | string;
  onOpenChange: (boolean) => void;
}

export const DrawerContextVE = React.createContext(
  {} as DrawerContextInterface
);

type Controlled = {
  /** controlled drawer open state, used with onOpenChange */
  open: boolean;
  defaultOpen?: never;
};

type Uncontrolled = {
  open?: never;
  /** uncontrolled drawer open on mount */
  defaultOpen?: boolean;
};

type ControlledOrUncontrolled = Controlled | Uncontrolled;

type DrawerRootVEProps = {
  /** content id used for a11y */
  id: string;
  /** callback to respond to open state */
  onOpenChange?: (boolean) => void;
  children?: React.ReactNode;
  /** Css z-index of drawer @default shell z-index */
  zIndex?: number | string;
} & ControlledOrUncontrolled;

export const DrawerRootVE: React.FC<DrawerRootVEProps> = ({
  onOpenChange,
  open: openProp,
  id,
  defaultOpen,
  children,
  zIndex = vars.zIndices.shell,
}) => {
  const triggerRef = React.useRef(null);

  const [open, setOpen] = useControllableState({
    prop: openProp,
    defaultProp: defaultOpen,
    onChange: onOpenChange,
  });

  return (
    <DrawerContextVE.Provider
      value={{
        defaultOpen,
        triggerRef,
        contentId: id,
        open,
        onOpenChange: setOpen,
        zIndex,
      }}
    >
      {children}
    </DrawerContextVE.Provider>
  );
};

DrawerRootVE.displayName = "DrawerRootVE";

export type { DrawerRootVEProps };
