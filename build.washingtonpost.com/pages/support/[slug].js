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

export default function Page({ source }) {
  return (
    <>
      <NextSeo
        title={`WPDS - ${source.scope.title} | Support`}
        description={source.scope.description}
      />
      <header className="post-header">
        <Header>{source.scope.title}</Header>
        {source.scope.description && (
          <Description>{source.scope.description}</Description>
        )}
      </header>
      <article>
        {source && <MDXRemote {...source} components={components} />}
      </article>
    </>
  );
}

const thisSection = "support";

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
