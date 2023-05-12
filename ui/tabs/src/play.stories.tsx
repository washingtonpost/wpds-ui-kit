import * as React from "react";

import { screen, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

import { Tabs } from ".";
import { styled, theme } from "@washingtonpost/wpds-theme";

import { Info } from "@washingtonpost/wpds-assets";
import { Icon } from "@washingtonpost/wpds-icon";

import type { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Tabs",
  component: Tabs.Root,
  subcomponents: {
    List: Tabs.List,
    Trigger: Tabs.Trigger,
    Content: Tabs.Content,
  },
  argTypes: {
    align: {
      options: ["center", "left"],
      control: "select",
    },
    density: {
      options: ["compact", "default", "loose"],
      control: "select",
    },
    disabled: {
      options: [true, false],
      control: "boolean",
    },
  },
} as ComponentMeta<typeof Tabs.Root>;

const StyledTabs = styled("div", {
  backgroundColor: theme.colors.secondary,
  width: "500px",
  border: `1px dashed ${theme.colors.primary}`,
  padding: "10px",
});

const StyledLabel = styled("div", {
  marginBottom: "10px",
  color: theme.colors.primary,
});

const StyledContent = styled(Tabs.Content, {
  minHeight: "50px",
  paddingTop: "20px",
  color: theme.colors.primary,
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Template: ComponentStory<any> = (args) => {
  const { density, align, ...rest } = args;
  return (
    <>
      <StyledLabel>Outline for viewing alignment purposes only</StyledLabel>
      <StyledTabs>
        <Tabs.Root defaultValue="tab1" {...rest}>
          <Tabs.List
            aria-label="Countries' information"
            density={density}
            align={align}
          >
            <Tabs.Trigger value="tab1">
              <Icon label="trigger icon" size="100">
                <Info />
              </Icon>
              France
            </Tabs.Trigger>
            <Tabs.Trigger disabled value="tab2">
              Brazil
            </Tabs.Trigger>
            <Tabs.Trigger value="tab3">
              <Icon label="trigger icon" size="100">
                <Info />
              </Icon>
              The Democratic Republic of the Congo
            </Tabs.Trigger>
            <Tabs.Trigger value="tab4">Vietnam</Tabs.Trigger>
            <Tabs.Trigger value="tab5">Papua New Guinea</Tabs.Trigger>
            <Tabs.Trigger value="tab6">Venezuela</Tabs.Trigger>
            <Tabs.Trigger value="tab7">Kenya</Tabs.Trigger>
            <Tabs.Trigger value="tab8">Austria</Tabs.Trigger>
          </Tabs.List>
          <StyledContent value="tab1">France is here 🇫🇷</StyledContent>
          <StyledContent value="tab2">
            Brazil is here 🇧🇷 This is disabled and should not show
          </StyledContent>
          <StyledContent value="tab3">
            The Democratic Republic of the Congo is here 🇨🇩
          </StyledContent>
          <StyledContent value="tab4">Vietnam is here 🇻🇳</StyledContent>
          <StyledContent value="tab5">
            Papua New Guinea is here 🇵🇬
          </StyledContent>
          <StyledContent value="tab6">Venezuela is here 🇻🇪</StyledContent>
          <StyledContent value="tab7">Kenya is here 🇰🇪</StyledContent>
          <StyledContent value="tab8">Austria is here 🇦🇹</StyledContent>
        </Tabs.Root>
      </StyledTabs>
    </>
  );
};

export const Play = Template.bind({});

Play.args = {
  density: "default",
};

Play.storyName = "Default";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const TemplateShort: ComponentStory<any> = (args) => {
  const { density, align, ...rest } = args;
  return (
    <>
      <StyledLabel>Outline for viewing alignment purposes only</StyledLabel>
      <StyledTabs>
        <Tabs.Root {...rest} defaultValue="tab2">
          <Tabs.List
            aria-label="Countries' information"
            density={density}
            align={align}
          >
            <Tabs.Trigger value="tab1">
              <Icon label="trigger icon">
                <Info />
              </Icon>
              France
            </Tabs.Trigger>
            <Tabs.Trigger value="tab2">Kenya</Tabs.Trigger>
            <Tabs.Trigger value="tab3">Austria</Tabs.Trigger>
          </Tabs.List>
          <StyledContent value="tab1">France is here 🇫🇷</StyledContent>
          <StyledContent value="tab2">Kenya is here 🇰🇪</StyledContent>
          <StyledContent value="tab3">Austria is here 🇦🇹</StyledContent>
        </Tabs.Root>
      </StyledTabs>
    </>
  );
};

export const Center = TemplateShort.bind({});
Center.args = {
  align: "center",
  density: "compact",
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const TemplateControlled: ComponentStory<any> = (args) => {
  const { density, align, ...rest } = args;
  const [value, setValue] = React.useState("tab3");
  return (
    <>
      <StyledLabel>Outline for viewing alignment purposes only</StyledLabel>
      <StyledTabs>
        <Tabs.Root
          {...rest}
          value={value}
          onValueChange={(val) => {
            setValue(val);
          }}
        >
          <Tabs.List
            aria-label="Countries' information"
            density={density}
            align={align}
          >
            <Tabs.Trigger value="tab1">
              France
              <Icon label="trigger icon">
                <Info />
              </Icon>
            </Tabs.Trigger>
            <Tabs.Trigger value="tab2">Kenya</Tabs.Trigger>
            <Tabs.Trigger value="tab3">Austria</Tabs.Trigger>
          </Tabs.List>
          <StyledContent value="tab1">France is here 🇫🇷</StyledContent>
          <StyledContent value="tab2">Kenya is here 🇰🇪</StyledContent>
          <StyledContent value="tab3">Austria is here 🇦🇹</StyledContent>
        </Tabs.Root>
      </StyledTabs>
      <div style={{ padding: "1rem" }}>
        <label style={{ display: "block" }}>Change selected tab</label>
        <select
          onChange={(e) => {
            setValue(e.target.value);
          }}
          value={value}
        >
          <option value="tab1">Tab1</option>
          <option value="tab2">Tab2</option>
          <option value="tab3">Tab3</option>
        </select>
      </div>
    </>
  );
};

export const ControlledExample = TemplateControlled.bind({});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const InteractionsTemplate: ComponentStory<any> = (args) => (
  <StyledTabs>
    <Tabs.Root defaultValue="tab1" {...args}>
      <Tabs.List aria-label="Countries' information">
        <Tabs.Trigger value="tab1">
          <Icon label="trigger icon">
            <Info />
          </Icon>
          France
        </Tabs.Trigger>
        <Tabs.Trigger value="tab2" disabled>
          Brazil
        </Tabs.Trigger>
        <Tabs.Trigger value="tab3">
          The Democratic Republic of the Congo
        </Tabs.Trigger>
        <Tabs.Trigger value="tab4">Vietnam</Tabs.Trigger>
        <Tabs.Trigger value="tab5">Papua New Guinea</Tabs.Trigger>
        <Tabs.Trigger value="tab6">Venezuela</Tabs.Trigger>
        <Tabs.Trigger value="tab7">Kenya</Tabs.Trigger>
        <Tabs.Trigger value="tab8">Austria</Tabs.Trigger>
      </Tabs.List>
      <StyledContent value="tab1">France is here 🇫🇷</StyledContent>
      <StyledContent value="tab2">
        Brazil is here 🇧🇷 This is disabled and should not show
      </StyledContent>
      <StyledContent value="tab3">
        The Democratic Republic of the Congo is here 🇨🇩
      </StyledContent>
      <StyledContent value="tab4">Vietnam is here 🇻🇳</StyledContent>
      <StyledContent value="tab5">Papua New Guinea is here 🇵🇬</StyledContent>
      <StyledContent value="tab6">Venezuela is here 🇻🇪</StyledContent>
      <StyledContent value="tab7">Kenya is here 🇰🇪</StyledContent>
      <StyledContent value="tab8">Austria is here 🇦🇹</StyledContent>
    </Tabs.Root>
  </StyledTabs>
);

export const Interactions = InteractionsTemplate.bind({});

Interactions.args = {
  align: "center",
  density: "compact",
};

// Function to emulate pausing between interactions
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

Interactions.parameters = {
  chromatic: { disableSnapshot: true },
};

Interactions.play = async () => {
  const trigger = screen.getAllByRole("tab");
  // eslint-disable-next-line testing-library/no-node-access
  const icon = trigger[0].getElementsByTagName("svg")[0];
  await expect(icon).toBeVisible();
  await expect(trigger[0]).toHaveAttribute("aria-selected", "true");
  await expect(trigger[4]).not.toHaveAttribute("aria-selected", "true");
  await expect(trigger).toHaveLength(8);
  await expect(trigger[1]).toBeDisabled();

  await expect(trigger[4]).toBeDefined();
  await userEvent.click(trigger[4]);
  await expect(trigger[0]).not.toHaveAttribute("aria-selected", "true");
  await expect(trigger[4]).toHaveAttribute("aria-selected", "true");

  //Test that trigger shows up for truncated item
  const tooltipTrigger = screen.getAllByTestId("tabs-tooltip-trigger");
  await userEvent.hover(tooltipTrigger[0]);
  await sleep(300);
  const tooltipContent = await screen.findAllByTestId("tabs-tooltip-content");
  await sleep(300);
  await expect(tooltipContent[0]).toBeInTheDocument();
};
