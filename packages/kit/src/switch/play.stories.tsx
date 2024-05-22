import React from "react";
import { Switch } from ".";
import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { styled } from "@washingtonpost/wpds-ui-kit";
import { userEvent, within } from "@storybook/test";


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

export const Interactions = Template.bind({});

Interactions.args = {};

Interactions.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const root = canvas.getByRole("switch");

  await userEvent.click(root);

  await expect(root).toBeChecked();

  await userEvent.click(root);

  await expect(root).not.toBeChecked();
};

export const CTA = Template.bind({});

CTA.args = {
  variant: "cta",
};

export const Error = Template.bind({});

Error.args = {
  error: true,
};

export const Disabled = Template.bind({});

Disabled.args = {
  disabled: true,
  name: "disabled-switch",
};

export const Mobile = Template.bind({});

Mobile.args = {};
Mobile.parameters = {
  viewport: {
    defaultViewport: "iphonex",
  },
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
