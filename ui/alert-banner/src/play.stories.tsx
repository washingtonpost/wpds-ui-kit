/* eslint react/prop-types: 0 */
import * as React from "react";
import { AlertBanner } from "./AlertBanner";
import { styled } from "@washingtonpost/wpds-ui-kit";
import type { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Alert banner",
  component: AlertBanner.Root,
  subcomponents: {
    Trigger: AlertBanner.Trigger,
    Content: AlertBanner.Content,
  },
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    onClick: { action: "clicked" },
    position: {
      options: ["fixed", "sticky", "absolute", "relative"],
      control: "select",
    },
    shadow: {
      options: [true, false],
      control: "boolean",
    },
    variant: {
      options: ["error", "warning", "success", "information"],
    },
    dismissable: {
      options: [true, false],
      control: "boolean",
    },
  },
} as ComponentMeta<typeof AlertBanner.Root>;

const Column = styled("div", {
  display: "flex",
  flexDirection: "row",
  gap: "$100",
  alignItems: "center",
  width: "100%",
});

const Stack = styled("div", {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "$100",
  alignItems: "center",
  borderRadius: "$075",
});

const Template: ComponentStory<typeof AlertBanner.Root> = ({
  children,
  ...args
}) => (
  <Column>
    <Stack>
      <AlertBanner.Root {...args} position="relative" variant="error">
        <AlertBanner.Content as="p">{children}</AlertBanner.Content>
        <AlertBanner.Trigger />
      </AlertBanner.Root>
      <AlertBanner.Root {...args} position="relative" variant="success">
        <AlertBanner.Content as="p">{children}</AlertBanner.Content>
        <AlertBanner.Trigger />
      </AlertBanner.Root>
      <AlertBanner.Root {...args} position="relative" variant="warning">
        <AlertBanner.Content as="p">{children}</AlertBanner.Content>
        <AlertBanner.Trigger />
      </AlertBanner.Root>
      <AlertBanner.Root {...args}>
        <AlertBanner.Content as="p">{children}</AlertBanner.Content>
        <AlertBanner.Trigger />
      </AlertBanner.Root>
    </Stack>
  </Column>
);

export const Play = Template.bind({});

Play.args = {
  children: (
    <>
      <strong>Information: </strong>
      This alert banner
    </>
  ),
  css: {
    zIndex: "$shell",
    top: 0,
    left: 0,
  },
};

const Decorator = styled("div", {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "calc(100vh * 3);",
  px: "$100",
});

Play.decorators = [
  (Story) => (
    <Decorator>
      <Story />
    </Decorator>
  ),
];

Play.storyName = "Alert banner";

const SpacingTemplate: ComponentStory<typeof AlertBanner.Root> = ({
  ...args
}) => (
  <Column>
    <AlertBanner.Root {...args} shadow>
      <AlertBanner.Content as="p">
        This is a single line of text
      </AlertBanner.Content>
      <AlertBanner.Trigger />
    </AlertBanner.Root>
    <AlertBanner.Root {...args} shadow>
      <AlertBanner.Content as="p">
        This is multiple lines of text that should wrap. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit.
      </AlertBanner.Content>
      <AlertBanner.Trigger />
    </AlertBanner.Root>
  </Column>
);

export const Spacing = SpacingTemplate.bind({});
