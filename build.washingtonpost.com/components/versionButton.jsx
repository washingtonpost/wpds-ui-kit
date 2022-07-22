import React from "react";
import { styled, theme } from "@washingtonpost/wpds-ui-kit";

export default function VersionButton({ css }) {
  const Wrapper = styled("div", {
    position: "relative",
  });
  const Button = styled("button", {
    fontFamily: "$meta",
    fontSize: "$087",
    color: theme.colors.accessible,
    backgroundColor: "transparent",
    borderColor: "$gray200",
    borderStyle: "solid",
    borderRadius: "$025",
    marginLeft: "$050",
    px: "$050",
    "&:focus": {
      outlineColor: "$signal",
      outlineStyle: "solid",
      outlineOffset: "2px",
      outlineWidth: "2px",
    },
  });
  return (
    <Wrapper css={css}>
      <Button>v1</Button>
    </Wrapper>
  );
}
