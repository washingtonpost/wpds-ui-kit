import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
//import type { RadioGroupItemProps } from "@radix-ui/react-radio-group";
import * as Theme from "@washingtonpost/wpds-theme";
import type * as WPDS from "@washingtonpost/wpds-theme";
import { InputLabel } from "@washingtonpost/wpds-input-label";

const NAME = "RadioButton";

const ContainerCSS = Theme.css({
  alignItems: "center",
  display: "flex",
});

const StyledRadioButton = Theme.styled(RadioGroupPrimitive.Item, {
  borderStyle: "solid",
  borderWidth: "1px",
  width: 20,
  height: 20,
  borderRadius: "50%",
  "&:focus": { borderColor: Theme.theme.colors.cta },
  "&:disabled": {
    backgroundColor: Theme.theme.colors.disabled,
    borderColor: Theme.theme.colors.onDisabled,
  },
  variants: {
    variant: {
      primary: {
        backgroundColor: Theme.theme.colors.onPrimary,
        borderColor: Theme.theme.colors.primary,
      },
      secondary: {
        backgroundColor: Theme.theme.colors.onSecondary,
        borderColor: Theme.theme.colors.secondary,
      },
      cta: {
        backgroundColor: Theme.theme.colors.onPrimary,
        borderColor: Theme.theme.colors.cta,
      },
    },
    isOutline: {
      true: {
        backgroundColor: "transparent",
      },
    },
    isInvalid: {
      true: {
        borderColor: Theme.theme.colors.error,
      },
    },
  },
});

const StyledRadioIndicator = Theme.styled(RadioGroupPrimitive.Indicator, {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  position: "relative",
  "&::after": {
    content: '""',
    display: "block",
    width: 10,
    height: 10,
    borderRadius: "50%",
    backgroundColor: Theme.theme.colors.primary,
  },
  variants: {
    variant: {
      primary: {
        "&::after": {
          backgroundColor: Theme.theme.colors.primary,
        },
      },
      secondary: {
        "&::after": {
          backgroundColor: Theme.theme.colors.secondary,
        },
      },
      cta: {
        "&::after": {
          backgroundColor: Theme.theme.colors.cta,
        },
      },
    },
    isDisabled: {
      true: {
        "&::after": {
          backgroundColor: Theme.theme.colors.onDisabled,
        },
      },
    },
  },
});

interface RadioButtonProps
  extends React.ComponentProps<typeof StyledRadioButton> {
  /** displays error state with colored border */
  error?: boolean;
  /** Override CSS */
  css?: WPDS.CSS;
  /** id of input */
  id: string;
  /** label text displayed next to button */
  label: string;
  /** underlying value for input */
  value: string;
}

export const RadioButton = React.forwardRef<
  HTMLButtonElement,
  RadioButtonProps
>(
  (
    { css, id, label, value, variant = "primary", disabled, error, ...props },
    ref
  ) => {
    return (
      <div className={ContainerCSS()}>
        <StyledRadioButton
          ref={ref}
          css={css}
          id={id}
          isInvalid={error}
          value={value}
          variant={variant}
          disabled={disabled}
          {...props}
        >
          <StyledRadioIndicator variant={variant} isDisabled={disabled} />
        </StyledRadioButton>
        <InputLabel
          htmlFor={id}
          css={{ paddingInlineStart: Theme.theme.space["050"] }}
        >
          {label}
        </InputLabel>
      </div>
    );
  }
);

RadioButton.displayName = NAME;

export type { RadioButtonProps };
