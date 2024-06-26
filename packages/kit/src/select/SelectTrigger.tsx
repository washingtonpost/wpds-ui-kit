import React from "react";

import { nanoid } from "nanoid";

import { theme, styled } from "../theme";
import { ChevronDown } from "@washingtonpost/wpds-assets";
import { Icon } from "../icon";
import { ErrorMessage } from "../error-message";
import { HelperText } from "../helper-text";
import { sharedInputStyles, sharedInputVariants } from "../input-shared";

import * as SelectPrimitive from "@radix-ui/react-select";
import type * as WPDS from "../theme";
import { SelectTriggerProps as RadixAccordionTriggerProps } from "@radix-ui/react-select";

import { SelectContext } from "./SelectRoot";

const StyledTrigger = styled(SelectPrimitive.Trigger, {
  ...sharedInputStyles,

  display: "grid",
  gridTemplateAreas: "'label icon' 'value icon'",
  gridTemplateColumns: "1fr auto",
  gridTemplateRows: "0px auto",
  width: "100%",

  "&:focus-within": {
    borderColor: theme.colors.signal,
  },

  variants: {
    ...sharedInputVariants,

    success: {
      true: {
        borderColor: theme.colors.success,
      },
    },
    error: {
      true: {
        borderColor: theme.colors.error,
      },
    },
  },
});

const SubTextWrapper = styled("div", {
  width: "100%",
});

const IconWrapper = styled("div", {
  all: "unset",
  borderRadius: theme.radii["012"],
  marginInlineEnd: theme.space["050"],
  margin: "auto",
  cursor: "pointer",
  py: "$050",
  px: "$050",
  fontSize: "0",
  lineHeight: "0",
  gap: "0",
  maxWidth: "fit-content",
  variants: {
    isDisabled: {
      true: {
        cursor: "not-allowed",
      },
    },
  },
  gridArea: "icon",
});

const AnimatedIcon = styled(Icon, {
  transition: `transform ${theme.transitions.normal} ${theme.transitions.inOut}`,
  "@reducedMotion": {
    transition: "none",
  },
  '[aria-expanded="true"] &': {
    transform: "rotate(180deg)",
  },
});

type SelectTriggerVariants = WPDS.VariantProps<typeof StyledTrigger>;

type SelectTriggerProps = RadixAccordionTriggerProps &
  SelectTriggerVariants & {
    /** Used to insert select elements into the root component*/
    children?: React.ReactNode;
    /** Overrides for the input text styles. Padding overrides affect the input container and  */
    css?: WPDS.CSS;
  };

export const SelectTrigger = React.forwardRef<
  HTMLButtonElement,
  SelectTriggerProps
>(
  (
    { children, ...props }: SelectTriggerProps,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ref
  ) => {
    const [helperId, setHelperId] = React.useState<string | undefined>();
    const [errorId, setErrorId] = React.useState<string | undefined>();

    const {
      success,
      disabled,
      error,
      helperText,
      errorMessage,
      setContentWidth,
    } = React.useContext(SelectContext);

    const refCallback = React.useCallback(
      (el) => {
        el && setContentWidth(el.getBoundingClientRect().width);
      },
      [setContentWidth]
    );

    const id = nanoid();
    React.useEffect(() => {
      setHelperId(`wpds-input-helper-${id}`);
      setErrorId(`wpds-input-error-${id}`);
    }, []);

    return (
      <>
        <StyledTrigger
          success={success}
          error={error}
          disabled={disabled}
          isDisabled={disabled} //for styling purposes only
          ref={refCallback}
          {...props}
        >
          {children}
          <IconWrapper isDisabled={disabled}>
            <AnimatedIcon label="">
              <ChevronDown />
            </AnimatedIcon>
          </IconWrapper>
        </StyledTrigger>
        <SubTextWrapper>
          {helperText && !errorMessage && (
            <HelperText id={helperId} aria-live="polite">
              {helperText}
            </HelperText>
          )}
          {errorMessage && (
            <ErrorMessage id={errorId} aria-live="assertive">
              {errorMessage}
            </ErrorMessage>
          )}
        </SubTextWrapper>
      </>
    );
  }
);

SelectTrigger.displayName = "SelectTrigger";
