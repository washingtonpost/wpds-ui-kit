import React from "react";
import { Button } from "../button/button-ve";
import { DrawerContextVE } from "./drawer-root-ve";
import type { ButtonProps } from "../button/button-ve";

const NAME = "DrawerTriggerVE";

type DrawerTriggerVEProps = ButtonProps;

export const DrawerTriggerVE: React.FC<DrawerTriggerVEProps> = ({
  children,
  ...props
}) => {
  const context = React.useContext(DrawerContextVE);
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

DrawerTriggerVE.displayName = NAME;

export type { DrawerTriggerVEProps };
