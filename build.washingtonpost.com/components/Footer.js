import React from "react";
import { Box, styled, Icon, theme } from "@washingtonpost/wpds-ui-kit";
import { useRouter } from "next/router";
import Script from "next/script";
import { Github, Twitter, Youtube } from "@washingtonpost/wpds-assets";

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
        marginLeft: "auto",
        marginRight: "auto",
        maxWidth: "1028px",
        width: "100%",

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
      <Script src="https://www.washingtonpost.com/ehf/twp-internal.js" />
      <div id="footer-v3"></div>
      <Box
        css={{
          display: "flex",
          justifyContent: "center",
          padding: "$050",
          "& a": {
            marginRight: "$100",
          }
        }}
      >

        <a href="https://github.com/washingtonpost/wpds-ui-kit">
          <Icon label="github" size="$300" fill={theme.colors.primary}>
            <Github />
          </Icon>
        </a>
        <a href="https://www.youtube.com/@wpds9202">
          <Icon label="youtube" size="$300" fill={theme.colors.primary}>
            <Youtube />
          </Icon>
        </a>
        <a href="https://twitter.com/wapodesign">
          <Icon label="X" size="$300" fill={theme.colors.primary}>
            <Twitter />
          </Icon>
        </a>
      </Box>
    </Box>
  );
};
