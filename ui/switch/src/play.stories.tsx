import { Switch } from ".";
import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { styled } from "@washingtonpost/wpds-theme";

export default {
  title: "Switch",
  component: Switch.Root,
  subcomponents: {
    Root: Switch.Root,
    Thumb: Switch.Thumb,
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "cta"],
    },
  },
} as ComponentMeta<typeof Switch.Root>;

const Template: ComponentStory<typeof Switch.Root> = (args) => (
  <Switch.Root {...args}>
    <Switch.Thumb />
  </Switch.Root>
);

export const Default = Template.bind({});

Default.args = {};

export const CTA = Template.bind({});

CTA.args = {
  variant: "cta",
};

const Stack = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$100",
});

const ManyTemplate: ComponentStory<typeof Switch.Root> = (args) => (
  <Stack>
    <Switch.Root {...args}>
      <Switch.Thumb />
    </Switch.Root>
    <Switch.Root {...args}>
      <Switch.Thumb />
    </Switch.Root>
    <Switch.Root {...args}>
      <Switch.Thumb />
    </Switch.Root>
    <Switch.Root {...args}>
      <Switch.Thumb />
    </Switch.Root>
  </Stack>
);

export const Many = ManyTemplate.bind({});

Many.args = {};
