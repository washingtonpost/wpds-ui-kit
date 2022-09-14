import * as React from "react";
import { DrawerContext } from "./DrawerRoot";
import { Scrim } from "@washingtonpost/wpds-scrim";
import type * as WPDS from "@washingtonpost/wpds-theme";

const NAME = "DrawerScrim";

type DrawerScrimProps = {
  /** Override CSS */
  css?: WPDS.CSS;
};

export const DrawerScrim = React.forwardRef<HTMLDivElement, DrawerScrimProps>(
  ({ children, ...props }, ref) => {
    const { onOpenChange, zIndex, open, defaultOpen } =
      React.useContext(DrawerContext);
    return (
      <Scrim
        onClick={() => {
          onOpenChange(false);
        }}
        ref={ref}
        zIndex={`calc(${zIndex} - 1)`}
        open={open || defaultOpen}
        {...props}
      >
        {children}
      </Scrim>
    );
  }
);

DrawerScrim.displayName = NAME;

export type { DrawerScrimProps };
