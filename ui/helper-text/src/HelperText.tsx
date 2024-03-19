import * as React from "react";
import { theme, css } from "@washingtonpost/wpds-theme";

const NAME = "HelperText";

const HelperTextCSS = css({
  color: theme.colors.accessible,
  fontFamily: theme.fonts.meta,
  fontSize: theme.fontSizes["075"],
  fontWeight: theme.fontWeights.light,
  lineHeight: 1.33,
  marginBlock: 0,
});

interface HelperTextProps extends React.ComponentPropsWithRef<"p"> {
  /** Allows any React node as children to allow for formatted text and links */
  children?: React.ReactNode;
  /** Id is used to associate the text with the `aria-describedby` attribute of another element */
  id?: string;
}

export const HelperText = React.forwardRef<
  HTMLParagraphElement,
  HelperTextProps
>(({ children, ...rest }, ref) => {
  return (
    <p className={HelperTextCSS()} ref={ref} {...rest}>
      {children}
    </p>
  );
});

HelperText.displayName = NAME;

export type { HelperTextProps };
