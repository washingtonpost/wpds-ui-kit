import React from "react";

import * as SelectPrimitive from "@radix-ui/react-select";
import { useControllableState } from "@radix-ui/react-use-controllable-state";

import type * as WPDS from "@washingtonpost/wpds-theme";

import { SelectContent } from "./SelectContent";
import { SelectGroup } from "./SelectGroup";
import { SelectItem } from "./SelectItem";
import { SelectTrigger } from "./SelectTrigger";
import { SelectValue } from "./SelectValue";
import { SelectLabel } from "./SelectLabel";

type SelectContextProps = {
  currentValue: string;
  required: boolean | undefined;
  success: boolean | undefined;
  disabled: boolean | undefined;
  error?: boolean;
  errorMessage?: React.ReactNode;
  helperText?: React.ReactNode;
  isFloating: boolean;
  setIsFloating: (boolean: boolean) => void;
  contentWidth: number;
  setContentWidth: (number: number) => void;
};

export const SelectContext = React.createContext({} as SelectContextProps);

type Controlled = {
  /** Controlled value for the current page */
  value: number;
  defaultValue?: never;
};
type Uncontrolled = {
  value?: never;
  /** Uncontrolled value for the initial page shown */
  defaultValue?: number;
};
type ControlledOrUncontrolled = Controlled | Uncontrolled;

type SelectRootVariants = WPDS.VariantProps<typeof SelectPrimitive.Root>;

export type SelectRootProps = {
  /** Used to insert select elements into the root component*/
  children?: React.ReactNode;
  /** Overrides for the input text styles. Padding overrides affect the input container and  */
  css?: WPDS.CSS;
  /** The value of the select when initially rendered. Use when you do not need to control the state of the select. */
  defaultValue?: string;
  // /** Whether the content should be displayed from the beginning. */
  // defaultOpen?: boolean;
  /** The underlying input element disabled attribute */
  disabled?: boolean;
  /** Indicates there is an error */
  error?: boolean;
  /** Text displayed below the select to describe the cause of the error */
  errorMessage?: React.ReactNode;
  /** Text displayed below the input to provide additional context */
  helperText?: React.ReactNode;
  /** Event handler called when the value changes. */
  onValueChange?:
    | ((value: string) => void)
    | (((state: string) => void) | undefined);
  /** The select element's required attribute */
  required?: boolean;
  /** Indicates there is a success*/
  success?: boolean;
  /** The controlled value of the select. Should be used in conjunction with onValueChange */
  value?: string;
} & ControlledOrUncontrolled &
  SelectRootVariants;

export const SelectRoot = ({
  children,
  required,
  success,
  disabled,
  value: valueProp,
  onValueChange,
  error,
  errorMessage,
  helperText,
  defaultValue,
  ...props
}: SelectRootProps) => {
  const [value = "", setValue] = useControllableState({
    prop: valueProp,
    defaultProp: defaultValue,
    onChange: onValueChange,
  });

  const [isFloating, setIsFloating] = React.useState(false);
  // default with for the content. Will be updated in trigger
  const [contentWidth, setContentWidth] = React.useState(300);

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
        isFloating,
        setIsFloating,
        contentWidth,
        setContentWidth,
      }}
    >
      <SelectPrimitive.Root value={value} onValueChange={setValue} {...props}>
        {children}
      </SelectPrimitive.Root>
    </SelectContext.Provider>
  );
};

SelectRoot.displayName = "SelectRoot";

const Root = SelectRoot;
const Content = SelectContent;
const Item = SelectItem;
const Group = SelectGroup;
const Trigger = SelectTrigger;
const Label = SelectLabel;
const Value = SelectValue;

export const Select = {
  Root,
  Content,
  Item,
  Group,
  Trigger,
  Label,
  Value,
};
