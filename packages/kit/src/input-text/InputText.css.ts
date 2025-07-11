import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { vars } from '../theme/contracts.css';

// Shared input styles - base styles for all input components
export const inputBase = style({
  borderRadius: vars.radii['012'],
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: vars.colors.outline,
  backgroundColor: vars.colors.secondary,
  color: vars.colors.primary,
  fontFamily: vars.fonts.meta,
  fontSize: vars.fontSizes['100'],
  fontWeight: vars.fontWeights.light,
  lineHeight: vars.lineHeights['125'],
  transition: 'border-color 0.2s ease',
  
  ':focus': {
    borderColor: vars.colors.signal,
    outline: 'none',
  },
  
  '@media': {
    '(prefers-reduced-motion: reduce)': {
      transition: 'none',
    },
  },
});

// Input container recipe
export const inputContainerRecipe = recipe({
  base: [
    inputBase,
    {
      alignItems: 'center',
      display: 'flex',
      position: 'relative',
    },
  ],
  variants: {
    isDisabled: {
      true: {
        backgroundColor: vars.colors.disabled,
        borderColor: vars.colors.disabled,
        color: vars.colors.onDisabled,
        cursor: 'not-allowed',
        
        ':focus-within': {
          borderColor: vars.colors.disabled,
        },
      },
    },
    isInvalid: {
      true: {
        borderColor: vars.colors.error,
        
        ':focus-within': {
          borderColor: vars.colors.error,
        },
      },
    },
    isSuccessful: {
      true: {
        borderColor: vars.colors.success,
        
        ':focus-within': {
          borderColor: vars.colors.success,
        },
      },
    },
  },
});

// Unstyled input styles (for the actual input element)
export const unstyledInput = style({
  backgroundColor: 'transparent',
  border: 'none',
  color: 'inherit',
  display: 'block',
  fontSize: 'inherit',
  lineHeight: 'inherit',
  paddingTop: vars.space['125'],
  paddingBottom: vars.space['050'],
  paddingLeft: vars.space['050'],
  paddingRight: vars.space['050'],
  textOverflow: 'ellipsis',
  width: '100%',
  WebkitAppearance: 'none',
  
  ':focus': {
    outline: 'none',
  },
  
  ':disabled': {
    cursor: 'not-allowed',
    opacity: 1, // Override browser default
  },
  
  '::placeholder': {
    color: vars.colors.outline,
    opacity: 1,
  },
});

// Label wrapper
export const labelInputWrapper = style({
  flex: 1,
  position: 'relative',
});

// Input label styles
export const inputLabelRecipe = recipe({
  base: {
    color: vars.colors.outline,
    cursor: 'text',
    fontSize: vars.fontSizes['100'],
    fontWeight: vars.fontWeights.light,
    left: vars.space['050'],
    lineHeight: vars.lineHeights['125'],
    pointerEvents: 'none',
    position: 'absolute',
    top: vars.space['100'],
    transform: `translateY(0)`,
    transition: `all ${vars.transitions.fast}`,
    zIndex: 1,
    
    '@media': {
      '(prefers-reduced-motion: reduce)': {
        transition: 'none',
      },
    },
  },
  variants: {
    isFloating: {
      true: {
        fontSize: vars.fontSizes['075'],
        lineHeight: vars.lineHeights['100'],
        transform: `translateY(${vars.space['050']})`,
      },
    },
    isDisabled: {
      true: {
        cursor: 'not-allowed',
        color: vars.colors.onDisabled,
      },
    },
    isRequired: {
      true: {},
    },
  },
});

// Icon container
export const iconContainer = style({
  color: vars.colors.outline,
  display: 'flex',
  paddingLeft: vars.space['100'],
  paddingRight: vars.space['075'],
  alignItems: 'center',
  
  selectors: {
    '&[data-disabled="true"]': {
      color: 'inherit',
    },
  },
});

// Button styles for icon buttons
export const buttonIconBase = style({
  borderRadius: vars.radii['012'],
  marginRight: vars.space['050'],
  padding: vars.space['050'],
  border: 'none',
  background: 'transparent',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'inherit',
  
  ':hover': {
    backgroundColor: vars.colors.alpha25,
  },
  
  ':focus': {
    outline: `1px solid ${vars.colors.signal}`,
    outlineOffset: '1px',
  },
  
  ':disabled': {
    cursor: 'not-allowed',
    opacity: 0.5,
  },
});

// Clear button specific styles
export const buttonClear = style([
  buttonIconBase,
  {
    border: 'none',
    borderRadius: vars.radii['012'],
  },
]);

// Divider styles
export const buttonDivider = style({
  height: vars.sizes['150'],
  margin: `0 ${vars.space['025']}`,
  borderLeft: `1px solid ${vars.colors.outline}`,
  borderRight: 'none',
  borderTop: 'none',
  borderBottom: 'none',
});

// Required indicator
export const requiredIndicator = style({
  color: vars.colors.error,
});

export type InputContainerVariants = Parameters<typeof inputContainerRecipe>[0];
export type InputLabelVariants = Parameters<typeof inputLabelRecipe>[0];
