import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from '../theme/contracts.css';

export const dividerBase = style({
  selectors: {
    '&[data-orientation=horizontal]': { 
      height: 1, 
      width: '100%' 
    },
    '&[data-orientation=vertical]': { 
      height: '100%', 
      width: 1 
    },
  },
});

export const dividerVariants = styleVariants({
  default: {
    backgroundColor: vars.colors.outline,
  },
  strong: {
    backgroundColor: vars.colors.primary,
  },
});
