import * as React from "react";
import { nanoid } from "nanoid";
import * as Theme from "@washingtonpost/wpds-theme";
import type * as WPDS from "@washingtonpost/wpds-theme";
import {
  sharedInputStyles,
  sharedInputVariants,
  useFloating,
} from "@washingtonpost/wpds-input-shared";
import { InputLabel } from "@washingtonpost/wpds-input-label";
import { ErrorMessage } from "@washingtonpost/wpds-error-message";
import { HelperText } from "@washingtonpost/wpds-helper-text";

const NAME = "InputTextarea";

const InputTextareaCSS = Theme.css({
  ...sharedInputStyles,
  display: "block",
  minHeight: "$500",
  padding: "$125 $050 $050 $050",
  width: "100%",

  variants: {
    ...sharedInputVariants,
    /**
     * Enable to allow for the text area to be resized by the user.
     */
    canResize: {
      false: {
        resize: "none",
      },
    },
  },
});

const TextAreaLabel = Theme.styled(InputLabel, {
  insetBlockStart: "$050",
  insetInlineStart: "$050",
  pointerEvents: "none",
  position: "absolute",
  transition: Theme.theme.transitions.allFast,
  variants: {
    isFloating: {
      true: {
        fontSize: Theme.theme.fontSizes["075"],
        lineHeight: Theme.theme.lineHeights["100"],
      },
    },
  },
});

const ControlCSS = Theme.css({
  display: "flex",
  flexDirection: "column",
  position: "relative",
});

export interface InputTextareaProps
  extends Omit<
    WPDS.VariantProps<typeof InputTextareaCSS>,
    "isInvalid" | "isDisabled"
  > {
  /** Override CSS */
  css?: WPDS.CSS;
  /** The initial input element value for uncontrolled components */
  defaultValue?: string;
  /** The underlying textarea element disabled attribute */
  disabled?: boolean;
  /** if the element has an error */
  error?: boolean;
  /** Text displayed below the input to describe the cause of the error */
  errorMessage?: React.ReactNode;
  /** Text displayed below the input to provide additional context */
  helperText?: React.ReactNode;
  /** Label (use instead of Placeholder) */
  label: string;
  /** An id attribute to allow the <InputTextarea> to be associated with a <label> element for accessibility purposes */
  id: string;
  /** A name attribute to set the name of the associated data point submitted to the server when the form is submitted. */
  name: string;
  /** Callback executed when the input fires a blur event*/
  onBlur?: React.FocusEventHandler<HTMLTextAreaElement>;
  /** Callback executed when the input fires a change event */
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  /** Callback executed when the input fires a focus event */
  onFocus?: React.FocusEventHandler<HTMLTextAreaElement>;
  /** The input elements required attribute */
  required?: boolean;
  /** The input element value for controlled components */
  value?: string;
}

export const InputTextarea = React.forwardRef<
  HTMLTextAreaElement,
  InputTextareaProps
>(
  (
    {
      css,
      id,
      name,
      canResize,
      disabled,
      error,
      errorMessage,
      helperText,
      label,
      children,
      value,
      defaultValue,
      onFocus,
      onBlur,
      onChange,
      required,
      ...props
    },
    ref
  ) => {
    const [helperId, setHelperId] = React.useState<string | undefined>();
    const [errorId, setErrorId] = React.useState<string | undefined>();

    React.useEffect(() => {
      setHelperId(`wpds-input-helper-${nanoid(6)}`);
      setErrorId(`wpds-input-error-${nanoid(6)}`);
    }, []);

    const [isFloating, handleFocus, handleBlur, handleChange] = useFloating(
      value || defaultValue,
      onFocus,
      onBlur,
      onChange
    );

    return (
      <div className={ControlCSS()}>
        <textarea
          {...props}
          id={id}
          name={name}
          ref={ref}
          className={InputTextareaCSS({
            css: css,
            canResize: canResize,
            isInvalid: error,
            isDisabled: disabled,
          })}
          required={required}
          disabled={disabled}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          value={value}
          defaultValue={defaultValue}
          aria-invalid={error}
          aria-errormessage={error ? errorId : undefined}
          aria-describedby={helperText ? helperId : undefined}
        >
          {children}
        </textarea>
        <TextAreaLabel
          htmlFor={id}
          isFloating={isFloating}
          disabled={disabled}
          required={required}
        >
          {label}
        </TextAreaLabel>
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

InputTextarea.displayName = NAME;
