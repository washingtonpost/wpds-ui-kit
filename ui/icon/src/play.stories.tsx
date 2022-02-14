import * as React from "react";
import { Story } from "@storybook/react";
import Info from "@washingtonpost/wpds-assets/asset/info";
import { Icon as Component, IconProps } from "./icon";
import { Box, theme } from "@washingtonpost/wpds-ui-kit";

export default {
  title: "Icon",
  component: Component,
};

const Template: Story<IconProps> = (args) => (
  <Component {...args}>
    <Info fill="currentColor" />
  </Component>
);

export const Icon = Template.bind({});

Icon.args = {
  size: "32",
  label: "Find out more information.",
};

Icon.decorators = [
  (Story) => (
    <Box
      css={{
        color: theme.colors.primary,
      }}
    >
      <Story />
    </Box>
  ),
];
