import React from "react";

import { Header } from "~/components/Markdown/Components/headers";
import CustomLink from "~/components/Markdown/Components/link";

import { Box, Icon, theme, styled } from "@washingtonpost/wpds-ui-kit";
import ChevronRight from "@washingtonpost/wpds-assets/asset/chevron-right";

const SeeAll = styled(Header, {
  display: "flex",
  margin: "$100 0 $200",
  alignItems: "center",
  variants: {
    type: {
      New: { display: "none" },
      Workshops: {
        marginBottom: 0,
        "@notSm": {
          marginBottom: "-$300",
        },
      },
      Last: {
        marginBottom: 0,
        "@notSm": {
          marginBottom: "-$300",
        },
      },
    },
  },
});

const ChevronForLink = styled(ChevronRight, {
  fill: theme.colors.accessible,
});

export const SeeAllLink = (props) => {
  const name = props?.name?.toLowerCase() || "";
  return (
    <CustomLink href={props.href} noUnderline>
      <SeeAll as="h4" type={props.type}>
        <Box css={{ borderBottom: "1px solid $accessible" }}>
          See all {name}
        </Box>
        <Icon>
          <ChevronForLink />
        </Icon>
      </SeeAll>
    </CustomLink>
  );
};

export const NewCustomLink = styled(CustomLink, {
  variants: {
    type: {
      New: {
        pointerEvents: "none",
      },
      // image has 90% opacity when the page is on dark mode
      imageOnly: {
        [".wpds-dark &"]: {
          ["img"]: {
            opacity: "0.90",
          },
        },
        [".wpds-dark &:hover"]: {
          opacity: 1,
          ["img"]: {
            opacity: "0.95",
          },
        },
        "&:hover": {
          opacity: ".9",
        },
      },
    },
  },
});

/**
 * sorting guides by Rank -> if none, sort by title
 * @param {array} docs must have data.rank
 * @param {number} numToReturn returns slice from 0 to numToReturn
 * @returns
 */
export const sortByRank = (docs, numToReturn) => {
  return docs
    .sort(function (a, b) {
      try {
        return a.data.rank - b.data.rank;
      } catch (TypeError) {
        return a.data.title.localeCompare(b.data.title);
      }
    })
    .slice(0, numToReturn);
};

export default SeeAllLink;
