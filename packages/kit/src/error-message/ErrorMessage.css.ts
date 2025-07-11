import { style } from "@vanilla-extract/css";
import { vars } from "../theme/contracts.css";

export const errorMessage = style({
  color: vars.colors.error,
  fontFamily: vars.fonts.meta,
  fontSize: vars.fontSizes["075"],
  fontWeight: vars.fontWeights.light,
  lineHeight: 1.33,
  marginBlock: 0,
});
