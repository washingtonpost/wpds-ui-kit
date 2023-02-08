import * as React from "react";
import { Fieldset as Component } from "./";

import type { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Fieldset",
  component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args}>Content</Component>
);

export const Fieldset = Template.bind({});

Fieldset.args = {
  legend: "Fieldset",
};
