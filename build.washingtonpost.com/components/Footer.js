import React from "react";
import { Box, styled } from "@washingtonpost/wpds-ui-kit";
import { Footer as SiteFooter } from "@washingtonpost/site-footer";
import { useRouter } from "next/router";

const StyledFooter = styled(SiteFooter, {
  ".gray-darkest": {
    color: "$colors$onSecondary",
  },

  display: "flex",
  width: "100%",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",

  "& > div.flex": {
    display: "grid",
    width: "100%",
    maxWidth: "1028px",
    py: "$200",
    marginBottom: "$150",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "$100",
    borderTop: "1px solid $colors$subtle",
    borderBottom: "1px solid $colors$subtle",
  },

  ul: {
    listStyle: "none",
  },

  a: {
    textDecoration: "none",
    lineHeight: "$175",
  },

  ".font-xxxxs": {
    fontSize: "$087",
  },

  ".font-bold": {
    fontWeight: "$bold",
  },

  "div + ul": {
    marginTop: "$050",
  },

  "@notSm": {
    "&.site-footer > footer": {
      display: "none",
    },
  },

  "@sm": {
    alignItems: "flex-start",
    px: "$150",
    paddingTop: "$200",
    borderTop: "1px solid $colors$subtle",

    ".mb-sm": {
      marginBottom: "$100",
    },

    ".lh-default": {
      lineHeight: "$175",
    },

    ".font-xxxs": {
      fontSize: "$087",
    },
  },
});

const EditInGithub = styled("a", {
  display: "inline-block",
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
  "@sm": {
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

        "@sm": {
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
          href={`http://github.com/washingtonpost/wpds/ui-kit/edit/main/build.washingtonpost.com/docs/${router.asPath.replace(
            "/",
            ""
          )}.mdx`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Edit this page on GitHub.
        </EditInGithub>
      )}
      <StyledFooter className="site-footer" />
    </Box>
  );
};
