import * as React from "react";
import { Story, Meta } from "@storybook/react";
import { Container as Component, Box } from "@washingtonpost/wpds-ui-kit";

export default {
  title: "Container",
  component: Component,
  argTypes: {
    maxWidth: {
      control: {
        type: "select",
        options: ["fluid", "sm", "md", "lg", "xl"],
      },
    },
  },
} as Meta<typeof Component>;

const Template: Story<typeof Component> = (args) => (
  <>
    <Component maxWidth="xl">Extra lg</Component>
    <Component maxWidth="lg">lg</Component>
    <Component maxWidth="md">md</Component>
    <Component maxWidth="sm">sm</Component>
    <Component maxWidth="fluid">Fluid</Component>
    <Component {...args}>Play</Component>
  </>
);

export const Container = Template.bind({});

Container.args = {};

Container.decorators = [
  (Story) => (
    <Box
      css={{
        display: "grid",
        width: "100%",
        gridTemplateRows: "1fr",
        rowGap: "$100",
        "& > *": {
          border: "1px dashed #94538c",
          width: "100%",
          background: "rgb(148, 83, 140, 0.2)",
          height: "$500",
          color: "$primary",
        },
      }}
    >
      <Story />
    </Box>
  ),
];

Container.parameters = {
  chromatic: { viewports: [767, 768, 900, 1024, 1440] },
};
