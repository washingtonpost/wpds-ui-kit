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

  $$extraLarge: "1440px",
  $$large: "1024px",
  $$medium: "900px",
  $$small: "768px",
  $$extraSmall: "767px",

  variants: {
    size: {
      fluid: {
        width: "100%",
      },
      small: {
        "@media (min-width: 768px)": {
          maxWidth: "$$small",
        },
        "@media (min-width: 900px)": {
          maxWidth: "$$medium",
        },
        "@media (min-width: 1024px)": {
          maxWidth: "$$large",
        },
        "@media (min-width: 1440px)": {
          maxWidth: "$$extraLarge",
        },
      },
      medium: {
        "@media (min-width: 900px)": {
          maxWidth: "$$medium",
        },
        "@media (min-width: 1024px)": {
          maxWidth: "$$large",
        },
        "@media (min-width: 1440px)": {
          maxWidth: "$$extraLarge",
        },
      },
      large: {
        "@media (min-width: 1024px)": {
          maxWidth: "$$large",
        },
        "@media (min-width: 1440px)": {
          maxWidth: "$$extraLarge",
        },
      },
      extraLarge: {
        "@media (min-width: 1440px)": {
          maxWidth: "$$extraLarge",
        },
      },
    },
  },
  defaultVariants: {
    size: "medium",
  },
});

Container.displayName = NAME;

export type ContainerProps = Stitches.VariantProps<typeof Container>;
