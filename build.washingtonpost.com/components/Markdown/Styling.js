/**IMPORTS AND MAPS COMPONENTS TO ALL ELEMENTS IN MARKDOWN FILES
 * FOR STYLING. AS WELL COMMONLY USED COMPONENTS. FOR UNIQUE COMPONENTS
 * NEEDED IMPORT THEM VIA THE COMPONENTS PASSED ON THE SPECIFIC [SLUG].JS FILE
 */
import React from "react";
import { Header } from "./Components/headers";
import CustomLink from "./Components/link";
import { styled, theme, Box, Button, Tabs } from "@washingtonpost/wpds-ui-kit";
import {
  List,
  ListItem,
  CheckboxListItem,
} from "~/components/Markdown/Components/list";
import dynamic from "next/dynamic";
import { Grid, Cell } from "./Components/Grid";
import { AlertBanner } from "@washingtonpost/wpds-ui-kit";
import { ComponentStatus } from "../ComponentPage/ComponentStatus";
import CollapsibleContainer from "./Components/collapsible";
const InputCheckbox = dynamic(() =>
  import("./Components/Checkbox").then((mod) => mod.InputCheckbox)
);

const Table = styled("table", {
  borderCollapse: "collapse",
  borderSpacing: "0",
  width: "100%",
  marginBottom: "calc($050 / 2)",
  "& th": {
    textAlign: "left",
    fontWeight: "$light",
    borderBottom: "1px solid $subtle",
    fontSize: "$100",
    color: "$accessible",
    py: "$100",
  },
  "& td": {
    minWidth: "auto",
    borderBottom: "1px solid $subtle",
    fontSize: "$100",
    paddingRight: "$100",
    color: "$accessible",
    py: "$100",
  },
  // style the first column of the table
  "& td:first-child": {
    fontWeight: "$bold",
    color: "$primary",
  },
});

const HR = styled("hr", {
  borderStyle: "none",
  backgroundColor: "$subtle",
  height: "1px",
  width: "100%",
  margin: "$100 0",
});

export const P = styled("p", {
  fontSize: "$100",
  lineHeight: "$150",
  margin: 0,
  paddingBottom: "$050",
  fontFamily: "$meta",
  fontWeight: "$light",
  "& > code": {
    fontFamily: "monospace",
    backgroundColor: theme.colors.subtle,
    fontSize: "$087",
    borderRadius: "$012",
    padding: "0 $025",
    color: theme.colors.primary,
  },
});

export const Small = styled("small", {
  fontSize: "$075",
  paddingBottom: "$050",
  color: theme.colors.accessible,
  fontFamily: "$meta",
  fontWeight: "$light",
});

export const BR = styled("div", {
  paddingBottom: "$125",
  variants: {
    size: {
      xl: { paddingBottom: "$225" },
    },
  },
});

export const Change = styled("div", {
  border: "1px solid currentColor",
  borderRadius: "$025",
  color: "$accessible",
  cursor: "pointer",
  display: "inline-block",
  fontFamily: "$meta",
  fontSize: "$100",
  fontWeight: "$light",
  lineHeight: "auto",
  px: "$050",

  variants: {
    type: {
      ComingSoon: {
        fontSize: "$075",
        color: "$primary",
        backgroundColor: "$gray400",
        borderColor: "$gray400",
      },
      Alpha: {
        fontSize: "$075",
        color: "$primary",
        backgroundColor: "$orange300",
        borderColor: "$warning",
      },
      Beta: {
        fontSize: "$075",
        color: "$primary",
        backgroundColor: "$blue300",
        borderColor: "$signal",
      },
    },
  },
});

const components = {
  a: ({ children, href }) => (
    <CustomLink href={href} useSignal>
      {children}
    </CustomLink>
  ),
  ul: List,
  ol: ({ children }) => <List as="ol">{children}</List>,
  li: ({ children }) => {
    return children[1]?.props?.children[0]?.props?.type === "checkbox" ? (
      <CheckboxListItem>{children}</CheckboxListItem>
    ) : (
      <ListItem>{children}</ListItem>
    );
  },
  p: P,
  Change: Change,
  h1: ({ children }) => <Header as="h1">{children}</Header>,
  h2: ({ children }) => (
    <Header id={children} css={{ paddingBottom: "$025" }} as="h2">
      {children}
    </Header>
  ),
  h3: ({ children }) => (
    <Header id={children} as="h3">
      {children}
    </Header>
  ),
  h4: ({ children }) => (
    <Header id={children} as="h4">
      {children}
    </Header>
  ),
  small: Small,
  hr: HR,
  BR: BR,
  br: BR,
  Button: Button,
  table: Table,
  Collapsible: ({ children, maxHeight }) => (
    <CollapsibleContainer maxHeight={maxHeight}>
      {children}
    </CollapsibleContainer>
  ),
  Alert: ({ position, variant, shadow, dismissable, css, children }) => (
    <AlertBanner.Root
      shadow={shadow}
      position={position}
      dismissable={dismissable}
      variant={variant}
    >
      <AlertBanner.Trigger />
      <AlertBanner.Content
        css={{
          "& a": {
            color: theme.colors.accessible,
            textDecoration: "underline",
          },
          "& p": { paddingBottom: 0 },
          css,
        }}
      >
        {children}
      </AlertBanner.Content>
    </AlertBanner.Root>
  ),
  AlertBanner: AlertBanner,
  ComponentStatus: ComponentStatus,
  Grid: ({ maxSize, css, children }) => (
    <Grid css={css} maxSize={maxSize}>
      {children}
    </Grid>
  ),
  Cell: ({ children }) => <Cell>{children}</Cell>,
  CopyClipboard: dynamic(() => import("./Components/CopyToClipBoard")),
  IconSamples: dynamic(() => import("./Examples/IconSamples")),
  LogoSamples: dynamic(() => import("./Examples/LogoSamples")),
  ColorTokenTable: dynamic(() => import("./Examples/TokenColorTable")),
  ColorSamples: dynamic(() => import("./Examples/ColorSamples")),
  ThemeTokens: dynamic(() => import("./Examples/ThemeTokens")),
  HexRGBAColorSamples: dynamic(() => import("./Examples/HexRGBAColorSamples")),
  Table: dynamic(() => import("./Components/table")),
  Img: dynamic(() => import("./Components/InlineImage")),
  TableOfContents: dynamic(() => import("./Components/tableofcontents")),
  Container: dynamic(() => import("./Components/container")),
  GuideContainer: dynamic(() => import("./Components/GuideContainer")),
  InlineSVG: dynamic(() => import("./Components/inlineSVG")),
  InlineImage: dynamic(() => import("./Components/InlineImage")),
  Box: Box,
  code: dynamic(() => import("./Components/Code")),
  pre: dynamic(() => import("./Components/Pre")),
  input: (data) => {
    if (data.type === "checkbox") {
      return (
        <span className="markdown-input-checkbox">
          {" "}
          <InputCheckbox {...data.props} checked={data.checked} />
        </span>
      );
    }

    return <input {...data.props} />;
  },
  blockquote: ({ children }) => (
    <Box
      as="blockquote"
      css={{
        borderLeft: "$space$025 solid $alpha50",
        padding: "$100",
        paddingBottom: "$050",
        marginBottom: "$100",
        fontStyle: "italic",
        background: "$alpha25",
      }}
    >
      {children}
    </Box>
  ),
  YoutubeEmbed: dynamic(() => import("./Components/YouTubeEmbed")),
  StyleConverter: dynamic(() => import("./Components/StyleConverter")),
  Anatomy: dynamic(() => import("./Components/Anatomy")),
  TabsRoot: ({ defaultValue, children }) => (
    <Tabs.Root defaultValue={defaultValue}>{children}</Tabs.Root>
  ),
  TabsList: ({ children }) => <Tabs.List>{children}</Tabs.List>,
  TabsTrigger: ({ value, children }) => (
    <Tabs.Trigger value={value}>{children}</Tabs.Trigger>
  ),
  TabsContent: ({ value, children }) => (
    <Tabs.Content value={value}>
      <BR />
      {children}
    </Tabs.Content>
  ),
  Breakpoints: dynamic(() => import("./Examples/Breakpoints")),
};

export default components;
