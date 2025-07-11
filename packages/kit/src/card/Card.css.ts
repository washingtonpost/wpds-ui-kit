import { style } from "@vanilla-extract/css";
import { vars } from "../theme/vanilla-extract";

export const card = style({
  padding: vars.space["150"],
  border: vars.colors.outline,
  borderRadius: vars.radii["012"],
  borderWidth: "1px",
  borderStyle: "solid",
  backgroundColor: vars.colors.secondary,
  color: vars.colors.onSecondary,
  width: "100%",
});
