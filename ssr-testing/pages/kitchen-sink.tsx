import * as React from "react";
import { styled } from "@washingtonpost/ui-theme";
import { VisuallyHidden } from "@washingtonpost/ui-visually-hidden";

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
			<VisuallyHidden
				as="a"
				href="#hello-world"
				css={{
					color: "$cta",
				}}
				data-testid="skip-link"
				onClick={function onClickHandler(event: {
					preventDefault: () => void;
				}) {
					event.preventDefault();
				}}
			>
				Hello, World!
			</VisuallyHidden>
		</>
	);
}

export default HomePage;
