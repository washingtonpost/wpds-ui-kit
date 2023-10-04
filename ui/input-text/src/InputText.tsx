import * as React from "react";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { theme, styled } from "@washingtonpost/wpds-theme";
import { Button } from "@washingtonpost/wpds-button";
import { Divider } from "@washingtonpost/wpds-divider";
import { Icon } from "@washingtonpost/wpds-icon";
import {
  useFloating,
  unstyledInputStyles,
  globalInputAutoFillTriggerAnimations,
} from "@washingtonpost/wpds-input-shared";
import { ErrorMessage } from "@washingtonpost/wpds-error-message";
import { HelperText } from "@washingtonpost/wpds-helper-text";
import { VisuallyHidden } from "@washingtonpost/wpds-visually-hidden";
import {
  Search,
  Globe,
  Phone,
  Email,
  Close,
} from "@washingtonpost/wpds-assets";
import { TextInputLabel } from "./TextInputLabel";
import { StyledContainer } from "./StyledContainer";
import type * as WPDS from "@washingtonpost/wpds-theme";

const NAME = "InputText";

const LabelInputWrapper = styled("div", {
  flex: 1,
  position: "relative",
});

const UnstyledInput = styled("input", {
  ...unstyledInputStyles,
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

const ButtonDivider = styled(Divider, {
  "&[data-orientation=vertical]": { height: theme.sizes["150"] },
  marginInline: theme.sizes["025"],
});

export interface InputTextProps
  extends React.ComponentPropsWithRef<typeof UnstyledInput> {
  /** Accessible text for button icon, required for right icons */
  buttonIconText?: string;
  /** Explicit button icon typing for use in forms */
  buttonIconType?: "submit" | "reset" | "button";
  /** Used to insert Icons in the input, only a single child is accepted*/
  children?: React.ReactNode;
  /** The initial input element value for uncontrolled components */
  defaultValue?: string;
  /** The underlying input element disabled attribute */
  disabled?: boolean;
  /** Indicates there is an error */
  error?: boolean;
  /** Text displayed below the input to describe the cause of the error */
  errorMessage?: React.ReactNode;
  /** Text displayed below the input to provide additional context */
  helperText?: React.ReactNode;
  /** The position of the icon in the input
   * @default none */
  icon?: "left" | "right" | "none";
  /** The id for the underlying input element. Required for accessibility */
  id: string;
  /** The input's label text, required for accessibility */
  label: string;
  /** The name for the underlying input element */
  name: string;
  /** Callback executed when the input fires a blur event */
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  /** Callback executed when the button icon on the right is click to perform an action */
  onButtonIconClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  /** Callback executed when the input fires a change event */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /** Callback executed when the input fires a focus event */
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  /** placeholder text */
  placeholder?: string;
  /** The input elements required attribute */
  required?: boolean;
  /** indicates there is a success */
  success?: boolean;
  /** Supported input element types
   * @default text */
  type?: "text" | "search" | "url" | "tel" | "email" | "password";
  /** The input element value for controlled components */
  value?: string;
  /** Overrides for the input text styles. Padding overrides affect the input container and  */
  css?: WPDS.CSS;
}

export const InputText = React.forwardRef<HTMLInputElement, InputTextProps>(
  (
    {
      buttonIconText,
      buttonIconType = "button",
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
      placeholder,
      required,
      success,
      type = "text",
      value,
      css,
      ...rest
    },
    ref
  ) => {
    const [helperId, setHelperId] = useState<string | undefined>();
    const [errorId, setErrorId] = useState<string | undefined>();
    const [isAutofilled, setIsAutofilled] = useState<boolean>(false);
    const internalRef = React.useRef<HTMLInputElement>(null);

    useEffect(() => {
      setHelperId(`wpds-input-helper-${nanoid(6)}`);
      setErrorId(`wpds-input-error-${nanoid(6)}`);
    }, []);

    //takes into account ref that might be passed into the component
    useEffect(() => {
      if (!ref) return;

      if (typeof ref === "function") {
        ref(internalRef.current);
      } else {
        ref.current = internalRef.current;
      }
    }, [ref, internalRef]);

    useEffect(() => {
      globalInputAutoFillTriggerAnimations();
      const element = internalRef.current;

      const onAnimationStart = (e) => {
        switch (e.animationName) {
          case "jsTriggerAutoFillStart":
            return setIsAutofilled(true);
          case "jsTriggerAutoFillCancel":
            return setIsAutofilled(false);
        }
      };

      element?.addEventListener("animationstart", onAnimationStart, false);

      return () => {
        element?.removeEventListener("animationstart", onAnimationStart, false);
      };
    }, []);

    const [isFloating, handleOnFocus, handleOnBlur, handleOnChange] =
      useFloating(
        (internalRef.current ? internalRef.current.value : "") ||
        value ||
        defaultValue ||
        placeholder,
        onFocus,
        onBlur,
        onChange,
        isAutofilled
      );

    const handleButtonIconClick = (event) => {
      onButtonIconClick && onButtonIconClick(event);
    };

    const onClear = () => {
      if (internalRef.current) {
        const input = internalRef.current;
        // requires a native value setter to have the correct value in the dispatched
        // event and handle both controlled and uncontrolled cases
        // https://stackoverflow.com/questions/23892547/what-is-the-best-way-to-trigger-change-or-input-event-in-react-js
        const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
          window.HTMLInputElement.prototype,
          "value"
        )?.set;

        nativeInputValueSetter?.call(input, "");
        // manually dispatch event to trigger onChange handler
        input.dispatchEvent(new Event("input", { bubbles: true }));
        input.focus();
      }
    };

    let child;
    let inputStyles = {};
    switch (type) {
      case "search":
        child = (
          <Icon label={""}>
            <Search />
          </Icon>
        );
        icon = "right";
        if (!buttonIconText) {
          buttonIconText = "Search";
        }
        //These styles hide the default search clear button
        inputStyles = {
          // for webkit
          "&::-webkit-search-cancel-button": {
            all: "unset",
          },
          // for edge
          "&::-ms-clear": {
            all: "unset",
          },
        };
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

    // ----
    // This code block because we want to filter out the padding elements and pass those
    // only to the input element. All other styles should go into the StyledContainer.
    // If we ever need to check for more attributes, then we should pull this out into a function.
    let containerStyles = {};

    css &&
      Object.keys(css).map((key) => {
        if (key.includes("padding")) {
          inputStyles = { ...inputStyles, [key]: css[key] };
          return;
        }
        containerStyles = { ...containerStyles, [key]: css[key] };
      });
    // ----

    return (
      <div>
        <StyledContainer
          isDisabled={disabled}
          isInvalid={error}
          isSuccessful={success}
          // if you take out this check, then you'll get TS2339 and the build will fail
          css={containerStyles && containerStyles}
        >
          {child && icon === "left" && (
            <IconContainer isDisabled={disabled}>{child}</IconContainer>
          )}
          <LabelInputWrapper>
            <TextInputLabel
              isFloating={isFloating}
              disabled={disabled}
              htmlFor={id}
              required={required}
            >
              {label}
            </TextInputLabel>
            <UnstyledInput
              defaultValue={defaultValue}
              disabled={disabled}
              id={id}
              onBlur={handleOnBlur}
              onChange={handleOnChange}
              onFocus={handleOnFocus}
              placeholder={placeholder}
              ref={internalRef}
              required={required}
              type={type}
              value={value}
              aria-invalid={error}
              aria-errormessage={error ? errorId : undefined}
              aria-describedby={helperText ? helperId : undefined}
              // if you take out this check, then you'll get TS2339 and the build will fail
              css={inputStyles && inputStyles}
              {...rest}
            />
          </LabelInputWrapper>
          {isFloating && type === "search" && internalRef.current?.value && (
            <>
              <ButtonIcon
                variant="primary"
                isOutline
                icon="center"
                css={{
                  border: "none",
                  color: disabled
                    ? theme.colors.onDisabled
                    : theme.colors.accessible,
                  ...css,
                  margin: 0,
                }}
                onMouseDown={(event) => {
                  event.preventDefault();
                }}
                onClick={onClear}
                type="button"
              >
                <VisuallyHidden>Clear</VisuallyHidden>
                <Icon label={""}>
                  <Close />
                </Icon>
              </ButtonIcon>
              <ButtonDivider orientation="vertical" />
            </>
          )}
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
              type={buttonIconType || undefined}
            >
              <VisuallyHidden>{buttonIconText}</VisuallyHidden>
              {child}
            </ButtonIcon>
          )}
        </StyledContainer>
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
      </div>
    );
  }
);

InputText.displayName = NAME;
