import React from "react";
import { MDXRemote } from "next-mdx-remote";
import dynamic from "next/dynamic";
import { NextSeo } from "~/components/next-seo";
import MDXStyling from "~/components/Markdown/Styling";

import Header from "~/components/Typography/Headers";
import { Description } from "~/components/Typography/Description";

import { getAllPathsBySection, getDocByPathName } from "~/services";
import { getNavigation } from "~/services/getNavigation";

const components = {
  ...MDXStyling,
  CustomComponent: dynamic(() => import("~/components/Typography/Headers")),
};

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
          <Description className="description">
            {source.scope.description}
          </Description>
        )}
      </header>
      <article>
        {source && (
          <MDXRemote {...source} components={components} scope={iconData} />
        )}
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
    const responseBody = await response.json();
    if (responseBody.status === 200) {
      const iconComponents = responseBody.meta.components
        .filter((component) => component.containing_frame.pageName === "Icons")
        .map((component) => ({
          name: component.name,
          description: component.description.replace(/(\n)/gm, " "),
        }));
      iconData = { components: iconComponents };
    }
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
