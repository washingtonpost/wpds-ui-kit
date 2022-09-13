import * as React from "react";
import { theme } from "@washingtonpost/wpds-theme";
import { useControllableState } from "./hooks";

import type { Token } from "@stitches/react/types/theme";
import type { StandardLonghandProperties } from "@stitches/react/types/css";

interface DrawerContextInterface {
  triggerRef: React.RefObject<HTMLButtonElement>;
  contentId: string;
  open: boolean;
  defaultOpen: boolean | undefined;
  zIndex:
    | StandardLonghandProperties["zIndex"]
    | Token<"shell", string, "zIndices", "wpds">;
  onOpenChange: (boolean) => void;
}

export const DrawerContext = React.createContext({} as DrawerContextInterface);

type OpenOrDefaultOpen =
  | {
      /** controlled drawer open state, used with onOpenChange */
      open: boolean;
      defaultOpen?: never;
    }
  | {
      open?: never;
      /** uncontrolled drawer open on mount */
      defaultOpen?: boolean;
    };

type DrawerRootProps = {
  /** content id used for a11y */
  id: string;
  /** callback to respond to open state */
  onOpenChange?: (boolean) => void;
  children: React.ReactNode;
  /** Css z-index of drawer @default theme.zIndices.shell */
  zIndex?:
    | StandardLonghandProperties["zIndex"]
    | Token<"shell", string, "zIndices", "wpds">;
} & OpenOrDefaultOpen;

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
