import * as React from "react";

import { theme, styled } from "@washingtonpost/wpds-theme";

import Check from "@washingtonpost/wpds-assets/asset/check";
import Indeterminate from "@washingtonpost/wpds-assets/asset/indeterminate";

import * as PrimitiveCheckbox from "@radix-ui/react-checkbox";

const StyledCheckbox = styled(PrimitiveCheckbox.Root, {
  transition: "$allFast",
  appearance: "none",
  borderRadius: "$012",
  border: "1px solid",
  display: "block",
  cursor: "pointer",
  overflow: "hidden",
  backgroundColor: "$$backgroundColor",
  color: "$$color",

  "&:focus": {
    outline: "1px solid $signal",
    outlineOffset: "2px",
  },

  variants: {
    size: {
      "087": {
        width: "$087",
        height: "$087",
      },
      "125": {
        width: "$125",
        height: "$125",
      },
    },
    variant: {
      primary: {},
      secondary: {},
      cta: {},
    },
    isOutline: {
      true: {},
      false: {},
    },
    disabled: {
      true: {
        $$backgroundColor: "$colors$disabled",
        $$color: "$colors$onDisabled",
      },
      false: {},
    },
    checked: {
      true: {},
      false: {
        borderColor: "$colors$subtle",
      },
      indeterminate: {},
    },
  },

  defaultVariants: {
    size: "125",
    variant: "primary",
    isOutline: false,
    checked: false,
    disabled: false,
  },

  compoundVariants: [
    {
      checked: true,
      variant: "primary",
      disabled: false,
      css: {
        $$backgroundColor: "$colors$primary",
        $$color: "transparent",
      },
    },
    {
      checked: true,
      variant: "secondary",
      disabled: false,
      css: {
        $$backgroundColor: "$colors$secondary",
        $$color: "$colors$subtle",
      },
    },
    {
      checked: true,
      variant: "cta",
      disabled: false,
      css: {
        $$backgroundColor: "$colors$cta",
        $$color: "transparent",
      },
    },
    {
      checked: "indeterminate",
      variant: "primary",
      disabled: false,
      css: {
        $$backgroundColor: "$colors$primary",
        $$color: "transparent",
      },
    },
    {
      checked: "indeterminate",
      variant: "secondary",
      disabled: false,
      css: {
        $$backgroundColor: "$colors$secondary",
        $$color: "$colors$subtle",
      },
    },
    {
      checked: "indeterminate",
      variant: "cta",
      disabled: false,
      css: {
        $$backgroundColor: "$colors$cta",
        $$color: "transparent",
      },
    },
    {
      checked: false,
      variant: "primary",
      disabled: false,
      css: {
        $$backgroundColor: "transparent",
        $$color: "$colors$subtle",
      },
    },
    {
      checked: false,
      variant: "secondary",
      disabled: false,
      css: {
        $$backgroundColor: "transparent",
        $$color: "$colors$subtle",
      },
    },
    {
      checked: false,
      variant: "cta",
      disabled: false,
      css: {
        $$backgroundColor: "transparent",
        $$color: "$colors$subtle",
      },
    },
    {
      isOutline: true,
      variant: "primary",
      disabled: false,
      css: {
        $$backgroundColor: "transparent",
        $$color: theme.colors.primary,
      },
    },
    {
      isOutline: true,
      variant: "secondary",
      disabled: false,
      css: {
        $$backgroundColor: "transparent",
        $$color: theme.colors.secondary,
      },
    },
    {
      isOutline: true,
      variant: "cta",
      disabled: false,
      css: {
        $$backgroundColor: "transparent",
        $$color: theme.colors.cta,
      },
    },
    {
      isOutline: true,
      variant: "primary",
      disabled: true,
      checked: true,
      css: {
        $$backgroundColor: "$colors$disabled",
        $$color: "$colors$onDisabled",
      },
    },
    {
      isOutline: true,
      variant: "secondary",
      disabled: true,
      checked: true,
      css: {
        $$backgroundColor: "$colors$disabled",
        $$color: "$colors$onDisabled",
      },
    },
    {
      isOutline: true,
      variant: "cta",
      disabled: true,
      checked: true,
      css: {
        $$backgroundColor: "$colors$disabled",
        $$color: "$colors$onDisabled",
      },
    },
    {
      checked: false,
      disabled: true,
      css: {
        borderColor: "$colors$onDisabled",
        color: theme.colors.subtle,
      },
    },
  ],
});

type StyleCheckboxProps = React.ComponentPropsWithRef<typeof StyledCheckbox>;

const StyledIndicator = styled(PrimitiveCheckbox.Indicator, {
  color: "$$variantColor",
  flex: "0 0 $125",
  lineHeight: "0",

  variants: {
    disabled: {
      true: {
        $$variantColor: "$colors$disabled",
        borderColor: "$colors$subtle",
        color: "$colors$onDisabled",
      },
    },
    size: {
      "087": {
        width: "$087",
        height: "$087",
      },
      "125": {
        width: "$125",
        height: "$125",
      },
    },
    variant: {
      primary: {
        $$variantColor: "$colors$onPrimary",
      },
      secondary: {
        $$variantColor: "$colors$onSecondary",
      },
      cta: {
        $$variantColor: "$colors$onCta",
      },
    },
    isOutline: {
      true: {},
      false: {},
    },
  },

  compoundVariants: [
    {
      isOutline: true,
      variant: "primary",
      css: {
        $$variantColor: "$colors$primary",
      },
    },
    {
      isOutline: true,
      variant: "secondary",
      css: {
        $$variantColor: "$colors$secondary",
      },
    },
    {
      isOutline: true,
      variant: "cta",
      css: {
        $$variantColor: "$colors$cta",
      },
    },
    {
      isOutline: false,
      variant: "primary",
      css: {
        $$variantColor: "$colors$onPrimary",
      },
    },
    {
      isOutline: false,
      variant: "secondary",
      css: {
        $$variantColor: "$colors$onSecondary",
      },
    },
    {
      isOutline: false,
      variant: "cta",
      css: {
        $$variantColor: "$colors$onCta",
      },
    },
  ],

  defaultVariants: {
    variant: "primary",
    size: "125",
    isOutline: false,
  },
});

type CheckboxVariants = React.ComponentPropsWithRef<typeof StyledCheckbox>;

interface CheckboxInterface extends CheckboxVariants {
  defaultChecked?: boolean | "indeterminate";
  checked?: boolean | "indeterminate";
  onCheckedChange?: (checked: boolean | "indeterminate") => void;
  disabled?: boolean;
  required?: boolean;
  name?: string;
  value?: string;
  id?: string;
}

const StyledCheck = styled("span", {
  flex: "0 0 $$checkSize",
  variants: {
    size: {
      "087": {
        $$checkSize: "$size$087",
      },
      "125": {
        $$checkSize: "$size$125",
      },
    },
    checked: {
      true: {
        visibility: "visible",
      },
      false: {
        visibility: "hidden",
      },
      indeterminate: {
        visibility: "visible",
      },
    },
  },

  defaultVariant: {
    size: "125",
    checked: false,
  },
});

export const Checkbox = React.forwardRef<HTMLButtonElement, CheckboxInterface>(
  (props, ref) => {
    return (
      <StyledCheckbox ref={ref} {...props}>
        <StyledIndicator
          size={props.size}
          variant={props.variant}
          isOutline={props.isOutline}
          disabled={props.disabled}
        >
          <StyledCheck size={props.size} checked={props.checked}>
            {props.checked === "indeterminate" ? (
              <Indeterminate
                {...{
                  fill: "currentColor",
                  "aria-hidden": true,
                  focusable: false,
                  role: "img",
                }}
              />
            ) : (
              <Check
                {...{
                  fill: "currentColor",
                  "aria-hidden": true,
                  focusable: false,
                  role: "img",
                }}
              />
            )}
          </StyledCheck>
        </StyledIndicator>
      </StyledCheckbox>
    );
  }
);

Checkbox.displayName = "Checkbox";

type CheckboxProps = React.ComponentProps<typeof Checkbox>;

export type { CheckboxProps, StyleCheckboxProps, CheckboxInterface };
