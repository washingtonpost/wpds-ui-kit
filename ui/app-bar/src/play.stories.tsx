import * as React from "react";
import { styled } from "@washingtonpost/wpds-theme";
import WashingtonPostWhite from "@washingtonpost/wpds-assets/asset/washington-post-white";
import Menu from "@washingtonpost/wpds-assets/asset/menu";
import { Container } from "@washingtonpost/wpds-container";
import { Box } from "@washingtonpost/wpds-box";
import { Icon } from "@washingtonpost/wpds-icon";
import Profile from "@washingtonpost/wpds-assets/asset/profile";
import { useDarkMode } from "storybook-dark-mode";
import WashingtonPost from "@washingtonpost/wpds-assets/asset/washington-post";

import type { ComponentMeta, ComponentStory } from "@storybook/react";

import { AppBar as Component } from ".";

export default {
  title: "App Bar",
  component: Component,
  argTypes: {
    position: {
      options: ["fixed", "sticky", "absolute", "relative"],
      defaultValue: "relative",
    },
    shadow: {
      options: [true, false],
      control: "boolean",
      defaultValue: false,
    },
  },
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Component>;

const PrimaryNavigationExample = () => {
  const darkModeActive = useDarkMode();

  return (
    <Container
      maxWidth="fluid"
      css={{
        height: 60,
        background: "$secondary",
        color: "$onSecondary",
        flexDirection: "row",
        textAlign: "center",
        justifyContent: "space-between",
        px: "$100",
      }}
    >
      <Icon size="200" label="Open Section Navigation Menu">
        <Menu />
      </Icon>
      <Box>
        {darkModeActive ? (
          <WashingtonPostWhite width={188} />
        ) : (
          <WashingtonPost width={188} />
        )}
        <Box
          css={{
            fontFamily: "$body",
            fontSize: "$075",
            fontStyle: "italic",
          }}
        >
          Democracy Dies in Darkness (This is an example using the new system)
        </Box>
      </Box>
      <Icon size="200" label="Open Account Menu">
        <Profile />
      </Icon>
    </Container>
  );
};

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args} />
);

export const Play = Template.bind({});

Play.args = {
  shadow: true,
  position: "sticky",
  css: {
    top: 0,
    left: 0,
  },
  children: <PrimaryNavigationExample />,
};

const Decorator = styled("div", {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "calc(100vh * 3);",
});

Play.decorators = [
  (Story) => (
    <Decorator>
      <Story />
    </Decorator>
  ),
];

Play.storyName = "App Bar";
