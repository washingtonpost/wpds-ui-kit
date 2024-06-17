import React from "react";
import { Box } from "@washingtonpost/wpds-ui-kit";
import tokens from "@washingtonpost/wpds-ui-kit/src/theme/wpds.tokens.json";

const FontFacePlayground = ({ stacks }) => {
  return (
    <div>
      <h1>Hello, Font Face Playground!</h1>
      {Object.keys(stacks).map((stack) => (
        <div key={stack}>
          <h2>{stack}</h2>
          <Box as="p" css={{ fontFamily: stacks[stack] }}>
            The quick brown fox jumps over the lazy dog.
          </Box>
        </div>
      ))}
    </div>
  );
};

export async function getStaticProps() {
  const stacks = {
    headline: tokens.fonts.headline,
    subhead: tokens.fonts.subhead,
    meta: tokens.fonts.meta,
    magazine: tokens.fonts.magazine,
  };

  return {
    props: {
      stacks,
    },
  };
}

export default FontFacePlayground;
