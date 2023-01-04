import * as React from "react";
import { styled, theme } from "@washingtonpost/wpds-theme";
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

const Heading = styled("h2", {
  color: theme.colors.primary,
  fontSize: theme.fontSizes["100"],
  marginBlock: 0,
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
    label: {
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

const ChromaticTemplate = () => {
  const isRequired = true;
  return (
    <>
      <Heading>Regular old checked states w/ required</Heading>
      <HStack>
        <Component
          checked
          variant="primary"
          data-testid="test-checkbox-primary"
          label="this checkbox is required"
          required={isRequired}
        />
      </HStack>
      <HStack>
        <Component
          checked
          variant="cta"
          label="this checkbox is required"
          required={isRequired}
        />
      </HStack>
      <HStack>
        <Component
          checked
          variant="secondary"
          label="this checkbox is required"
          required={isRequired}
        />
      </HStack>
      <Heading>Regular old checked states</Heading>
      <HStack>
        <Component
          checked
          variant="primary"
          data-testid="test-checkbox-primary"
        />
        <Component checked variant="secondary" />
        <Component checked variant="cta" />
      </HStack>
      <Heading>Regular old indeterminate states</Heading>
      <HStack>
        <Component checked="indeterminate" variant="primary" />
        <Component checked="indeterminate" variant="secondary" />
        <Component checked="indeterminate" variant="cta" />
      </HStack>
      <Heading>Regular old false states</Heading>
      <HStack>
        <Component variant="primary" />
        <Component variant="secondary" />
        <Component variant="cta" />
      </HStack>
      <Heading>isOutline states</Heading>
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
      <Heading>087 states</Heading>
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
      <Heading>Disabled states</Heading>
      <HStack>
        <Component disabled />
        <Component disabled checked />
        <Component disabled checked="indeterminate" />
      </HStack>
      <HStack>
        <Component disabled isOutline />
        <Component disabled checked isOutline />
        <Component disabled checked="indeterminate" isOutline />
      </HStack>
      <Heading>Boxes with labels!</Heading>
      <HStack>
        <Component
          checked="indeterminate"
          variant="primary"
          label="Checkbox 1"
          id="l1"
        />
        <Component variant="primary" label="Checkbox 2" id="l2" />
      </HStack>
      <HStack>
        <Component
          checked
          variant="primary"
          isOutline
          label="Checkbox 3"
          id="l3"
        />
        <Component
          checked
          size="087"
          variant="primary"
          label="Checkbox 4"
          id="l4"
        />
      </HStack>
      <HStack>
        <Component disabled label="Checkbox 5" id="l5" />
        <Component
          disabled
          checked="indeterminate"
          isOutline
          label="Checkbox 6"
          id="l6"
        />
      </HStack>
    </>
  );
};

export const Chromatic = ChromaticTemplate.bind({});
Chromatic.args = {};
Chromatic.decorators = [
  (Story) => (
    <Column>
      <Story />
    </Column>
  ),
];
