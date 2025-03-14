import React, { useState } from "react";
import { Select } from "./";
import { Button, Icon, Tooltip, theme } from "../index";
import { Info } from "@washingtonpost/wpds-assets";

import type { StoryFn } from "@storybook/react";

export default {
  title: "Select",
  component: Select.Root,
  subcomponents: {
    Trigger: Select.Trigger,
    Value: Select.Value,
    Item: Select.Item,
    Group: Select.Group,
    Label: Select.Label,
    Content: Select.Content,
  },
};

const Template: StoryFn<typeof Select.Root> = (args) => {
  return (
    <>
      <Select.Root {...args} defaultValue="ecuador">
        <Select.Trigger aria-label="Countries">
          <Select.Label>Countries</Select.Label>
          <Select.Value />
        </Select.Trigger>
        <Select.Content>
          <Select.Group label="Europe">
            <Select.Item value="france">France</Select.Item>
            <Select.Item value="united-kingdom">
              United Kingdom - Scotland, Ireland, Wales, Great Britain, and the
              commonwealth states of Canada, Australia, Turks and Caicos
            </Select.Item>
            <Select.Item value="spain">Spain</Select.Item>
          </Select.Group>
          <Select.Group label="South America">
            <Select.Item value="peru">Peru</Select.Item>
            <Select.Item value="chile">Chile</Select.Item>
            <Select.Item value="ecuador">Ecuador</Select.Item>
          </Select.Group>
        </Select.Content>
      </Select.Root>
    </>
  );
};

export const Play = {
  render: Template,

  args: {
    success: false,
    required: false,
    disabled: false,
    error: false,
    errorMessage: "",
    helperText: "",
  },

  name: "Select",

  parameters: {
    chromatic: { disableSnapshot: true },
  },
};

const UnselectedTemplate: StoryFn<typeof Select.Root> = (args) => {
  return (
    <>
      <Select.Root {...args}>
        <Select.Trigger aria-label="Countries">
          <Select.Label>Countries</Select.Label>
          <Select.Value />
        </Select.Trigger>
        <Select.Content>
          <Select.Group label="Europe">
            <Select.Item value="france">France</Select.Item>
            <Select.Item value="united-kingdom">
              United Kingdom - Scotland, Ireland, Wales, Great Britain, and the
              commonwealth states of Canada, Australia, Turks and Caicos
            </Select.Item>
            <Select.Item value="spain">Spain</Select.Item>
          </Select.Group>
          <Select.Group label="South America">
            <Select.Item value="peru">Peru</Select.Item>
            <Select.Item value="chile">Chile</Select.Item>
            <Select.Item value="ecuador">Ecuador</Select.Item>
          </Select.Group>
          <Select.Group label="Afria">
            <Select.Item value="roc">Republic of Congo</Select.Item>
            <Select.Item value="ethiopia">Ethiopia</Select.Item>
            <Select.Item value="south-africa">South Africa</Select.Item>
            <Select.Item value="kenya">Kenya</Select.Item>
            <Select.Item value="nigeria">Nigeria</Select.Item>
          </Select.Group>
          <Select.Group label="Asia">
            <Select.Item value="proc">People Republic of China</Select.Item>
            <Select.Item value="japan">Japan</Select.Item>
            <Select.Item value="vietnam">Vietnam</Select.Item>
            <Select.Item value="sk">South Korea</Select.Item>
            <Select.Item value="nk">North Korea</Select.Item>
          </Select.Group>
        </Select.Content>
      </Select.Root>
    </>
  );
};

export const Unselected = {
  render: UnselectedTemplate,

  parameters: {
    chromatic: { disableSnapshot: false },
  },
};

const ControlledTemplate: StoryFn<typeof Select.Root> = (args) => {
  const [country, setCountry] = useState("spain");
  const handleValueChange = (value: string) => {
    setCountry(value);
  };

  return (
    <Select.Root {...args} value={country} onValueChange={handleValueChange}>
      <Select.Trigger aria-label="Countries">
        <Select.Label>Countries</Select.Label>
        <Select.Value />
      </Select.Trigger>
      <Select.Content>
        <Select.Item value="france">France</Select.Item>
        <Select.Item value="united-kingdom">
          United Kingdom - Scotland, Ireland, Wales, Great Britain, and the
          commonwealth states of Canada, Australia, Turks and Caicos
        </Select.Item>
        <Select.Item value="spain">Spain</Select.Item>
        <Select.Item value="peru">Peru</Select.Item>
        <Select.Item value="chile">Chile</Select.Item>
        <Select.Item value="ecuador">Ecuador</Select.Item>
        <Select.Item value="roc">Republic of Congo</Select.Item>
        <Select.Item value="ethiopia">Ethiopia</Select.Item>
        <Select.Item value="south-africa">South Africa</Select.Item>
        <Select.Item value="kenya">Kenya</Select.Item>
        <Select.Item value="nigeria">Nigeria</Select.Item>
        <Select.Item value="proc">People Republic of China</Select.Item>
        <Select.Item value="japan">Japan</Select.Item>
        <Select.Item value="vietnam">Vietnam</Select.Item>
        <Select.Item value="sk">South Korea</Select.Item>
        <Select.Item value="nk">North Korea</Select.Item>
      </Select.Content>
    </Select.Root>
  );
};

export const Controlled = {
  render: ControlledTemplate,

  parameters: {
    chromatic: { disableSnapshot: true },
  },
};

export const SelectsInARow = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      <div>
        <Select.Root>
          <Select.Trigger aria-label="example-1">
            <Select.Label>Label/Placeholder</Select.Label>
            <Select.Value />
          </Select.Trigger>
          <Select.Content>
            <Select.Item value="1">Option 1 value</Select.Item>
            <Select.Item value="2">Option 2 value</Select.Item>
            <Select.Item value="3">Option 3 value</Select.Item>
            <Select.Item value="4">Option 4 value</Select.Item>
            <Select.Item value="5">Option 5 value</Select.Item>
            <Select.Item value="6">Option 6 value</Select.Item>
          </Select.Content>
        </Select.Root>
      </div>
      <div>
        <Select.Root helperText="Helper text">
          <Select.Trigger aria-label="example-1">
            <Select.Label>Label/Placeholder</Select.Label>
            <Select.Value />
          </Select.Trigger>
          <Select.Content>
            <Select.Item value="1">Option 1 value</Select.Item>
            <Select.Item value="2">Option 2 value</Select.Item>
            <Select.Item value="3">Option 3 value</Select.Item>
            <Select.Item value="4">Option 4 value</Select.Item>
            <Select.Item value="5">Option 5 value</Select.Item>
            <Select.Item value="6">Option 6 value</Select.Item>
          </Select.Content>
        </Select.Root>
      </div>
      <div>
        <Select.Root error errorMessage="Error text">
          <Select.Trigger aria-label="example-1">
            <Select.Label>Label/Placeholder</Select.Label>
            <Select.Value />
          </Select.Trigger>
          <Select.Content>
            <Select.Item value="1">Option 1 value</Select.Item>
            <Select.Item value="2">Option 2 value</Select.Item>
            <Select.Item value="3">Option 3 value</Select.Item>
            <Select.Item value="4">Option 4 value</Select.Item>
            <Select.Item value="5">Option 5 value</Select.Item>
            <Select.Item value="6">Option 6 value</Select.Item>
          </Select.Content>
        </Select.Root>
      </div>
      <div>
        <Select.Root
          helperText={
            <Tooltip.Provider>
              <Tooltip.Root>
                <Tooltip.Trigger asChild>
                  <Button
                    variant="primary"
                    isOutline
                    icon="left"
                    density="compact"
                    css={{
                      border: "none",
                      color: theme.colors.cta,
                      fontSize: theme.fontSizes["075"],
                      fontWeight: 100,
                      marginBlockStart: "0.125rem",
                      marginInlineStart: `calc(-1*${theme.space["025"]})`,
                      paddingBlock: "0.125rem",
                      paddingInline: theme.space["025"],
                    }}
                  >
                    <Icon label="">
                      <Info />
                    </Icon>{" "}
                    Info
                  </Button>
                </Tooltip.Trigger>
                <Tooltip.Content side="bottom">
                  Detail about select
                </Tooltip.Content>
              </Tooltip.Root>
            </Tooltip.Provider>
          }
        >
          <Select.Trigger aria-label="example-1">
            <Select.Label>Label/Placeholder</Select.Label>
            <Select.Value />
          </Select.Trigger>
          <Select.Content>
            <Select.Item value="1">Option 1 value</Select.Item>
            <Select.Item value="2">Option 2 value</Select.Item>
            <Select.Item value="3">Option 3 value</Select.Item>
            <Select.Item value="4">Option 4 value</Select.Item>
            <Select.Item value="5">Option 5 value</Select.Item>
            <Select.Item value="6">Option 6 value</Select.Item>
          </Select.Content>
        </Select.Root>
      </div>
    </div>
  );
};

const LabelOverflowTemplate: StoryFn<typeof Select.Root> = (args) => {
  return (
    <div style={{ maxWidth: "300px" }}>
      <Select.Root {...args}>
        <Select.Trigger>
          <Select.Label title="This is a long label for the select causing text overflow">
            This is a long label for the select causing text overflow
          </Select.Label>
          <Select.Value />
        </Select.Trigger>
        <Select.Content>
          <Select.Item value="one">Item One</Select.Item>
          <Select.Item value="two">Item Two</Select.Item>
          <Select.Item value="three">Item Three</Select.Item>
        </Select.Content>
      </Select.Root>
    </div>
  );
};

export const LabelOverflow = {
  render: LabelOverflowTemplate,
};
