import React from "react";
import { screen, userEvent, expect } from "@storybook/test";

import { theme } from "../theme";
import { Tooltip } from "./";

import type { Meta, StoryFn } from "@storybook/react";

export default {
  title: "Tooltip",
  component: Tooltip.Root,
  argTypes: {
    density: {
      options: ["default", "compact"],
      control: "select",
    },
    offsetSide: {
      options: [
        theme.space["025"].value,
        theme.space["050"].value,
        theme.space[100].value,
        theme.space[150].value,
        theme.space[200].value,
        theme.space[250].value,
      ],
      control: "select",
    },
  },
  parameters: {
    chromatic: { delay: 300 },
  },
} as Meta<typeof Tooltip.Root>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Template: StoryFn<any> = (args) => (
  <Tooltip.Provider {...args}>
    <Tooltip.Root defaultOpen={true}>
      <Tooltip.Trigger asChild>
        <img
          src="https://i.pravatar.cc/100?u=test-user@wapo.com"
          alt="avatar image"
        />
      </Tooltip.Trigger>
      <Tooltip.Content {...args}>
        i want lots of things to go here and for this to get super super long
        and for this to never stop and i want more fries and i want it to rain
        but i also want the sun and i wasnt a vacataions and it doesnt matter if
        this is misspelled or whatverer.
      </Tooltip.Content>
    </Tooltip.Root>
  </Tooltip.Provider>
);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const TemplateRight: StoryFn<any> = (args) => (
  <Tooltip.Provider {...args}>
    <Tooltip.Root defaultOpen={true}>
      <Tooltip.Trigger>
        <span>This is a tooltip trigger</span>
      </Tooltip.Trigger>
      <Tooltip.Content side="right" {...args}>
        <div>
          My Tooltip <br />
          <a href="/">my link</a> <br /> Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Magni sint nobis blanditiis nesciunt,
        </div>
      </Tooltip.Content>
    </Tooltip.Root>
  </Tooltip.Provider>
);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const TemplateLeft: StoryFn<any> = (args) => (
  <Tooltip.Provider {...args}>
    <Tooltip.Root defaultOpen={true}>
      <Tooltip.Trigger asChild>
        <img
          src="https://i.pravatar.cc/100?u=test-user@wapo.com"
          alt="avatar image"
        />
      </Tooltip.Trigger>
      <Tooltip.Content side="left" {...args}>
        i want lots of things to go here and for this to get super super long
        and for this to never stop and i want more fries and i want it to rain
        but i also want the sun and i wasnt a vacataions and it doesnt matter if
        this is misspelled or whatverer.
      </Tooltip.Content>
    </Tooltip.Root>
  </Tooltip.Provider>
);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const TemplateBottom: StoryFn<any> = (args) => (
  <Tooltip.Provider {...args}>
    <Tooltip.Root defaultOpen={true}>
      <Tooltip.Trigger>
        <span>This is a tooltip trigger</span>
      </Tooltip.Trigger>
      <Tooltip.Content side="bottom" {...args}>
        i want lots of things to go here and for this to get super super long
        and for this to never stop and i want more fries and i want it to rain
        but i also want the sun and i wasnt a vacataions and it doesnt matter if
        this is misspelled or whatverer.
      </Tooltip.Content>
    </Tooltip.Root>
  </Tooltip.Provider>
);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const TemplateDisabled: StoryFn<any> = (args) => (
  <Tooltip.Provider {...args}>
    <Tooltip.Root defaultOpen={true}>
      <Tooltip.Trigger>
        <span>This is a tooltip trigger</span>
      </Tooltip.Trigger>
      <Tooltip.Content {...args} side="bottom">
        i want lots of things to go here and for this to get super super long
        and for this to never stop and i want more fries and i want it to rain
        but i also want the sun and i wasnt a vacataions and it doesnt matter if
        this is misspelled or whatverer.
      </Tooltip.Content>
    </Tooltip.Root>
  </Tooltip.Provider>
);

export const Default = {
  render: Template,

  args: {
    density: "compact",
    offsetSide: theme.space[100],
    align: "start",
  },

  parameters: {
    chromatic: { delay: 100 },
  },
};

export const PlacedOnRight = {
  render: TemplateRight,
  args: {},
};

export const PlacedOnLeft = {
  render: TemplateLeft,
  args: {},

  parameters: {
    chromatic: { delay: 100 },
  },
};

export const PlacedOnBottom = {
  render: TemplateBottom,
  args: {},
};

export const Disabled = {
  render: TemplateDisabled,
  args: { disabled: true },
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const InteractionsTemplate: StoryFn<any> = () => (
  <Tooltip.Provider>
    <Tooltip.Root>
      <Tooltip.Trigger>
        <span>Trigger</span>
      </Tooltip.Trigger>
      <Tooltip.Content side="right">
        <div data-testid="tooltip-content">My Tooltip</div>
      </Tooltip.Content>
    </Tooltip.Root>
  </Tooltip.Provider>
);

export const Interactions = {
  render: InteractionsTemplate,

  parameters: {
    chromatic: { disableSnapshot: true },
  },

  play: async () => {
    await userEvent.hover(screen.getAllByText("Trigger")[0]);
    const contentArray = await screen.findAllByTestId("tooltip-content");
    await expect(contentArray[0]).toBeVisible();
  },
};
