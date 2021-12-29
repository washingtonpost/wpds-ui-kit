import React, { useEffect } from "react";
import { globalStyles, darkTheme } from "@washingtonpost/wpds-ui-kit";
// import { useDarkMode } from "storybook-dark-mode";

// Detect if users preferred color scheme is dark
const isDark =
	typeof window !== `undefined`
		? window.matchMedia &&
		  window.matchMedia("(prefers-color-scheme: dark)").matches
		: null;

export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
	a11y: {
		element: "#root",
		manual: false,
	},
	darkMode: {
		current: isDark ? "dark" : "light",
		stylePreview: true,
		darkClass: darkTheme.className,
	},
};

function GlobalStyles(props) {
	// const darkModeActive = useDarkMode();

	// add darkTheme.className to body if darkMode is active and darkTheme.className exists using a useEffect hook

	// useEffect(() => {
	// 	if (darkModeActive && darkTheme.className) {
	// 		document.body.classList.add(darkTheme.className);
	// 	} else {
	// 		document.body.classList.remove(darkTheme.className);
	// 	}
	// }, [darkModeActive]);

	globalStyles();
	return <div>{props.children}</div>;
}

export const decorators = [
	(renderStory) => <GlobalStyles>{renderStory()}</GlobalStyles>,
];
