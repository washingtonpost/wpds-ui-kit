import React from "react";
import { Box, theme, styled } from "@washingtonpost/wpds-ui-kit";
import CustomLink from "~/components/Typography/link";

const Slash = styled("span", {
  color: theme.colors.accessible,
  marginRight: "$050",
});

const Root = ({ children }) => {
  return (
    <Box
      as="nav"
      aria-label="Breadcrumb"
      css={{
        marginBottom: "$050",
      }}
    >
      {children}
    </Box>
  );
};

const Link = styled(CustomLink, {
  fontFamily: "$meta",
  fontSize: "$100",
  fontWeight: "$light",
  borderBottom: "1px solid currentColor",
  color: theme.colors.accessible,
  marginRight: "$050",
});

const Item = ({ children, href }) => {
  return (
    <>
      <Link href={href}>{children}</Link>
      <Slash aria-hidden="true">/</Slash>
    </>
  );
};

const Breadcrumbs = {
  Root,
  Item,
};

export default Breadcrumbs;
