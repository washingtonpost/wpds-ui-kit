/* eslint react/prop-types: 0 */
import * as React from "react";
import { Button as Component } from ".";

import Asset from "@washingtonpost/wpds-assets/asset/add";
import { Icon } from "@washingtonpost/wpds-icon";
import { styled, theme } from "@washingtonpost/wpds-theme";

import { expect } from "@storybook/jest";
import { within, userEvent } from "@storybook/testing-library";

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
};

const Column = styled("div", {
  display: "flex",
  flexDirection: "row",
  gap: "$100",
  alignItems: "center",
  marginBlockStart: "$200",
});

const Stack = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$100",
  alignItems: "center",
  marginBlockStart: "$200",
  padding: "$100",
  borderRadius: "$075",
});

const Template = ({ children, ...args }) => (
  <>
    <Column>
      <Stack>
        <Component {...args} data-testid="skip-link">
          {children}
        </Component>
        <Component {...args}>
          <Icon size="$100" label="">
            <Asset />
          </Icon>
          {children}
        </Component>
        <Component {...args} icon="center">
          <Icon size="$100" label="Icon label">
            <Asset />
          </Icon>
        </Component>
      </Stack>

      <Stack>
        <Component {...args} style="fill" variant="primary">
          {children}
        </Component>
        <Component {...args} style="fill" variant="primary">
          <Icon size="$100" label="">
            <Asset />
          </Icon>
          {children}
        </Component>
        <Component {...args} icon="center" style="fill" variant="primary">
          <Icon size="$100" label="Icon label">
            <Asset />
          </Icon>
        </Component>
      </Stack>

      <Stack>
        <Component {...args} style="fill" variant="cta">
          {children}
        </Component>
        <Component {...args} style="fill" variant="cta">
          <Icon size="$100" label="">
            <Asset />
          </Icon>
          {children}
        </Component>
        <Component {...args} icon="center" style="fill" variant="cta">
          <Icon size="$100" label="Icon label">
            <Asset />
          </Icon>
        </Component>
      </Stack>
    </Column>

    <Column>
      <Stack>
        <Component {...args} style="outline" variant="primary">
          {children}
        </Component>
        <Component {...args} style="outline" variant="primary">
          <Icon size="$100" label="">
            <Asset />
          </Icon>
          {children}
        </Component>
        <Component {...args} icon="center" style="outline" variant="primary">
          <Icon size="$100" label="Icon label">
            <Asset />
          </Icon>
        </Component>
      </Stack>

      <Stack
        css={{
          background: theme.colors.accessible,
        }}
      >
        <Component {...args} style="outline" variant="secondary">
          {children}
        </Component>

        <Component {...args} style="outline" variant="secondary">
          <Icon size="$100" label="">
            <Asset />
          </Icon>
          {children}
        </Component>
        <Component {...args} icon="center" style="outline" variant="secondary">
          <Icon size="$100" label="Icon label">
            <Asset />
          </Icon>
        </Component>
      </Stack>

      <Stack>
        <Component {...args} style="outline" variant="cta">
          {children}
        </Component>
        <Component {...args} style="outline" variant="cta">
          <Icon size="$100" label="">
            <Asset />
          </Icon>
          {children}
        </Component>
        <Component {...args} icon="center" style="outline" variant="cta">
          <Icon size="$100" label="Icon label">
            <Asset />
          </Icon>
        </Component>
      </Stack>
    </Column>

    <Column>
      <Stack>
        <Component
          {...args}
          size="075"
          style="outline"
          variant="primary"
          icon="right"
        >
          {children}
        </Component>
        <Component
          {...args}
          size="075"
          style="outline"
          variant="primary"
          icon="right"
        >
          <Icon size="$100" label="">
            <Asset />
          </Icon>
          {children}
        </Component>
        <Component
          {...args}
          size="075"
          icon="center"
          style="outline"
          variant="primary"
        >
          <Icon size="$100" label="Icon label">
            <Asset />
          </Icon>
        </Component>
      </Stack>

      <Stack
        css={{
          background: theme.colors.accessible,
        }}
      >
        <Component
          {...args}
          size="075"
          style="outline"
          variant="secondary"
          icon="right"
        >
          {children}
        </Component>
        <Component
          {...args}
          size="075"
          style="outline"
          variant="secondary"
          icon="right"
        >
          <Icon size="$100" label="">
            <Asset />
          </Icon>
          {children}
        </Component>
        <Component
          {...args}
          icon="center"
          size="075"
          style="outline"
          variant="secondary"
        >
          <Icon size="$100" label="Icon label">
            <Asset />
          </Icon>
        </Component>
      </Stack>

      <Stack>
        <Component
          {...args}
          size="075"
          style="outline"
          variant="cta"
          icon="right"
        >
          {children}
        </Component>
        <Component
          {...args}
          size="075"
          style="outline"
          variant="cta"
          icon="right"
        >
          <Icon size="$100" label="">
            <Asset />
          </Icon>
          {children}
        </Component>
        <Component
          {...args}
          size="075"
          icon="center"
          style="outline"
          variant="cta"
        >
          <Icon size="$100" label="Icon label">
            <Asset />
          </Icon>
        </Component>
      </Stack>
    </Column>
    <Column>
      <Stack>
        <Component
          {...args}
          disabled
          size="075"
          style="outline"
          variant="cta"
          icon="right"
        >
          {children}
        </Component>

        <Component
          {...args}
          disabled
          icon="center"
          size="075"
          style="outline"
          variant="secondary"
        >
          <Icon size="$100" label="Icon label">
            <Asset />
          </Icon>
        </Component>
      </Stack>
    </Column>
  </>
);

export const Button = Template.bind({});

Button.args = {
  children: "Text button",
};

Button.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getByTestId("skip-link"));
  await expect(args.onClick).toHaveBeenCalled();
};
