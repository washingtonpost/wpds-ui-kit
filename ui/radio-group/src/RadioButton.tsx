import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import * as Theme from "@washingtonpost/wpds-theme";
import type * as WPDS from "@washingtonpost/wpds-theme";
import { InputLabel } from "@washingtonpost/wpds-input-label";

const NAME = "RadioButton";

const ContainerCSS = Theme.css({
  alignItems: "flex-start",
  display: "flex",
});

const StyledRadioButton = Theme.styled(RadioGroupPrimitive.Item, {
  backgroundColor: Theme.theme.colors.onPrimary,
  borderColor: Theme.theme.colors.subtle,
  borderStyle: "solid",
  borderRadius: "50%",
  borderWidth: "1px",
  cursor: "pointer",
  transition: Theme.theme.transitions.allFast,
  width: Theme.theme.sizes["125"],
  minWidth: Theme.theme.sizes["125"],
  height: Theme.theme.sizes["125"],
  "&:focus": { borderColor: Theme.theme.colors.cta },
  "&:focus-visible": { outline: "none" },
  "&:disabled": {
    backgroundColor: Theme.theme.colors.disabled,
    borderColor: Theme.theme.colors.onDisabled,
  },
  variants: {
    variant: {
      primary: {
        "&[aria-checked='true']:enabled:not(:focus)": {
          borderColor: Theme.theme.colors.primary,
        },
      },
      secondary: {
        "&[aria-checked='true']:enabled:not(:focus)": {
          borderColor: Theme.theme.colors.secondary,
        },
        "&[aria-checked='true']:enabled": {
          backgroundColor: Theme.theme.colors.onSecondary,
        },
      },
      cta: {
        "&[aria-checked='true']:enabled:not(:focus)": {
          borderColor: Theme.theme.colors.cta,
        },
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
        "&[aria-checked='true']:enabled:not(:focus)": {
          borderColor: Theme.theme.colors.error,
        },
      },
    },
  },
  compoundVariants: [
    {
      variant: "secondary",
      isOutline: true,
      css: {
        "&[aria-checked='true']:enabled": {
          backgroundColor: "transparent",
        },
      },
    },
  ],
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
    width: "0.625rem",
    height: "0.625rem",
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

const labelCSS = {
  cursor: "pointer",
  paddingBlockStart: "0.125rem",
  paddingInlineStart: Theme.theme.space["050"],
};

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
        <InputLabel htmlFor={id} css={labelCSS}>
          {label}
        </InputLabel>
      </div>
    );
  }
);

RadioButton.displayName = NAME;

export type { RadioButtonProps };
