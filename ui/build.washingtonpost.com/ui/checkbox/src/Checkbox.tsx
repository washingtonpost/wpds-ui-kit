import * as React from "react";

import { theme, styled } from "@washingtonpost/wpds-theme";
import { Icon } from "@washingtonpost/wpds-icon";
import { VisuallyHidden } from "@washingtonpost/wpds-visually-hidden";

import { Check } from "@washingtonpost/wpds-assets";

import * as PrimitiveCheckbox from "@radix-ui/react-checkbox";
import { useId } from "@react-aria/utils";

const StyledCheckbox = styled(PrimitiveCheckbox.Root, {
  all: "unset",
  backgroundColor: "$secondary",
  width: "$100",
  height: "$100",
  flex: "0 0 var(--base)",
  borderRadius: "$012",
  border: "1px solid $subtle",
  verticalAlign: "middle",
  display: "block",
  cursor: "pointer",

  "&[aria-checked='true']": {
    backgroundColor: "$primary",
    borderColor: "transparent",
  },
});

type StyleCheckboxProps = React.ComponentPropsWithRef<typeof StyledCheckbox>;

const StyledIndicator = styled(PrimitiveCheckbox.Indicator, {
  color: theme.colors.onPrimary,
  flex: "0 0 16px",
  lineHeight: "0",
  width: "$100",
  height: "$100",
});

type CheckboxVariants = React.ComponentPropsWithRef<typeof StyledCheckbox>;

interface CheckboxInterface extends CheckboxVariants {
  defaultChecked?: boolean;
  checked?: boolean | "indeterminate";
  onCheckedChange?: (checked: boolean | "indeterminate") => void;
  disabled?: boolean;
  required?: boolean;
  name?: string;
  value?: string;
  id?: string;
}

const StyledCheck = styled("span", {
  flex: "0 0 16px",
  variants: {
    checked: {
      true: {
        visibility: "visible",
      },
      false: {
        visibility: "hidden",
      },
      mixed: {
        visibility: "hidden",
      },
    },
  },

  defaultVariant: {
    checked: false,
  },
});

export const Checkbox = React.forwardRef<HTMLButtonElement, CheckboxInterface>(
  (props, ref) => {
    const elementId = useId();

    return (
      <StyledCheckbox ref={ref} id={props.id || elementId} {...props}>
        <StyledIndicator>
          <StyledCheck checked>
            <Icon size="16" label="">
              <Check fill="currentColor" />
            </Icon>
          </StyledCheck>
        </StyledIndicator>
        <VisuallyHidden as="label" htmlFor={props.id || elementId}>
          {props.checked ? "checked" : "not checked"}
        </VisuallyHidden>
      </StyledCheckbox>
    );
  }
);

Checkbox.displayName = "Checkbox";

type CheckboxProps = React.ComponentProps<typeof Checkbox>;

export type { CheckboxProps, StyleCheckboxProps, CheckboxInterface };
