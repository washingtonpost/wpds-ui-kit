import * as Theme from "@washingtonpost/wpds-theme";
import * as React from "react";
import * as Utils from "./../../../utils";

export const Container = Theme.styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  margin: "0 auto",

  $$xl: "1440px",
  $$lg: "1024px",
  $$md: "900px",
  $$sm: "768px",

  variants: {
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

export const StoryArgs = Utils.storybookCompat<ContainerProps>(Container);

export type { ContainerProps };
