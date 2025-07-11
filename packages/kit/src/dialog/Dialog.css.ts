import { style } from '@vanilla-extract/css';
import { vars } from '../theme/contracts.css';

// Dialog Content base styles
export const dialogContentBase = style({
  borderRadius: vars.radii['025'],
  boxShadow: vars.shadows['300'],
  color: vars.colors.primary,
  containerType: 'inline-size',
  display: 'grid',
  gridTemplateAreas: "'header' 'body' 'footer'",
  gridTemplateRows: 'auto 1fr auto',
  padding: vars.space['150'],
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  
  selectors: {
    '&.wpds-dialog-content-enter, &.wpds-dialog-content-appear': {
      transform: 'translate(-50%, -47%)',
      opacity: 0,
    },
    '&.wpds-dialog-content-enter-active, &.wpds-dialog-content-appear-active': {
      transform: 'translate(-50%, -50%)',
      opacity: 1,
      transition: `transform ${vars.transitions.normal} ${vars.transitions.inOut}, opacity ${vars.transitions.normal} ${vars.transitions.inOut}`,
    },
    '&.wpds-dialog-content-exit': {
      transform: 'translate(-50%, -50%)',
      opacity: 1,
    },
    '&.wpds-dialog-content-exit-active': {
      transform: 'translate(-50%, -50%) scale(0.97)',
      opacity: 0,
      transition: `transform ${vars.transitions.fast} ${vars.transitions.inOut}, opacity ${vars.transitions.fast} ${vars.transitions.inOut}`,
    },
  },
  
  '@media': {
    '(prefers-reduced-motion: reduce)': {
      selectors: {
        '&.wpds-dialog-content-enter-active, &.wpds-dialog-content-appear-active, &.wpds-dialog-content-exit-active': {
          transition: 'none',
        },
      },
    },
  },
});

// Dialog Overlay base styles
export const dialogOverlayBase = style({
  backgroundColor: vars.colors.alpha50,
  inset: '0',
  position: 'fixed',
  
  selectors: {
    '&.wpds-dialog-overlay-enter, &.wpds-dialog-overlay-appear': {
      opacity: 0,
    },
    '&.wpds-dialog-overlay-enter-active, &.wpds-dialog-overlay-appear-active': {
      opacity: 1,
      transition: `opacity ${vars.transitions.normal} ${vars.transitions.inOut}`,
    },
    '&.wpds-dialog-overlay-exit': {
      opacity: 1,
    },
    '&.wpds-dialog-overlay-exit-active': {
      opacity: 0,
      transition: `opacity ${vars.transitions.normal} ${vars.transitions.inOut}`,
    },
  },
  
  '@media': {
    '(prefers-reduced-motion: reduce)': {
      selectors: {
        '&.wpds-dialog-overlay-enter-active, &.wpds-dialog-overlay-appear-active, &.wpds-dialog-overlay-exit-active': {
          transition: 'none',
        },
      },
    },
  },
});

// Dialog Close styles
export const dialogCloseStyles = style({
  position: 'absolute',
  top: vars.space['150'],
  right: vars.space['150'],
  display: 'inline-flex',
  height: '40px',
  width: '40px',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: vars.radii.sm,
  fontSize: '0px',
  border: 'none',
  backgroundColor: 'transparent',
  color: vars.colors.gray500,
  outline: '2px solid transparent',
  outlineOffset: '2px',
  cursor: 'pointer',
  transition: 'all 0.2s ease-in-out',
  
  ':hover': {
    backgroundColor: vars.colors.gray100,
    color: vars.colors.gray700,
  },
  
  ':focus-visible': {
    outlineColor: vars.colors.blue500,
    backgroundColor: vars.colors.blue50,
  },
  
  ':active': {
    backgroundColor: vars.colors.gray200,
  },
  
  selectors: {
    '&[data-disabled]': {
      pointerEvents: 'none',
      opacity: 0.5,
    },
  },
  
  '@media': {
    '(prefers-reduced-motion: reduce)': {
      transition: 'none',
    },
  },
});

// Dialog Header styles
export const dialogHeader = style({
  gridArea: 'header',
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  gap: vars.space['100'],
  paddingBlockEnd: vars.space['100'],
});

// Dialog Body styles
export const dialogBody = style({
  color: vars.colors.primary,
  fontFamily: vars.fonts.meta,
  fontSize: vars.fontSizes['100'],
  fontWeight: vars.fontWeights.light,
  lineHeight: vars.lineHeights['125'],
  gridArea: 'body',
  maxHeight: '100%',
  overflowY: 'auto',
});

export const dialogBodyOverflow = style([
  dialogBody,
  {
    marginInlineEnd: `calc(-1 * ${vars.space['150']})`,
    paddingInlineEnd: vars.space['125'],
  },
]);

// Dialog Footer styles
export const dialogFooter = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  gap: vars.space['050'],
  gridArea: 'footer',
  marginBlockStart: vars.space['150'],
  '@container': {
    '(max-width: 350px)': {
      flexDirection: 'column-reverse',
      alignItems: 'stretch',
    },
  },
});

// Dialog Title styles
export const dialogTitle = style({
  color: vars.colors.primary,
  fontFamily: vars.fonts.meta,
  fontSize: vars.fontSizes['125'],
  fontWeight: vars.fontWeights.bold,
  marginBlockStart: 0,
  marginBlockEnd: vars.space['150'],
});

// Dialog Description styles
export const dialogDescription = style({
  color: vars.colors.primary,
  fontFamily: vars.fonts.meta,
  fontSize: vars.fontSizes['100'],
  fontWeight: vars.fontWeights.light,
  lineHeight: vars.lineHeights['125'],
  marginBlockStart: 0,
  marginBlockEnd: vars.space['125'],
  selectors: {
    '&:last-child': {
      marginBlockEnd: 0,
    },
  },
});

// Dialog Close button styles
export const dialogCloseButton = style({
  position: 'absolute',
  top: vars.space['100'],
  right: vars.space['100'],
  border: 'none !important',
});
