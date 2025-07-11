import React from "react";
import { DrawerContextVE } from "./drawer-root-ve";

const NAME = "DrawerCustomTriggerVE";

interface DrawerCustomTriggerVEProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  /** Element type to render as @default button */
  as?: React.ElementType;
}

export const DrawerCustomTriggerVE = React.forwardRef<
  HTMLButtonElement,
  DrawerCustomTriggerVEProps
>(({ children, as: Component = "button", ...props }, ref) => {
  const context = React.useContext(DrawerContextVE);
  
  const handleClick = () => {
    context.onOpenChange(true);
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      context.onOpenChange(true);
    }
  };

  return (
    <Component
      ref={ref}
      aria-haspopup="dialog"
      aria-expanded={context.open}
      aria-controls={context.contentId}
      onClick={handleClick}
      onKeyPress={handleKeyPress}
      role="button"
      tabIndex={0}
      {...props}
    >
      {children}
    </Component>
  );
});

DrawerCustomTriggerVE.displayName = NAME;

export type { DrawerCustomTriggerVEProps };
