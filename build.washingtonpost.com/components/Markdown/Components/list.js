import { styled, theme } from "@washingtonpost/wpds-ui-kit";

export const List = styled("ul", {
  marginBlock: "0",
  marginLeft: "$100",
  paddingInlineStart: 0,

  variants: {
    as: {
      ol: {
        listStyle: "revert",
        paddingLeft: "$100",
      },
    },
  },
});

export const ListItem = styled("li", {
  padding: "$025 0",
});

export const CheckboxListItem = styled("li", {
  padding: "$025 0",
  marginRight: "$050",
  listStyle: "none",

  "[role='checkbox']": {
    marginBottom: "$025",
    marginRight: "$050",
  },

  ".markdown-input-checkbox": {
    float: "left",
  },
});

export const LinkText = styled("span", {
  color: theme.colors.accessible,
  textDecoration: "underline",
  "&:focus": {
    outlineColor: "$signal",
    outlineStyle: "solid",
    outlineOffset: "2px",
    outlineWidth: "2px",
  },
});
