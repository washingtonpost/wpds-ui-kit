import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from '../theme/vanilla-extract';

export const appBar = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
});

export const appBarPositions = styleVariants({
  fixed: {
    position: 'fixed',
  },
  sticky: {
    position: 'sticky',
  },
  absolute: {
    position: 'absolute',
  },
  relative: {
    position: 'relative',
  },
});

export const appBarShadow = style({
  boxShadow: vars.shadows[300],
});
