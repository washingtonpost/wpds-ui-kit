import { createStitches } from "@stitches/react";
import {
	base,
	light,
	dark,
	staticColors,
	defaultTheme,
	spaces,
	sizes,
	radii,
	shadows,
	fontSizes,
	fontWeights,
	fonts,
	lineHeights,
} from "./dist/tokens";

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
			...defaultTheme,
		},
		sizes: {
			...sizes,
		},
		space: {
			...spaces,
		},
		radii: {
			...radii,
		},
		fonts: {
			...fonts,
		},
		fontSizes: {
			...fontSizes,
		},
		fontWeights: {
			...fontWeights,
		},
		lineHeights: {
			...lineHeights,
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
		shadows: {
			...shadows,
		},
		borderStyles: {},
		borderWidths: {},
		letterSpacings: {},
		zIndices: {},
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

export const darkTheme = createTheme("dark", {
	colors: {
		...dark,
		...staticColors,
		...defaultTheme,
	},
});

export const globalStyles = globalCss({
	":root": {
		"--base": `${base}`,
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
	"@dark": {
		// notice the `media` definition on the stitches.config.ts file
		":root:not(.light)": {
			...Object.keys(darkTheme.colors).reduce(
				(varSet, currentColorKey) => {
					const currentColor = darkTheme.colors[currentColorKey];
					const currentColorValue =
						currentColor.value.substring(0, 1) === "$"
							? `$colors${currentColor.value}`
							: currentColor.value;

					return {
						[currentColor.variable]: currentColorValue,
						...varSet,
					};
				},
				{}
			),
		},
	},
});
