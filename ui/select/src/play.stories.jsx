import * as React from "react";
import { Select, SelectTrigger, SelectValue, SelectLabel } from "./";

import * as SelectPrimitive from "@radix-ui/react-select";

export default {
  title: "Select",
  component: Select.Root,
  subcomponents: {
    Trigger: SelectPrimitive.Trigger,
    Value: SelectPrimitive.Value,
    Icon: SelectPrimitive.Icon,
    Item: SelectPrimitive.Item,
    ItemText: SelectPrimitive.ItemText,
    ItemIndicator: SelectPrimitive.ItemIndicator,
    Group: SelectPrimitive.Group,
    Label: SelectPrimitive.Label,
    Content: SelectPrimitive.Content,
  },
};

const Template = (args) => {
  const countries = { france: "🇫🇷", "united-kingdom": "🇬🇧", spain: "🇪🇸" };

  const [value, setValue] = React.useState("france");
  console.log(countries[value]);

  return (
    <Select.Root value={value} onValueChange={setValue}>
      <SelectTrigger aria-label="Countries">
        <SelectLabel>Countries</SelectLabel>
        <SelectValue aria-label={value}>{}</SelectValue>
      </SelectTrigger>
    </Select.Root>
  );
};

export const Play = Template.bind({});

Play.args = {};

Play.storyName = "Select";
