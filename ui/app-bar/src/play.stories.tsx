import * as React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { styled } from "@washingtonpost/wpds-theme";
import { AppBar as Component } from "./";

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
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args} />
);

export const AppBar = Template.bind({});

AppBar.args = {
  css: {
    top: "0",
    background: "$secondary",
    color: "$onSecondary",
    padding: "$100",
    textAlign: "center",
  },
  children: "App Bar",
};

const Decorator = styled("div", {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "calc(100vh * 3);",
  [`& ${Component}`]: {
    background: "$secondary",
    border: "1px solid $accessible",
    color: "$onSecondary",
    padding: "$100",
    textAlign: "center",
  },
});

AppBar.decorators = [
  (Story) => (
    <Decorator>
      <Story />
    </Decorator>
  ),
];

AppBar.play = async ({ canvasElement }) => {
  // const canvas = within(canvasElement);
  // userEvent.tab();
  // userEvent.click(canvas.getByTestId("skip-link"));
};

AppBar.storyName = "App Bar";
