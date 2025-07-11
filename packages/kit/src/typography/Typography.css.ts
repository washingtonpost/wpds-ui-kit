import { recipe } from '@vanilla-extract/recipes';
import { vars } from '../theme/contracts.css';
import type { RecipeVariants } from '@vanilla-extract/recipes';

// Base text styles
export const textBase = {
  margin: 0,
  padding: 0,
  color: vars.colors.onBackground,
};

// Heading recipe
export const headingRecipe = recipe({
  base: {
    ...textBase,
    fontWeight: vars.fontWeights.bold,
    lineHeight: vars.lineHeights.headline,
  },
  variants: {
    level: {
      1: {
        fontFamily: vars.fonts.headline,
        fontSize: vars.fontSizes['300'],
        '@media': {
          'screen and (max-width: 767px)': {
            fontSize: vars.fontSizes['250'],
          },
        },
      },
      2: {
        fontFamily: vars.fonts.headline,
        fontSize: vars.fontSizes['200'],
        '@media': {
          'screen and (max-width: 767px)': {
            fontSize: vars.fontSizes['175'],
          },
        },
      },
      3: {
        fontFamily: vars.fonts.headline,
        fontSize: vars.fontSizes['150'],
        fontWeight: vars.fontWeights.bold,
        marginBottom: vars.space['025'],
        marginTop: vars.space['100'],
      },
      4: {
        fontFamily: vars.fonts.meta,
        fontSize: vars.fontSizes['125'],
        fontWeight: vars.fontWeights.bold,
        marginTop: vars.space['100'],
      },
      5: {
        fontFamily: vars.fonts.meta,
        fontSize: vars.fontSizes['100'],
        fontWeight: vars.fontWeights.bold,
        marginTop: vars.space['100'],
      },
      6: {
        fontFamily: vars.fonts.body,
        fontSize: vars.fontSizes['087'],
        fontWeight: vars.fontWeights.light,
      },
    },
    variant: {
      headline: {
        fontFamily: vars.fonts.headline,
        lineHeight: vars.lineHeights.headline,
      },
      subhead: {
        fontFamily: vars.fonts.headline,
        lineHeight: vars.lineHeights.subhead,
        fontWeight: vars.fontWeights.light,
      },
      magazine: {
        fontFamily: vars.fonts.magazine,
        lineHeight: vars.lineHeights.headline,
        fontWeight: vars.fontWeights.ultra,
      },
    },
    size: {
      '075': { fontSize: vars.fontSizes['075'] },
      '087': { fontSize: vars.fontSizes['087'] },
      '100': { fontSize: vars.fontSizes['100'] },
      '112': { fontSize: vars.fontSizes['112'] },
      '125': { fontSize: vars.fontSizes['125'] },
      '150': { fontSize: vars.fontSizes['150'] },
      '162': { fontSize: vars.fontSizes['162'] },
      '175': { fontSize: vars.fontSizes['175'] },
      '200': { fontSize: vars.fontSizes['200'] },
      '225': { fontSize: vars.fontSizes['225'] },
      '250': { fontSize: vars.fontSizes['250'] },
      '275': { fontSize: vars.fontSizes['275'] },
      '300': { fontSize: vars.fontSizes['300'] },
      '350': { fontSize: vars.fontSizes['350'] },
      '400': { fontSize: vars.fontSizes['400'] },
      '450': { fontSize: vars.fontSizes['450'] },
      '500': { fontSize: vars.fontSizes['500'] },
    },
    color: {
      primary: { color: vars.colors.primary },
      onPrimary: { color: vars.colors.onPrimary },
      secondary: { color: vars.colors.secondary },
      onSecondary: { color: vars.colors.onSecondary },
      error: { color: vars.colors.error },
      success: { color: vars.colors.success },
      warning: { color: vars.colors.warning },
      signal: { color: vars.colors.signal },
      disabled: { color: vars.colors.disabled },
      onDisabled: { color: vars.colors.onDisabled },
    },
  },
  defaultVariants: {
    level: 1,
    color: 'primary',
  },
});

// Body text recipe
export const bodyTextRecipe = recipe({
  base: {
    ...textBase,
    fontFamily: vars.fonts.body,
    fontSize: vars.fontSizes['100'],
    lineHeight: vars.lineHeights.body,
    fontWeight: vars.fontWeights.regular,
  },
  variants: {
    size: {
      '075': { fontSize: vars.fontSizes['075'] },
      '087': { fontSize: vars.fontSizes['087'] },
      '100': { fontSize: vars.fontSizes['100'] },
      '112': { fontSize: vars.fontSizes['112'] },
      '125': { fontSize: vars.fontSizes['125'] },
      '150': { fontSize: vars.fontSizes['150'] },
      '162': { fontSize: vars.fontSizes['162'] },
      '175': { fontSize: vars.fontSizes['175'] },
      '200': { fontSize: vars.fontSizes['200'] },
    },
    weight: {
      light: { fontWeight: vars.fontWeights.light },
      regular: { fontWeight: vars.fontWeights.regular },
      bold: { fontWeight: vars.fontWeights.bold },
      ultra: { fontWeight: vars.fontWeights.ultra },
    },
    color: {
      primary: { color: vars.colors.primary },
      onPrimary: { color: vars.colors.onPrimary },
      secondary: { color: vars.colors.secondary },
      onSecondary: { color: vars.colors.onSecondary },
      error: { color: vars.colors.error },
      success: { color: vars.colors.success },
      warning: { color: vars.colors.warning },
      signal: { color: vars.colors.signal },
      disabled: { color: vars.colors.disabled },
      onDisabled: { color: vars.colors.onDisabled },
    },
    family: {
      body: { fontFamily: vars.fonts.body },
      meta: { fontFamily: vars.fonts.meta },
      headline: { fontFamily: vars.fonts.headline },
      magazine: { fontFamily: vars.fonts.magazine },
    },
  },
  defaultVariants: {
    size: '100',
    weight: 'regular',
    color: 'primary',
    family: 'body',
  },
});

// Meta text recipe (for smaller auxiliary text)
export const metaTextRecipe = recipe({
  base: {
    ...textBase,
    fontFamily: vars.fonts.meta,
    fontSize: vars.fontSizes['075'],
    lineHeight: vars.lineHeights.meta,
    fontWeight: vars.fontWeights.light,
  },
  variants: {
    size: {
      '075': { fontSize: vars.fontSizes['075'] },
      '087': { fontSize: vars.fontSizes['087'] },
      '100': { fontSize: vars.fontSizes['100'] },
      '112': { fontSize: vars.fontSizes['112'] },
      '125': { fontSize: vars.fontSizes['125'] },
    },
    weight: {
      light: { fontWeight: vars.fontWeights.light },
      regular: { fontWeight: vars.fontWeights.regular },
      bold: { fontWeight: vars.fontWeights.bold },
    },
    color: {
      primary: { color: vars.colors.primary },
      onPrimary: { color: vars.colors.onPrimary },
      secondary: { color: vars.colors.secondary },
      onSecondary: { color: vars.colors.onSecondary },
      error: { color: vars.colors.error },
      success: { color: vars.colors.success },
      warning: { color: vars.colors.warning },
      signal: { color: vars.colors.signal },
      disabled: { color: vars.colors.disabled },
      onDisabled: { color: vars.colors.onDisabled },
    },
  },
  defaultVariants: {
    size: '075',
    weight: 'light',
    color: 'primary',
  },
});

export type HeadingVariants = RecipeVariants<typeof headingRecipe>;
export type BodyTextVariants = RecipeVariants<typeof bodyTextRecipe>;
export type MetaTextVariants = RecipeVariants<typeof metaTextRecipe>;
