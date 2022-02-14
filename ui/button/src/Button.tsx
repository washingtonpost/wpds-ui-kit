import { theme, styled } from "@washingtonpost/wpds-theme";
import * as React from "react";

export const Button = styled("button", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "$round",
  cursor: "pointer",
  border: "none",
  appearance: "none",
  px: "$100",
  fontFamily: "$meta",
  fontWeight: "$bold",
  fontSize: "$100",
  lineHeight: "$100",
  gap: "$050",

  variants: {
    variant: {
      primary: {
        background: theme.colors.primary,
        color: theme.colors.onPrimary,
        "@hover": {
          "&:hover": {
            background: theme.colors.gray60,
          },
        },
      },
      secondary: {
        background: theme.colors.secondary,
        color: theme.colors.onSecondary,
        border: "1px solid $subtle",
        "@hover": {
          "&:hover": {
            background: theme.colors.gray400,
          },
        },
      },
      cta: {
        background: theme.colors.cta,
        color: theme.colors.onCta,
        "@hover": {
          "&:hover": {
            background: theme.colors.vividBlue80,
          },
        },
      },
    },
    size: {
      "050": {
        py: "$050",
      },
      "075": {
        py: "$075",
      },
    },
    style: {
      outline: {
        background: "none",
        border: "1px solid",
        "@hover": {
          "&:hover": {
            background: theme.colors.alpha25,
          },
        },
      },
      fill: {},
    },
    icon: {
      center: {
        py: "$050",
        px: "$050",
        fontSize: "0",
        lineHeight: "0",
        gap: "0",
        maxWidth: "fit-content",
      },
      left: {
        flexDirection: "row",
      },
      right: {
        flexDirection: "row-reverse",
      },
      none: {},
    },
  },
  defaultVariants: {
    variant: "secondary",
    size: "050",
    style: "fill",
    icon: "left",
  },
  compoundVariants: [
    {
      icon: "center",
      size: "075",
      css: {
        padding: "$075",
        fontSize: "0",
        lineHeight: "0",
      },
    },
    {
      style: "outline",
      variant: "primary",
      css: {
        background: "none",
        color: theme.colors.primary,
      },
    },
    {
      style: "outline",
      variant: "secondary",
      css: {
        background: "none",
        color: theme.colors.secondary,
      },
    },
    {
      style: "outline",
      variant: "cta",
      css: {
        background: "none",
        color: theme.colors.cta,
      },
    },
  ],
});

type ButtonProps = React.ComponentProps<typeof Button>;

export type { ButtonProps };
