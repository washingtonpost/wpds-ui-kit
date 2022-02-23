import * as React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { styled } from "@washingtonpost/wpds-theme";
import { Box } from "@washingtonpost/wpds-box";
import { within, userEvent } from "@storybook/testing-library";
import { Checkbox as Component } from "./";

const variants = ["primary", "secondary", "cta"];
const size = ["087", "125"];
const style = ["outline", "fill"];

const Column = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$100",
  alignItems: "center",
  marginBlockStart: "$200",
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
    style: {
      options: style,
    },
    defaultChecked: {
      options: [true, false, "indeterminate"],
    },
    checked: {
      options: [true, false, "indeterminate"],
      defaultValue: true,
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
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args} />
);

export const Play = Template.bind({});

Play.args = {
  id: "boop",
};

const Decorator = styled("div", {
  display: "flex",
  flexDirection: "row",
  gap: "$050",
});

Play.decorators = [
  (Story) => (
    <Decorator>
      <Story />
      <Box
        as="label"
        htmlFor="boop"
        css={{
          color: "$primary",
          alignSelf: "flex-end",
        }}
      >
        This is a label
      </Box>
    </Decorator>
  ),
];

Play.storyName = "Checkbox";

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

const HStack = styled("section", {
  display: "flex",
  flexDirection: "row",
  gap: "$100",
  borderRadius: "$075",
});

const ChromaticTemplate: ComponentStory<typeof Component> = () => (
  <>
    <HStack>
      <Component
        checked={true}
        variant="primary"
        data-testid="test-checkbox-primary"
      />
      <Component checked={true} variant="secondary" />
      <Component checked={true} variant="cta" />
    </HStack>
    <HStack>
      <Component checked={true} size="087" />
      <Component checked={true} size="125" />
    </HStack>
    <HStack>
      <Component checked={true} style="fill" />
      <Component checked={true} style="outline" />
    </HStack>
    <HStack>
      <Component checked={true} />
      <Component checked={false} />
      <Component checked="indeterminate" />
    </HStack>
    <HStack>
      <Component disabled />
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

Chromatic.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  userEvent.tab();

  userEvent.click(canvas.getByTestId("test-checkbox-primary"));
};
