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
	fontSize: "$500",
});

const SubHeadline = styled("h2", {
	marginLeft: "$100",
	color: "$primary",
	fontWeight: "$light",
	fontSize: "$100",
});

function HomePage() {
	return (
		<>
			<Headline>WPDS's UI Kit.</Headline>
			<SubHeadline>Coded in React.</SubHeadline>
		</>
	);
}

export default HomePage;
