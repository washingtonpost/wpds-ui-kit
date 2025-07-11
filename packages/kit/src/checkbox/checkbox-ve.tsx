import React from "react";
import { clsx } from 'clsx';
import * as PrimitiveCheckbox from "@radix-ui/react-checkbox";
import { Check, Indeterminate } from "@washingtonpost/wpds-assets";
import { InputLabel } from "../input-label";
import { 
  checkboxRecipe,
  checkboxIndicatorRecipe, 
  checkboxIcon,
  checkboxLabel,
  checkboxContainer,
  type CheckboxVariants,
  type CheckboxIndicatorVariants,
} from './Checkbox.css';

const NAME = "Checkbox";

export interface CheckboxInterface
  extends Omit<React.ComponentPropsWithRef<typeof PrimitiveCheckbox.Root>, 'size'> {
  /** Used to group checkbox items */
  children?: React.ReactNode;
  /** Additional CSS class */
  className?: string;
  /** The label text for the checkbox, required for accessibility */
  label?: React.ReactNode;
  /** Size of the checkbox */
  size?: '087' | '125';
  /** Style variant of the checkbox */
  variant?: 'primary' | 'secondary' | 'cta';
  /** Whether this is an outline style checkbox */
  isOutline?: boolean;
  /** Additional inline styles */
  style?: React.CSSProperties;
}

export const Checkbox = React.forwardRef<
  React.ElementRef<typeof PrimitiveCheckbox.Root>,
  CheckboxInterface
>(
  (
    {
      children,
      className,
      disabled,
      label,
      size = '125',
      variant = 'primary',
      isOutline = false,
      style,
      ...props
    },
    ref
  ) => {
    const checkboxVariants: CheckboxVariants = {
      size,
      variant,
      isOutline,
      disabled: disabled || false,
    };

    const indicatorVariants: CheckboxIndicatorVariants = {
      size,
      variant,
      isOutline,
      disabled: disabled || false,
    };

    const checkbox = (
      <PrimitiveCheckbox.Root
        ref={ref}
        className={clsx(checkboxRecipe(checkboxVariants), className)}
        disabled={disabled}
        style={style}
        {...props}
      >
        <PrimitiveCheckbox.Indicator
          className={checkboxIndicatorRecipe(indicatorVariants)}
        >
          {props.checked === "indeterminate" ? (
            <Indeterminate className={checkboxIcon} />
          ) : (
            <Check className={checkboxIcon} />
          )}
        </PrimitiveCheckbox.Indicator>
      </PrimitiveCheckbox.Root>
    );

    if (label) {
      return (
        <div className={checkboxContainer}>
          {checkbox}
          <InputLabel className={checkboxLabel} disabled={disabled}>
            {label}
          </InputLabel>
          {children}
        </div>
      );
    }

    return (
      <div className={checkboxContainer}>
        {checkbox}
        {children}
      </div>
    );
  }
);

Checkbox.displayName = NAME;

export type CheckboxProps = React.ComponentPropsWithRef<typeof Checkbox>;
