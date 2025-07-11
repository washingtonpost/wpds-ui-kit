import { style } from "@vanilla-extract/css";
import { vars } from "../theme/contracts.css";

export const helperText = style({
  color: vars.colors.accessible,
  fontFamily: vars.fonts.meta,
  fontSize: vars.fontSizes["075"],
  fontWeight: vars.fontWeights.light,
  lineHeight: 1.33,
  marginBlock: 0,
});
