import React from "react";
import { theme, Box } from "@washingtonpost/wpds-ui-kit";

const Pre = ({
  children,
  withPreview,
  isGuide = "none",
  hideNavBar,
  demoHeight,
}) => {
  return (
    <Box
      as="pre"
      css={{
        color: theme.colors.accessible,
        background: "$subtle",
        fontSize: "$100",
        marginBottom: "$050",
        marginTop: "$050",
        display: "block",
        "@sm": {
          width: "100vw",
        },
      }}
    >
      {React.cloneElement(children, {
        withPreview,
        isGuide,
        hideNavBar,
        demoHeight,
      })}
    </Box>
  );
};

export default Pre;
