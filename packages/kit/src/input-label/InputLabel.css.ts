import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from '../theme/contracts.css';

export const inputLabelBase = style({
  color: vars.colors.accessible,
  fontFamily: vars.fonts.meta,
  fontSize: vars.fontSizes['100'],
  fontWeight: vars.fontWeights.light,
  lineHeight: vars.lineHeights['110'],
});

export const inputLabelVariants = styleVariants({
  enabled: {},
  disabled: {
    color: vars.colors.onDisabled,
  },
});

export const requiredIndicator = style({
  color: vars.colors.error,
});
