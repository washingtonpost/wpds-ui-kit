import React from "react";
import { NextSeo } from "next-seo";
import { getDocsListBySection, getNavigation } from "~/services";
import { Box, styled } from "@washingtonpost/wpds-ui-kit";
import { Header } from "~/components/Markdown/Components/headers";
import Link from "~/components/Markdown/Components/link";
import { P } from "~/components/Markdown/Styling";

const Masonry = styled("section", {
  width: "100%",
  display: "grid",
  gridTemplateColumns: "repeat( auto-fit, minmax(250px, 1fr) )",
  gridGap: "$100",
  "@sm": {
    gridTemplateColumns: "1fr",
  },
});

// create a divider
const Divider = styled("hr", {
  gridColumnEnd: "span 2",
  margin: "$050 0 $050",
  padding: 0,
  border: 0,
  height: "1px",
  backgroundColor: "$subtle",
});

const Description = styled("div", {
  padding: "$100 0 $100 0",
  color: "$primary",
  maxWidth: "600px",
});

export default function Page({ docs }) {
  return (
    <>
      <NextSeo title={`WPDS - Support`} />
      <header>
        <Header as="h1">Support</Header>
      </header>
      <Description>
        Learn more about our processes and how you can contribute to the Design
        System.
      </Description>
      <Divider aria-hidden={false} />

      <Box
        css={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          css={{
            marginBottom: "$150",
          }}
          aria-hidden={false}
        />
        <Masonry>
          {docs.map((doc) => {
            return (
              <Link
                href={doc.slug}
                key={doc.slug}
                css={{
                  border: "1px solid $subtle",
                  borderRadius: "$025",
                  padding: "$100",
                }}
              >
                <article>
                  {doc.data.publishDate}
                  <Header as="h3">{doc.data.title}</Header>

                  <P
                    css={{
                      marginBottom: "$100",
                    }}
                  >
                    {doc.data.description}
                  </P>
                  <Box
                    as="footer"
                    css={{
                      fontFamily: "$meta",
                      fontSize: "$100",
                      fontWeight: "$light",
                      lineHeight: "$125",
                    }}
                  >
                    {doc.data.byline}
                  </Box>
                </article>
              </Link>
            );
          })}
        </Masonry>
        <Box
          css={{
            marginBottom: "$200",
          }}
          aria-hidden={false}
        />
      </Box>
    </>
  );
}

export const getStaticProps = async () => {
  const docs = await getDocsListBySection("support");
  const navigation = await getNavigation();

  return {
    props: {
      docs,
      navigation,
    },
  };
};
