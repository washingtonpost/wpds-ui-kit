import * as React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button as Component } from "./";
import Asset from "@washingtonpost/wpds-assets/asset/add";
import { Icon } from "@washingtonpost/wpds-icon";
import { styled } from "@washingtonpost/wpds-theme";

export default {
  title: "Button",
  component: Component,
  argTypes: {
    onClick: { action: "clicked" },
    variant: {
      options: ["primary", "secondary", "cta"],
      defaultValue: "secondary",
    },
    size: {
      options: ["050", "075"],
      defaultValue: "050",
    },
    style: {
      options: ["outline", "fill"],
      defaultValue: "fill",
    },
    icon: {
      options: ["center", "left", "right", "none"],
      defaultValue: "none",
    },
  },
} as ComponentMeta<typeof Component>;

const Stack = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$100",
  alignItems: "center",
});

const Template: ComponentStory<typeof Component> = ({ children, ...args }) => (
  <Stack>
    <Component {...args}>{children}</Component>
    <Component {...args}>
      <Icon size="16" label="">
        <Asset fill="currentColor" />
      </Icon>
      {children}
    </Component>
    <Component {...args} icon="center">
      <Icon size="16" label="Icon label">
        <Asset fill="currentColor" />
      </Icon>
    </Component>
  </Stack>
);

export const Button = Template.bind({});

Button.args = {
  children: "Text button",
};
