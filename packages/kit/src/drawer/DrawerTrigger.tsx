import React from "react";
import { Button } from "../button";
import { DrawerContext } from "./DrawerRoot";

const NAME = "DrawerTrigger";

type DrawerTriggerProps = React.ComponentPropsWithoutRef<typeof Button>;

export const DrawerTrigger: React.FC<DrawerTriggerProps> = ({
  children,
  ...props
}) => {
  const context = React.useContext(DrawerContext);
  return (
    <Button
      ref={context.triggerRef}
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
};

DrawerTrigger.displayName = NAME;

export type { DrawerTriggerProps };
