import * as React from "react";
import { Button } from "@washingtonpost/wpds-button";
import { DrawerContext } from "./DrawerRoot";

const NAME = "DrawerTrigger";

type DrawerTriggerProps = React.ComponentPropsWithRef<typeof Button>;

export const DrawerTrigger = React.forwardRef<
  HTMLButtonElement,
  DrawerTriggerProps
>(({ children, ...props }, ref) => {
  const context = React.useContext(DrawerContext);
  return (
    <Button
      ref={ref}
      aria-haspopup="dialog"
      aria-expanded={context.open || false}
      aria-controls={context.contentId}
      onClick={() => {
        context.onOpenChange(true);
      }}
      {...props}
    >
      {children}
    </Button>
  );
});

DrawerTrigger.displayName = NAME;

export type { DrawerTriggerProps };
