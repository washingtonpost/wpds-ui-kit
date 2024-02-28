import React from "react";
import { Box, styled, Icon, theme } from "@washingtonpost/wpds-ui-kit";
import { useRouter } from "next/router";
import { Footer as SiteFooter } from "@washingtonpost/site-footer";
import Link from "next/link";
import {
  customNotSmBreakpoint,
  customSmBreakpoint,
} from "~/components/styleHelpers";

import { Github, Twitter, Youtube } from "@washingtonpost/wpds-assets";

const CommunityHeading = styled("span", {
  fontFamily: "$meta",
  fontWeight: "$bold",
  fontSize: "$087",
  color: "$gray40",
  [customNotSmBreakpoint]: {
    display: "none",
  },
});

const Anchor = styled("a", {
  marginTop: "$050",
  color: "$onSecondary",
  textDecoration: "none",
  display: "flex",
  alignItems: "center",
  "&:hover": {
    opacity: "0.75",
  },
});

const EditInGithub = styled("a", {
  display: "flex",
  textDecoration: "none",
  color: "$colors$onSecondary",
  fontSize: "$087",
  fontWeight: "$light",
  lineHeight: "$087",
  textAlign: "left",
  marginTop: "$050",
  marginBottom: "$200",
  "&:hover": {
    textDecoration: "underline",
  },
  [customSmBreakpoint]: {
    marginLeft: "$100",
  },
});

export const Footer = () => {
  const router = useRouter();
  return (
    <Box
      css={{
        gridArea: "footer",
        paddingTop: "$050",
        marginBottom: "$100",
        marginTop: "$500",
        marginLeft: "auto",
        marginRight: "auto",
        maxWidth: "1028px",
        width: "100%",
        [customSmBreakpoint]: {
          marginTop: "$200",
          "footer.site-footer": {
            display: "none",
          },
        },
      }}
    >
      {/* // slug aka a mdx file */}
      {router?.route?.includes("slug") && (
        <EditInGithub
          href={`http://github.com/washingtonpost/wpds-ui-kit/edit/main/build.washingtonpost.com/docs/${router.asPath.replace(
            "/",
            ""
          )}.mdx`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Edit this page on GitHub.
        </EditInGithub>
      )}
      <Box css={{ [customSmBreakpoint]: { px: "$100" }, "@sm": { px: 0 } }}>
        <SiteFooter />
      </Box>
      <Box
        css={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          padding: "$100",
          borderTop: "1px solid $primary",
          marginTop: "$100",
          marginBottom: "$450",
          "& a": {
            marginRight: "$100",
          },
          [customNotSmBreakpoint]: {
            justifyContent: "center",
          },
        }}
      >
        <Box
          css={{
            display: "flex",
            flexDirection: "column",
            [customNotSmBreakpoint]: {
              flexDirection: "row",
            },
          }}
        >
          <CommunityHeading>Community</CommunityHeading>
          <Link
            passHref
            href="https://twitter.com/wpdesignsystem"
            legacyBehavior
          >
            <Anchor>
              <Icon
                css={{ marginRight: "$025" }}
                label="X"
                size="$100"
                fill={theme.colors.primary}
              >
                <Twitter />
              </Icon>
              Twitter
            </Anchor>
          </Link>
          <Link
            passHref
            href="https://github.com/washingtonpost/wpds-ui-kit"
            legacyBehavior
          >
            <Anchor>
              <Icon
                css={{ marginRight: "$025" }}
                label="github"
                size="$100"
                fill={theme.colors.primary}
              >
                <Github />
              </Icon>
              Github
            </Anchor>
          </Link>
          <Link
            passHref
            href="https://www.youtube.com/@wpdesignsystem"
            legacyBehavior
          >
            <Anchor>
              <Icon
                css={{ marginRight: "$025" }}
                label="youtube"
                size="$100"
                fill={theme.colors.primary}
              >
                <Youtube />
              </Icon>
              Youtube
            </Anchor>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};
