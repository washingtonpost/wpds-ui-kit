import React from "react";

import { styled, theme } from "../theme";

import { Check, Indeterminate } from "@washingtonpost/wpds-assets";

import * as PrimitiveCheckbox from "@radix-ui/react-checkbox";

import { InputLabel } from "../input-label";

const StyledCheckbox = styled(PrimitiveCheckbox.Root, {
  transition: `background ${theme.transitions.fast} ${theme.transitions.inOut}`,
  "@reducedMotion": {
    transition: "none",
  },
  appearance: "none",
  borderRadius: "$012",
  border: "1px solid",
  display: "block",
  cursor: "pointer",
  overflow: "hidden",
  padding: 0,
  backgroundColor: "$$backgroundColor",
  color: "$$color",
  flexShrink: "0",

  "&:focus": {
    outline: "1px solid $signal",
    outlineOffset: "2px",
  },

  "&:disabled": {
    $$backgroundColor: "$colors$disabled",
    $$color: "$colors$onDisabled",

    borderColor: "$colors$onDisabled",
    color: theme.colors.outline,
  },

  "&[aria-checked='false']:not(:disabled)": {
    borderColor: "$colors$outline",
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
  },

  defaultVariants: {
    size: "125",
    variant: "primary",
    isOutline: false,
  },

  compoundVariants: [
    {
      variant: "primary",
      css: {
        "&:not([aria-checked='false']):not(:disabled)": {
          $$backgroundColor: "$colors$primary",
          $$color: "transparent",
        },
      },
    },
    {
      variant: "secondary",
      css: {
        "&:not([aria-checked='false']):not(:disabled)": {
          $$backgroundColor: "$colors$secondary",
          $$color: "$colors$outline",
        },
      },
    },
    {
      variant: "cta",
      css: {
        "&:not([aria-checked='false']):not(:disabled)": {
          $$backgroundColor: "$colors$cta",
          $$color: "transparent",
        },
      },
    },
    {
      isOutline: true,
      variant: "primary",
      css: {
        "&:not([aria-checked='false']):not(:disabled)": {
          $$backgroundColor: "transparent",
          $$color: theme.colors.primary,
        },
      },
    },
    {
      isOutline: true,
      variant: "secondary",
      css: {
        "&:not([aria-checked='false']):not(:disabled)": {
          $$backgroundColor: "transparent",
          $$color: theme.colors.secondary,
        },
      },
    },
    {
      isOutline: true,
      variant: "cta",
      css: {
        "&:not([aria-checked='false']):not(:disabled)": {
          $$backgroundColor: "transparent",
          $$color: theme.colors.cta,
        },
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
        borderColor: "$colors$outline",
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
  id: string;
  label?: string;
  /** The correspoding label to the checkbox. Allows you to pass in more than just text */
  children?: React.ReactNode;
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
  },

  defaultVariant: {
    size: "125",
  },
});

const StyledInputLabel = styled(InputLabel, {
  display: "flex",
  cursor: "default",
  gap: "$025",
  flexDirection: "row",
  alignItems: "flex-start",
  justifyContent: "center",
  lineHeight: theme.lineHeights["050"],
});

const StyledLabel = styled("span", {
  alignSelf: "flex-end",
});

export const Checkbox = React.forwardRef<HTMLButtonElement, CheckboxInterface>(
  (props, ref) => {
    return (
      <StyledInputLabel htmlFor={props.id} required={props.required}>
        <StyledCheckbox ref={ref} {...props}>
          <StyledIndicator
            size={props.size}
            variant={props.variant}
            isOutline={props.isOutline}
            disabled={props.disabled}
          >
            <StyledCheck size={props.size}>
              {props.checked === "indeterminate" ||
              props.defaultChecked === "indeterminate" ? (
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
        <StyledLabel>{props.label || props.children}</StyledLabel>
      </StyledInputLabel>
    );
  }
);

Checkbox.displayName = "Checkbox";

type CheckboxProps = React.ComponentProps<typeof Checkbox>;

export type { CheckboxProps, StyleCheckboxProps, CheckboxInterface };
