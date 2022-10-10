import React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { SelectProps as SelectPrimitiveProps } from "@radix-ui/react-select";

export type SelectProps = SelectPrimitiveProps;

type SelectContextProps = {
  currentValue: string;
  required: boolean;
  success: boolean;
  disabled: boolean;
  error?: boolean;
  errorMessage?: React.ReactNode;
  helperText?: React.ReactNode;
};

export interface SelectRootProps extends React.ComponentPropsWithRef<any> {
  /** The underlying input element disabled attribute */
  disabled?: boolean;
  /** Indicates there is an error */
  error?: boolean;
  /** Text displayed below the select to describe the cause of the error */
  errorMessage?: React.ReactNode;
  /** Text displayed below the input to provide additional context */
  helperText?: React.ReactNode;
  /** The select element's required attribute */
  required?: boolean;
  /** Indicates there is a success*/
  success?: boolean;
}

export const SelectContext = React.createContext({} as SelectContextProps);

export const SelectRoot = React.forwardRef<HTMLDivElement, any>(
  (
    {
      children,
      required,
      success,
      disabled,
      error,
      errorMessage,
      helperText,
      ...props
    }: any,
    ref
  ) => {
    const [value, setValue] = React.useState("");

    return (
      <SelectContext.Provider
        value={{
          currentValue: value,
          required,
          success,
          disabled,
          error,
          errorMessage,
          helperText,
        }}
      >
        <SelectPrimitive.Root
          value={value}
          onValueChange={setValue}
          {...props}
          ref={ref}
        >
          {children}
        </SelectPrimitive.Root>
      </SelectContext.Provider>
    );
  }
);

SelectRoot.displayName = "SelectRoot";
