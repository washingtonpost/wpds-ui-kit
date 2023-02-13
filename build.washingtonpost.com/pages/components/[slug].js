import React from "react";
import { MDXRemote } from "next-mdx-remote";
import { NextSeo } from "next-seo";

import { styled, theme } from "@washingtonpost/wpds-ui-kit";

import MDXStyling from "~/components/Markdown/Styling";
import Header from "~/components/Typography/Headers";
import TableofContents from "~/components/Markdown/Components/tableofcontents";
import {
  getAllPathsBySection,
  getDocByPathName,
  getHeadings,
  getNavigation,
  getPackageData,
  getPropsTable,
} from "~/services";

import { PropsTable } from "~/components/PropsTable";
import { ComponentDetails } from "~/components/ComponentPage/ComponentDetails";
import { ComponentStatus } from "~/components/ComponentPage/ComponentStatus";

const components = {
  ...MDXStyling,
  PropsTable,
};

const P = styled("p", {
  color: theme.colors.accessible,
  marginBlock: 0,
});

const Article = styled("article", {
  margin: "auto",
});

export default function Page({
  current,
  source,
  headings,
  propsTable,
  bundleSize,
  componentName,
}) {
  return (
    <>
      <NextSeo
        title={`WPDS - ${source.scope.title} | Components`}
        description={source.scope.description}
      />
      {source.scope.status == "Coming soon" && (
        <>
          <P css={{ width: "100%", display: "flex" }}>
            <P
              as="img"
              css={{ margin: "auto" }}
              src="https://media.giphy.com/media/XIqCQx02E1U9W/giphy.gif"
              height="auto"
              width="50%"
            />
          </P>
          <P
            css={{
              fontSize: "$150",
              paddingTop: "$100",
              width: "90%",
              margin: "auto",
              textAlign: "center",
            }}
          >
            This component status is coming soon and indicates a component is in
            a queue for future work.
          </P>
        </>
      )}
      <header className="post-header">
        <Header
          css={{ opacity: source.scope.status == "Coming soon" ? 0.5 : 1 }}
        >
          {source.scope.title}
        </Header>

        {(source.scope.status == "Draft" || source.scope.status == "Beta") && (
          <ComponentStatus type={source.scope.status} />
        )}

        {source.scope.description && (
          <P className="description">{source.scope.description}</P>
        )}

        {source.scope.status !== "Coming soon" && (
          <ComponentDetails
            {...{
              bundleSize,
              componentName,
              current,
            }}
          />
        )}

        <TableofContents
          css={{ opacity: source.scope.status == "Coming soon" ? 0.5 : 1 }}
          current={current}
          headings={headings}
        />
      </header>

      <Article
        css={{ opacity: source.scope.status == "Coming soon" ? 0.5 : 1 }}
      >
        <MDXRemote
          {...source}
          components={components}
          scope={{
            propsTable,
          }}
        />
      </Article>
    </>
  );
}

const thisSection = "components";

export const getStaticProps = async ({ params }) => {
  const toTitleCase = (str) =>
    str
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join("");

  const componentName = toTitleCase(params.slug);

  let propsTable = [];
  let bundleSize = null;

  const [source, headings, navigation] = await Promise.all([
    getDocByPathName(`${thisSection}/${params.slug}`),
    getHeadings(`${thisSection}/${params.slug}`),
    getNavigation(),
  ]);

  if (source.scope.status !== "Coming soon") {
    try {
      propsTable = await getPropsTable(params.slug);
      bundleSize = await getPackageData(params.slug);
    } catch (e) {
      console.warn({ e });
    }
  }

  return {
    props: {
      current: params.slug,
      headings,
      navigation,
      source,
      propsTable,
      bundleSize,
      componentName,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = await getAllPathsBySection(thisSection);

  return {
    paths,
    fallback: false,
  };
};
