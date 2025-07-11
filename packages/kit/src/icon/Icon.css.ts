import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { vars } from '../theme/contracts.css';

export const iconBase = style({
  display: 'block',
  flexShrink: 0,
  userSelect: 'none',
});

export const iconRecipe = recipe({
  base: iconBase,
  variants: {
    size: {
      '100': { 
        width: vars.sizes['100'],
        height: vars.sizes['100'],
      },
      '150': { 
        width: vars.sizes['150'],
        height: vars.sizes['150'],
      },
      '200': { 
        width: vars.sizes['200'],
        height: vars.sizes['200'],
      },
    },
    fill: {
      currentColor: { fill: 'currentColor' },
      primary: { fill: vars.colors.primary },
      secondary: { fill: vars.colors.secondary },
      onSecondary: { fill: vars.colors.onSecondary },
      error: { fill: vars.colors.error },
      success: { fill: vars.colors.success },
      warning: { fill: vars.colors.warning },
      signal: { fill: vars.colors.signal },
      disabled: { fill: vars.colors.disabled },
    },
  },
  defaultVariants: {
    size: '100',
    fill: 'currentColor',
  },
});

export type IconVariants = Parameters<typeof iconRecipe>[0];
