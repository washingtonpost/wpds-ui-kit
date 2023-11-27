import * as React from "react";
import { Dialog } from "./Dialog";

import type { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Dialog",
  component: Dialog.Root,
} as ComponentMeta<typeof Dialog.Root>;

const Template: ComponentStory<typeof Dialog.Root> = (args) => (
  <Dialog.Root {...args}>
    <Dialog.Content>Dialog</Dialog.Content>
  </Dialog.Root>
);

export const DialogRoot = Template.bind({});

DialogRoot.args = {
  open: true,
};
