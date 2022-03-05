import * as React from "react";
import { styled } from "@washingtonpost/wpds-theme";
import { Checkbox as Component } from ".";

const variants = ["primary", "secondary", "cta"];
const size = ["087", "125"];
const isOutline = [true, false];

const Column = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$100",
  alignItems: "center",
  marginBlockStart: "$200",
});

const HStack = styled("section", {
  display: "flex",
  flexDirection: "row",
  gap: "$100",
  borderRadius: "$075",
});

export default {
  title: "Checkbox",
  component: Component,
  argTypes: {
    size: {
      options: size,
    },
    variant: {
      options: variants,
    },
    isOutline: {
      options: isOutline,
    },
    defaultChecked: {
      options: [true, false, "indeterminate"],
    },
    checked: {
      options: [true, false, "indeterminate"],
    },
    onCheckedChange: {
      action: "onCheckedChange",
    },
    disabled: {
      options: [true, false],
    },
    required: {
      options: [true, false],
    },
    name: {
      control: "text",
    },
    value: {
      control: "text",
    },
    id: {
      control: "text",
    },
  },
};

export const Play = (args) => {
  const [checked, setChecked] = React.useState(false);

  return (
    <Component
      {...args}
      checked={checked}
      onCheckedChange={setChecked}
      id="c1"
    />
  );
};
Play.args = {};

Play.storyName = "Checkbox";

const ChromaticTemplate = () => (
  <>
    <h4>Regular old checked states</h4>
    <HStack>
      <Component
        checked
        variant="primary"
        data-testid="test-checkbox-primary"
      />
      <Component checked variant="secondary" />
      <Component checked variant="cta" />
    </HStack>
    <h4>Regular old indeterminate states</h4>
    <HStack>
      <Component checked="indeterminate" variant="primary" />
      <Component checked="indeterminate" variant="secondary" />
      <Component checked="indeterminate" variant="cta" />
    </HStack>
    <h4>Regular old false states</h4>
    <HStack>
      <Component variant="primary" />
      <Component variant="secondary" />
      <Component variant="cta" />
    </HStack>
    <h4>isOutline states</h4>
    <HStack>
      <Component checked variant="primary" isOutline />
      <Component checked variant="secondary" isOutline />
      <Component checked variant="cta" isOutline />
    </HStack>
    <HStack>
      <Component checked="indeterminate" variant="primary" isOutline />
      <Component checked="indeterminate" variant="secondary" isOutline />
      <Component checked="indeterminate" variant="cta" isOutline />
    </HStack>
    <HStack>
      <Component variant="primary" isOutline />
      <Component variant="secondary" isOutline />
      <Component variant="cta" isOutline />
    </HStack>
    <h4>087 states</h4>
    <HStack>
      <Component checked size="087" variant="primary" />
      <Component checked size="087" variant="secondary" />
      <Component checked size="087" variant="cta" />
    </HStack>
    <HStack>
      <Component checked size="087" variant="primary" isOutline />
      <Component checked size="087" variant="secondary" isOutline />
      <Component checked size="087" variant="cta" isOutline />
    </HStack>
    <HStack>
      <Component size="087" variant="primary" isOutline />
      <Component size="087" variant="secondary" isOutline />
      <Component size="087" variant="cta" isOutline />
    </HStack>
    <h4>Disabled states</h4>
    <HStack>
      <Component disabled />
      <Component disabled />
      <Component disabled checked="indeterminate" />
    </HStack>
    <HStack>
      <Component disabled isOutline />
      <Component disabled isOutline />
      <Component disabled checked="indeterminate" isOutline />
    </HStack>
  </>
);

export const Chromatic = ChromaticTemplate.bind({});
Chromatic.args = {};
Chromatic.decorators = [
  (Story) => (
    <Column>
      <Story />
    </Column>
  ),
];
