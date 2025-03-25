import {
  globalStyles,
  darkModeGlobalStyles,
  darkTheme,
  theme,
  Box,
  styled,
} from "@washingtonpost/wpds-ui-kit";
import React from "react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  a11y: {
    element: "#root",
    manual: false,
  },
  backgrounds: {
    default: "story",
    values: [
      {
        name: "story",
        value: theme.colors.gray500,
      },
    ],
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
};

const Panel = styled("div", {
  padding: theme.space[200],
  width: "100%",
  minHeight: "50vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  variants: {
    dark: {
      true: {
        backgroundColor: theme.colors.gray500,
      },
    },
  },
  "@notSm": {
    minHeight: "100vh",
    marginTop: "-$100",
    marginBottom: "-$100",
  },
});

function GlobalStyles(props) {
  globalStyles();
  return <Panel css={props.css}>{props.children}</Panel>;
}

function DarkPanel(props) {
  globalStyles();
  darkModeGlobalStyles();
  return (
    <Panel className={darkTheme} dark>
      {props.children}
    </Panel>
  );
}

export const decorators = [
  (Story, Context) => {
    if (Context.story.includes("Interactions")) {
      return (
        <GlobalStyles css={{ width: "auto" }}>
          <Story theme="light" />
        </GlobalStyles>
      );
    }

    return (
      <Box
        css={{
          display: "flex",
          width: "100%",
          height: "50%",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          "@notSm": {
            flexDirection: "row",
          },
        }}
      >
        <GlobalStyles>
          <Story theme="light" />
        </GlobalStyles>
        <DarkPanel>
          <Story theme="dark" />
        </DarkPanel>
      </Box>
    );
  },
];
