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
    density: {
      options: ["compact", "default"],
      defaultValue: "compact",
    },
    isOutline: {
      options: [true, false],
      defaultValue: false,
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
        <Component {...args}>{children}</Component>
        <Component {...args}>
          <Icon size="100" label="">
            <Asset />
          </Icon>
          {children}
        </Component>
        <Component {...args} icon="center">
          <Icon size="100" label="Icon label">
            <Asset />
          </Icon>
        </Component>
      </Stack>

      <Stack>
        <Component {...args} variant="primary">
          {children}
        </Component>
        <Component {...args} variant="primary">
          <Icon size="100" label="">
            <Asset />
          </Icon>
          {children}
        </Component>
        <Component {...args} icon="center" variant="primary">
          <Icon size="100" label="Icon label">
            <Asset />
          </Icon>
        </Component>
      </Stack>

      <Stack>
        <Component {...args} variant="cta">
          {children}
        </Component>
        <Component {...args} variant="cta">
          <Icon size="100" label="">
            <Asset />
          </Icon>
          {children}
        </Component>
        <Component {...args} icon="center" variant="cta">
          <Icon size="100" label="Icon label">
            <Asset />
          </Icon>
        </Component>
      </Stack>
    </Column>

    <Column>
      <Stack>
        <Component {...args} isOutline variant="primary">
          {children}
        </Component>
        <Component {...args} isOutline variant="primary">
          <Icon size="100" label="">
            <Asset />
          </Icon>
          {children}
        </Component>
        <Component {...args} icon="center" isOutline variant="primary">
          <Icon size="100" label="Icon label">
            <Asset />
          </Icon>
        </Component>
      </Stack>

      <Stack
        css={{
          background: theme.colors.accessible,
        }}
      >
        <Component {...args} isOutline variant="secondary">
          {children}
        </Component>

        <Component {...args} isOutline variant="secondary">
          <Icon size="100" label="">
            <Asset />
          </Icon>
          {children}
        </Component>
        <Component {...args} icon="center" isOutline variant="secondary">
          <Icon size="100" label="Icon label">
            <Asset />
          </Icon>
        </Component>
      </Stack>

      <Stack>
        <Component {...args} isOutline variant="cta">
          {children}
        </Component>
        <Component {...args} isOutline variant="cta">
          <Icon size="100" label="">
            <Asset />
          </Icon>
          {children}
        </Component>
        <Component {...args} icon="center" isOutline variant="cta">
          <Icon size="100" label="Icon label">
            <Asset />
          </Icon>
        </Component>
      </Stack>
    </Column>

    <Column>
      <Stack>
        <Component
          {...args}
          density={"default"}
          isOutline
          variant="primary"
          icon="right"
        >
          {children}
        </Component>
        <Component
          {...args}
          density={"default"}
          isOutline
          variant="primary"
          icon="right"
        >
          <Icon size="100" label="">
            <Asset />
          </Icon>
          {children}
        </Component>
        <Component
          {...args}
          density={"default"}
          icon="center"
          isOutline
          variant="primary"
        >
          <Icon size="100" label="Icon label">
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
          density={"default"}
          isOutline
          variant="secondary"
          icon="right"
        >
          {children}
        </Component>
        <Component
          {...args}
          density={"default"}
          isOutline
          variant="secondary"
          icon="right"
        >
          <Icon size="100" label="">
            <Asset />
          </Icon>
          {children}
        </Component>
        <Component
          {...args}
          icon="center"
          density={"default"}
          isOutline
          variant="secondary"
        >
          <Icon size="100" label="Icon label">
            <Asset />
          </Icon>
        </Component>
      </Stack>

      <Stack>
        <Component
          {...args}
          density={"default"}
          isOutline
          variant="cta"
          icon="right"
        >
          {children}
        </Component>
        <Component
          {...args}
          density={"default"}
          isOutline
          variant="cta"
          icon="right"
        >
          <Icon size="100" label="">
            <Asset />
          </Icon>
          {children}
        </Component>
        <Component
          {...args}
          density={"default"}
          icon="center"
          isOutline
          variant="cta"
        >
          <Icon size="100" label="Icon label">
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
          density={"default"}
          isOutline
          variant="cta"
          icon="right"
        >
          {children}
        </Component>

        <Component
          {...args}
          disabled
          icon="center"
          density={"default"}
          isOutline
          variant="secondary"
        >
          <Icon size="100" label="Icon label">
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
