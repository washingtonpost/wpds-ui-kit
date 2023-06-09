import React from "react";
import { styled, theme } from "@washingtonpost/wpds-ui-kit";

export const Grid = ({ maxSize, css, children }) => {
  const GridObject = styled("div", {
    display: "grid",
    width: "100%",
    gridTemplateColumns: `repeat(auto-fill, minmax(${
      maxSize ? maxSize : "50px"
    }, 1fr) )`,
    gridGap: theme.space[100],
    gridAutoFlow: "row dense",
  });
  return <GridObject css={css}>{children}</GridObject>;
};

export const Cell = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
