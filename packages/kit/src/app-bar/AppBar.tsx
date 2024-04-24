import * as Theme from "../theme";
import * as React from "react";

export const AppBar = Theme.styled("div", {
  display: "flex",
  flexDirection: "column",
  width: "100%",

  variants: {
    /** App bar's position in time and space */
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
    /** App bar's shadow in time and space */
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

type AppBarProps = React.ComponentProps<typeof AppBar>;

export type { AppBarProps };
