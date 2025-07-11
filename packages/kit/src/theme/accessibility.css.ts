import { style } from '@vanilla-extract/css';
import { vars } from './contracts.css';

// Ensure proper focus indicators across all interactive elements
export const focusableStyles = style({
  selectors: {
    '&:focus-visible': {
      outline: `2px solid ${vars.colors.signal}`,
      outlineOffset: '2px',
    },
    // Fallback for browsers that don't support :focus-visible
    '&:focus': {
      outline: `2px solid ${vars.colors.signal}`,
      outlineOffset: '2px',
    },
    '&:focus:not(:focus-visible)': {
      outline: 'none',
    }
  }
});

// Screen reader only content
export const visuallyHidden = style({
  position: 'absolute',
  width: '1px',
  height: '1px',
  padding: 0,
  margin: '-1px',
  overflow: 'hidden',
  clip: 'rect(0, 0, 0, 0)',
  whiteSpace: 'nowrap',
  borderWidth: 0,
});

// Ensure interactive elements meet minimum size requirements
export const interactiveElement = style({
  minWidth: '44px',
  minHeight: '44px',
  '@media': {
    '(pointer: fine)': {
      minWidth: '24px',
      minHeight: '24px',
    }
  }
});

// High contrast mode support
export const highContrastMode = style({
  '@media': {
    '(prefers-contrast: high)': {
      borderWidth: '2px',
    }
  }
});

// Reduced motion support
export const reducedMotion = style({
  '@media': {
    '(prefers-reduced-motion: reduce)': {
      animationDuration: '0.01ms !important',
      animationIterationCount: '1 !important',
      transitionDuration: '0.01ms !important',
    }
  }
});

// Skip link for keyboard navigation
export const skipLink = style({
  position: 'absolute',
  top: '-40px',
  left: '6px',
  background: vars.colors.background,
  color: vars.colors.onBackground,
  padding: vars.space['050'],
  zIndex: '1000',
  textDecoration: 'none',
  borderRadius: vars.radii['025'],
  selectors: {
    '&:focus': {
      top: '6px',
    }
  }
});

// Maintain aspect ratio for media
export const aspectRatio = {
  square: style({
    aspectRatio: '1 / 1',
  }),
  video: style({
    aspectRatio: '16 / 9',
  }),
  photo: style({
    aspectRatio: '4 / 3',
  }),
};

// Truncate text with ellipsis
export const textTruncate = style({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
});

// Multi-line text truncation
export const textTruncateLines = style({
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
});

export const textTruncateLines3 = style({
  display: '-webkit-box',
  WebkitLineClamp: 3,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
});

export const textTruncateLines4 = style({
  display: '-webkit-box',
  WebkitLineClamp: 4,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
});
