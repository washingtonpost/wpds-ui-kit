import React from "react";
import { errorMessage } from "./ErrorMessage.css";

const NAME = "ErrorMessage";

interface ErrorMessageProps extends React.ComponentPropsWithRef<"p"> {
  /** Allows any React node as children to allow for formatted text and links */
  children?: React.ReactNode;
  /** Id is used to associate the error message with the `aria-errormessage` attribute of another element */
  id?: string;
}

export const ErrorMessageVE = React.forwardRef<
  HTMLParagraphElement,
  ErrorMessageProps
>(({ children, className, ...rest }, ref) => {
  return (
    <p className={`${errorMessage} ${className || ""}`} ref={ref} {...rest}>
      {children}
    </p>
  );
});

ErrorMessageVE.displayName = NAME;
