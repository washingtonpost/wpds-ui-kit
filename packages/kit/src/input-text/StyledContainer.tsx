import * as React from "react";
import { theme, styled } from "../theme";
import type * as WPDS from "../theme";

import { sharedInputStyles, sharedInputVariants, FloatingLabelStyles } from "../input-shared";

import { TextInputLabel } from "./TextInputLabel";

const Container = styled("div", {
  ...sharedInputStyles,
  alignItems: "center",
  display: "flex",

  "&:focus-within": {
    borderColor: theme.colors.signal,

    [`& ${TextInputLabel}`]: {
      ...FloatingLabelStyles,
    },
  },

  variants: {
    ...sharedInputVariants,
    isDisabled: {
      true: {
        ...sharedInputVariants.isDisabled.true,
        "&:focus-within": {
          borderColor: theme.colors.disabled,
        },
      },
    },
    isInvalid: {
      true: {
        ...sharedInputVariants.isInvalid.true,
        "&:focus-within": {
          borderColor: theme.colors.error,
        },
      },
    },
    isSuccessful: {
      true: {
        borderColor: theme.colors.success,
      },
    },
  },
});

export type StyledContainerProps = {
  /**  used to override the container styles */
  css?: WPDS.CSS;
  /** Used to pass in the rest of the input*/
  children?: React.ReactNode;
} & React.ComponentPropsWithRef<typeof Container>;

export const StyledContainer = React.forwardRef<
  HTMLDivElement,
  StyledContainerProps
>(({ children, ...props }, ref) => (
  <Container {...props} ref={ref}>
    {children}
  </Container>
));

StyledContainer.displayName = "InputTextStyledContainer";
