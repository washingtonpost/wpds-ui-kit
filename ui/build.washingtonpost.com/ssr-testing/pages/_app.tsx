import React from "react";
import Head from "next/head";
import { globalStyles, styled, theme } from "@washingtonpost/ui-theme";
import { Favicon } from "@washingtonpost/site-components/core/favicon"

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
			<Head>
				<title>WPDS's UI Kit - The Washington Post</title>
				<Favicon />
			</Head>
			<SiteNavigation />
			<Component {...pageProps} />
		</Layout>
	);
}

export default App;
