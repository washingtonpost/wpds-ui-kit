import * as React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { styled } from "@washingtonpost/wpds-theme";
import { Box } from "@washingtonpost/wpds-box";
import { within, userEvent } from "@storybook/testing-library";
import { Checkbox as Component } from "./";

const variants = ["primary", "secondary", "cta"];
const size = ["087", "125"];
const style = ["outline", "fill"];
const checked = [true, false, "indeterminate"];

const Column = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$100",
  alignItems: "center",
  marginBlockStart: "$200",
});

const Stack = styled("div", {
  display: "flex",
  flexDirection: "row",
  gap: "$100",
  alignItems: "center",
  marginBlockStart: "$200",
  padding: "$100",
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

const ChromaticTemplate: ComponentStory<typeof Component> = (args) => (
  <>
    <Stack>
      {variants.map((variant) => (
        <Component
          key={variant}
          {...args}
          variant={variant}
          data-testid={`test-checkbox-${variant}`}
        />
      ))}
    </Stack>
    <Stack>
      {size.map((size) => (
        <Component key={size} {...args} size={size} />
      ))}
    </Stack>
    <Stack>
      {style.map((style) => (
        <Component key={style} {...args} style={style} />
      ))}
    </Stack>
    <Stack>
      {checked.map((checkedValue, index) => (
        <Component key={index} {...args} checked={checkedValue} />
      ))}
    </Stack>
    <Stack>
      {[1, 2, 3].map((value, index) => (
        <Component key={index} {...args} disabled value={value} />
      ))}
    </Stack>
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
