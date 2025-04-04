import * as React from "react";
import { Pagination as Component } from "./";

import type { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Pagination",
  component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args} />
);

export const Pagination = Template.bind({});

Pagination.args = {};
