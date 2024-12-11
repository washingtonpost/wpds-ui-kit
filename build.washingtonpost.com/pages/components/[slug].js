import React from "react";
import { MDXRemote } from "next-mdx-remote";
import { NextSeo } from "~/components/next-seo";

import { styled } from "@washingtonpost/wpds-ui-kit";

import MDXStyling from "~/components/Markdown/Styling";
import Header from "~/components/Typography/Headers";
import { Description } from "~/components/Typography/Description";
import TableofContents from "~/components/Markdown/Components/tableofcontents";
import {
  getDocByPathName,
  getHeadings,
  getNavigation,
  getBundleSize,
  getPropsTable,
} from "~/services";

import { PropsTable } from "~/components/PropsTable";
import { ComponentDetails } from "~/components/ComponentPage/ComponentDetails";
import { ComponentStatus } from "~/components/ComponentPage/ComponentStatus";
import { ComingSoon } from "~/components/ComponentPage/ComingSoon";

const components = {
  ...MDXStyling,
  PropsTable,
  useRef: React.useRef,
};

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
      {source.scope.status == "Coming soon" && <ComingSoon />}
      <header className="post-header">
        <Header
          css={{ opacity: source.scope.status == "Coming soon" ? 0.5 : 1 }}
        >
          {source.scope.title}
        </Header>

        {(source.scope.status == "Alpha" || source.scope.status == "Beta") && (
          <ComponentStatus type={source.scope.status} />
        )}

        {source.scope.description && (
          <Description>{source.scope.description}</Description>
        )}

        <ComponentDetails
          {...{
            bundleSize,
            componentName,
            current,
            openSourceLink: source?.scope?.openSourceLink,
          }}
        />

        <TableofContents
          css={{ opacity: source.scope.status == "Coming soon" ? 0.5 : 1 }}
          current={current}
          headings={headings}
        />
      </header>

      <Article
        css={{ opacity: source.scope.status == "Coming soon" ? 0.5 : 1 }}
      >
        {source && (
          <MDXRemote
            {...source}
            components={components}
            scope={{
              propsTable,
            }}
          />
        )}
      </Article>
    </>
  );
}

const thisSection = "components";

export const getServerSideProps = async ({ params }) => {
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

  try {
    propsTable = await getPropsTable(params.slug);
    bundleSize = await getBundleSize(params.slug);
  } catch (e) {
    console.warn({ e });
  }

  const componentsLookUptable = getNavigation().then((nav) => {
    const [foundations, components, resources] = nav;

    const { docs } = components;

    let componentList = docs.map((component) => {
      return component.slug.replace("/components/", "");
    });

    return componentList;
  });

  const slug = componentsLookUptable[params.slug];

  // check if package exists on npm
  // if not, set status to coming soon
  const packageExists = await fetch(
    `https://registry.npmjs.org/@washingtonpost/wpds-${slug}`
  ).then((res) => res.status === 200 || res.status === 304);

  if (!packageExists && process.env.NODE_ENV !== "development") {
    source.scope.status = "Coming soon";
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
