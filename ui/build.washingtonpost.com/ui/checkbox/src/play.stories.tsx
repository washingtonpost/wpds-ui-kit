import * as React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { styled } from "@washingtonpost/wpds-theme";
import { Box } from "@washingtonpost/wpds-box";
import { Checkbox as Component } from "./";

export default {
  title: "Checkbox",
  component: Component,
  argTypes: {
    size: {
      options: ["087", "125"],
    },
    variant: {
      options: ["primary", "secondary", "cta"],
    },
    style: {
      options: ["outline", "fill"],
    },
    defaultChecked: {
      options: [true, false, "indeterminate"],
    },
    checked: {
      options: [true, false, "indeterminate"],
      defaultValue: true,
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

Play.args = {
  id: "boop",
};

const Decorator = styled("div", {
  display: "flex",
  flexDirection: "row",
  gap: "$050",
});

Play.decorators = [
  (Story) => (
    <Decorator>
      <Story />
      <Box
        as="label"
        htmlFor="boop"
        css={{
          color: "$primary",
          alignSelf: "flex-end",
        }}
      >
        This is a label
      </Box>
    </Decorator>
  ),
];

Play.storyName = "Checkbox";

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
