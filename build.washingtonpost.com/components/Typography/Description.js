import { styled, theme } from "@washingtonpost/wpds-ui-kit";

export const Description = styled("p", {
  color: theme.colors.accessible,
  fontFamily: theme.fonts.meta,
  fontWeight: theme.fontWeights.light,
  lineHeight: theme.lineHeights["150"],
  marginBlock: 0,
});
