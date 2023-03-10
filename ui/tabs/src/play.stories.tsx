import * as React from "react";

import { screen, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

import { Tabs } from ".";
import { styled, theme } from "@washingtonpost/wpds-theme";

import { BookmarkSolid } from "@washingtonpost/wpds-assets";
import { Icon } from "@washingtonpost/wpds-icon";

import type { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Tabs",
  component: Tabs.Root,
  subcomponents: {
    List: Tabs.List,
    Trigger: Tabs.Trigger,
    // Content: Accordion.Content,
  },
  argTypes: {
    align: {
      options: ["center", "left"],
      control: "select",
    },
    // type: {
    //   options: [ACCORDION_TYPE.single, ACCORDION_TYPE.multiple],
    //   control: "select",
    // },
    disabled: {
      options: [true, false],
      control: "boolean",
    },
  },
} as ComponentMeta<typeof Tabs.Root>;

const StyledTabs = styled("div", {
  width: "500px",
  border: `1px dashed ${theme.colors.primary}`,
  padding: "10px",
});

const StyledLabel = styled("div", {
  marginBottom: "10px",
  color: theme.colors.primary,
});

const Template: ComponentStory<typeof Tabs.Root> = (args) => {
  return (
    <>
      <StyledLabel>Outline for viewing alignment purposes only</StyledLabel>
      <StyledTabs>
        <Tabs.Root {...args}>
          <Tabs.List aria-label="Countries' information">
            <Tabs.Trigger>
              <Icon label="trigger icon">
                <BookmarkSolid />
              </Icon>
              France
            </Tabs.Trigger>
            <Tabs.Trigger disabled>Brazil</Tabs.Trigger>
            <Tabs.Trigger>The Democratic Republic of the Congo</Tabs.Trigger>
            <Tabs.Trigger>Vietnam</Tabs.Trigger>
            <Tabs.Trigger>Papau New Guinea</Tabs.Trigger>
            <Tabs.Trigger>Venezuela</Tabs.Trigger>
            <Tabs.Trigger>Kenya</Tabs.Trigger>
            <Tabs.Trigger>Austria</Tabs.Trigger>
          </Tabs.List>
        </Tabs.Root>
      </StyledTabs>
    </>
  );
};

export const Play = Template.bind({});

Play.args = {
  // density: ACCORDION_DENSITY.compact,
  // type: ACCORDION_TYPE.single,
  // defaultValue: "item-1",
};

Play.storyName = "Default";

const InteractionsTemplate: ComponentStory<any> = () => (
  <Tabs.Root>
    <Tabs.List aria-label="Countries' information">
      <Tabs.Trigger>France</Tabs.Trigger>
      <Tabs.Trigger disabled>Brazil</Tabs.Trigger>
      <Tabs.Trigger>The Democratic Republic of the Congo</Tabs.Trigger>
      <Tabs.Trigger>Vietnam</Tabs.Trigger>
      <Tabs.Trigger>Papau New Guinea</Tabs.Trigger>
      <Tabs.Trigger>Venezuela</Tabs.Trigger>
      <Tabs.Trigger>Kenya</Tabs.Trigger>
      <Tabs.Trigger>Austria</Tabs.Trigger>
    </Tabs.List>
  </Tabs.Root>
);

export const Interactions = InteractionsTemplate.bind({});
Interactions.parameters = {
  chromatic: { disableSnapshot: true },
};

Interactions.play = async () => {
  const trigger = screen.getAllByRole("tab");
  await expect(trigger[0]).toHaveAttribute("aria-selected", "true");
  await expect(trigger[4]).not.toHaveAttribute("aria-selected", "true");
  await expect(trigger).toHaveLength(8);
  await expect(trigger[1]).toBeDisabled();

  await expect(trigger[4]).toBeDefined();
  await userEvent.click(trigger[4]);
  await expect(trigger[0]).not.toHaveAttribute("aria-selected", "true");
  await expect(trigger[4]).toHaveAttribute("aria-selected", "true");

  // await expect("The Democratic Republic of the Congo").not.toBeVisible();
  // await userEvent.hover(trigger[2]);
  // console.log(trigger);
  // await sleep(300);
  // const content = screen.getAllByText("Drawer Content")[0];
  // await expect(content).toBeVisible();
  // const close = screen.getByLabelText("Close Drawer");
  // await sleep(300);
  // await expect(content).not.toBeInTheDocument();
};
