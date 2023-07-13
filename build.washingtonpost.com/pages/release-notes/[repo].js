import React from "react";
import { NextSeo } from "next-seo";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import matter from "gray-matter";
import Header from "~/components/Typography/Headers";
import { getNavigation } from "~/services";
import MDXStyling from "~/components/Markdown/Styling";

const components = {
  ...MDXStyling,
};

export default function Page({
    source,
}) {
  return (
    <>
      <NextSeo
        title={`WPDS UI Kit - Release Notes`}
        description="Release notes for WPDS UI Kit, the Washington Post Design System."
      />
      <header>
        <Header as="h1">UI Kit Release notes</Header>
      </header>

          <section>
               <MDXRemote
                  {...source}
                  components={components}
        />
      </section>
    </>
  );
}

export const getStaticProps = async () => {
    const navigation = await getNavigation();
    const changelog = await fetch('https://raw.githubusercontent.com/washingtonpost/wpds-ui-kit/main/CHANGELOG.md');
    const changelogText = await changelog.text();
    let frontMatter = matter(changelogText);


      const source = await serialize(frontMatter.content, {
    scope: frontMatter.data,
  });
    
    return {
        props: {
            source,
        navigation,
        },
    };
}

export async function getStaticPaths() {
  return {
      paths: [
            { params: { repo: 'wpds-ui-kit' } },
    ],
    fallback: true
  }
}
    

