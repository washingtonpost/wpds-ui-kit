import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { nanoid } from "nanoid";
import { theme, styled } from "@washingtonpost/wpds-theme";
import { Box } from "@washingtonpost/wpds-box";
import { Button } from "@washingtonpost/wpds-button";
import { Icon } from "@washingtonpost/wpds-icon";
import { VisuallyHidden } from "@washingtonpost/wpds-visually-hidden";
import Search from "@washingtonpost/wpds-assets/asset/search";
import Globe from "@washingtonpost/wpds-assets/asset/globe";
import Phone from "@washingtonpost/wpds-assets/asset/phone";
import Email from "@washingtonpost/wpds-assets/asset/email";

const NAME = "InputText";

const StyledContainer = styled(Box, {
  alignItems: "center",
  borderRadius: theme.radii["012"],
  borderColor: theme.colors.subtle,
  borderStyle: "solid",
  borderWidth: "1px",
  backgroundColor: theme.colors.secondary,
  display: "flex",
  fontFamily: theme.fonts.meta,
  fontSize: theme.fontSizes["100"],
  fontWeight: theme.fontWeights.light,
  lineHeight: theme.lineHeights["125"],

  "&:focus-within": {
    borderColor: theme.colors.signal,
  },

  variants: {
    isDisabled: {
      true: {
        backgroundColor: theme.colors.disabled,
        borderColor: theme.colors.disabled,
        color: theme.colors.onDisabled,
        "&:focus-within": {
          borderColor: theme.colors.disabled,
        },
      },
    },
    isInvalid: {
      true: {
        borderColor: theme.colors.error,
      },
    },
    isSuccessful: {
      true: {
        borderColor: theme.colors.success,
      },
    },
  },
});

const LabelInputWrapper = styled("div", {
  flex: 1,
  position: "relative",
});

const UnstyledInput = styled("input", {
  backgroundColor: "transparent",
  border: "none",
  display: "block",
  fontSize: "inherit",
  lineHeight: "inherit",
  paddingBlockStart: theme.space["125"],
  paddingBlockEnd: theme.space["050"],
  paddingInline: theme.space["050"],
  textOverflow: "ellipsis",
  width: "100%",

  "&:focus": {
    outline: "none",
  },

  "&:disabled": {
    color: "inherit",
  },
});

const StyledLabel = styled(LabelPrimitive.Root, {
  color: theme.colors.accessible,
  fontFamily: theme.fonts.meta,
  fontSize: theme.fontSizes["100"],
  fontWeight: theme.fontWeights.light,
  lineHeight: theme.lineHeights["100"],
  position: "absolute",
  insetBlockStart: "0",
  insetInlineStart: theme.space["050"],
  transform: `translateY(110%)`,

  variants: {
    isFloating: {
      true: {
        fontSize: theme.fontSizes["075"],
        transform: `translateY(${theme.space["050"]})`,
      },
    },
    isDisabled: {
      true: {
        color: "inherit",
      },
    },
  },
});

const IconContainer = styled("div", {
  color: theme.colors.accessible,
  display: "flex",
  paddingInlineStart: theme.space["100"],
  paddingInlineEnd: theme.space["075"],
  variants: {
    isDisabled: {
      true: {
        color: "inherit",
      },
    },
  },
});

const ButtonIcon = styled(Button, {
  borderRadius: theme.radii["012"],
  marginInlineEnd: theme.space["050"],
});

const HelperText = styled("div", {
  color: theme.colors.accessible,
  fontFamily: theme.fonts.meta,
  fontSize: theme.fontSizes["075"],
  fontWeight: theme.fontWeights.light,
  lineHeight: theme.lineHeights["125"],
  marginBlockStart: theme.space["025"],
});

const ErrorMessage = styled("div", {
  color: theme.colors.error,
  fontFamily: theme.fonts.meta,
  fontSize: theme.fontSizes["075"],
  fontWeight: theme.fontWeights.light,
  lineHeight: theme.lineHeights["125"],
  marginBlockStart: theme.space["025"],
});

const RequiredIndicator = styled("span", {
  color: theme.colors.error,
});

export interface InputTextProps
  extends React.ComponentPropsWithRef<typeof UnstyledInput> {
  /**
   * Accessible text for button icon, required for right icons
   */
  buttonIconText?: string;
  /**
   * Used to insert Icons in the input, only a single child is accepted
   */
  children?: React.ReactNode;

  /**
   * The initial input element value for uncontrolled components
   */
  defaultValue?: string;

  /**
   * The underlying input element disabled attribute
   */
  disabled?: boolean;

  /**
   * Indicates there is an error
   */
  error?: boolean;

  /**
   * Text displayed below the input to describe the cause of the error
   */
  errorMessage?: string;

  /**
   * Text displayed below the input to provide additional context
   */
  helperText?: string;

  /**
   * The position of the icon in the input
   * @default none
   */
  icon?: "left" | "right" | "none";

  /**
   * The id for the underlying input element. Automatically generated if not provided
   */
  id?: string;

  /**
   * The input's label text, required for accessibility
   */
  label: string;

  /**
   * The name for the underlying input element
   */
  name?: string;

  /**
   * Callback executed when the input fires a blur event
   */
  onBlur?: React.FocusEventHandler<HTMLInputElement>;

  /**
   * Callback executed when the button icon on the right is click to perform an action
   */
  onButtonIconClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;

  /**
   * Callback executed when the input fires a change event
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;

  /**
   * Callback executed when the input fires a focus event
   */
  onFocus?: React.FocusEventHandler<HTMLInputElement>;

  /**
   * The input elements required attribute
   */
  required?: boolean;

  /**
   * indicates there is a success
   */
  success?: boolean;

  /**
   * Supported input element types
   * @default text
   */
  type?: "text" | "search" | "url" | "tel" | "email";

  /**
   * The input element value for controlled components
   */
  value?: string;
}

export const InputText = React.forwardRef<HTMLInputElement, InputTextProps>(
  (
    {
      buttonIconText,
      children,
      defaultValue,
      disabled,
      error,
      errorMessage,
      helperText,
      icon = "none",
      id,
      label,
      onBlur,
      onChange,
      onFocus,
      onButtonIconClick,
      required,
      success,
      type = "text",
      value,
      ...rest
    },
    ref
  ) => {
    const { current: fieldId } = React.useRef(id || `wpds-input-${nanoid(6)}`);
    const { current: helperId } = React.useRef(
      `wpds-input-helper-${nanoid(6)}`
    );
    const { current: errorId } = React.useRef(`wpds-input-error-${nanoid(6)}`);
    const [isLabelFloating, setIsLabelFloating] = React.useState(false);
    const [isTouched, setIsTouched] = React.useState(false);

    React.useEffect(() => {
      if (value || defaultValue) {
        setIsTouched(true);
        setIsLabelFloating(true);
      }
    }, [value, defaultValue]);

    function handleFocus(event) {
      setIsLabelFloating(true);
      onFocus && onFocus(event);
    }

    function handleOnBlur(event) {
      if (!isTouched) {
        setIsLabelFloating(false);
      }
      onBlur && onBlur(event);
    }

    function handleOnChange(event) {
      if (event.target.value) {
        setIsTouched(true);
      } else {
        setIsTouched(false);
      }
      onChange && onChange(event);
    }

    function handleButtonIconClick(event) {
      onButtonIconClick && onButtonIconClick(event);
    }

    let child;
    switch (type) {
      case "search":
        child = (
          <Icon label="">
            <Search />
          </Icon>
        );
        icon = "right";
        if (!buttonIconText) {
          buttonIconText = "Search";
        }
        break;
      case "url":
        child = (
          <Icon label="">
            <Globe />
          </Icon>
        );
        icon = "left";
        break;
      case "tel":
        child = (
          <Icon label="">
            <Phone />
          </Icon>
        );
        icon = "left";
        break;
      case "email":
        child = (
          <Icon label="">
            <Email />
          </Icon>
        );
        icon = "left";
        break;
      default:
        if (children) {
          child = React.Children.only(children);
        }
    }

    return (
      <div>
        <StyledContainer
          isDisabled={disabled}
          isInvalid={error}
          isSuccessful={success}
        >
          {child && icon === "left" && (
            <IconContainer isDisabled={disabled}>{child}</IconContainer>
          )}
          <LabelInputWrapper>
            <StyledLabel
              isFloating={isLabelFloating}
              isDisabled={disabled}
              htmlFor={fieldId}
            >
              {label}
              {required && <RequiredIndicator>*</RequiredIndicator>}
            </StyledLabel>
            <UnstyledInput
              defaultValue={defaultValue}
              disabled={disabled}
              id={fieldId}
              onBlur={handleOnBlur}
              onChange={handleOnChange}
              onFocus={handleFocus}
              ref={ref}
              required={required}
              type={type}
              value={value}
              aria-invalid={error}
              aria-errormessage={error ? errorId : undefined}
              aria-describedby={helperText ? helperId : undefined}
              {...rest}
            />
          </LabelInputWrapper>
          {child && icon === "right" && (
            <ButtonIcon
              variant="primary"
              isOutline
              icon="center"
              css={{
                border: "none",
                color: disabled
                  ? theme.colors.onDisabled
                  : theme.colors.accessible,
              }}
              onClick={handleButtonIconClick}
            >
              <VisuallyHidden>{buttonIconText}</VisuallyHidden>
              {child}
            </ButtonIcon>
          )}
        </StyledContainer>
        <div aria-live="polite">
          {helperText && !errorMessage && (
            <HelperText id={helperId}>{helperText}</HelperText>
          )}
          {errorMessage && (
            <ErrorMessage id={errorId}>{errorMessage}</ErrorMessage>
          )}
        </div>
      </div>
    );
  }
);

InputText.displayName = NAME;
