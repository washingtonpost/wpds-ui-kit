import * as React from "react";
import { Icon } from "@washingtonpost/wpds-ui-kit";
import { styled } from "@washingtonpost/wpds-ui-kit";
import Garlic from "@washingtonpost/wpds-assets/asset/voraciously";

const Container = styled("div", {
	display: "grid",
	width: "100%",
	height: "250px",
	gridTemplateAreas: `
	'head head'
    'nav  main'
    'nav  foot'
	`,
	gridTemplateRows: "50px 1fr 30px",
	gridTemplateColumns: "150px 1fr",
});

const Header = styled("header", {
	gridArea: "head",
	backgroundColor: "#8ca0ff",
});

const Nav = styled("nav", {
	gridArea: "nav",
	backgroundColor: "#ffa08c",
});

const Main = styled("main", {
	gridArea: "main",
	backgroundColor: "#ffff64",
});

const Footer = styled("footer", {
	gridArea: "foot",
	backgroundColor: "#8cffa0",
});

const Headline = styled("h1", {
	paddingTop: "$200",
	margin: "$200",
	marginLeft: 0,
	paddingBottom: "0",
	marginBottom: "0",
	color: "$primary",
	fontFamily: "$headline",
	fontSize: "$500",
	lineHeight: "$headline",
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
			<Icon label="Garlic">
				<Garlic />
			</Icon>

			<Container>
				<Header>Header</Header>
				<Nav>Navigation</Nav>
				<Main>Main area</Main>
				<Footer>Footer</Footer>
			</Container>
		</>
	);
}

export default HomePage;
