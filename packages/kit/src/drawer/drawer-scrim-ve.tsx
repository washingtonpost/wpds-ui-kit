import React from "react";
import { DrawerContextVE } from "./drawer-root-ve";
import { drawerScrimStyles } from "./Drawer.css";

const NAME = "DrawerScrimVE";

interface DrawerScrimVEProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Additional class name for scrim element */
  className?: string;
}

export const DrawerScrimVE: React.FC<DrawerScrimVEProps> = ({
  className,
  ...props
}) => {
  const context = React.useContext(DrawerContextVE);

  return (
    <div
      className={`${drawerScrimStyles} ${className || ""}`}
      data-state={context.open ? "open" : "closed"}
      style={{
        zIndex: (context.zIndex as number) - 1,
      }}
      onClick={() => {
        context.onOpenChange(false);
      }}
      {...props}
    />
  );
};

DrawerScrimVE.displayName = NAME;

export type { DrawerScrimVEProps };
