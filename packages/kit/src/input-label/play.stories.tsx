import { InputLabel as Component } from "./";
import type { StoryObj, Meta, StoryFn } from "@storybook/react";

export default {
  title: "InputLabel",
  component: Component,
} as Meta<typeof Component>;

export const InputLabel: StoryObj<typeof Component> = {
  args: {
    children: "Label",
  },
};
