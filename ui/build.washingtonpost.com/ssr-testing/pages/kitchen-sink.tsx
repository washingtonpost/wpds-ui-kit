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

function HomePage() {
	return (
		<>
			<Headline>Kitchen Sink</Headline>
			An icon would go here.
		</>
	);
}

export default HomePage;
