import React from "react";
import tokens from "@washingtonpost/wpds-ui-kit/src/theme/wpds.tokens.json";

// Import the necessary modules or libraries

// Define your component
const FontFacePlayground = () => {
  return (
    <div>
      <h1>Hello, Font Face Playground!</h1>
      <h2>fonts headline stack</h2>
    </div>
  );
};

// getstaticprops
export async function getStaticProps() {
  return {
    props: {
      fonts: tokens.fonts,
    },
  };
}

export default FontFacePlayground;
