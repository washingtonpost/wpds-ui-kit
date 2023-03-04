import * as React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { screen } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
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

const InteractionsTemplate: ComponentStory<typeof Icon> = (args) => (
  <Icon {...args} />
);

export const Interaction = InteractionsTemplate.bind({});

Interaction.storyName = "Icon interaction";

Interaction.args = {
  size: 200,
  label: "Find out more information.",
  // eslint-disable-next-line @washingtonpost/wpds/theme-colors
  fill: "#5784c5ff", // theme.colors.signal using hex to make sure tests pass correctly
  children: <Info />,
  id: "information icon",
};

Interaction.play = async () => {
  const svg = screen.queryAllByRole("img", { hidden: true })[0];
  await expect(svg).toBeVisible();
  await expect(svg).toHaveAttribute("fill", "#5784c5ff");
};
