import * as React from "react";
import { styled, theme } from "@washingtonpost/wpds-theme";
import type * as WPDS from "@washingtonpost/wpds-theme";
import * as Label from "@radix-ui/react-label";
import type { LabelProps } from "@radix-ui/react-label";
import { RequiredIndicatorCSS } from "@washingtonpost/wpds-input-shared";

const NAME = "InputLabel";

const StyledLabel = styled(Label.Root, {
  color: theme.colors.accessible,
  fontFamily: theme.fonts.meta,
  fontSize: theme.fontSizes["100"],
  fontWeight: theme.fontWeights.light,
  lineHeight: theme.lineHeights["110"],

  variants: {
    isDisabled: {
      true: {
        color: theme.colors.onDisabled,
      },
    },
  },
});

interface InputLabelProps extends LabelProps {
  /** Any React node may be used as a child to allow for formatting */
  children?: React.ReactNode;
  /** Override CSS */
  css?: WPDS.CSS;
  /** if the labeled input is disabled */
  disabled?: boolean;
  /** if the labeled input is required */
  required?: boolean;
}

export const InputLabel = React.forwardRef<HTMLSpanElement, InputLabelProps>(
  ({ children, css, disabled, required, ...props }, ref) => {
    return (
      <StyledLabel ref={ref} css={css} isDisabled={disabled} {...props}>
        {children}
        {required && <span className={RequiredIndicatorCSS()}>*</span>}
      </StyledLabel>
    );
  }
);

InputLabel.displayName = NAME;

export type { InputLabelProps };
