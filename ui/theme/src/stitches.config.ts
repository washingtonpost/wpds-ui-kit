import { createStitches, type CSS as stitchesCss } from "@stitches/react";
import type { PropertyValue } from "@stitches/react";
import * as tokens from "./tokens";
export type { VariantProps } from "@stitches/react";

const prefix = "wpds";

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
    sm: "(max-width: 767px)",
    md: "(min-width: 768px) and (max-width: 899px)",
    lg: "(min-width: 900px) and (max-width: 1023px)",
    xl: "(min-width: 1024px) and (max-width: 1279px)",
    xxl: "(min-width: 1280px) and (max-width: 1440px)",
    notSm: "(min-width: 768px)",
    notMd: "(min-width: 900px)",
    notLg: "(min-width: 1024px)",
    notXl: "(min-width: 1280px)",
    notXxl: "(min-width: 1441px)",
    motion: "(prefers-reduced-motion)",
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
    fontSize: `${tokens.base}`,
    lineHeight: "$meta",
  },
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
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
