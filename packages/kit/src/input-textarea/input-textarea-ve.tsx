import React from 'react';
import { clsx } from 'clsx';
import { InputLabel } from '../input-label';
import { ErrorMessage } from '../error-message';
import { HelperText } from '../helper-text';
import {
  inputTextareaContainer,
  inputTextarea,
  textareaLabel,
  textareaSubText,
} from './InputTextarea.css';

export interface InputTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** The input's label text, required for accessibility */
  label: string;
  /** Helper text to display below the textarea */
  helperText?: string;
  /** Error message to display below the textarea */
  error?: string;
  /** Whether the input is invalid */
  isInvalid?: boolean;
  /** Whether the input is disabled */
  disabled?: boolean;
  /** Whether the textarea can be resized by the user */
  canResize?: boolean;
  /** Additional CSS class */
  className?: string;
}

export const InputTextareaVE = React.forwardRef<
  HTMLTextAreaElement,
  InputTextareaProps
>(({
  label,
  helperText,
  error,
  isInvalid = false,
  disabled = false,
  canResize = true,
  className,
  id,
  required,
  ...props
}, ref) => {
  // Generate IDs for accessibility
  const textareaId = React.useId();
  const finalId = id || textareaId;
  const helperId = helperText ? `${finalId}-helper` : undefined;
  const errorId = error ? `${finalId}-error` : undefined;
  
  // Track if textarea has content for floating label
  const [hasValue, setHasValue] = React.useState(false);
  const [isFocused, setIsFocused] = React.useState(false);
  
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setHasValue(event.target.value.length > 0);
    props.onChange?.(event);
  };
  
  const handleFocus = (event: React.FocusEvent<HTMLTextAreaElement>) => {
    setIsFocused(true);
    props.onFocus?.(event);
  };
  
  const handleBlur = (event: React.FocusEvent<HTMLTextAreaElement>) => {
    setIsFocused(false);
    props.onBlur?.(event);
  };
  
  // Check for initial value
  React.useEffect(() => {
    if (props.value !== undefined) {
      setHasValue(String(props.value).length > 0);
    } else if (props.defaultValue !== undefined) {
      setHasValue(String(props.defaultValue).length > 0);
    }
  }, [props.value, props.defaultValue]);
  
  const isFloating = isFocused || hasValue;
  const isErrored = isInvalid || Boolean(error);
  
  const describedBy = [
    helperText && !error ? helperId : undefined,
    error ? errorId : undefined,
  ].filter(Boolean).join(' ');

  return (
    <div className={inputTextareaContainer}>
      <textarea
        ref={ref}
        id={finalId}
        className={clsx(
          inputTextarea({
            isInvalid: isErrored,
            isDisabled: disabled,
            canResize,
          }),
          className
        )}
        placeholder={label} // For floating label behavior
        aria-label={label}
        aria-describedby={describedBy || undefined}
        aria-invalid={isErrored}
        aria-required={required}
        disabled={disabled}
        required={required}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...props}
      />
      
      <InputLabel
        htmlFor={finalId}
        className={clsx(textareaLabel, {
          // Add floating state class if needed for specific styling
        })}
        data-floating={isFloating}
      >
        {label}
        {required && <span aria-label="required">*</span>}
      </InputLabel>
      
      <div className={textareaSubText}>
        {helperText && !error && (
          <HelperText id={helperId} aria-live="polite">
            {helperText}
          </HelperText>
        )}
        {error && (
          <ErrorMessage id={errorId} aria-live="assertive">
            {error}
          </ErrorMessage>
        )}
      </div>
    </div>
  );
});

InputTextareaVE.displayName = 'InputTextareaVE';
