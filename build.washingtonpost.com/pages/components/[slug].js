import React from "react";
import { MDXRemote } from "next-mdx-remote";
import { NextSeo } from "next-seo";
import { AlertBanner, Box, styled, theme } from "@washingtonpost/wpds-ui-kit";

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
import CopyCodeButton from "~/components/Markdown/Components/CopyToClipBoard";
import CustomLink from "~/components/Typography/link";

const components = {
  ...MDXStyling,
  PropsTable,
};

const P = styled("p", {
  color: theme.colors.accessible,
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

        {source.scope.status == "Draft" && (
          <AlertBanner.Root css={{ marginBottom: "$200" }} variant="warning">
            <AlertBanner.Content>
              <b>Note:{` `}</b>This component status is in draft and indicates
              the component is actively being worked on.
            </AlertBanner.Content>
          </AlertBanner.Root>
        )}
        {source.scope.description && (
          <P className="description">{source.scope.description}</P>
        )}

        {source.scope.status !== "Coming soon" && (
          <Box
            css={{
              marginBlockStart: "$100",
              display: "flex",
              rowGap: "$100",
              flexDirection: "column",
              fontFamily: "$meta",
              fontSize: "$075",

              pre: {
                display: "inline",
              },
            }}
          >
            <Box
              css={{
                display: "flex",
                fontWeight: "$bold",
                textDecoration: "none",
                color: "inherit",
              }}
            >
              Bundle size:&nbsp;
              <CustomLink
                css={{
                  color: theme.colors.accessible,
                  textDecoration: "underline",
                  fontWeight: theme.fontWeights.regular,
                  "&:focus": {
                    outlineColor: "$signal",
                    outlineStyle: "solid",
                    outlineOffset: "2px",
                    outlineWidth: "2px",
                  },
                }}
                href={`https://bundlephobia.com/package/@washingtonpost/wpds-${current}`}
                title={"Learn more about the bundle size at Bundlephobia.com"}
              >
                {bundleSize}
              </CustomLink>
            </Box>
            <Box
              css={{
                fontWeight: "$bold",
              }}
            >
              Install:{" "}
              <pre>
                <CopyCodeButton
                  as="code"
                  css={{
                    display: "inline",
                    fontWeight: "$light",
                    borderRadius: "$012",
                    backgroundColor: "$gray500",
                    color: "$accessible",
                    padding: "$025",
                  }}
                  textToCopy={`npm install @washingtonpost/wpds-${current}`}
                >
                  npm install @washingtonpost/wpds-{current}
                </CopyCodeButton>
              </pre>
            </Box>
            <Box
              css={{
                fontWeight: "$bold",
              }}
            >
              Usage:{" "}
              <pre>
                <CopyCodeButton
                  as="code"
                  css={{
                    display: "inline",
                    fontWeight: "$light",
                    borderRadius: "$012",
                    backgroundColor: "$gray500",
                    color: "$accessible",
                    padding: "$025",
                  }}
                  textToCopy={`import { ${componentName} } from
               "@washingtonpost/wpds-
                ${current}";`}
                >
                  import {"{"} {componentName} {"}"} from
                  &quot;@washingtonpost/wpds-
                  {current}&quot;
                </CopyCodeButton>
              </pre>
            </Box>
            <Box
              css={{
                display: "flex",
                fontWeight: "$bold",
                textDecoration: "none",
                color: "inherit",
              }}
            >
              Source:&nbsp;
              <CustomLink
                css={{
                  color: theme.colors.accessible,
                  textDecoration: "underline",
                  fontWeight: theme.fontWeights.regular,
                  "&:focus": {
                    outlineColor: "$signal",
                    outlineStyle: "solid",
                    outlineOffset: "2px",
                    outlineWidth: "2px",
                  },
                }}
                href={`https://github.com/washingtonpost/wpds-ui-kit/tree/main/ui/${current}`}
                title={"View on Github"}
              >
                View on Github
              </CustomLink>
            </Box>
          </Box>
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
      console.log("before call");
      propsTable = await getPropsTable(params.slug);
      console.log("after call");
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
