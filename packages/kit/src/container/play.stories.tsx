import * as React from "react";
import { Box } from "../box";
import { Container as Component } from ".";

import type { StoryFn, Meta } from "@storybook/react";

export default {
  title: "Container",
  component: Component,
  argTypes: {
    maxWidth: {
      options: ["fluid", "sm", "md", "lg", "xl"],
      defaultValue: "fluid",
    },
  },
  parameters: {
    layout: "fullscreen",
  },
  args: {
    maxWidth: "fluid",
  },
} as Meta<typeof Component>;

const Template: StoryFn<typeof Component> = (args) => (
  <>
    <Component maxWidth="xl">Extra lg</Component>
    <Component maxWidth="lg">lg</Component>
    <Component maxWidth="md">md</Component>
    <Component maxWidth="sm">sm</Component>
    <Component maxWidth="fluid">Fluid</Component>
    <Component {...args}>Play</Component>
  </>
);

export const Container = {
  render: Template,
  args: {},

  decorators: [
    (Story) => (
      <Box
        css={{
          display: "grid",
          width: "100%",
          gridTemplateRows: "1fr",
          rowGap: "$100",
          "& > *": {
            border: "1px dashed $gray100",
            background: "rgb(148, 83, 140, 0.2)",
            height: "$500",
            color: "$primary",
          },
        }}
      >
        <Story />
      </Box>
    ),
  ],

  parameters: {
    chromatic: { viewports: [767, 768, 900, 1024, 1440] },
  },
};
