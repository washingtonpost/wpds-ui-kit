import { createThemeContract } from '@vanilla-extract/css';

export const vars = createThemeContract({
  colors: {
    // Primary palette
    primary: '',
    onPrimary: '',
    secondary: '',
    onSecondary: '',
    cta: '',
    onCta: '',
    
    // Surfaces
    background: '',
    onBackground: '',
    surface: '',
    onSurface: '',
    surfaceVariant: '',
    onSurfaceVariant: '',
    
    // Semantic colors
    error: '',
    onError: '',
    success: '',
    onSuccess: '',
    warning: '',
    onWarning: '',
    signal: '',
    onSignal: '',
    
    // Interactive states
    disabled: '',
    onDisabled: '',
    outline: '',
    shadow: '',
    
    // Legacy colors (deprecated)
    accessible: '',
    
    // Gray scale (static colors)
    gray0: '',
    gray20: '',
    gray40: '',
    gray60: '',
    gray80: '',
    gray100: '',
    gray120: '',
    gray200: '',
    gray300: '',
    gray400: '',
    gray500: '',
    gray600: '',
    gray700: '',
    
    // Blue scale (static colors)
    blue10: '',
    blue20: '',
    blue30: '',
    blue40: '',
    blue60: '',
    blue80: '',
    blue100: '',
    
    // Alpha colors
    alpha25: '',
    alpha50: '',
    alpha100: '',
    alpha200: '',
    alpha300: '',
    alpha400: '',
    alpha500: '',
  },
  
  fonts: {
    headline: '',
    body: '',
    meta: '',
    magazine: '',
  },
  
  fontSizes: {
    '075': '',
    '087': '',
    '100': '',
    '112': '',
    '125': '',
    '150': '',
    '162': '',
    '175': '',
    '200': '',
    '225': '',
    '250': '',
    '275': '',
    '300': '',
    '350': '',
    '400': '',
    '450': '',
    '500': '',
  },
  
  fontWeights: {
    light: '',
    regular: '',
    bold: '',
    ultra: '',
  },
  
  lineHeights: {
    '100': '',
    '110': '',
    '125': '',
    '150': '',
    '160': '',
    '175': '',
    '200': '',
    '240': '',
    headline: '',
    body: '',
    meta: '',
    subhead: '',
  },
  
  space: {
    '025': '',
    '050': '',
    '075': '',
    '100': '',
    '125': '',
    '150': '',
    '175': '',
    '200': '',
    '225': '',
    '250': '',
    '275': '',
    '300': '',
    '350': '',
    '400': '',
    '450': '',
    '500': '',
  },
  
  sizes: {
    '025': '',
    '050': '',
    '075': '',
    '087': '',
    '100': '',
    '125': '',
    '150': '',
    '175': '',
    '200': '',
    '225': '',
    '250': '',
    '275': '',
    '300': '',
    '350': '',
    '400': '',
    '450': '',
    '500': '',
  },
  
  radii: {
    '012': '',
    '025': '',
    '050': '',
    '075': '',
    '100': '',
    '125': '',
    '150': '',
    round: '',
  },
  
  shadows: {
    '50': '',
    '100': '',
    '200': '',
    '300': '',
    '400': '',
    '500': '',
  },
  
  transitions: {
    fast: '',
    normal: '',
    slow: '',
    inOut: '',
    allFast: '',
  },
  
  zIndices: {
    offer: '',
    shell: '',
    ads: '',
    page: '',
  },
});
