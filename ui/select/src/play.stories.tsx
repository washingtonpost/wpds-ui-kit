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

const ControlledTemplate: ComponentStory<typeof Select.Root> = (args) => {
  const [country, setCountry] = React.useState("spain");
  function handleValueChange(val) {
    setCountry(val);
  }
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
