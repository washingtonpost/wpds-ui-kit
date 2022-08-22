import * as React from "react";
import { theme } from "@washingtonpost/wpds-theme";
import { useControllableState } from "./hooks";

interface DrawerContextInterface {
  triggerRef: React.RefObject<HTMLButtonElement>;
  contentId: string;
  open: boolean;
  defaultOpen: boolean | undefined;
  zIndex: typeof theme.zIndices.shell | number;
  onOpenChange: (boolean) => void;
}

export const DrawerContext = React.createContext({} as DrawerContextInterface);

type DrawerRootProps = {
  /** content id used for a11y */
  id: string;
  /** callback to respond to open state */
  onOpenChange?: (boolean) => void;
  /** controlled open state used with onOpenChange */
  open?: boolean;
  /** should the drawer be open by default (on mount) */
  defaultOpen?: boolean | undefined;
  children: React.ReactNode;
  /** zIndex of drawer @default theme.zIndices.shell */
  zIndex?: typeof theme.zIndices.shell | number;
};

export const DrawerRoot: React.FC<DrawerRootProps> = ({
  onOpenChange,
  open: openProp,
  id,
  defaultOpen,
  children,
  zIndex = theme.zIndices.shell,
}) => {
  const triggerRef = React.useRef(null);

  const [open, setOpen] = useControllableState({
    prop: openProp,
    defaultProp: defaultOpen,
    onChange: onOpenChange,
  });

  return (
    <DrawerContext.Provider
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
    </DrawerContext.Provider>
  );
};

DrawerRoot.displayName = "DrawerRoot";

export type { DrawerRootProps };
