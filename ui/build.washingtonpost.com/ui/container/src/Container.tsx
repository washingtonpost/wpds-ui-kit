import * as Theme from "@washingtonpost/wpds-theme";
import type * as Stitches from "@stitches/react";

const NAME = "Container";

/**
 * Container Yo
 */
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
    size: {
      fluid: {
        width: "100%",
      },
      sm: {
        "@media (min-width: 768px)": {
          maxWidth: "$$sm",
        },
        "@media (min-width: 900px)": {
          maxWidth: "$$md",
        },
        "@media (min-width: 1024px)": {
          maxWidth: "$$lg",
        },
        "@media (min-width: 1440px)": {
          maxWidth: "$$xl",
        },
      },
      md: {
        "@media (min-width: 900px)": {
          maxWidth: "$$md",
        },
        "@media (min-width: 1024px)": {
          maxWidth: "$$lg",
        },
        "@media (min-width: 1440px)": {
          maxWidth: "$$xl",
        },
      },
      lg: {
        "@media (min-width: 1024px)": {
          maxWidth: "$$lg",
        },
        "@media (min-width: 1440px)": {
          maxWidth: "$$xl",
        },
      },
      xl: {
        "@media (min-width: 1440px)": {
          maxWidth: "$$xl",
        },
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
});

Container.displayName = NAME;

export type ContainerProps = Stitches.VariantProps<typeof Container>;
