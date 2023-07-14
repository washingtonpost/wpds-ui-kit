import {
  createStitches,
  type CSS as stitchesCss,
  PropertyValue,
} from "@stitches/react";
import * as tokens from "./tokens";
export type { VariantProps } from "@stitches/react";

const prefix = "wpds";

const breakpoints = {
  sm: "767px",
  md: "900px",
  lg: "1024px",
  xl: "1280px",
  xxl: "1440px",
};

const WPDS = createStitches({
  prefix,
  theme: {
    colors: {
      ...tokens.light,
      ...tokens.staticColors,
      ...tokens.defaultTheme,
    },
    sizes: tokens.sizes,
    space: tokens.spaces,
    radii: tokens.radii,
    fonts: tokens.fonts,
    fontSizes: tokens.fontSizes,
    fontWeights: tokens.fontWeights,
    shadows: tokens.shadows,
    zIndices: tokens.zIndices,
    lineHeights: {
      ...tokens.lineHeights,
      headline: "$110",
      body: "$160",
      meta: "$125",
      subhead: "$meta",
    },
    transitions: {
      allFast: "all $fast $inOut",
      fast: "0.2s",
      normal: "0.3s",
      inOut: "cubic-bezier(.4, 0, .2, 1)",
    },
    borderStyles: {},
    borderWidths: {},
    letterSpacings: {},
  },
  media: {
    sm: `(max-width: calc(${breakpoints.sm}))`,
    md: `(min-width: ${breakpoints.sm}) and (max-width: calc(${breakpoints.md}))`,
    lg: `(min-width: ${breakpoints.md}) and (max-width: calc(${breakpoints.lg}))`,
    xl: `(min-width: ${breakpoints.lg}) and (max-width: calc(${breakpoints.xl}))`,
    xxl: `(min-width: ${breakpoints.xl}) and (max-width: ${breakpoints.xxl})`,
    notSm: `(min-width: calc(${breakpoints.sm} + 1px))`,
    notMd: `(min-width: calc(${breakpoints.md} + 1px))`,
    notLg: `(min-width: calc(${breakpoints.lg} + 1px))`,
    notXl: `(min-width: calc(${breakpoints.xl} + 1px))`,
    notXxl: `(min-width: calc(${breakpoints.xxl} + 1px ))`,
    minSm: `(min-width: calc(${breakpoints.sm} + 1px))`,
    minMd: `(min-width: calc(${breakpoints.md} + 1px))`,
    minLg: `(min-width: calc(${breakpoints.lg} + 1px))`,
    minXl: `(min-width: calc(${breakpoints.xl} + 1px))`,
    minXxl: `(min-width: calc(${breakpoints.xxl} + 1px ))`,
    maxSm: `(max-width: calc(${breakpoints.sm} - 1px))`,
    maxMd: `(max-width: calc(${breakpoints.md} - 1px))`,
    maxLg: `(max-width: calc(${breakpoints.lg} - 1px))`,
    maxXl: `(max-width: calc(${breakpoints.xl} - 1px))`,
    maxXxl: `(max-width: ${breakpoints.xxl})`,
    reducedMotion: "(prefers-reduced-motion)",
    hover: "(any-hover: hover)",
    dark: "(prefers-color-scheme: dark)",
    light: "(prefers-color-scheme: light)",
  },
  utils: {
    px: (value: PropertyValue<"padding">) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: PropertyValue<"padding">) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    my: (value: PropertyValue<"margin">) => ({
      marginTop: value,
      marginBottom: value,
    }),
    mx: (value: PropertyValue<"margin">) => ({
      marginLeft: value,
      marginRight: value,
    }),
    size: (value: PropertyValue<"width" | "height">) => ({
      width: value,
      height: value,
    }),
  },
});

export type CSS = stitchesCss<typeof WPDS>;
export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
  reset,
} = WPDS;
export const utils = config.utils;

export const darkTheme = createTheme(`${prefix}-dark`, {
  colors: {
    ...tokens.dark,
    ...tokens.staticColors,
    ...tokens.defaultTheme,
  },
});

export const globalStyles = globalCss({
  ":root": {
    "--base": `${tokens.base}`,
    lineHeight: "$meta",
  },
  "*": {
    boxSizing: "border-box",
    "&:focus-visible": {
      outline: "1px auto Highlight",
      "@media screen and (-webkit-min-device-pixel-ratio: 0)": {
        outline: "1px auto -webkit-focus-ring-color",
      },
    },
  },
  html: {
    overflowX: "hidden",
    "-webkit-font-smoothing": "antialiased",
    textRendering: "optimizeLegibility",
    textSizeAdjust: "100%",
  },
  body: {
    margin: 0,
    fontFamily: "$meta",
  },
  "@font-face": [
    {
      fontFamily: "Postoni",
      fontWeight: 700,
      fontDisplay: "fallback",
      src: "url(https://www.washingtonpost.com/wp-stat/assets/fonts/PostoniWide-Bold.woff2)",
    },
    {
      fontFamily: "Postoni",
      fontWeight: 300,
      fontDisplay: "fallback",
      src: "url(https://www.washingtonpost.com/wp-stat/assets/fonts/PostoniWide-Regular.woff2)",
    },
    {
      fontFamily: "Franklin",
      fontWeight: 700,
      fontDisplay: "fallback",
      src: "url(https://www.washingtonpost.com/wp-stat/assets/fonts/ITC_Franklin-Bold.woff2)",
    },
    {
      fontFamily: "Franklin",
      fontWeight: 300,
      fontDisplay: "fallback",
      src: "url(https://www.washingtonpost.com/wp-stat/assets/fonts/ITC_Franklin-Light.woff2)",
    },
    {
      fontFamily: "PostoniDisplayMag",
      fontWeight: 800,
      fontDisplay: "fallback",
      src: "url(https://www.washingtonpost.com/wp-stat/assets/fonts/PostoniDisplayMag-Ultra.woff2)",
    },
    {
      fontFamily: "PostoniDisplayMag",
      fontWeight: 800,
      fontDisplay: "fallback",
      fontStyle: "italic",
      src: "url(https://www.washingtonpost.com/wp-stat/assets/fonts/PostoniDisplayMag-Ultra_Italic.woff2)",
    },
  ],
});

export const darkModeGlobalStyles = globalCss({
  "@dark": {
    ...Object.keys(darkTheme.colors).reduce((varSet, currentColorKey) => {
      const currentColor = darkTheme.colors[currentColorKey];
      const currentColorValue =
        currentColor.value.substring(0, 1) === "$"
          ? `$colors${currentColor.value}`
          : currentColor.value;

      return {
        [currentColor.variable]: currentColorValue,
        ...varSet,
      };
    }, {}),
  },
});
