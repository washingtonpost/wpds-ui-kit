import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";

import {
  inputContainerRecipe,
  unstyledInput,
  labelInputWrapper,
  inputLabelRecipe,
  iconContainer,
  buttonIconBase,
  buttonClear,
  buttonDivider,
  requiredIndicator,
  type InputContainerVariants,
  type InputLabelVariants,
} from "./InputText.css";

// Import other components - these will need to be migrated later
import { IconVE as Icon } from "../icon/icon-ve";
import { ErrorMessage } from "../error-message";
import { HelperText } from "../helper-text";
import { VisuallyHidden } from "../visually-hidden";
import {
  Search,
  Globe,
  Phone,
  Email,
  Close,
} from "@washingtonpost/wpds-assets";

const NAME = "InputText";

// Floating hook - same logic as original
export const useFloating = (
  val: string | undefined,
  onFocus?: React.FocusEventHandler<HTMLInputElement>,
  onBlur?: React.FocusEventHandler<HTMLInputElement>,
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
  isAutofilled?: boolean
): [
  boolean,
  React.FocusEventHandler<HTMLInputElement>,
  React.FocusEventHandler<HTMLInputElement>,
  (event: React.ChangeEvent<HTMLInputElement>) => void
] => {
  const [isFloating, setIsFloating] = React.useState(val ? true : false);
  const [isTouched, setIsTouched] = React.useState(val ? true : false);
  const [isFocused, setIsFocused] = React.useState(false);
  const prevValue = React.useRef<string | undefined>();

  React.useEffect(() => {
    if (val || isAutofilled) {
      setIsFloating(true);
      setIsTouched(true);
    } else {
      if (!isFocused) {
        setIsFloating(false);
        setIsTouched(false);
      }
    }

    prevValue.current = val;
  }, [val, prevValue, isFloating, isFocused, setIsFloating, setIsTouched, isAutofilled]);

  function handleFocus(
    event: React.FocusEvent<HTMLInputElement>
  ) {
    setIsFocused(true);
    setIsFloating(true);
    onFocus && onFocus(event);
  }

  function handleBlur(
    event: React.FocusEvent<HTMLInputElement>
  ) {
    setIsFocused(false);
    if (!isTouched) {
      setIsFloating(false);
    }
    onBlur && onBlur(event);
  }

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    if (event.target.value) {
      setIsTouched(true);
    } else {
      setIsTouched(false);
    }
    onChange && onChange(event);
  }

  return [isFloating, handleFocus, handleBlur, handleChange];
};

export interface InputTextProps
  extends Omit<React.ComponentPropsWithRef<"input">, "onChange" | "onFocus" | "onBlur"> {
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
  type?: "text" | "number" | "search" | "url" | "tel" | "email" | "password";
  /** The input element value for controlled components */
  value?: string;
  /** Additional CSS class */
  className?: string;
  /** Additional inline styles */
  style?: React.CSSProperties;
}

export const InputText = React.forwardRef<HTMLInputElement, InputTextProps>(
  (
    {
      buttonIconText,
      buttonIconType = "button",
      children,
      className,
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
      style,
      success,
      type = "text",
      value,
      ...rest
    },
    ref
  ) => {
    const [helperId, setHelperId] = useState<string | undefined>();
    const [errorId, setErrorId] = useState<string | undefined>();
    const [isAutofilled, setIsAutofilled] = useState<boolean>(false);
    const internalRef = React.useRef<HTMLInputElement>(null);
    const rootId = nanoid();

    useEffect(() => {
      setHelperId(`wpds-input-helper-${rootId}`);
      setErrorId(`wpds-input-error-${rootId}`);
    }, [rootId]);

    // Handle external ref
    useEffect(() => {
      if (!ref) return;

      if (typeof ref === "function") {
        ref(internalRef.current);
      } else {
        ref.current = internalRef.current;
      }
    }, [ref, internalRef]);

    // Handle autofill detection
    useEffect(() => {
      const element = internalRef.current;

      const onAnimationStart = (e: AnimationEvent) => {
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

    const handleButtonIconClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      onButtonIconClick && onButtonIconClick(event);
    };

    const onClear = () => {
      if (internalRef.current) {
        const input = internalRef.current;
        // requires a native value setter to have the correct value in the dispatched
        // event and handle both controlled and uncontrolled cases
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

    let child: React.ReactNode;
    let inputIcon = icon;
    
    switch (type) {
      case "search":
        child = (
          <Icon label={""}>
            <Search />
          </Icon>
        );
        inputIcon = "right";
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
        inputIcon = "left";
        break;
      case "tel":
        child = (
          <Icon label="">
            <Phone />
          </Icon>
        );
        inputIcon = "left";
        break;
      case "email":
        child = (
          <Icon label="">
            <Email />
          </Icon>
        );
        inputIcon = "left";
        break;
      default:
        if (children) {
          child = React.Children.only(children);
        }
    }

    // Container variants
    const containerVariants: InputContainerVariants = {
      isDisabled: disabled,
      isInvalid: error,
      isSuccessful: success,
    };

    // Label variants
    const labelVariants: InputLabelVariants = {
      isFloating,
      isDisabled: disabled,
      isRequired: required,
    };

    return (
      <div className={className} style={style}>
        <div 
          className={inputContainerRecipe(containerVariants)}
          data-testid="input-text-container"
        >
          {child && inputIcon === "left" && (
            <div 
              className={iconContainer}
              data-disabled={disabled}
            >
              {child}
            </div>
          )}
          
          <div className={labelInputWrapper}>
            <label 
              className={inputLabelRecipe(labelVariants)}
              htmlFor={id}
            >
              {label}
              {required && <span className={requiredIndicator}>*</span>}
            </label>
            
            <input
              className={unstyledInput}
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
              {...rest}
            />
          </div>
          
          {isFloating && type === "search" && internalRef.current?.value && (
            <>
              <button
                className={buttonClear}
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
              </button>
              <div className={buttonDivider} />
            </>
          )}
          
          {child && inputIcon === "right" && (
            <button
              className={buttonIconBase}
              onClick={handleButtonIconClick}
              type={buttonIconType || undefined}
              disabled={disabled}
            >
              <VisuallyHidden>{buttonIconText}</VisuallyHidden>
              {child}
            </button>
          )}
        </div>
        
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
