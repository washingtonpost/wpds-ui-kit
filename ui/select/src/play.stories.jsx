import * as React from "react";
import { Select } from "./";

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

const Template = (args) => {
  return (
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
        <Select.Group label="South America" divider={false}>
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
