import { theme, styled } from "@washingtonpost/wpds-theme";
import * as React from "react";

export const Button = styled("button", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  height: "fit-content",
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

  "&:disabled": {
    color: "$onDisabled",
    backgroundColor: "$colors$disabled",
    borderColor: "$colors$onDisabled",
  },

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
    density: {
      compact: {
        py: "$050",
      },
      loose: {
        py: "$075",
      },
    },
    isOutline: {
      true: {
        background: "none",
        border: "1px solid",
        "@hover": {
          "&:hover": {
            background: theme.colors.alpha25,
          },
        },
      },
      false: {},
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
    density: "compact",
    isOutline: false,
    icon: "left",
  },
  compoundVariants: [
    {
      icon: "center",
      density: "loose",
      css: {
        padding: "$075",
        fontSize: "0",
        lineHeight: "0",
      },
    },
    {
      isOutline: true,
      variant: "primary",
      css: {
        background: "none",
        color: theme.colors.primary,
      },
    },
    {
      isOutline: true,
      variant: "secondary",
      css: {
        background: "none",
        color: theme.colors.secondary,
      },
    },
    {
      isOutline: true,
      variant: "cta",
      css: {
        background: "none",
        color: theme.colors.cta,
      },
    },
  ],
});

type ButtonProps = React.ComponentProps<typeof Button>;

interface ButtonInterface extends ButtonProps {
  children: React.ReactNode;
}

export type { ButtonProps, ButtonInterface };
