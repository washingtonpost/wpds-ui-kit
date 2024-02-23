import { InputTextarea as Component } from "./";
import type { Meta, StoryFn } from "@storybook/react";

export default {
  title: "InputTextarea",
  component: Component,
} as Meta<typeof Component>;

export const Play = {
  name: "InputTextarea",

  args: {
    canResize: false,
    name: "text-area-1",
    id: "text-area-1",
    label: "Label",
  },

  argTypes: {
    helperText: { control: "text" },
  },
};

export const Error = {
  args: {
    canResize: false,
    name: "text-area-2",
    id: "text-area-2",
    label: "Label",
    error: true,
    errorMessage: "Error message",
  },
};
