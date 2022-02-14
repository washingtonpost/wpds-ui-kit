import * as React from "react";
import { Story, Meta } from "@storybook/react";
import { Button as Component } from "./";

export default {
  title: "Button",
  component: Component,
} as Meta<typeof Component>;

const Template: Story<typeof Component> = (args) => <Component {...args} />;

export const Button = Template.bind({});

Button.args = {};
