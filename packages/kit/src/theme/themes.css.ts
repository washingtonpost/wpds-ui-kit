import { createTheme, createGlobalTheme } from '@vanilla-extract/css';
import { vars } from './contracts.css';
import * as tokens from './tokens';

// Static colors that don't change between themes
export const staticColors = createGlobalTheme(':root', {
  blue10: '#FAF9FF',
  blue20: '#F0F0FF',
  blue30: '#D8D8FF',
  blue40: '#A8A8FF',
  blue60: '#0000FF',
  blue80: '#1919F0',
  blue100: '#151582',
  gray0Static: 'rgba(0, 0, 0, 1)',
  gray20Static: 'rgba(17, 17, 17, 1)',
  gray40Static: 'rgba(42, 42, 42, 1)',
  gray60Static: 'rgba(73, 73, 73, 1)',
  gray80Static: 'rgba(89, 89, 89, 1)',
  gray100Static: 'rgba(115, 115, 115, 1)',
  gray200Static: 'rgba(170, 170, 170, 1)',
  gray300Static: 'rgba(212, 212, 212, 1)',
  gray400Static: 'rgba(233, 233, 233, 1)',
  gray500Static: 'rgba(240, 240, 240, 1)',
  gray600Static: 'rgba(247, 247, 247, 1)',
  gray700Static: 'rgba(255, 255, 255, 1)',
  alpha0Static: 'rgba(0, 0, 0, .65)',
  alpha25Static: 'rgba(0, 0, 0, .05)',
  alpha50Static: 'rgba(0, 0, 0, .50)',
});

export const lightTheme = createTheme(vars, {
  colors: {
    // Primary palette based on defaultTheme tokens
    primary: tokens.light.gray20,
    onPrimary: tokens.light.gray700,
    secondary: tokens.light.gray700,
    onSecondary: tokens.light.gray20,
    cta: tokens.light.blue100,
    onCta: tokens.light.gray700,
    
    // Surfaces
    background: tokens.light.gray700,
    onBackground: tokens.light.gray20,
    surface: tokens.light.gray700,
    onSurface: tokens.light.gray20,
    surfaceVariant: tokens.light.gray600,
    onSurfaceVariant: tokens.light.gray80,
    
    // Semantic colors
    error: tokens.light.red200,
    onError: tokens.light.gray700,
    success: tokens.light.green80,
    onSuccess: tokens.light.gray700,
    warning: tokens.light.orange200,
    onWarning: tokens.light.gray700,
    signal: tokens.light.blue200,
    onSignal: tokens.light.gray700,
    
    // Interactive states
    disabled: tokens.light.alpha500,
    onDisabled: tokens.light.alpha80,
    outline: tokens.light.alpha400,
    shadow: tokens.light.alpha100,
    
    // Legacy colors (deprecated)
    accessible: tokens.light.gray80,
    
    // Gray scale
    gray0: tokens.light.gray0,
    gray20: tokens.light.gray20,
    gray40: tokens.light.gray40,
    gray60: tokens.light.gray60,
    gray80: tokens.light.gray80,
    gray100: tokens.light.gray100,
    gray120: tokens.light.gray200, // No 120 in tokens, using 200
    gray200: tokens.light.gray200,
    gray300: tokens.light.gray300,
    gray400: tokens.light.gray400,
    gray500: tokens.light.gray500,
    gray600: tokens.light.gray600,
    gray700: tokens.light.gray700,
    
    // Blue scale
    blue10: staticColors.blue10,
    blue20: staticColors.blue20,
    blue30: staticColors.blue30,
    blue40: staticColors.blue40,
    blue60: staticColors.blue60,
    blue80: staticColors.blue80,
    blue100: tokens.light.blue100,
    
    // Alpha colors
    alpha25: tokens.light.alpha25,
    alpha50: tokens.light.alpha50,
    alpha100: tokens.light.alpha100,
    alpha200: tokens.light.alpha200,
    alpha300: tokens.light.alpha300,
    alpha400: tokens.light.alpha400,
    alpha500: tokens.light.alpha500,
  },
  
  fonts: {
    headline: tokens.fonts.headline,
    body: tokens.fonts.body,
    meta: tokens.fonts.meta,
    magazine: tokens.fonts.magazine,
  },
  
  fontSizes: {
    '075': tokens.fontSizes['075'],
    '087': tokens.fontSizes['087'],
    '100': tokens.fontSizes['100'],
    '112': tokens.fontSizes['112'],
    '125': tokens.fontSizes['125'],
    '150': tokens.fontSizes['150'],
    '162': tokens.fontSizes['162'],
    '175': tokens.fontSizes['175'],
    '200': tokens.fontSizes['200'],
    '225': tokens.fontSizes['225'],
    '250': tokens.fontSizes['250'],
    '275': tokens.fontSizes['275'],
    '300': tokens.fontSizes['300'],
    '350': tokens.fontSizes['350'],
    '400': tokens.fontSizes['400'],
    '450': tokens.fontSizes['450'],
    '500': tokens.fontSizes['500'],
  },
  
  fontWeights: {
    light: tokens.fontWeights.light.toString(),
    regular: tokens.fontWeights.regular.toString(),
    bold: tokens.fontWeights.bold.toString(),
    ultra: tokens.fontWeights.ultra.toString(),
  },
  
  lineHeights: {
    '100': tokens.lineHeights['100'].toString(),
    '110': tokens.lineHeights['110'].toString(),
    '125': tokens.lineHeights['125'].toString(),
    '150': tokens.lineHeights['150'].toString(),
    '160': tokens.lineHeights['160'].toString(),
    '175': tokens.lineHeights['175'].toString(),
    '200': tokens.lineHeights['200'].toString(),
    '240': tokens.lineHeights['240'].toString(),
    headline: tokens.lineHeights['110'].toString(),
    body: tokens.lineHeights['160'].toString(),
    meta: tokens.lineHeights['125'].toString(),
    subhead: tokens.lineHeights['125'].toString(),
  },
  
  space: {
    '025': tokens.spaces['025'],
    '050': tokens.spaces['050'],
    '075': tokens.spaces['075'],
    '100': tokens.spaces['100'],
    '125': tokens.spaces['125'],
    '150': tokens.spaces['150'],
    '175': tokens.spaces['175'],
    '200': tokens.spaces['200'],
    '225': tokens.spaces['225'],
    '250': tokens.spaces['250'],
    '275': tokens.spaces['275'],
    '300': tokens.spaces['300'],
    '350': tokens.spaces['350'],
    '400': tokens.spaces['400'],
    '450': tokens.spaces['450'],
    '500': tokens.spaces['500'],
  },
  
  sizes: {
    '025': tokens.sizes['025'],
    '050': tokens.sizes['050'],
    '075': tokens.sizes['075'],
    '087': tokens.sizes['087'],
    '100': tokens.sizes['100'],
    '125': tokens.sizes['125'],
    '150': tokens.sizes['150'],
    '175': tokens.sizes['175'],
    '200': tokens.sizes['200'],
    '225': tokens.sizes['225'],
    '250': tokens.sizes['250'],
    '275': tokens.sizes['275'],
    '300': tokens.sizes['300'],
    '350': tokens.sizes['350'],
    '400': tokens.sizes['400'],
    '450': tokens.sizes['450'],
    '500': tokens.sizes['500'],
  },
  
  radii: {
    '012': tokens.radii['012'],
    '025': tokens.radii['025'],
    '050': tokens.radii['050'],
    '075': tokens.radii['075'],
    '100': tokens.radii['100'],
    '125': tokens.radii['125'],
    '150': tokens.radii['150'],
    round: tokens.radii.round,
  },
  
  shadows: {
    '50': tokens.shadows['50'],
    '100': tokens.shadows['100'],
    '200': tokens.shadows['200'],
    '300': tokens.shadows['300'],
    '400': tokens.shadows['400'],
    '500': tokens.shadows['500'],
  },
  
  transitions: {
    fast: '0.2s',
    normal: '0.3s',
    slow: '0.5s',
    inOut: 'cubic-bezier(.4, 0, .2, 1)',
    allFast: 'all 0.2s cubic-bezier(.4, 0, .2, 1)',
  },
  
  zIndices: {
    offer: tokens.zIndices.offer.toString(),
    shell: tokens.zIndices.shell.toString(),
    ads: tokens.zIndices.ads.toString(),
    page: tokens.zIndices.page.toString(),
  },
});

export const darkTheme = createTheme(vars, {
  colors: {
    // Primary palette based on darkTheme tokens
    primary: tokens.dark.gray0,
    onPrimary: tokens.dark.gray700,
    secondary: tokens.dark.gray700,
    onSecondary: tokens.dark.gray0,
    cta: tokens.dark.blue100,
    onCta: tokens.dark.gray700,
    
    // Surfaces
    background: tokens.dark.gray700,
    onBackground: tokens.dark.gray0,
    surface: tokens.dark.gray500,
    onSurface: tokens.dark.gray0,
    surfaceVariant: tokens.dark.gray300,
    onSurfaceVariant: tokens.dark.gray80,
    
    // Semantic colors
    error: tokens.dark.red200,
    onError: tokens.dark.gray700,
    success: tokens.dark.green80,
    onSuccess: tokens.dark.gray700,
    warning: tokens.dark.orange200,
    onWarning: tokens.dark.gray700,
    signal: tokens.dark.blue200,
    onSignal: tokens.dark.gray700,
    
    // Interactive states
    disabled: tokens.dark.alpha500,
    onDisabled: tokens.dark.alpha80,
    outline: tokens.dark.alpha400,
    shadow: tokens.dark.alpha100,
    
    // Legacy colors (deprecated)
    accessible: tokens.dark.gray80,
    
    // Gray scale
    gray0: tokens.dark.gray0,
    gray20: tokens.dark.gray20,
    gray40: tokens.dark.gray40,
    gray60: tokens.dark.gray60,
    gray80: tokens.dark.gray80,
    gray100: tokens.dark.gray100,
    gray120: tokens.dark.gray200, // No 120 in tokens, using 200
    gray200: tokens.dark.gray200,
    gray300: tokens.dark.gray300,
    gray400: tokens.dark.gray400,
    gray500: tokens.dark.gray500,
    gray600: tokens.dark.gray600,
    gray700: tokens.dark.gray700,
    
    // Blue scale (static)
    blue10: staticColors.blue10,
    blue20: staticColors.blue20,
    blue30: staticColors.blue30,
    blue40: staticColors.blue40,
    blue60: staticColors.blue60,
    blue80: staticColors.blue80,
    blue100: tokens.dark.blue100,
    
    // Alpha colors
    alpha25: tokens.dark.alpha25,
    alpha50: tokens.dark.alpha50,
    alpha100: tokens.dark.alpha100,
    alpha200: tokens.dark.alpha200,
    alpha300: tokens.dark.alpha300,
    alpha400: tokens.dark.alpha400,
    alpha500: tokens.dark.alpha500,
  },
  
  // All other values same as light theme
  fonts: {
    headline: tokens.fonts.headline,
    body: tokens.fonts.body,
    meta: tokens.fonts.meta,
    magazine: tokens.fonts.magazine,
  },
  
  fontSizes: {
    '075': tokens.fontSizes['075'],
    '087': tokens.fontSizes['087'],
    '100': tokens.fontSizes['100'],
    '112': tokens.fontSizes['112'],
    '125': tokens.fontSizes['125'],
    '150': tokens.fontSizes['150'],
    '162': tokens.fontSizes['162'],
    '175': tokens.fontSizes['175'],
    '200': tokens.fontSizes['200'],
    '225': tokens.fontSizes['225'],
    '250': tokens.fontSizes['250'],
    '275': tokens.fontSizes['275'],
    '300': tokens.fontSizes['300'],
    '350': tokens.fontSizes['350'],
    '400': tokens.fontSizes['400'],
    '450': tokens.fontSizes['450'],
    '500': tokens.fontSizes['500'],
  },
  
  fontWeights: {
    light: tokens.fontWeights.light.toString(),
    regular: tokens.fontWeights.regular.toString(),
    bold: tokens.fontWeights.bold.toString(),
    ultra: tokens.fontWeights.ultra.toString(),
  },
  
  lineHeights: {
    '100': tokens.lineHeights['100'].toString(),
    '110': tokens.lineHeights['110'].toString(),
    '125': tokens.lineHeights['125'].toString(),
    '150': tokens.lineHeights['150'].toString(),
    '160': tokens.lineHeights['160'].toString(),
    '175': tokens.lineHeights['175'].toString(),
    '200': tokens.lineHeights['200'].toString(),
    '240': tokens.lineHeights['240'].toString(),
    headline: tokens.lineHeights['110'].toString(),
    body: tokens.lineHeights['160'].toString(),
    meta: tokens.lineHeights['125'].toString(),
    subhead: tokens.lineHeights['125'].toString(),
  },
  
  space: {
    '025': tokens.spaces['025'],
    '050': tokens.spaces['050'],
    '075': tokens.spaces['075'],
    '100': tokens.spaces['100'],
    '125': tokens.spaces['125'],
    '150': tokens.spaces['150'],
    '175': tokens.spaces['175'],
    '200': tokens.spaces['200'],
    '225': tokens.spaces['225'],
    '250': tokens.spaces['250'],
    '275': tokens.spaces['275'],
    '300': tokens.spaces['300'],
    '350': tokens.spaces['350'],
    '400': tokens.spaces['400'],
    '450': tokens.spaces['450'],
    '500': tokens.spaces['500'],
  },
  
  sizes: {
    '025': tokens.sizes['025'],
    '050': tokens.sizes['050'],
    '075': tokens.sizes['075'],
    '087': tokens.sizes['087'],
    '100': tokens.sizes['100'],
    '125': tokens.sizes['125'],
    '150': tokens.sizes['150'],
    '175': tokens.sizes['175'],
    '200': tokens.sizes['200'],
    '225': tokens.sizes['225'],
    '250': tokens.sizes['250'],
    '275': tokens.sizes['275'],
    '300': tokens.sizes['300'],
    '350': tokens.sizes['350'],
    '400': tokens.sizes['400'],
    '450': tokens.sizes['450'],
    '500': tokens.sizes['500'],
  },
  
  radii: {
    '012': tokens.radii['012'],
    '025': tokens.radii['025'],
    '050': tokens.radii['050'],
    '075': tokens.radii['075'],
    '100': tokens.radii['100'],
    '125': tokens.radii['125'],
    '150': tokens.radii['150'],
    round: tokens.radii.round,
  },
  
  shadows: {
    '50': tokens.shadows['50'],
    '100': tokens.shadows['100'],
    '200': tokens.shadows['200'],
    '300': tokens.shadows['300'],
    '400': tokens.shadows['400'],
    '500': tokens.shadows['500'],
  },
  
  transitions: {
    fast: '0.2s',
    normal: '0.3s',
    slow: '0.5s',
    inOut: 'cubic-bezier(.4, 0, .2, 1)',
    allFast: 'all 0.2s cubic-bezier(.4, 0, .2, 1)',
  },
  
  zIndices: {
    offer: tokens.zIndices.offer.toString(),
    shell: tokens.zIndices.shell.toString(),
    ads: tokens.zIndices.ads.toString(),
    page: tokens.zIndices.page.toString(),
  },
});
