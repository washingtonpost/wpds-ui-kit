import React from "react";
import { theme, Avatar, styled } from "@washingtonpost/wpds-ui-kit";
import { Header } from "~/components/Markdown/Components/headers";

import Image from "next/image";
import CustomLink from "./Typography/link";

const StyledGrid = styled({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(35vw, 1fr))",
  gridGap: theme.sizes[100],
  "@notSm": {
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
  },
});

const StyledContributor = styled({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const StyledContributorHeader = styled(Header, {
  borderTop: "1px solid $subtle",
  marginBottom: theme.sizes[100],
  paddingTop: theme.sizes[100],
  "@sm": { marginTop: 0 },
});

const ContributorBlock = ({ contributor }) => (
  <StyledContributor>
    <CustomLink href={contributor.url}>
      <Avatar size="600">
        <Image
          height="100"
          width="100"
          layout="fixed"
          src={contributor.avatar}
          alt={contributor.name}
        />
      </Avatar>
    </CustomLink>
    <div>
      <CustomLink href={contributor.url}>
        <Header as="h4">{contributor.name}</Header>
      </CustomLink>
    </div>
  </StyledContributor>
);

export const Contributors = ({ contributors }) => {
  return (
    <>
      <StyledContributorHeader id="contributors" href="#contributors" as="h2">
        Engineering Contributors
      </StyledContributorHeader>
      <StyledGrid>
        {contributors.map((contributor) => (
          <ContributorBlock
            contributor={contributor}
            key={contributor.avatar}
          />
        ))}
      </StyledGrid>
    </>
  );
};
