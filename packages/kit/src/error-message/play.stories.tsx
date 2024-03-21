import { ErrorMessage as Component } from "./";

import type { Meta, StoryFn } from "@storybook/react";

export default {
  title: "ErrorMessage",
  component: Component,
} as Meta<typeof Component>;

export const ErrorMessage = {
  args: {
    children: "Error Message",
    id: "my-error-message",
  },
};
