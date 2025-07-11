import React from "react";
import * as Label from "@radix-ui/react-label";
import type { LabelProps } from "@radix-ui/react-label";
import {
  inputLabelBase,
  inputLabelVariants,
  requiredIndicator,
} from "./InputLabel.css";

const NAME = "InputLabel";

interface InputLabelProps extends LabelProps {
  /** Any React node may be used as a child to allow for formatting */
  children?: React.ReactNode;
  /** Override CSS class */
  className?: string;
  /** if the labeled input is disabled */
  disabled?: boolean;
  /** if the labeled input is required */
  required?: boolean;
}

export const InputLabelVE = React.forwardRef<HTMLLabelElement, InputLabelProps>(
  ({ children, className, disabled, required, ...props }, ref) => {
    const variantClass = disabled
      ? inputLabelVariants.disabled
      : inputLabelVariants.enabled;

    return (
      <Label.Root
        ref={ref}
        className={`${inputLabelBase} ${variantClass} ${className || ""}`}
        {...props}
      >
        {children}
        {required && <span className={requiredIndicator}>*</span>}
      </Label.Root>
    );
  }
);

InputLabelVE.displayName = NAME;

export type { InputLabelProps };
