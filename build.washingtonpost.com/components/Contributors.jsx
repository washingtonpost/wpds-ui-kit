import React from "react";
import {
  Box,
  styled,
  theme,
  Divider,
  Avatar,
} from "@washingtonpost/wpds-ui-kit";

import { Header } from "~/components/Markdown/Components/headers";
import {
  LandingContentGrid,
  ContentGrid,
} from "~/components/Markdown/Components/ResourcesGrids";

import Image from "next/image";
import CustomLink from "./Typography/link";

export const Contributors = ({ contributors }) => {
  return (
    <>
      <Header
        id="contributors"
        href="#contributors"
        as="h2"
        css={{
          borderTop: "1px solid $subtle",
          marginBottom: theme.sizes[100],
          paddingTop: theme.sizes[100],
          "@sm": { marginTop: 0 },
        }}
      >
        Contributors
      </Header>
      <Box
        css={{
          // create a masonry layout for the contributors
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gridGap: theme.sizes[100],
          "@sm": {
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          },
        }}
      >
        {contributors.map((contributor) => (
          <Box
            key={contributor.avatar}
            css={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
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
            <Box>
              <CustomLink href={contributor.url}>
                <Header as="h3">{contributor.name}</Header>
              </CustomLink>
            </Box>
          </Box>
        ))}
      </Box>
    </>
  );
};
