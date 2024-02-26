import React from "react";
import { styled, Icon } from "@washingtonpost/wpds-ui-kit";
import { Wp } from "@washingtonpost/wpds-assets";
import Link from "next/link";

const Container = styled("div", {
  display: "flex",
  alignItems: "center",
  fontFamily: "$meta",
  fontWeight: "$light",
  cursor: "pointer",
  gap: "$050",
  paddingLeft: "$125",
  color: "$primary",
  "@sm": {
    width: "100%",
  },
});
const Span = styled("span", {
  fontSize: "$125",
  color: "$primary",
  textDecoration: "none",
  width: "100%",
});

export default function Logo() {
  return (
    <Link
      passHref
      href="/"
      aria-label="The Washington Post Design System's Homepage"
      legacyBehavior>
      <Container>
        <Icon size={"$200"}>
          <Wp />
        </Icon>
        <Span>Design system</Span>
      </Container>
    </Link>
  );
}
