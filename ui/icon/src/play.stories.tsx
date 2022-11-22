import * as React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box, theme } from "@washingtonpost/wpds-ui-kit";
import Info from "@washingtonpost/wpds-assets/asset/info";
import { Icon } from "./icon";

export default {
  title: "Icon",
  component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Default = Template.bind({});

Default.storyName = "Icon";

Default.args = {
  size: "200",
  label: "Find out more information.",
  fill: theme.colors["primary"],
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
