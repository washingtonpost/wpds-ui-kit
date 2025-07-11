import React from "react";
import { helperText } from "./HelperText.css";

const NAME = "HelperText";

interface HelperTextProps extends React.ComponentPropsWithRef<"p"> {
  /** Allows any React node as children to allow for formatted text and links */
  children?: React.ReactNode;
  /** Id is used to associate the text with the `aria-describedby` attribute of another element */
  id?: string;
}

export const HelperTextVE = React.forwardRef<
  HTMLParagraphElement,
  HelperTextProps
>(({ children, className, ...rest }, ref) => {
  return (
    <p className={`${helperText} ${className || ""}`} ref={ref} {...rest}>
      {children}
    </p>
  );
});

HelperTextVE.displayName = NAME;
