import React from "react";
import { MDXRemote } from "next-mdx-remote";
import dynamic from "next/dynamic";
import { NextSeo } from "next-seo";
import { styled, theme } from "@washingtonpost/wpds-ui-kit";
import MDXStyling from "~/components/Markdown/Styling";

import Header from "~/components/Typography/Headers";

import { getAllPathsBySection, getDocByPathName } from "~/services";
import { getNavigation } from "~/services/getNavigation";

const components = {
  ...MDXStyling,
  CustomComponent: dynamic(() => import("~/components/Typography/Headers")),
};
const P = styled("p", {
  color: theme.colors.accessible,
});

export default function Page({ source, iconData }) {
  return (
    <>
      <NextSeo
        title={`WPDS - ${source.scope.title} | Foundations`}
        description={source.scope.description}
      />
      <header className="post-header">
        <Header>{source.scope.title}</Header>
        {source.scope.description && (
          <P className="description">{source.scope.description}</P>
        )}
      </header>
      <article>
        <MDXRemote {...source} components={components} scope={iconData} />
      </article>
    </>
  );
}

const thisSection = "foundations";

export const getStaticProps = async ({ params }) => {
  const source = await getDocByPathName(`${thisSection}/${params.slug}`);

  const navigation = await getNavigation();

  let iconData = null;
  if (params.slug === "icons") {
    const response = await fetch(
      "https://api.figma.com/v1/files/LA6qKUukk8v3YkkuKq6IC6/components",
      { headers: { "X-FIGMA-TOKEN": process.env.FIGMA_API_TOKEN } }
    );
    const allComponents = await response.json();
    const iconComponents = allComponents.meta.components
      .filter((component) => component.containing_frame.pageName === "Icons")
      .map((component) => ({
        name: component.name,
        description: component.description.replace(/(\n)/gm, " "),
      }));
    iconData = { components: iconComponents };
  }

  return {
    props: {
      current: params.slug,
      navigation,
      source,
      iconData,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = await getAllPathsBySection(thisSection);

  return {
    paths: paths,
    fallback: false,
  };
};
