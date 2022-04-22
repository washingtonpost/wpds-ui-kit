import * as React from "react";
import { theme, css } from "@washingtonpost/wpds-theme";

const NAME = "ErrorMessage";

const ErrorMessageCSS = css({
  color: theme.colors.error,
  fontFamily: theme.fonts.meta,
  fontSize: theme.fontSizes["075"],
  fontWeight: theme.fontWeights.light,
  lineHeight: 1.33,
});

interface ErrorMessageProps extends React.ComponentPropsWithRef<"span"> {
  /** Allows any React node as children to allow for formatted text and links */
  children?: React.ReactNode;
  /** Id is used to associate the error message with the `aria-errormessage` attribute of another element */
  id?: string;
}

export const ErrorMessage = React.forwardRef<
  HTMLSpanElement,
  ErrorMessageProps
>(({ children, ...rest }, ref) => {
  return (
    <span className={ErrorMessageCSS()} ref={ref} {...rest}>
      {children}
    </span>
  );
});

ErrorMessage.displayName = NAME;

export type { ErrorMessageProps };
