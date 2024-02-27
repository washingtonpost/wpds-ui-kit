import React from "react";
import { MDXRemote } from "next-mdx-remote";
import { NextSeo } from "next-seo";
import MDXStyling from "~/components/Markdown/Styling";
import Header from "~/components/Typography/Headers";
import {
  getNavigation,
  getAllPathsByCategory,
  getResource,
  getHeadings,
} from "~/services";
import Breadcrumbs from "~/components/Breadcrumbs";
import TableofContents from "~/components/Markdown/Components/tableofcontents";
import { Box } from "@washingtonpost/wpds-ui-kit";

const SECTION = "resources";

const components = {
  ...MDXStyling,
};

export default function Page({ current, source, headings }) {
  return (
    <>
      <NextSeo
        title={`WPDS - ${source.scope.title} | Resources`}
        description={source.scope.description}
      />
      <>
        <Breadcrumbs.Root>
          <Breadcrumbs.Item href="/resources">Resources</Breadcrumbs.Item>
          <Breadcrumbs.Item
            href={`/resources/${source.scope.kicker.toLowerCase()}`}
          >
            {source.scope.kicker}
          </Breadcrumbs.Item>
        </Breadcrumbs.Root>
        <header>
          <Box
            as="time"
            css={{
              marginTop: "$200",
              display: "flex",
              fontSize: "$075",
              color: "$accessible",
            }}
            dateTime={source.scope.publishDate}
          >
            {source.scope.publishDate}
          </Box>
          <Header as="h1">{source.scope.title}</Header>
          <Header
            as="h2"
            css={{
              font: "$subhead",
              marginBottom: "$200",
              color: "$accessible",
            }}
          >
            {source.scope.description}
          </Header>
        </header>
        <TableofContents current={current} headings={headings} />
      </>
      <article>
        {source && <MDXRemote {...source} components={components} />}
      </article>
    </>
  );
}

export const getStaticProps = async (response) => {
  const source = await getResource(
    `${SECTION}/${response.params.category}/${response.params.slug}`
  );
  const navigation = await getNavigation();
  const headings = await getHeadings(
    `${SECTION}/${response.params.category}/${response.params.slug}`
  );

  return {
    props: {
      current: response.params.slug,
      source,
      navigation,
      headings,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = await getAllPathsByCategory(SECTION);

  return {
    paths,
    fallback: false,
  };
};
