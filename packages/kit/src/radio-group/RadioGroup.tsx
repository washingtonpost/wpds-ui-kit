import React from "react";

import { nanoid } from "nanoid";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import type { RadioGroupProps as RadioGroupRootProps } from "@radix-ui/react-radio-group";

import * as Theme from "../theme";
import type * as WPDS from "../theme";
import { Fieldset } from "../fieldset";
import { ErrorMessage } from "../error-message";

const NAME = "RadioGroup";

const RadioGroupInputs = Theme.styled("div", {
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
  gap: Theme.theme.space["025"],
  "[data-orientation='horizontal'] > &": {
    alignItems: "center",
    flexDirection: "row",
    gap: Theme.theme.space["050"],
  },
});

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
  /** CSS passed to RadioButtons parent element */
  buttonsWrapperCss?: WPDS.CSS;
  /** Override CSS */
  css?: WPDS.CSS;
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

export const RadioGroup = React.forwardRef<
  HTMLFieldSetElement,
  RadioGroupProps
>(
  (
    {
      buttonsWrapperCss,
      children,
      css,
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
          css={css}
          aria-invalid={error}
          aria-errormessage={error ? errorId : undefined}
          {...props}
        >
          <RadioGroupInputs css={buttonsWrapperCss}>
            {React.Children.map(children, (child) => {
              if (React.isValidElement(child)) {
                return React.cloneElement(child, {
                  variant,
                  isOutline,
                  disabled,
                  error,
                });
              }
            })}
          </RadioGroupInputs>
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

export type { RadioGroupProps };
