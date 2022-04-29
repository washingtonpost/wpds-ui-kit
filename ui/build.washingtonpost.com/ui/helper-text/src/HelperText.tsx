import * as React from "react";
import { theme, css } from "@washingtonpost/wpds-theme";

const NAME = "HelperText";

const HelperTextCSS = css({
  color: theme.colors.accessible,
  fontFamily: theme.fonts.meta,
  fontSize: theme.fontSizes["075"],
  fontWeight: theme.fontWeights.light,
  lineHeight: 1.33,
});

interface HelperTextProps extends React.ComponentPropsWithRef<"span"> {
  /** Allows any React node as children to allow for formatted text and links */
  children?: React.ReactNode;
  /** Id is used to associate the text with the `aria-describedby` attribute of another element */
  id?: string;
}

export const HelperText = React.forwardRef<HTMLSpanElement, HelperTextProps>(
  ({ children, ...rest }, ref) => {
    return (
      <span className={HelperTextCSS()} ref={ref} {...rest}>
        {children}
      </span>
    );
  }
);

HelperText.displayName = NAME;

export type { HelperTextProps };
