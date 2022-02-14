import * as Theme from "@washingtonpost/wpds-theme";
import * as React from "react";

export const Button = Theme.styled("button", {
  display: "flex",
  flexDirection: "column",
  width: "100%",

  variants: {
    position: {
      fixed: {
        position: "fixed",
      },
      sticky: {
        position: "sticky",
      },
      absolute: {
        position: "absolute",
      },
      relative: {
        position: "relative",
      },
    },
    shadow: {
      true: {
        boxShadow: Theme.theme.shadows[300],
      },
    },
  },
  defaultVariants: {
    position: "relative",
    shadow: false,
  },
});

type ButtonProps = React.ComponentProps<typeof Button>;

export type { ButtonProps };
