import * as React from "react";
import { Select } from "./";
import { Button, Icon, Tooltip, theme } from "@washingtonpost/wpds-ui-kit";
import { Info } from "@washingtonpost/wpds-assets";

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

const LabelOverflowTemplate: ComponentStory<typeof Select.Root> = (args) => {
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

export const LabelOverflow = LabelOverflowTemplate.bind({});
