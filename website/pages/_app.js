import { useState, useEffect } from "react";
import { ThemeProvider } from "next-themes";
import { useTheme } from "next-themes";
import { darkTheme, globalStyles, styled } from "@washingtonpost/ui-theme";

const ThemeChanger = () => {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	// When mounted on client, now we can show the UI
	useEffect(() => setMounted(true), []);

	if (!mounted) return null;

	return (
		<div>
			The current theme is: {theme}
			<button onClick={() => setTheme("light")}>Light Mode</button>
			<button onClick={() => setTheme("dark")}>Dark Mode</button>
		</div>
	);
};

const List = styled("ul", {
	listStyle: "none",
	padding: 0,
	display: "flex",
	flexDirection: "row",
});

const ListItem = styled("li", {});

const Anchor = styled("a", {});

function SiteNavigation() {
	return (
		<List>
			<ListItem>
				<Anchor href="/">Home</Anchor>
			</ListItem>
			<ListItem>
				<Anchor href="/autosuggest">autosuggest</Anchor>
			</ListItem>
			<ListItem>
				<Anchor href="/storybook">storybook</Anchor>
			</ListItem>
			<ListItem>
				<Anchor href="/playroom">playroom</Anchor>
			</ListItem>
		</List>
	);
}

const Layout = styled("div", {
	display: "flex",
	flexDirection: "column",
});

function App({ Component, pageProps }) {
	globalStyles();

	return (
		<ThemeProvider
			attribute="class"
			value={{ light: "light-theme", dark: darkTheme.className }}
			defaultTheme="system"
		>
			<ThemeChanger />
			<SiteNavigation />
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ThemeProvider>
	);
}

export default App;
