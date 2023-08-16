import * as React from "react";
import { Select } from "./";

import type { ComponentStory } from "@storybook/react";

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

const Template: ComponentStory<typeof Select.Root> = (args) => {
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

export const Play = Template.bind({});

Play.args = {
  success: false,
  required: false,
  disabled: false,
  error: false,
  errorMessage: "",
  helperText: "",
};

Play.storyName = "Select";

Play.parameters = {
  chromatic: { disableSnapshot: true },
};

const UnselectedTemplate: ComponentStory<typeof Select.Root> = (args) => {
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
        </Select.Content>
      </Select.Root>
    </>
  );
};

export const Unselected = UnselectedTemplate.bind({});

Unselected.parameters = {
  chromatic: { disableSnapshot: false },
};

const ControlledTemplate: ComponentStory<typeof Select.Root> = (args) => {
  const [country, setCountry] = React.useState("spain");
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
        <Select.Item value="united-kingdom">United Kingdom</Select.Item>
        <Select.Item value="spain">Spain</Select.Item>
        <Select.Item value="peru">Peru</Select.Item>
        <Select.Item value="chile">Chile</Select.Item>
        <Select.Item value="ecuador">Ecuador</Select.Item>
      </Select.Content>
    </Select.Root>
  );
};

export const Controlled = ControlledTemplate.bind({});

Controlled.parameters = {
  chromatic: { disableSnapshot: true },
};

export const SelectsInARow = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
      }}
    >
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
  );
};
