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
  marginBlock: 0,
});

export default function Page({ source }) {
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
        <MDXRemote {...source} components={components} />
      </article>
    </>
  );
}

const thisSection = "foundations";

export const getStaticProps = async ({ params }) => {
  const source = await getDocByPathName(`${thisSection}/${params.slug}`);

  const navigation = await getNavigation();

  return {
    props: {
      current: params.slug,
      navigation,
      source,
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
