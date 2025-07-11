import React from "react";
import { nanoid } from "nanoid";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import type { RadioGroupProps as RadioGroupRootProps } from "@radix-ui/react-radio-group";

import {
  radioGroupInputs,
  radioButtonContainer,
  radioButtonRecipe,
  radioIndicatorRecipe,
  radioButtonLabel,
} from "./RadioGroup.css";

// Import other components - these will need to be migrated later
import { Fieldset } from "../fieldset";
import { ErrorMessage } from "../error-message";
import { InputLabel } from "../input-label";

const NAME = "RadioGroup";
const RADIO_BUTTON_NAME = "RadioButton";

type CombinedProps = Pick<
  RadioGroupRootProps,
  | "defaultValue"
  | "dir"
  | "loop"
  | "name"
  | "onValueChange"
  | "orientation"
  | "required"
  | "value"
> &
  React.ComponentPropsWithRef<"fieldset">;

interface RadioGroupProps extends CombinedProps {
  /** CSS class name passed to RadioButtons parent element */
  buttonsWrapperClassName?: string;
  /** CSS class name override */
  className?: string;
  /** Inputs are disabled, changing appearance and preventing input */
  disabled?: boolean;
  /** If there is an error with the fields */
  error?: boolean;
  /** Description of error */
  errorMessage?: React.ReactNode;
  /** Only the radio button's outline is displayed
   * @default false */
  isOutline?: boolean;
  /** Legend text labelling entire group */
  legend: React.ReactNode;
  /** Shared name of group radios */
  name: string;
  /** Color variants
   * @default primary */
  variant?: "primary" | "secondary" | "cta";
}

interface RadioButtonProps
  extends React.ComponentProps<typeof RadioGroupPrimitive.Item> {
  /** displays error state with colored border */
  error?: boolean;
  /** CSS class name override */
  className?: string;
  /** id of input */
  id: string;
  /** label text displayed next to button */
  label: string;
  /** underlying value for input */
  value: string;
  /** Color variants
   * @default primary */
  variant?: "primary" | "secondary" | "cta";
  /** Only the radio button's outline is displayed */
  isOutline?: boolean;
}

export const RadioButton = React.forwardRef<
  HTMLButtonElement,
  RadioButtonProps
>(
  (
    { 
      className, 
      id, 
      label, 
      value, 
      variant = "primary", 
      disabled, 
      error, 
      isOutline,
      ...props 
    },
    ref
  ) => {
    return (
      <div className={radioButtonContainer}>
        <RadioGroupPrimitive.Item
          ref={ref}
          className={`${radioButtonRecipe({
            variant,
            isOutline,
            isInvalid: error,
          })} ${className || ""}`}
          id={id}
          value={value}
          disabled={disabled}
          {...props}
        >
          <RadioGroupPrimitive.Indicator
            className={radioIndicatorRecipe({
              variant,
              isDisabled: disabled,
            })}
          />
        </RadioGroupPrimitive.Item>
        <InputLabel htmlFor={id} className={radioButtonLabel}>
          {label}
        </InputLabel>
      </div>
    );
  }
);

RadioButton.displayName = RADIO_BUTTON_NAME;

export const RadioGroup = React.forwardRef<
  HTMLFieldSetElement,
  RadioGroupProps
>(
  (
    {
      buttonsWrapperClassName,
      children,
      className,
      defaultValue,
      disabled,
      dir,
      error,
      errorMessage,
      isOutline = false,
      legend,
      loop,
      name,
      onValueChange,
      orientation,
      required,
      value,
      variant = "primary",
      ...props
    },
    ref
  ) => {
    const [errorId, setErrorId] = React.useState<string | undefined>();

    const id = nanoid();
    React.useEffect(() => {
      setErrorId(`wpds-input-error-${id}`);
    }, [setErrorId]);

    return (
      <RadioGroupPrimitive.Root
        asChild={true}
        defaultValue={defaultValue}
        dir={dir}
        loop={loop}
        name={name}
        onValueChange={onValueChange}
        orientation={orientation}
        required={required}
        value={value}
      >
        <Fieldset
          legend={legend}
          required={required}
          ref={ref}
          className={className}
          aria-invalid={error}
          aria-errormessage={error ? errorId : undefined}
          {...props}
        >
          <div className={`${radioGroupInputs} ${buttonsWrapperClassName || ""}`}>
            {React.Children.map(children, (child) => {
              if (React.isValidElement(child)) {
                return React.cloneElement(child as React.ReactElement<RadioButtonProps>, {
                  variant,
                  isOutline,
                  disabled,
                  error,
                });
              }
              return child;
            })}
          </div>
          {errorMessage && (
            <ErrorMessage id={errorId} aria-live="assertive">
              {errorMessage}
            </ErrorMessage>
          )}
        </Fieldset>
      </RadioGroupPrimitive.Root>
    );
  }
);

RadioGroup.displayName = NAME;

export type { RadioGroupProps, RadioButtonProps };
