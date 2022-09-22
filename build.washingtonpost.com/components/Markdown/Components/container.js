import React from "react";
import { styled, theme } from "@washingtonpost/wpds-ui-kit";
export default function Container({ children, caption, css }) {
  const Div = styled("div", {
    width: "100%",
    maxWidth: "100vw",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "$gray500",
    color: theme.colors.accessible,
  });
  const Caption = styled("p", {
    color: theme.colors.accessible,
    fontSize: "$087",
    marginBlockStart: "$050",
    marginBlockEnd: 0,
  });
  return (
    <>
      <Div css={css}>{children}</Div>
      {caption && <Caption>{caption}</Caption>}
    </>
  );
}
