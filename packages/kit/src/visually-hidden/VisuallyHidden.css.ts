import { style } from "@vanilla-extract/css";

export const visuallyHidden = style({
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
  selectors: {
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
  },
});
