import * as React from "react";
import { Story } from "@storybook/react";
import { Box as Component } from "./box";

export default {
  title: "Box",
  component: Component,
};

const Template: Story = (args) => (
  <Component
    as="h1"
    css={{
      color: "$primary",
    }}
    {...args}
  >
    Hello, World!
  </Component>
);

export const Box = Template.bind({});

Box.args = {};
