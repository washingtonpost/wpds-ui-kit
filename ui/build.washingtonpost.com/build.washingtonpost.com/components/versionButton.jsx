import React, { useState } from "react";
import { styled, theme, keyframes } from "@washingtonpost/wpds-ui-kit";
import Link from "next/link";

export default function VersionButton({ setState, css }) {
  const [isOpen, setisOpen] = useState(false);

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
  const Reveal = keyframes({
    from: { transform: "scale(0)" },
    to: { transform: "scale(1)" },
  });
  const PopOver = styled("div", {
    zIndex: "$page",
    backgroundColor: "$gray600",
    borderRadius: "$025",
    position: "absolute",
    minWidth: "$400",
    border: "1px solid $subtle",
    left: "50%",
    transform: "translateX(-50%)",
    padding: "$050 $100",
    marginTop: "$025",
    boxShadow: "$200",
  });
  const List = styled("ul", {
    listStyle: "none",
    margin: "0",
    padding: "0",
  });
  const ListItem = styled("li", {
    paddingBottm: "$075",
  });
  const A = styled("a", {
    cursor: "pointer",
    textDecoration: "none",
    color: "$primary",
    "&:hover": {
      opacity: ".75",
    },
    "&:focus": {
      outlineColor: "$signal",
      outlineStyle: "solid",
      outlineOffset: "2px",
      outlineWidth: "2px",
    },
    variants: {
      signal: {
        showColor: {
          color: "$signal",
        },
      },
    },
  });
  return (
    <Wrapper css={css}>
      <Button>v1</Button>
    </Wrapper>
  );
}
