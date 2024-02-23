import * as React from "react";
import { Fieldset as Component } from "./";

import type { Meta, StoryFn } from "@storybook/react";

export default {
  title: "Fieldset",
  component: Component,
} as Meta<typeof Component>;

const Template: StoryFn<typeof Component> = (args) => (
  <Component {...args}>Content</Component>
);

export const Fieldset = {
  render: Template,

  args: {
    legend: "Fieldset",
  },
};
