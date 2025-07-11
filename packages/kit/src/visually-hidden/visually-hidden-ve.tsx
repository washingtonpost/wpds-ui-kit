import React from "react";
import { visuallyHidden } from "./VisuallyHidden.css";

interface VisuallyHiddenProps extends React.ComponentPropsWithRef<"span"> {
  /** Override CSS class */
  className?: string;
}

export const VisuallyHiddenVE = React.forwardRef<
  HTMLSpanElement,
  VisuallyHiddenProps
>(({ children, className, ...rest }, ref) => {
  return (
    <span
      className={`${visuallyHidden} ${className || ""}`}
      ref={ref}
      {...rest}
    >
      {children}
    </span>
  );
});

VisuallyHiddenVE.displayName = "VisuallyHidden";
