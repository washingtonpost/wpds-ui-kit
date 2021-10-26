import React from "react";
import { darkTheme, globalStyles } from "@washingtonpost/ui-theme";
import { themes } from "@storybook/theming";
import { useDarkMode } from "storybook-dark-mode";

export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
	playroom: {
		url:
			process.env.NODE_ENV === "production"
				? "/playroom/"
				: "http://localhost:9000",
	},
	a11y: {
		element: "#root",
		manual: false,
	},
	darkMode: {
		current: "light",
		dark: { ...themes.dark },
		light: { ...themes.normal },
		darkClass: "dark-theme",
		lightClass: "light-theme",
		stylePreview: true,
	},
};

function ThemeWrapper(props) {
	globalStyles();
	return (
		<div className={useDarkMode() ? darkTheme : ""}>{props.children}</div>
	);
}

export const decorators = [
	(renderStory) => <ThemeWrapper>{renderStory()}</ThemeWrapper>,
];
