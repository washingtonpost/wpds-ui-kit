import * as React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import * as AlertBanner from "./";
import { Box, styled } from "@washingtonpost/wpds-ui-kit";

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
      This alert banner can be controlled from Storybook. ipsum dolor sit amet,
      consectetur adipiscing elit. Lorem eget vehicula velit, et adipiscing id
      et sit nunc. Fermentum mi lacus, fusce dui. Amet nunc sit urna quis
      aliquam, enim consequat, consectetur tempus. Auctor viverra tellus et enim
      tincidunt.
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
