import * as React from "react";
import { styled } from "@washingtonpost/ui-theme";

const Headline = styled("h1", {
	paddingTop: "$200",
	margin: "$200",
	marginLeft: 0,
	paddingBottom: "0",
	marginBottom: "0",
	color: "$primary",
	fontFamily: "$headline",
	fontSize: "$500"
})

const SubHeadline = styled("h2", {
	marginLeft: "$100",
	color: "$primary",
	fontWeight: "$light",
	fontSize: "$100"
})

const Page = styled("article", {
	paddingBottom: "$500",
})

const Container = styled("section", {
	position: "relative",
	minHeight: "calc(100vh - $400)",
	marginLeft: "$400",
	marginRight: "400",

	"@sm": {
		margin: "$200"
	}
})

const Footer = styled("footer", {
	position: "absolute",
	bottom: "0",
	fontSize: "$075",
	color: "$primary",
	height: "$400"
})


function HomePage() {
	return (
		<Container>
			<Page>
				<Headline>WPDS's UI Kit.</Headline>
				<SubHeadline>Coded in React.</SubHeadline>
			</Page>

			<Footer>The Washington Post</Footer>
		</Container>
	);
}

export default HomePage;
