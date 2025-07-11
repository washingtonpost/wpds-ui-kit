import { style } from "@vanilla-extract/css";
import { vars } from "../theme/contracts.css";

const dotSize = vars.sizes["050"];

export const dot = style({
  width: dotSize,
  height: dotSize,
  margin: "1px",
  borderRadius: "100%",
  flexShrink: 0,
  minHeight: dotSize,
  transition: `transform ${vars.transitions.fast}`,

  "@media": {
    "(prefers-reduced-motion: reduce)": {
      transition: "none",
    },
  },
});

export const paginationContainer = style({
  maxWidth: `calc((${dotSize} + 2px) * 5)`,
  overflow: "hidden",
});

export const paginationContainerVertical = style({
  maxHeight: `calc((${dotSize} + 2px) * 5)`,
  maxWidth: vars.sizes["075"],
});

export const paginationSlider = style({
  display: "flex",
  flexWrap: "nowrap",
  transition: "transform .4s ease-out",

  "@media": {
    "(prefers-reduced-motion: reduce)": {
      transition: "none",
    },
  },
});

export const paginationSliderVertical = style({
  flexDirection: "column",
});
