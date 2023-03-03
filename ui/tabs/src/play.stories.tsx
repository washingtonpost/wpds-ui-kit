import * as React from "react";

import { Tabs } from ".";
import { styled, theme } from "@washingtonpost/wpds-theme";

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
    // disabled: {
    //   options: [true, false],
    //   control: "boolean",
    // },
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
  // const myTriggerRef = React.useRef<HTMLButtonElement>(null);
  // const myContentRef = React.useRef<HTMLDivElement>(null);

  return (
    <>
      <StyledLabel>Outline for viewing alignment purposes only</StyledLabel>
      <StyledTabs>
        <Tabs.Root {...args}>
          <Tabs.List aria-label="Countries' information">
            <Tabs.Trigger value="option1">France</Tabs.Trigger>
            <Tabs.Trigger value="option2">Brazil</Tabs.Trigger>
            <Tabs.Trigger value="option3">
              The Democratic Republic of the Congo
            </Tabs.Trigger>
            <Tabs.Trigger value="option4">Vietnam</Tabs.Trigger>
            <Tabs.Trigger value="option5">Papau New Guinea</Tabs.Trigger>
            <Tabs.Trigger value="option6">Venezuela</Tabs.Trigger>
            <Tabs.Trigger value="option7">Kenya</Tabs.Trigger>
            <Tabs.Trigger value="option8">Austria</Tabs.Trigger>
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

Play.storyName = "Accordion";
