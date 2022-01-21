import * as React from "react";
import { Story } from "@storybook/react";
import Info from "@washingtonpost/wpds-assets/asset/info";
import { Icon, IconProps } from "./icon";

export default {
  title: "Icon",
  component: Icon,
  parameters: {
    zeplinLink: "https://zpl.io/a3GWl0x",
  },
};

const Template: Story<IconProps> = (args) => (
  <Icon {...args}>
    <Info />
  </Icon>
);

export const Play = Template.bind({});

Play.storyName = "👀";

Play.args = {
  size: "32",
  label: "Find out more information.",
};
