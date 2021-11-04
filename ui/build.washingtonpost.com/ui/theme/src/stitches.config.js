import { createStitches } from "@stitches/react";
import { dark, light, staticColors } from "./colors";

function hexToRGB(hex, alpha) {
	var r = parseInt(hex.slice(1, 3), 16),
		g = parseInt(hex.slice(3, 5), 16),
		b = parseInt(hex.slice(5, 7), 16);

	if (alpha) {
		return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
	} else {
		return "rgb(" + r + ", " + g + ", " + b + ")";
	}
}

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
			25: "calc(1rem * 0.125)", // 2px
			50: "calc(1rem * 0.25)", // 4px
			75: "calc(1rem * 0.5)", // 8px
			100: "calc(1rem * 1)", // 16px
			125: "calc(1rem * 1.25)", // 20px
			150: "calc(1rem * 1.5)", // 24px
			175: "calc(1rem * 1.75)", // 28px
			200: "calc(1rem * 2)", // 32px
			225: "calc(1rem * 2.25)", // 36px
			250: "calc(1rem * 2.5)", // 40px
			275: "calc(1rem * 2.75)", // 44px
			300: "calc(1rem * 3)", // 48px
			325: "calc(1rem * 3.25)", // 52px
		},
		sizes: {
			25: "calc(1rem * 0.125)", // 2px
			50: "calc(1rem * 0.25)", // 4px
			75: "calc(1rem * 0.5)", // 8px
			100: "calc(1rem * 1)", // 16px
			125: "calc(1rem * 1.25)", // 20px
			150: "calc(1rem * 1.5)", // 24px
			175: "calc(1rem * 1.75)", // 28px
			200: "calc(1rem * 2)", // 32px
			225: "calc(1rem * 2.25)", // 36px
			250: "calc(1rem * 2.5)", // 40px
			275: "calc(1rem * 2.75)", // 44px
			300: "calc(1rem * 3)", // 48px
			325: "calc(1rem * 3.25)", // 52px
		},
		radii: {
			125: "0.125rem",
			full: "9999px",
			// border radius 8 named tokens for rems
			// radii$125
			// border radius full (9999px)
		},
		transitions: {
			allFast: "all $fast $inOut",
			fast: "0.2s",
			normal: "0.3s",
			inOut: "cubic-bezier(.4, 0, .2, 1)",
		},
		shadows: {
			100: "0px 2px 4px 0px rgba(64, 64, 64, 0.25)",
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
		pY: (value) => ({
			paddingTop: value,
			paddingBottom: value,
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
	"*": {
		margin: 0,
		padding: 0,
		boxSizing: "border-box",
		transition: "$allFast",
	},
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
