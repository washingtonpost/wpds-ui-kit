import React from "react";
import { styled } from "@washingtonpost/wpds-ui-kit";
import Link from "next/link";
import Header from "../../Typography/Headers";

const Container = styled("div", {
  margin: "$200 0",
});
const List = styled("ul", {
  marginTop: "0",
  paddingLeft: "$050",
  marginLeft: "$100",
});
const ListItem = styled("li", {
  cursor: "pointer",
  padding: "$025 0",
  color: "$accessible",

  variants: {
    label: {
      Added: { color: "$green80", background: "$green300" },
      Updates: { color: "$blue80", background: "$blue300" },
      Fixes: { color: "$red80", background: "$red300" },
    },
    level: {
      2: {
        border: "1px solid currentColor",
        display: "inline-block",
        px: "$050",
        borderRadius: "$025",
        fontFamily: "$meta",
        fontSize: "$100",
        fontWeight: "$light",
        lineHeight: "auto",
        marginTop: "$100",
        marginBottom: "$050",

        a: {
          border: "none",
        },
      },
      3: {
        fontFamily: "$meta",
        fontSize: "$110",
      },
    },
  },
});
const LinkText = styled("a", {
  color: "currentColor",
  textDecoration: "none",
  borderBottom: "1px solid currentColor",

  "&:focus": {
    outlineColor: "$signal",
    outlineStyle: "solid",
    outlineOffset: "2px",
    outlineWidth: "2px",
  },
});

const Item = ({ children, level, label, as, href }) => (
  <ListItem level={level} label={label}>
    <Link passHref as={as} href={href}>
      <LinkText>{children}</LinkText>
    </Link>
  </ListItem>
);

export default function TableOfContents({ css, headings }) {
  if (!headings || !headings.length || headings[0].level !== 2) {
    return null;
  }

  return (
    <Container css={css}>
      <Header css={{ margin: "0 $025" }} as="h3">
        Table of Contents
      </Header>
      <List>
        {headings?.map(
          (heading, i) =>
            heading.level === 2 && (
              <Item key={i} as={`#${heading.label}`} href={`#${heading.label}`}>
                {heading.label}
              </Item>
            )
        )}
      </List>
    </Container>
  );
}
