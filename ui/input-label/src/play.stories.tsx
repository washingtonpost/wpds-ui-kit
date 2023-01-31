import * as React from "react";
import { InputLabel as Component } from "./";
import type { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "InputLabel",
  component: Component,
} as ComponentMeta<typeof Component>;

const Template = (args) => <Component {...args} />;

export const InputLabel: ComponentStory<typeof Component> = Template.bind({});

InputLabel.args = {
  children: "Label",
};
