import * as React from "react";

import { theme, styled } from "@washingtonpost/wpds-theme";

import Check from "@washingtonpost/wpds-assets/asset/check";
import Indeterminate from "@washingtonpost/wpds-assets/asset/indeterminate";

import * as PrimitiveCheckbox from "@radix-ui/react-checkbox";

const StyledCheckbox = styled(PrimitiveCheckbox.Root, {
  transition: "$allFast",
  appearance: "none",
  flex: "0 0 $125",
  borderRadius: "$012",
  border: "1px solid",
  borderColor: "$subtle",
  display: "block",
  cursor: "pointer",
  overflow: "hidden",

  $$variantColor: "$colors$primary",

  "&:focus": {
    outline: "1px solid $signal",
    outlineOffset: "2px",
  },

  "&:disabled": {
    $$variantColor: "$colors$disabled",
    $$borderColor: "$colors$onDisabled",
  },

  "&[aria-checked='true']": {
    backgroundColor: "$$variantColor",
    borderColor: "$$borderColor",
  },

  "&[aria-checked='false']": {
    backgroundColor: "transparent",
  },

  "&[aria-checked='mixed']": {
    backgroundColor: "$$variantColor",
    borderColor: "$$borderColor",
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
      primary: {
        $$variantColor: "$colors$primary",
        $$borderColor: "transparent",
      },
      secondary: {
        $$variantColor: "$colors$secondary",
        $$borderColor: "$colors$subtle",
      },
      cta: {
        $$variantColor: "$colors$cta",
        $$borderColor: "transparent",
      },
    },
    style: {
      outline: {
        border: "1px solid",
        $$borderColor: "$$variantColor",
      },
      fill: {},
    },
  },

  defaultVariants: {
    size: "125",
    variant: "primary",
  },

  compoundVariants: [
    {
      style: "outline",
      variant: "primary",
      css: {
        $$variantColor: "none",
        color: theme.colors.primary,
        $$borderColor: "$$variantColor",
      },
    },
    {
      style: "outline",
      variant: "secondary",
      css: {
        $$variantColor: "none",
        color: theme.colors.secondary,
        $$borderColor: "$$variantColor",
      },
    },
    {
      style: "outline",
      variant: "cta",
      css: {
        $$variantColor: "none",
        color: theme.colors.cta,
        $$borderColor: "$$variantColor",
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
    style: {
      outline: {},
      fill: {},
    },
  },

  compoundVariants: [
    {
      style: "outline",
      variant: "primary",
      css: {
        $$variantColor: "$colors$primary",
      },
    },
    {
      style: "outline",
      variant: "secondary",
      css: {
        $$variantColor: "$colors$secondary",
      },
    },
    {
      style: "outline",
      variant: "cta",
      css: {
        $$variantColor: "$colors$cta",
      },
    },
  ],

  defaultVariants: {
    variant: "primary",
    size: "125",
    style: "fill",
  },
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
      <StyledCheckbox
        ref={ref}
        id={props.id}
        checked={props.checked}
        {...props}
      >
        <StyledIndicator
          size={props.size}
          variant={props.variant}
          style={props.style}
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
