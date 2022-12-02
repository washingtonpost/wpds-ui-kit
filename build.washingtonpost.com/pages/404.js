import React from "react";
import { theme, styled, Box, Icon } from "@washingtonpost/wpds-ui-kit";
import ChevronRight from "@washingtonpost/wpds-assets/asset/chevron-right";

import Header from "~/components/Typography/Headers";
import Link from "next/link";

const A = styled("a", {
  cursor: "pointer",
  textDecoration: "none",
  color: "$primary",
  "&:hover": {
    opacity: ".75",
  },
  "&:focus": {
    outlineColor: "$signal",
    outlineStyle: "solid",
    outlineOffset: "2px",
    outlineWidth: "2px",
  },
});

const P = styled("p", {
  color: theme.colors.accessible,
  marginBlock: 0,
  marginBottom: theme.space[175],
});

const ChevronForLink = styled(ChevronRight, {
  fill: theme.colors.accessible,
});

const LinkContainer = styled(Header, {
  display: "flex",
  margin: "$100 0 0 0",
  alignItems: "center",
});

const Container = styled("div", { height: "60vh" });

const onClick = () => {
  // using the command + k shortcut to open the algolia search modal
  document.dispatchEvent(
    new KeyboardEvent("keydown", {
      key: "k",
      ctrlKey: true,
      bubbles: true,
      metaKey: true,
    })
  );
};
export const StyledLink = ({ children }) => {
  return (
    <LinkContainer as="h4" css={{ fontSize: theme.fontSizes["112"] }}>
      <Box css={{ borderBottom: "1px solid $accessible" }}>{children}</Box>
      <Icon>
        <ChevronForLink />
      </Icon>
    </LinkContainer>
  );
};

export default function Page() {
  return (
    <Container>
      <header className="post-header">
        <Header
          css={{
            fontSize: theme.fontSizes["350"],
            marginBottom: theme.space[100],
          }}
        >
          Page Not Found
        </Header>
        <P>The URL you requested was either moved or does not exist. 😵 </P>

        <A onClick={onClick}>
          <StyledLink>Search</StyledLink>
        </A>
        <Link href="/" passhref>
          <A>
            <StyledLink>Return to homepage</StyledLink>
          </A>
        </Link>
      </header>
    </Container>
  );
}
