import React from "react";
import Container from "./container";
import InlineSVG from "./inlineSVG";

const Anatomy = ({ src, caption }) => {
  return (
    <Container
      css={{
        minHeight: 260,
      }}
      caption={caption}
    >
      <InlineSVG path={src} />
    </Container>
  );
};

export default Anatomy;
