import React from "react";
import { NextSeo } from "next-seo";
import { styled, theme, Box } from "@washingtonpost/wpds-ui-kit";

import { getDocsListBySection, getNavigation } from "~/services";
import { Header } from "~/components/Markdown/Components/headers";
import { Description } from "~/components/Typography/Description";
import TableofContents from "~/components/Markdown/Components/tableofcontents";
import {
  Thumbnail,
  THUMBNAIL_SQUARE,
  THUMBNAIL_WIDE,
} from "~/components/Thumbnail";
import { LandingContentGrid } from "~/components/Markdown/Components/ResourcesGrids";
import { SeeAllLink, NewCustomLink, sortByRank } from "~/components/utils";

const Page = ({ wrapper }) => (
  <>
    <NextSeo title={`WPDS - Resources`} />
    <Header as="h1">Resources</Header>
    <Description>
      Learn more about our workflow and how to use our tools in our guides.
      Watch our tutorials and workshops to discover the elegance and
      accessibility of WPDS.
    </Description>
    <TableofContents headings={wrapper.headings} css={{ margin: "$075 0" }} />
    {wrapper.content.categories.map(
      ({ name, id, type, posts, size, description }) => (
        <React.Fragment key={name}>
          <Box
            css={{
              gridColumn: "1/-1",
              "@sm": {
                marginBottom: "$100",
              },
            }}
          >
            <NewCustomLink
              type={type === "New" ? type : "imageOnly"}
              href={`/resources/${name.toLowerCase()}`}
              noUnderline
            >
              <Header
                as="h2"
                id={id}
                css={{
                  borderTop: "1px solid $subtle",
                  marginTop: theme.sizes[200],
                  marginBottom: theme.sizes[100],
                  paddingTop: theme.sizes[100],
                  "@sm": { paddingBottom: theme.sizes[100], marginBottom: 0 },
                }}
              >
                {name}
              </Header>
              <Description>{description}</Description>
            </NewCustomLink>
          </Box>
          <LandingContentGrid size={size} className={type}>
            {posts?.map((doc) => (
              <Box
                key={doc.slug}
                css={{
                  position: "relative",
                  "@md": {
                    gridColumn: "1/-1",
                  },
                  "@sm": {
                    gridGap: "$150",
                  },
                }}
              >
                <NewCustomLink href={doc.slug} type="imageOnly" noUnderline>
                  <Thumbnail
                    name={doc.data.title}
                    description={doc.data.description.split(".")[0]}
                    publishDate={doc.data.publishDate}
                    imageTag={doc.data.imageTag}
                    thumbnail={doc.data.thumbnail}
                    size={size}
                  />
                </NewCustomLink>
              </Box>
            ))}
          </LandingContentGrid>
          <SeeAllLink
            href={`/resources/${name.toLowerCase()}`}
            name={name}
            type={type}
          />
        </React.Fragment>
      )
    )}
  </>
);

export const getStaticProps = async () => {
  const docs = await getDocsListBySection("resources");

  // find the three most recent posts to the site before content is sorted by kicker
  const recents = [...docs]
    .sort((a, b) => new Date(b.data.publishDate) - new Date(a.data.publishDate))
    .slice(0, 3);

  const collections =
    // create a collection for each doc.data.kicker property and put their docs in it
    docs
      .reduce((acc, doc) => {
        const kicker = doc.data.kicker;
        const collection = acc.find(
          (collection) => collection.kicker === kicker
        );
        const todaysDate = new Date();
        // exclude future posts using collection.publishDate
        if (new Date(doc.data.publishDate) <= todaysDate) {
          if (collection) {
            collection.docs.push(doc);
          } else {
            acc.push({
              kicker,
              docs: [doc],
            });
          }
        }
        return acc;
      }, [])
      .sort((a, b) => {
        // alpha sort
        return a.kicker.localeCompare(b.kicker);
      });

  const wrapper = await getWrapper(collections, recents);
  const navigation = await getNavigation();

  return {
    props: {
      navigation,
      wrapper,
    },
  };
};

async function getWrapper(collections, recents) {
  // create a wrapper which contains all necessary data for the page

  // 1. initialize constants
  const wrapper = { content: {}, headings: [] };
  const content = { categories: [] };
  const level = 2;
  const descriptions = {
    Guides:
      "Explore the processes and tools we use in our step-by-step written guides.",
    Tutorials:
      "Watch or read through our tutorials to understand key techniques and concepts.",
    Accessibility:
      "Explore our accessibility checklist, testing strategies and considerations.",
    Workshops:
      "Sharpen your design and development skills with our in-depth recorded workshops.",
    Tools: "Help for adopting and using WPDS.",
  };

  // 2. populate the content array with objects for each category (main data for page)
  content.categories = collections.map((collection) => {
    let name, id, type;
    name = id = type = collection.kicker;
    let [posts, description, size] = [[], descriptions[name], ""];

    if (name === "Guides" || name === "Tools") {
      // sorting guides by Rank -> if none, sort by title
      posts = sortByRank(collection.docs, 4);
      size = THUMBNAIL_SQUARE;
    } else {
      posts = [...collection.docs].slice(0, 3);
      size = THUMBNAIL_WIDE;
    }
    //return category
    return { name, posts, description, size, type, id };
  });

  // 3. populate headings (for TOC)
  const headings = content.categories.map((category) => {
    return { label: category.name, level };
  });

  // 4. adding what's new section to the front of the content array
  let whatsNew = {
    name: "What's New?",
    posts: recents,
    description: null,
    size: THUMBNAIL_WIDE,
    type: "New",
    id: "What's%20New?",
  };
  content.categories.unshift(whatsNew);
  headings.unshift({ label: whatsNew.name, level });

  // 5. populate the wrapper to return
  wrapper.content = content;
  wrapper.headings = headings;
  return wrapper;
}

Page.displayName = "Page";
export default Page;
