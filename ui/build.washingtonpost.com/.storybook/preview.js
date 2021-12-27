import React from "react";
import { globalStyles } from "@washingtonpost/wpds-ui-kit";

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
};

function GlobalStyles(props) {
	globalStyles();
	return <div>{props.children}</div>;
}

export const decorators = [
	(renderStory) => <GlobalStyles>{renderStory()}</GlobalStyles>,
];
