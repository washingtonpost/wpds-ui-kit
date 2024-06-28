import React from "react";
import { Box } from "@washingtonpost/wpds-ui-kit";
import tokens from "@washingtonpost/wpds-ui-kit/src/theme/wpds.tokens.json";

const FontFacePlayground = ({ stacks }) => {
  return (
    <Box
      css={{
        color: "$onBackground",
        h1: {
          fontSize: "$400",
          fontFamily: "$headline",
        },
        h2: {
          fontSize: "$200",
          fontFamily: "$subhead",
        },
      }}
    >
      <h1>@font-faces</h1>
      {Object.keys(stacks).map((stack) => (
        <Box key={stack}>
          <h2>{stack}</h2>
          <Box
            as="p"
            css={{
              fontFamily: `$${stack}`,
              fontSize: "$400",
            }}
          >
            The quick brown fox jumps over the lazy dog.
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export async function getStaticProps() {
  const stacks = {
    magazine: tokens.fonts.magazine,
    headline: tokens.fonts.headline,
    subhead: tokens.fonts.subhead,
    meta: tokens.fonts.meta,
  };

  return {
    props: {
      stacks,
    },
  };
}

export default FontFacePlayground;
