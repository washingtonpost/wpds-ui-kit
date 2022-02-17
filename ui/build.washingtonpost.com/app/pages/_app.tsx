import React from "react";
import Head from "next/head";
import { theme, styled, globalStyles } from "@washingtonpost/wpds-ui-kit";
import Link from "next/link";

const Page = styled("article", {
  paddingBottom: "$500",
});

const Container = styled("section", {
  position: "relative",
  minHeight: "calc(100vh - $400)",
  marginLeft: "$400",
  marginRight: "$400",

  "@sm": {
    margin: "$200",
  },
});

const List = styled("ul", {
  listStyle: "none",
  display: "flex",
  flexDirection: "row",
  background: "$onSecondary",
  height: "$400",
  alignItems: "center",
});

Link.toString = () => ".next-link";

const ListItem = styled("li", {
  padding: "$100",
});

const Anchor = styled("a", {
  $$anchorColor: theme.colors.secondary,
  color: "$$anchorColor",
  textDecoration: "none",
  borderBottom: "1px solid currentColor",

  "@hover": {
    "&:hover": {
      $$anchorColor: theme.colors.cta,
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
        <Link href="/kitchen-sink" passHref>
          <Anchor>Kitchen Sink</Anchor>
        </Link>
      </ListItem>
      <ListItem>
        <Link href="/storybook" passHref>
          <Anchor>Storybook</Anchor>
        </Link>
      </ListItem>
    </List>
  );
}

function App({ Component, pageProps }) {
  globalStyles();

  return (
    <Layout>
      <Head>
        <title>WPDS UI Kit - The Washington Post</title>
        <link
          rel="icon"
          href="https://www.washingtonpost.com/wp-stat/assets/favicons/favicon.svg"
          type="image/svg+xml"
        />
        <link
          rel="icon"
          href="https://www.washingtonpost.com/wp-stat/assets/favicons/touch-icon-iphone.png"
          type="image/png"
        />
        <link
          rel="apple-touch-icon"
          href="https://www.washingtonpost.com/wp-stat/assets/favicons/touch-icon-iphone.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="https://www.washingtonpost.com/wp-stat/assets/favicons/touch-icon-ipad.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="167x167"
          href="https://www.washingtonpost.com/wp-stat/assets/favicons/touch-icon-ipad-retina.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="https://www.washingtonpost.com/wp-stat/assets/favicons/touch-icon-iphone-retina.png"
        />
      </Head>

      <SiteNavigation />
      <Container>
        <Page>
          <Component {...pageProps} />
        </Page>
      </Container>
    </Layout>
  );
}

export default App;
