import * as React from "react";
import { Box, theme } from "@washingtonpost/wpds-ui-kit";
import Info from "@washingtonpost/wpds-assets/asset/info";
import { Icon as Component } from "./icon";

export default {
  title: "Icon",
  component: Component,
};

const Template = (args) => <Component {...args} />;

export const Default = Template.bind({});

Default.storyName = "Icon";

Default.args = {
  size: "200",
  label: "Find out more information.",
  children: <Info />,
};

Default.decorators = [
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
