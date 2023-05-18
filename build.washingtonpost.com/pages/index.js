import React from "react";
import { Box, styled, theme, Divider } from "@washingtonpost/wpds-ui-kit";

import { getAllDocs, getNavigation, getContributors } from "~/services";
import { Header } from "~/components/Markdown/Components/headers";
import { List, ListItem } from "~/components/Markdown/Components/list";
import {
  LandingContentGrid,
  ContentGrid,
} from "~/components/Markdown/Components/ResourcesGrids";
import { SeeAllLink, sortByRank, NewCustomLink } from "~/components/utils";

import Image from "next/image";
import { Contributors } from "~/components/Contributors";

const HeroBlock = styled("div", {
  gridColumn: "span 2",
  flexDirection: "column",
  justifyContent: "center",
  "@md": {
    gridColumn: "span 3",
  },
  "@sm": {
    gridColumn: "span 1",
  },
});

const P = styled("p", {
  color: theme.colors.accessible,
  fontSize: theme.fontSizes[100],
  fontWeight: theme.fontWeights.light,
  lineHeight: theme.lineHeights[125],
  marginBlockStart: 0,
  marginBlockEnd: theme.space["100"],
});

const BoldTextLooksLikeLink = styled("span", {
  fontWeight: "bold",
  textDecoration: "underline",
  marginTop: theme.sizes[100],
  "@notSm": {
    bottom: 0,
    position: "absolute",
  },
});

const Index = ({ recentPosts, rankedArticles, contributors }) => {
  return (
    <>
      <LandingContentGrid size="wide">
        <Box
          css={{
            gridColumn: "span 2",
            "@sm": {
              gridColumn: "span 1",
            },
          }}
        >
          <Header as="h1">Welcome</Header>
        </Box>
        <Box
          css={{
            display: "flex",
            alignItems: "flex-end",
            "@md": { display: "none" },
            "@sm": { display: "none" },
          }}
        >
          <Header
            href="/resources"
            as="h2"
            css={{
              fontSize: "$125",
              fontFamily: "$subhead",
              fontWeight: "$bold",
              marginBottom: "$025",
              marginTop: "$100",
            }}
          >
            What&apos;s new
          </Header>
        </Box>
        <HeroBlock>
          <P css={{ fontSize: "$125", marginBottom: theme.sizes[125] }}>
            The Washington Post Design System (WPDS) is a growing library of
            design tokens and interactive components purpose-built for
            washingtonpost.com.
          </P>
          <P css={{ fontSize: "$125", marginBottom: theme.sizes[225] }}>
            WPDS enables designers and developers at the Post to ship
            reader-facing digital products that are modular, elegant and
            accessible while maintaining visual consistency at scale.
          </P>
        </HeroBlock>
        <Box
          css={{
            display: "flex",
            flexDirection: "column",
            marginBottom: theme.sizes[100],
            "@md": { display: "none" },
            "@sm": { display: "none" },
          }}
        >
          <List>
            {recentPosts &&
              recentPosts.map((post, i) => {
                return (
                  <ListItem css={{ display: `${i > 5 ? "none" : ""}` }} key={i}>
                    <P
                      css={{
                        color: theme.colors.primary,
                        fontSize: theme.fontSizes["075"],
                        fontWeight: theme.fontWeights.bold,
                        marginBottom: "0",
                      }}
                    >
                      {post.data.publishDate}
                    </P>
                    <NewCustomLink css={{ fontSize: "075" }} href={post.slug}>
                      {post.data.title}
                    </NewCustomLink>
                  </ListItem>
                );
              })}
          </List>
        </Box>
      </LandingContentGrid>

      <Box
        css={{
          gridColumn: "1/-1",
        }}
      >
        <Header
          as="h2"
          css={{
            borderTop: "1px solid $subtle",
            marginBottom: theme.sizes[100],
            paddingTop: theme.sizes[100],
            "@sm": { marginTop: 0 },
          }}
        >
          Getting started
        </Header>
      </Box>
      <LandingContentGrid size="wide">
        <Box
          css={{
            "&:focus-within": {
              outline: "1px auto Highlight",
              "@media screen and (-webkit-min-device-pixel-ratio: 0)": {
                outline: "1px auto -webkit-focus-ring-color",
              },
            },
            position: "relative",
            "@md": {
              gridColumn: "1/-1",
            },
            "@sm": {
              marginBottom: theme.sizes[200],
            },
          }}
        >
          <NewCustomLink href="/foundations" type="imageOnly" noUnderline>
            <Image
              height="160"
              width="320"
              layout="responsive"
              src="/img/sections/foundations.png"
              alt=""
            />
            <Header as="h3">Foundations</Header>
            <P
              css={{
                marginBottom: theme.sizes[300],
                "@md": {
                  marginBottom: theme.sizes[250],
                },
                "@sm": {
                  marginBottom: theme.sizes[100],
                },
              }}
            >
              Learn about design tokens what they are, how they work and the
              advantages they bring to a design system. Plus: a list of all
              currently supported tokens.
            </P>
            <BoldTextLooksLikeLink>
              Get started with Foundations
            </BoldTextLooksLikeLink>
          </NewCustomLink>
        </Box>
        <Box
          css={{
            "&:focus-within": {
              outline: "1px auto Highlight",
              "@media screen and (-webkit-min-device-pixel-ratio: 0)": {
                outline: "1px auto -webkit-focus-ring-color",
              },
            },
            position: "relative",
            "@md": {
              gridColumn: "1/-1",
            },
            "@sm": {
              marginBottom: theme.sizes[200],
            },
          }}
        >
          <NewCustomLink
            href="/components/alert-banner"
            type="imageOnly"
            noUnderline
          >
            <Image
              height="160"
              width="320"
              layout="responsive"
              src="/img/sections/components.png"
              alt=""
            />
            <Header as="h3">Components</Header>
            <P
              css={{
                marginBottom: theme.sizes[300],
                "@md": {
                  marginBottom: theme.sizes[250],
                },
                "@sm": {
                  marginBottom: theme.sizes[100],
                },
              }}
            >
              Dive deeper into our component documentation including design
              examples, usage guidelines and best-practices for technical
              implementation.
            </P>
            <BoldTextLooksLikeLink>
              Get started with Components
            </BoldTextLooksLikeLink>
          </NewCustomLink>
        </Box>
        <Box
          css={{
            "&:focus-within": {
              outline: "1px auto Highlight",
              "@media screen and (-webkit-min-device-pixel-ratio: 0)": {
                outline: "1px auto -webkit-focus-ring-color",
              },
            },
            height: "100%",
            position: "relative",
            "@md": {
              gridColumn: "1/-1",
            },
            "@sm": {
              marginBottom: theme.sizes[200],
            },
          }}
        >
          <NewCustomLink href="/resources" type="imageOnly" noUnderline>
            <Image
              height="160"
              width="320"
              layout="responsive"
              src="/img/sections/resources.png"
              alt=""
            />
            <Header as="h3">Resources</Header>
            <P
              css={{
                marginBottom: theme.sizes[300],
                "@md": {
                  marginBottom: theme.sizes[250],
                },
                "@sm": {
                  marginBottom: theme.sizes[100],
                },
              }}
            >
              Get familiar with the WPDS ecosystem by using one of our handy
              how-to guides. Learn more about integrations with Figma, Zeplin,
              and React.
            </P>
            <BoldTextLooksLikeLink>
              Get started with Resources
            </BoldTextLooksLikeLink>
          </NewCustomLink>
        </Box>
        <Box />
      </LandingContentGrid>

      {rankedArticles && (
        <>
          <Box
            css={{
              gridColumn: "1/-1",
            }}
          >
            <Header
              as="h2"
              css={{
                borderTop: "1px solid $subtle",
                marginBottom: theme.sizes[100],
                paddingTop: theme.sizes[100],
                "@sm": { marginTop: 0 },
              }}
            >
              Dive Deeper
            </Header>
          </Box>
          <LandingContentGrid size="single">
            {rankedArticles.map((article) => (
              <NewCustomLink
                href={article.slug}
                key={article.data.title}
                type="imageOnly"
                noUnderline
              >
                <ContentGrid size="singleWide">
                  <Box>
                    <Image
                      height="250"
                      width="500"
                      layout="responsive"
                      src={article.data.imageTag}
                      alt=""
                    />
                  </Box>
                  <Box
                    css={{
                      margin: "auto 0",
                      "@sm": {
                        margin: 0,
                      },
                    }}
                  >
                    <Header
                      href={article.slug}
                      as="h3"
                      css={{
                        "@sm": {
                          marginTop: 0,
                        },
                      }}
                    >
                      {article.data.title}
                    </Header>
                    <P>{article.data.description}</P>
                  </Box>
                </ContentGrid>
              </NewCustomLink>
            ))}
            <SeeAllLink href="/resources" name="resources" type="Last" />
            <Box
              css={{
                marginBottom: "$200",
              }}
            ></Box>
          </LandingContentGrid>
        </>
      )}

      <Divider variant="default" />

      {contributors && <Contributors contributors={contributors} />}
    </>
  );
};

const todaysDate = new Date();

Index.displayName = "Index";

export default Index;
export async function getStaticProps() {
  const posts = await getAllDocs();
  const navigation = await getNavigation();

  const guides = [];
  const workshops = [];

  const recentPosts = posts
    .filter((post) => {
      if (post.data.kicker === "Guides") {
        guides.push(post);
      }
      if (post.data.kicker === "Workshops") {
        workshops.push(post);
      }
      return (
        post.data.publishDate &&
        new Date(post.data.publishDate) <= todaysDate &&
        post.slug.includes("resources")
      );
    })
    .sort((a, b) => {
      return new Date(a.data.publishDate) - new Date(b.data.publishDate);
    })
    .reverse();

  const threshold = 4;
  if (recentPosts.length > threshold) {
    const amountOver = recentPosts.length - threshold;
    recentPosts.splice(threshold, amountOver);
  }

  // uses the ranks inside the docs
  const rankedArticles = [
    ...sortByRank(workshops, 4),
    ...sortByRank(guides, 2),
  ];

  const contributors = await getContributors();

  return {
    props: { recentPosts, rankedArticles, navigation, contributors },
  };
}
