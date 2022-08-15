import * as React from "react";
import { useControllableState } from "./hooks";

interface DrawerContextInterface {
  triggerRef: React.RefObject<HTMLElement>;
  contentId: string;
  open: boolean;
  defaultOpen: boolean | undefined;
  zIndex: [0, 1, 2, 3, 4, 5, 6] | number;
  customScrimBackgroundClass: string | undefined;
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
  /** custom scrim background class */
  customScrimBackgroundClass?: string;
  /** Uses our z-index tachyons
   * * it maxes out at z-6 since the DrawerContent will be z-7 if zIndex 6 is picked */
  zIndex?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
};

export const DrawerRoot: React.FC<DrawerRootProps> = ({
  onOpenChange,
  open: openProp,
  id,
  defaultOpen,
  children,
  customScrimBackgroundClass,
  zIndex = 1,
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
        customScrimBackgroundClass,
      }}
    >
      {children}
    </DrawerContext.Provider>
  );
};

DrawerRoot.displayName = "DrawerRoot";

export type { DrawerRootProps };
