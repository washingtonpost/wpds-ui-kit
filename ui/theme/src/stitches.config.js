import { createStitches } from "@stitches/react";
import { dark, light, staticColors } from "./colors";

// create a root font size 16px
// rems

// border radius 8 named tokens for rems
// radii$125
// border radius full (9999px)

// shadows 1, 2, 3

// border width 1 (1px)

// letterSpacings

// zIndices : layering - 1 (10)

export const {
	styled,
	css,
	globalCss,
	keyframes,
	getCssText,
	theme,
	createTheme,
	config,
} = createStitches({
	theme: {
		colors: {
			...light,
			...staticColors,
		},
		fonts: {
			headline: "Postoni, garamond, serif",
			body: "georgia, Times New Roman, serif",
			meta: "Franklin, arial, sans-serif",
			subhead: "$meta",
		},
		fontSizes: {
			50: "calc((12 / var(--base) * 1rem))",
			75: "calc((14 / var(--base) * 1rem))",
			100: "calc((16 / var(--base) * 1rem))",
			125: "calc((18 / var(--base) * 1rem))",
			150: "calc((20 / var(--base) * 1rem))",
		},
		fontWeights: {
			light: 300,
		},
		lineHeights: {
			110: "1.10",
			125: "1.25",
			160: "1.60",
			headline: "$110",
			body: "$160",
			meta: "$125",
			subhead: "$meta",
		},
		space: {
			1: "1px", // 1px
			75: "0.4rem", // 4px
			100: "0.8rem", // 8px
			125: "1.2rem", // 12px
			150: "1.6rem", // 16px
			175: "2.0rem", // 20px
			200: "2.4rem", // 24px
			225: "3.2rem", // 32px
			250: "4.0rem", // 40px
			275: "4.8rem", // 48px
			300: "5.6rem", // 56px
			325: "6.4rem", // 64px
			350: "7.2rem", // 72px
			375: "8.0rem", // 80px
			400: "12rem", // 120px
		},
		sizes: {
			100: "calc(1rem * 1)",
			125: "calc(1rem * 1.25)",
			150: "calc(1rem * 1.5)",
			175: "calc(1rem * 1.75)",
			200: "calc(1rem * 2)",
			225: "calc(1rem * 2.25)",
			250: "calc(1rem * 2.5)",
			275: "calc(1rem * 2.75)",
			300: "calc(1rem * 3)",
			325: "calc(1rem * 3.25)",
		},
		radii: {
			125: "0.125rem",
			full: "9999px",
			// border radius 8 named tokens for rems
			// radii$125
			// border radius full (9999px)
		},
		transitions: {
			fast: "0.2s",
			normal: "0.3s",
			inOut: "cubic-bezier(.4, 0, .2, 1)",
		},
	},
	media: {
		sm: "(max-width: 767px)",
		md: "(min-width: 768px) and (max-width: 899px)",
		lg: "(min-width: 900px) and (max-width: 1023px)",
		xl: "(min-width: 1024px) and (max-width: 1279px)",
		xxl: "(min-width: 1280px) and (max-width: 1440px)",
		notSm: "(min-width: 768px)",
		motion: "(prefers-reduced-motion)",
		hover: "(any-hover: hover)",
		dark: "(prefers-color-scheme: dark)",
		light: "(prefers-color-scheme: light)",
	},
	utils: {
		px: (value) => ({
			paddingLeft: value,
			paddingRight: value,
		}),
	},
});

export const darkTheme = createTheme("dark-theme", {
	colors: {
		...dark,
		...staticColors,
	},
});

export const globalStyles = globalCss({
	":root": {
		"--base": 16,
		fontSize: "calc((var(--base) / 16) * 100%)",
		lineHeight: "$meta",
	},
	"*": { margin: 0, padding: 0, boxSizing: "border-box" },
	svg: { display: "block" },
	html: {
		overflowX: "hidden",
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
