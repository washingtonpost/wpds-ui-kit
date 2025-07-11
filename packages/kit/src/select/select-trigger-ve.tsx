import React from "react";
import { clsx } from "clsx";
import * as SelectPrimitive from "@radix-ui/react-select";
import { ChevronDown } from "@washingtonpost/wpds-assets";
import { IconVE as Icon } from "../icon/icon-ve";
import { ErrorMessage } from "../error-message";
import { HelperText } from "../helper-text";
import {
  selectTrigger,
  iconWrapper,
  animatedIcon,
  subTextWrapper,
} from "./Select.css";

export interface SelectTriggerProps
  extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger> {
  /** Used to insert select elements into the root component*/
  children?: React.ReactNode;
  /** Whether the field has an error */
  error?: boolean;
  /** Whether the field is disabled */
  disabled?: boolean;
  /** Whether the field has a success state */
  success?: boolean;
  /** Helper text to display below the select */
  helperText?: string;
  /** Error message to display below the select */
  errorMessage?: string;
  /** Callback to set content width for positioning */
  onTriggerResize?: (width: number) => void;
  /** Additional CSS class */
  className?: string;
}

export const SelectTriggerVE = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  SelectTriggerProps
>(
  (
    {
      children,
      error = false,
      disabled = false,
      success = false,
      helperText,
      errorMessage,
      onTriggerResize,
      className,
      ...props
    },
    ref
  ) => {
    const [helperId, setHelperId] = React.useState<string | undefined>();
    const [errorId, setErrorId] = React.useState<string | undefined>();

    const internalRef = React.useRef<HTMLButtonElement>(null);

    // Set up IDs for accessibility
    React.useEffect(() => {
      const id = Math.random().toString(36).substr(2, 9);
      setHelperId(`wpds-select-helper-${id}`);
      setErrorId(`wpds-select-error-${id}`);
    }, []);

    // Handle resize observer
    React.useEffect(() => {
      if (!internalRef.current || !onTriggerResize) return;

      const resizeObserver = new ResizeObserver((entries) => {
        for (const entry of entries) {
          onTriggerResize(entry.contentRect.width);
        }
      });

      resizeObserver.observe(internalRef.current);

      // Initial measurement
      onTriggerResize(internalRef.current.getBoundingClientRect().width);

      return () => resizeObserver.disconnect();
    }, [onTriggerResize]);

    // Combine refs function
    const setRefs = React.useCallback(
      (node: HTMLButtonElement | null) => {
        // Set internal ref
        if (internalRef.current !== node) {
          (
            internalRef as React.MutableRefObject<HTMLButtonElement | null>
          ).current = node;
        }

        // Set external ref
        if (typeof ref === "function") {
          ref(node);
        } else if (ref) {
          (ref as React.MutableRefObject<HTMLButtonElement | null>).current =
            node;
        }
      },
      [ref]
    );

    const describedBy = [
      helperText && !errorMessage ? helperId : undefined,
      errorMessage ? errorId : undefined,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <>
        <SelectPrimitive.Trigger
          ref={setRefs}
          className={clsx(
            selectTrigger({
              error: error || Boolean(errorMessage),
              success,
              isDisabled: disabled,
            }),
            className
          )}
          disabled={disabled}
          aria-describedby={describedBy || undefined}
          {...props}
        >
          {children}
          <div className={iconWrapper({ isDisabled: disabled })}>
            <Icon label="" className={animatedIcon}>
              <ChevronDown />
            </Icon>
          </div>
        </SelectPrimitive.Trigger>

        <div className={subTextWrapper}>
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
      </>
    );
  }
);

SelectTriggerVE.displayName = "SelectTriggerVE";
