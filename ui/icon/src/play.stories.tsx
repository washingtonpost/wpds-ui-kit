import * as React from "react";
import { Story } from "@storybook/react";
import Info from "@washingtonpost/wpds-assets/asset/info";
import { Icon as Component, IconProps } from "./icon";

export default {
  title: "Icon",
  component: Component,
};

const Template: Story<IconProps> = (args) => (
  <Component {...args}>
    <Info />
  </Component>
);

export const Icon = Template.bind({});

Icon.args = {
  size: "32",
  label: "Find out more information.",
};
