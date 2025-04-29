import { HelperText as Component } from "./";

import type { Meta } from "@storybook/react";

export default {
  title: "HelperText",
  component: Component,
} as Meta<typeof Component>;

export const HelperText = {
  args: {
    children: "Helper Text",
    id: "my-helper-text",
  },
};
