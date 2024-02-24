import React from "react";
import { DrawerContext } from "./DrawerRoot";
import { Scrim } from "../scrim";

const NAME = "DrawerScrim";

type DrawerScrimProps = Omit<
  React.ComponentPropsWithRef<typeof Scrim>,
  "open" | "zIndex"
>;

export const DrawerScrim = React.forwardRef<HTMLDivElement, DrawerScrimProps>(
  ({ children, onClick, ...props }, ref) => {
    const { onOpenChange, zIndex, open, defaultOpen } =
      React.useContext(DrawerContext);
    return (
      <Scrim
        onClick={(event) => {
          onOpenChange(false);
          onClick && onClick(event);
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
