import { style, styleVariants, keyframes } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { vars } from '../theme/contracts.css';

// Carousel animations
const slideTransition = keyframes({
  from: { transform: 'translateX(0)' },
  to: { transform: 'translateX(-100%)' },
});

const fadeIn = keyframes({
  from: { opacity: '0' },
  to: { opacity: '1' },
});

// Base carousel styles
export const carouselRoot = style({
  maxWidth: '100%',
});

export const carouselContainer = style({
  overflow: 'hidden',
  position: 'relative',
  ':focus': {
    outline: 'none',
  },
});

export const carouselSlider = style({
  display: 'flex',
  listStyle: 'none',
  paddingInlineStart: '0',
  marginBlock: '0',
  transition: `transform 0.5s ${vars.transitions.inOut}`,
  '@media': {
    '(prefers-reduced-motion: reduce)': {
      transition: 'none',
    },
  },
});

// Carousel item styles
export const carouselItem = recipe({
  base: {
    flexShrink: '0',
    position: 'relative',
  },
  variants: {
    focused: {
      true: {
        outline: `2px solid ${vars.colors.signal}`,
        outlineOffset: '-2px',
        position: 'relative',
        zIndex: '1',
      },
      false: {},
    },
  },
});

// Carousel header styles
export const carouselHeader = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: vars.space['100'],
});

export const carouselHeaderContent = style({
  display: 'flex',
  alignItems: 'center',
  flexGrow: '1',
});

export const carouselHeaderActions = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.space['050'],
});

export const carouselTitle = style({
  margin: '0',
  fontSize: vars.fontSizes['125'],
  fontWeight: vars.fontWeights.bold,
  lineHeight: vars.lineHeights['125'],
  color: vars.colors.primary,
});

// Carousel footer styles
export const carouselFooter = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: vars.space['100'],
});

// Navigation button styles
export const carouselButton = recipe({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'none',
    borderRadius: vars.radii['012'],
    padding: vars.space['050'],
    cursor: 'pointer',
    transition: `all 0.2s ${vars.transitions.inOut}`,
    backgroundColor: vars.colors.secondary,
    color: vars.colors.onSecondary,
    ':hover': {
      backgroundColor: vars.colors.gray200,
    },
    ':focus': {
      outline: `2px solid ${vars.colors.signal}`,
      outlineOffset: '1px',
    },
    ':disabled': {
      opacity: '0.5',
      cursor: 'not-allowed',
      backgroundColor: vars.colors.gray100,
      color: vars.colors.gray400,
    },
  },
  variants: {
    size: {
      compact: {
        padding: vars.space['025'],
        fontSize: vars.fontSizes['087'],
      },
      default: {
        padding: vars.space['050'],
        fontSize: vars.fontSizes['100'],
      },
      large: {
        padding: vars.space['075'],
        fontSize: vars.fontSizes['112'],
      },
    },
    variant: {
      primary: {
        backgroundColor: vars.colors.primary,
        color: vars.colors.onPrimary,
        ':hover': {
          backgroundColor: vars.colors.blue80,
        },
      },
      secondary: {
        backgroundColor: vars.colors.secondary,
        color: vars.colors.onSecondary,
        ':hover': {
          backgroundColor: vars.colors.gray300,
        },
      },
      ghost: {
        backgroundColor: 'transparent',
        color: vars.colors.primary,
        ':hover': {
          backgroundColor: vars.colors.gray100,
        },
      },
    },
  },
  defaultVariants: {
    size: 'default',
    variant: 'secondary',
  },
});

// Responsive variants for different screen sizes
export const responsiveVariants = styleVariants({
  mobile: {
    '@media': {
      'screen and (max-width: 768px)': {
        padding: vars.space['025'],
      },
    },
  },
  tablet: {
    '@media': {
      'screen and (min-width: 769px) and (max-width: 1024px)': {
        padding: vars.space['050'],
      },
    },
  },
  desktop: {
    '@media': {
      'screen and (min-width: 1025px)': {
        padding: vars.space['075'],
      },
    },
  },
});

// Accessibility and animation utilities
export const accessibilityStyles = {
  visuallyHidden: style({
    position: 'absolute',
    width: '1px',
    height: '1px',
    padding: '0',
    margin: '-1px',
    overflow: 'hidden',
    clip: 'rect(0, 0, 0, 0)',
    whiteSpace: 'nowrap',
    border: '0',
  }),
  focusVisible: style({
    selectors: {
      '&:focus-visible': {
        outline: `2px solid ${vars.colors.signal}`,
        outlineOffset: '2px',
      },
    },
  }),
  reducedMotion: style({
    '@media': {
      '(prefers-reduced-motion: reduce)': {
        transition: 'none',
        animation: 'none',
      },
    },
  }),
};

// Animation styles
export const animationStyles = {
  slideIn: style({
    animation: `${slideTransition} 0.3s ease-in-out`,
  }),
  fadeIn: style({
    animation: `${fadeIn} 0.2s ease-in-out`,
  }),
  transition: style({
    transition: `all 0.2s ${vars.transitions.inOut}`,
  }),
};
