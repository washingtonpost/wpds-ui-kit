import * as Theme from "@washingtonpost/wpds-theme";
import * as React from "react";

export const Container = Theme.styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  margin: "0 auto",
  width: "100%",

  $$xl: "1440px",
  $$lg: "1024px",
  $$md: "900px",
  $$sm: "768px",

  variants: {
    /** the max width of them all */
    maxWidth: {
      fluid: {
        width: "100%",
      },
      sm: {
        "@notSm": {
          maxWidth: "$$sm",
        },
        "@notMd": {
          maxWidth: "$$md",
        },
        "@notLg": {
          maxWidth: "$$lg",
        },
        "@notXl": {
          maxWidth: "$$xl",
        },
      },
      md: {
        "@notMd": {
          maxWidth: "$$md",
        },
        "@notLg": {
          maxWidth: "$$lg",
        },
        "@notXl": {
          maxWidth: "$$xl",
        },
      },
      lg: {
        "@notLg": {
          maxWidth: "$$lg",
        },
        "@notXl": {
          maxWidth: "$$xl",
        },
      },
      xl: {
        "@notXl": {
          maxWidth: "$$xl",
        },
      },
    },
  },
  defaultVariants: {
    maxWidth: "md",
  },
});

type ContainerProps = React.ComponentProps<typeof Container>;

export type { ContainerProps };
