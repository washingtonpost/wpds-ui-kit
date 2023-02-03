import * as React from "react";
import { HelperText as Component } from "./";

import type { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "HelperText",
  component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args} />
);

export const HelperText = Template.bind({});

HelperText.args = {
  children: "Helper Text",
  id: "my-helper-text",
};
