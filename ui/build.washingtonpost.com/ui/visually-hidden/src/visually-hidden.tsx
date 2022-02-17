import * as React from "react";
import * as Theme from "@washingtonpost/wpds-theme";

export const VisuallyHidden = Theme.styled("span", {
  position: "absolute",
  border: 0,
  padding: 0,
  whiteSpace: "nowrap",
  wordWrap: "normal",
  width: 1,
  height: 1,
  margin: -1,
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  color: "currentColor",

  // display label to screen when focused or active
  "&:active": {
    clip: "auto",
    height: "auto",
    width: "auto",
    margin: 0,
    overflow: "visible",
    position: "static",
  },
  "&:focus": {
    clip: "auto",
    height: "auto",
    width: "auto",
    margin: 0,
    overflow: "visible",
    position: "static",
  },
});

type VisuallyHiddenProps = React.ComponentProps<typeof VisuallyHidden>;

export type { VisuallyHiddenProps };
