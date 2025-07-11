import { style, styleVariants } from '@vanilla-extract/css';

export const avatar = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  verticalAlign: 'middle',
  overflow: 'hidden',
  userSelect: 'none',
  borderRadius: '100%',
});

export const avatarSizes = styleVariants({
  '025': {
    width: '0.25rem',
    height: '0.25rem',
  },
  '050': {
    width: '0.5rem',
    height: '0.5rem',
  },
  '075': {
    width: '0.75rem',
    height: '0.75rem',
  },
  '087': {
    width: '0.875rem',
    height: '0.875rem',
  },
  '100': {
    width: '1rem',
    height: '1rem',
  },
  '125': {
    width: '1.25rem',
    height: '1.25rem',
  },
  '150': {
    width: '1.5rem',
    height: '1.5rem',
  },
  '175': {
    width: '1.75rem',
    height: '1.75rem',
  },
  '200': {
    width: '2rem',
    height: '2rem',
  },
  '225': {
    width: '2.25rem',
    height: '2.25rem',
  },
  '250': {
    width: '2.5rem',
    height: '2.5rem',
  },
  '275': {
    width: '2.75rem',
    height: '2.75rem',
  },
  '300': {
    width: '3rem',
    height: '3rem',
  },
  '350': {
    width: '3.5rem',
    height: '3.5rem',
  },
  '400': {
    width: '4rem',
    height: '4rem',
  },
  '450': {
    width: '4.5rem',
    height: '4.5rem',
  },
  '500': {
    width: '5rem',
    height: '5rem',
  },
});

export const avatarImage = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 'inherit',
});
