import * as React from "react";
import * as Theme from "../theme";
import type * as WPDS from "../theme";

const NAME = "Fieldset";

const StyledFieldset = Theme.styled("fieldset", {
  border: "none",
  padding: "0",
});

/* additional rules normalize the display of legend element https://github.com/necolas/normalize.css/blob/master/normalize.css#L240*/
const LegendCSS = Theme.css({
  color: Theme.theme.colors.primary,
  display: "table",
  fontFamily: Theme.theme.fonts.meta,
  fontSize: Theme.theme.fontSizes["100"],
  fontWeight: Theme.theme.fontWeights.bold,
  lineHeight: Theme.theme.lineHeights["100"],
  marginBlockEnd: Theme.theme.space["050"],
  maxWidth: "100%",
  padding: "0",
  whiteSpace: "normal",
});

const RequiredIndicatorCSS = Theme.css({
  color: Theme.theme.colors.error,
});

interface FieldsetProps extends React.ComponentPropsWithRef<"fieldset"> {
  /** Override CSS */
  css?: WPDS.CSS;
  /** legend displayed above fieldset */
  legend: React.ReactNode;
  /** if the inputs in the fieldset are required */
  required?: boolean;
}

export const Fieldset = React.forwardRef<HTMLFieldSetElement, FieldsetProps>(
  ({ children, css, legend, required, ...props }, ref) => {
    return (
      <StyledFieldset css={css} {...props} ref={ref}>
        <legend className={LegendCSS()}>
          {legend}
          {required && <span className={RequiredIndicatorCSS()}>*</span>}
        </legend>
        {children}
      </StyledFieldset>
    );
  }
);

Fieldset.displayName = NAME;

export type { FieldsetProps };
