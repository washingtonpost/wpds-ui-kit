import { style } from '@vanilla-extract/css';
import { vars } from '../theme/vanilla-extract';

export const fieldset = style({
  border: 'none',
  padding: '0',
});

export const legend = style({
  color: vars.colors.primary,
  display: 'table',
  fontFamily: vars.fonts.meta,
  fontSize: vars.fontSizes['100'],
  fontWeight: vars.fontWeights.bold,
  lineHeight: vars.lineHeights['100'],
  marginBlockEnd: vars.space['050'],
  maxWidth: '100%',
  padding: '0',
  whiteSpace: 'normal',
});

export const requiredIndicator = style({
  color: vars.colors.error,
});
