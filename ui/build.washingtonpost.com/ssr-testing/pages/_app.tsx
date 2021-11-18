import React from "react";
import { globalStyles, styled, theme } from "@washingtonpost/ui-theme";

const List = styled("ul", {
	listStyle: "none",
	display: "flex",
	flexDirection: "row",
	background: "$onSecondary",
	height: "$400",
	alignItems: "center"
});

const ListItem = styled("li", {
	padding: "$100",
});

const Anchor = styled("a", {
	$$anchorColor: theme.colors.secondary,
	color: "$$anchorColor",
	textDecoration: "none",
	borderBottom: "1px solid $$anchorColor",

	"@hover": {
		"&:hover": {
			$$anchorColor: theme.colors.blue100,
		},
	},
});

const Layout = styled("div", {
	display: "flex",
	flexDirection: "column",
});

function SiteNavigation() {
	return (
		<List>
			<ListItem>
				<Anchor href="/">Kitchen Sink</Anchor>
			</ListItem>
			<ListItem>
				<Anchor href="/playroom">Playroom</Anchor>
			</ListItem>
		</List>
	);
}

function App({ Component, pageProps }) {
	globalStyles();

	return (
		<Layout>
			<SiteNavigation />
			<Component {...pageProps} />
		</Layout>
	);
}

export default App;
