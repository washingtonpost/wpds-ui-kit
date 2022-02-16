import * as React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { styled } from "@washingtonpost/wpds-theme";

import { Checkbox as Component } from "./";

export default {
  title: "Checkbox",
  component: Component,
  argTypes: {
    defaultChecked: {
      options: [true, false, "indeterminate"],
    },
    checked: {
      options: [true, false, "indeterminate"],
    },
    onCheckedChange: {
      action: "onCheckedChange",
    },
    disabled: {
      options: [true, false],
    },
    required: {
      options: [true, false],
    },
    name: {
      control: "text",
    },
    value: {
      control: "text",
    },
    id: {
      control: "text",
    },
  },
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args} />
);

export const Play = Template.bind({});

Play.args = {};

const Decorator = styled("div", {
  display: "flex",
  flexDirection: "column",
});

Play.decorators = [
  (Story) => (
    <Decorator>
      <Story />
    </Decorator>
  ),
];

Play.storyName = "Checkbox";
