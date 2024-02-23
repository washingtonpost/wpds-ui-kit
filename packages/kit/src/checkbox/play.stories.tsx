import * as React from "react";
import { styled, theme } from "../theme";
import { Checkbox as Component } from ".";

import type { StoryFn, Meta } from "@storybook/react";

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
} as Meta<typeof Component>;

export const Play = {
  render: (args) => {
    const [checked, setChecked] = React.useState(false);

    return (
      <Component
        {...args}
        checked={checked}
        onCheckedChange={setChecked}
        id="c1"
      />
    );
  },

  args: {},
  name: "Checkbox",
};

const ChromaticTemplate: StoryFn<typeof Component> = () => {
  const isRequired = true;
  return (
    <>
      <Heading>Regular old checked states w/ required</Heading>
      <HStack>
        <Component
          checked
          variant="primary"
          data-testid="test-checkbox-primary"
          required={isRequired}
          id="checkbox1"
        >
          this checkbox is required this checkbox is required this checkbox is
          required this checkbox is required this checkbox is required this
          checkbox is required this checkbox is required this checkbox is
          required
        </Component>
      </HStack>
      <HStack>
        <Component
          checked
          variant="cta"
          label="this checkbox is required"
          required={isRequired}
          id="checkbox2"
        />
      </HStack>
      <HStack>
        <Component
          checked
          variant="secondary"
          label="this checkbox is required"
          required={isRequired}
          id="checkbox3"
        />
      </HStack>
      <Heading>Regular old checked states</Heading>
      <HStack>
        <Component
          checked
          variant="primary"
          data-testid="test-checkbox-primary"
          id="checkbox4"
        />
        <Component checked variant="secondary" id="checkbox5" />
        <Component checked variant="cta" id="checkbox6" />
      </HStack>
      <Heading>Regular old indeterminate states</Heading>
      <HStack>
        <Component checked="indeterminate" variant="primary" id="checkbox7" />
        <Component checked="indeterminate" variant="secondary" id="checkbox8" />
        <Component checked="indeterminate" variant="cta" id="checkbox9" />
      </HStack>
      <Heading>Regular old false states</Heading>
      <HStack>
        <Component variant="primary" id="checkbox10" />
        <Component variant="secondary" id="checkbox11" />
        <Component variant="cta" id="checkbox12" />
      </HStack>
      <Heading>isOutline states</Heading>
      <HStack>
        <Component checked variant="primary" isOutline id="checkbox13" />
        <Component checked variant="secondary" isOutline id="checkbox14" />
        <Component checked variant="cta" isOutline id="checkbox15" />
      </HStack>
      <HStack>
        <Component
          checked="indeterminate"
          variant="primary"
          isOutline
          id="checkbox16"
        />
        <Component
          checked="indeterminate"
          variant="secondary"
          isOutline
          id="checkbox17"
        />
        <Component
          checked="indeterminate"
          variant="cta"
          isOutline
          id="checkbox18"
        />
      </HStack>
      <HStack>
        <Component variant="primary" isOutline id="checkbox19" />
        <Component variant="secondary" isOutline id="checkbox20" />
        <Component variant="cta" isOutline id="checkbox21" />
      </HStack>
      <Heading>087 states</Heading>
      <HStack>
        <Component checked size="087" variant="primary" id="checkbox22" />
        <Component checked size="087" variant="secondary" id="checkbox23" />
        <Component checked size="087" variant="cta" id="checkbox24" />
      </HStack>
      <HStack>
        <Component
          checked
          size="087"
          variant="primary"
          isOutline
          id="checkbox25"
        />
        <Component
          checked
          size="087"
          variant="secondary"
          isOutline
          id="checkbox26"
        />
        <Component checked size="087" variant="cta" isOutline id="checkbox27" />
      </HStack>
      <HStack>
        <Component size="087" variant="primary" isOutline id="checkbox28" />
        <Component size="087" variant="secondary" isOutline id="checkbox29" />
        <Component size="087" variant="cta" isOutline id="checkbox30" />
      </HStack>
      <Heading>Disabled states</Heading>
      <HStack>
        <Component disabled id="checkbox31" />
        <Component disabled checked id="checkbox32" />
        <Component disabled checked="indeterminate" id="checkbox33" />
      </HStack>
      <HStack>
        <Component disabled isOutline id="checkbox34" />
        <Component disabled checked isOutline id="checkbox35" />
        <Component disabled checked="indeterminate" isOutline id="checkbox36" />
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
        <Component variant="primary" id="l3">
          Checkbox 3
        </Component>
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

export const Chromatic = {
  render: ChromaticTemplate,
  args: {},

  decorators: [
    (Story) => (
      <Column>
        <Story />
      </Column>
    ),
  ],
};
