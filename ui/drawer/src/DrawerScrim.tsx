import * as React from "react";
import { styled } from "@washingtonpost/wpds-theme";
import { DrawerContext } from "./DrawerRoot";

const NAME = "DrawerScrim";

const StyledElement = styled("div", {
  backgroundColor: "rgba(0, 0, 0, 0.25)",
  position: "fixed",
  inset: 0,
  display: "none",
  variants: {
    open: {
      true: {
        display: "block",
      },
    },
  },
});

type DrawerScrimProps = React.ComponentPropsWithRef<typeof StyledElement>;

export const DrawerScrim = React.forwardRef<HTMLDivElement, DrawerScrimProps>(
  ({ children, ...props }, ref) => {
    const { onOpenChange, zIndex, open, defaultOpen } =
      React.useContext(DrawerContext);
    return (
      <StyledElement
        onClick={() => {
          onOpenChange(false);
        }}
        ref={ref}
        css={{
          zIndex: `calc(${zIndex} - 1)`,
        }}
        open={open || defaultOpen}
        {...props}
      >
        {children}
      </StyledElement>
    );
  }
);

DrawerScrim.displayName = NAME;

export type { DrawerScrimProps };
