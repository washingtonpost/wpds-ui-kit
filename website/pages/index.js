import * as React from "react";
import { styled } from "@washingtonpost/ui-theme";

const H1 = styled("h1", {
	color: "$gray0",
});

function HomePage() {
	return <H1>Homepage</H1>;
}

export default HomePage;
