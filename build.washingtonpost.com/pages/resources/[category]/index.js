import React from "react";
import { styled } from "@washingtonpost/wpds-ui-kit";
import { NextSeo } from "next-seo";
import Header from "~/components/Typography/Headers";
import CustomLink from "~/components/Typography/link";
import { getAllPathsByCategory, getNavigation, getResources } from "~/services";
import Breadcrumbs from "~/components/Breadcrumbs";
import {
  Thumbnail,
  THUMBNAIL_SQUARE,
  THUMBNAIL_WIDE,
} from "~/components/Thumbnail";
import { ContentGrid } from "~/components/Markdown/Components/ResourcesGrids";

const titleCase = (input) => {
  return input.replace(/\w\S*/g, (txt) => {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};

const HeadDiv = styled("div", {
  paddingLeft: "$050",
  color: "$primary",
  "@sm": {
    padding: "$025",
  },
});

export default function Page({ docs, category, description, size }) {
  return (
    <>
      <NextSeo
        title={`WPDS - ${category} | Resources`}
        description={`${category} resources, including links to documentation, guides, and more.`}
      />
      <HeadDiv>
        <Breadcrumbs.Root>
          <Breadcrumbs.Item href="/resources">Resources</Breadcrumbs.Item>
        </Breadcrumbs.Root>
        <header>
          <Header css={{ padding: "$100 0 $050" }}>{category}</Header>
        </header>
        {description && <p>{description}</p>}
      </HeadDiv>
      <ContentGrid size={size}>
        {docs.map((doc) => {
          return (
            <CustomLink
              href={doc.slug}
              key={doc.slug}
              css={{
                borderRadius: "$025",
                padding: "$050 $050 0",
                "@sm": {
                  padding: "$050 $025 0",
                },
              }}
            >
              <Thumbnail
                description={doc.data?.description.split(".")[0]}
                imageTag={doc.data.imageTag}
                kicker={doc.data.kicker}
                name={doc.data.title}
                publishDate={doc.data.publishDate}
                size={size}
                thumbnail={doc.data.thumbnail}
              />
            </CustomLink>
          );
        })}
      </ContentGrid>
    </>
  );
}

export const getStaticProps = async ({ params }) => {
  const docs = await getResources(`resources/${params.category}`);

  const todaysDate = new Date();
  // exclude future posts using collection.publishDate
  const publishedDocs = docs.filter(
    (doc) => new Date(doc.data.publishDate) <= todaysDate
  );

  const navigation = await getNavigation();

  const lookupTable = {
    workshops: {
      description:
        "Sharpen your design and development skills with our in-depth recorded workshops.",
      size: THUMBNAIL_WIDE,
    },
    guides: {
      description:
        "Explore the processes and tools we use in our step-by-step written guides.",
      size: THUMBNAIL_SQUARE,
    },
    tutorials: {
      description:
        "Watch or read through our tutorials to understand key techniques and concepts.",
      size: THUMBNAIL_WIDE,
    },
    accessibility: {
      description:
        "Explore our accessibility checklist, testing strategies and considerations. Contact accessibility@washpost.com with any questions, ideas or feedback.",
      size: THUMBNAIL_SQUARE,
    },
    tools: {
      description: "",
      size: THUMBNAIL_WIDE,
    },
  };

  // populate props
  const { description, size } = lookupTable[params.category];

  return {
    props: {
      category: titleCase(params.category),
      docs: publishedDocs,
      navigation,
      description,
      size,
    },
  };
};

const SECTION = "resources";

export const getStaticPaths = async () => {
  const paths = await getAllPathsByCategory(`${SECTION}`);

  return {
    paths,
    fallback: false,
  };
};
