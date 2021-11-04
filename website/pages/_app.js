import App from "next/app";
import { globalStyles, darkTheme, styled } from "@washingtonpost/ui-theme";

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

	const [theme, setTheme] = React.useState(
		pageProps.isDarkTheme ? darkTheme : "light"
	);

	const toggleTheme = () => {
		setTheme(theme === "light" ? darkTheme : "light");
	};

	React.useEffect(() => {
		if (theme === "light") {
			document.cookie = "theme=light;";
			document.querySelector("body").classList.remove(darkTheme);
		} else {
			document.cookie = "theme=dark;";
			document.querySelector("body").classList.add(darkTheme);
		}
	}, [theme]);

	return (
		<>
			<button
				onClick={(event) => {
					event.preventDefault();
					toggleTheme();
				}}
			>
				Toggle Theme
			</button>
			<SiteNavigation />
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	);
}

MyApp.getInitialProps = (context) => {
	return {
		pageProps: {
			...(App.getInitialProps ? App.getInitialProps(context) : {}),
			isDarkTheme:
				context?.ctx?.req?.cookies &&
				Object.keys(context.ctx.req.cookies).includes("theme") &&
				context.ctx.req.cookies.theme === "dark",
		},
	};
};

export default MyApp;
