import { globalStyle } from "@vanilla-extract/css";
import { vars } from "./contracts.css";
import * as tokens from "./tokens";

// Reset and base styles
globalStyle(":root", {
  vars: {
    "--base": tokens.base,
  },
  lineHeight: vars.lineHeights.meta,
});

globalStyle("*", {
  boxSizing: "border-box",
});

globalStyle("*:focus-visible", {
  outline: "1px auto Highlight",
  "@media": {
    "screen and (-webkit-min-device-pixel-ratio: 0)": {
      outline: "1px auto -webkit-focus-ring-color",
    },
  },
});

globalStyle("html", {
  WebkitFontSmoothing: "antialiased",
  textRendering: "optimizeLegibility",
  textSizeAdjust: "100%",
});

globalStyle("body", {
  margin: 0,
  fontFamily: vars.fonts.meta,
  overflowX: "hidden",
  backgroundColor: vars.colors.background,
  color: vars.colors.onBackground,
});

// Font faces will be applied through the theme system

// Apply font faces - note: vanilla-extract handles @font-face differently
// These will be applied through the theme system instead

// Responsive screen size variables
const screens = {
  sm: "767px",
  md: "900px",
  lg: "1024px",
  xl: "1280px",
  xxl: "1440px",
};

globalStyle(":root", {
  vars: {
    "--screen-size": "unknown",
  },
});

Object.entries(screens).forEach(([key, value]) => {
  globalStyle(":root", {
    "@media": {
      [`(max-width: ${value})`]: {
        vars: {
          "--screen-size":
            key === "sm"
              ? "small"
              : key === "md"
              ? "medium"
              : key === "lg"
              ? "large"
              : key === "xl"
              ? "xlarge"
              : key === "xxl"
              ? "xxlarge"
              : "unknown",
        },
      },
    },
  });
});

globalStyle(":root", {
  "@media": {
    "(min-width: 1441px)": {
      vars: {
        "--screen-size": "infinity",
      },
    },
  },
});
