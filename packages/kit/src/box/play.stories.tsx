import * as React from "react";
import { Box as Component } from "./box";

import type { Meta, StoryFn } from "@storybook/react";

export default {
  title: "Box",
  component: Component,
} as Meta<typeof Component>;

const Template: StoryFn<typeof Component> = (args) => (
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

export const Box = {
  render: Template,
  args: {},
};
