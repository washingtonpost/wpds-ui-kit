import { within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { theme } from "../theme";
import Info from "@washingtonpost/wpds-assets/asset/info";
import { Icon } from "./icon";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Icon> = {
  title: "Icon",
  component: Icon,
  args: {
    size: "200",
    label: "Find out more information.",
    fill: theme.colors["primary"],
    children: <Info />,
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Interaction: Story = {
  args: {
    // eslint-disable-next-line @washingtonpost/wpds/theme-colors
    fill: "#5784c5ff", // theme.colors.signal using hex to make sure tests pass correctly
  },
};

Interaction.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const svg = canvas.queryAllByRole("img", { hidden: true })[0];
  await expect(svg).toBeVisible();
  await expect(svg).toHaveAttribute("fill", "#5784c5ff");
};
