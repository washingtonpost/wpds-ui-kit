import * as React from "react";
import { styled } from "../theme";
import { DrawerContext } from "./DrawerRoot";

const NAME = "DrawerCustomTrigger";

const StyledElement = styled("button", {});

type DrawerCustomTriggerProps = React.ComponentPropsWithoutRef<
  typeof StyledElement
> & { as?: string };

export const DrawerCustomTrigger: React.FC<DrawerCustomTriggerProps> = ({
  children,
  ...props
}) => {
  const context = React.useContext(DrawerContext);
  return (
    <StyledElement
      aria-haspopup="dialog"
      aria-expanded={context.open}
      aria-controls={context.contentId}
      onClick={() => {
        context.onOpenChange(true);
      }}
      onKeyPress={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          context.onOpenChange(true);
        }
      }}
      ref={context.triggerRef}
      role="button"
      tabIndex={0}
      {...props}
    >
      {children}
    </StyledElement>
  );
};

DrawerCustomTrigger.displayName = NAME;

export type { DrawerCustomTriggerProps };
