import * as React from "react";
import { ErrorMessage as Component } from "./";

import type { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "ErrorMessage",
  component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args} />
);

export const ErrorMessage = Template.bind({});

ErrorMessage.args = {
  children: "Error Message",
  id: "my-error-message",
};
