import { ThemeProvider, useTheme } from "next-themes";
import { globalStyles, darkTheme, styled } from "@washingtonpost/ui-theme";
import { useEffect, useState } from "react";

export const ThemeToggle = () => {
	const [mounted, setMounted] = useState(false);
	const { setTheme, resolvedTheme } = useTheme();

	useEffect(() => setMounted(true), []);

	if (!mounted) return null;

	const toggleTheme = () => {
		const targetTheme = resolvedTheme === "light" ? "dark" : "light";

		setTheme(targetTheme);
	};

	return <button onClick={toggleTheme}>Switch theme</button>;
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

function MyApp({ Component, pageProps }) {
	globalStyles();

	return (
		<ThemeProvider
			attribute="class"
			defaultTheme="system"
			value={{
				dark: darkTheme.className,
				light: "light",
			}}
		>
			<ThemeToggle />
			<SiteNavigation />
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ThemeProvider>
	);
}

export default MyApp;
