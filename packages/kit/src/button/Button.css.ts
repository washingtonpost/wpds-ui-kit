import { recipe } from '@vanilla-extract/recipes';
import { vars } from '../theme/contracts.css';
import { focusableStyles, reducedMotion } from '../theme/accessibility.css';

export const buttonRecipe = recipe({
  base: [
    focusableStyles,
    reducedMotion,
    {
      all: 'unset',
      display: 'inline-flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      height: 'fit-content',
      width: 'fit-content',
      borderRadius: vars.radii.round,
      cursor: 'pointer',
      border: 'none',
      appearance: 'none',
      paddingLeft: vars.space['100'],
      paddingRight: vars.space['100'],
      fontFamily: vars.fonts.meta,
      fontWeight: vars.fontWeights.bold,
      fontSize: vars.fontSizes['100'],
      lineHeight: vars.lineHeights['100'],
      gap: vars.space['050'],
      transition: `background ${vars.transitions.fast} ${vars.transitions.inOut}`,
      position: 'relative',
      
      selectors: {
        '&:disabled': {
          color: vars.colors.onDisabled,
          backgroundColor: vars.colors.disabled,
          borderColor: vars.colors.onDisabled,
          cursor: 'not-allowed',
        },
      },
    }
  ],
  
  variants: {
    variant: {
      primary: {
        backgroundColor: vars.colors.primary,
        color: vars.colors.onPrimary,
        selectors: {
          '&:not(:disabled):hover': {
            backgroundColor: vars.colors.gray60,
          },
        },
      },
      secondary: {
        backgroundColor: vars.colors.secondary,
        color: vars.colors.onSecondary,
        border: `1px solid ${vars.colors.outline}`,
        selectors: {
          '&:not(:disabled):hover': {
            backgroundColor: vars.colors.gray400,
          },
        },
      },
      cta: {
        backgroundColor: vars.colors.cta,
        color: vars.colors.onCta,
        selectors: {
          '&:not(:disabled):hover': {
            backgroundColor: vars.colors.blue80,
          },
        },
      },
    },
    
    density: {
      compact: {
        paddingTop: vars.space['050'],
        paddingBottom: vars.space['050'],
      },
      default: {
        paddingTop: vars.space['075'],
        paddingBottom: vars.space['075'],
      },
    },
    
    isOutline: {
      true: {
        backgroundColor: 'transparent',
        border: '1px solid currentColor',
      },
      false: {},
    },
    
    icon: {
      center: {
        paddingTop: vars.space['050'],
        paddingBottom: vars.space['050'],
        paddingLeft: vars.space['050'],
        paddingRight: vars.space['050'],
        fontSize: '0',
        lineHeight: '0',
        gap: '0',
        maxWidth: 'fit-content',
      },
      left: {
        flexDirection: 'row',
      },
      right: {
        flexDirection: 'row-reverse',
      },
      none: {},
    },
  },
  
  defaultVariants: {
    variant: 'secondary',
    density: 'default',
    isOutline: false,
    icon: 'left',
  },
  
  compoundVariants: [
    {
      variants: {
        icon: 'center',
        density: 'default',
      },
      style: {
        padding: vars.space['075'],
        fontSize: '0',
        lineHeight: '0',
      },
    },
    {
      variants: {
        isOutline: true,
        variant: 'primary',
      },
      style: {
        backgroundColor: 'transparent',
        color: vars.colors.primary,
        selectors: {
          '&:not(:disabled):hover': {
            backgroundColor: vars.colors.alpha25,
          },
        },
      },
    },
    {
      variants: {
        isOutline: true,
        variant: 'secondary',
      },
      style: {
        backgroundColor: 'transparent',
        color: vars.colors.onSecondary,
        selectors: {
          '&:not(:disabled):hover': {
            backgroundColor: vars.colors.alpha25,
          },
        },
      },
    },
    {
      variants: {
        isOutline: true,
        variant: 'cta',
      },
      style: {
        backgroundColor: 'transparent',
        color: vars.colors.cta,
        selectors: {
          '&:not(:disabled):hover': {
            backgroundColor: vars.colors.alpha25,
          },
        },
      },
    },
  ],
});
