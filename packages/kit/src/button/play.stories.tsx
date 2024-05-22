import React from "react";

import { within, userEvent } from "@storybook/test";

import { Button as Button } from "./Button";
import { styled, theme } from "../theme";
import { Icon } from "../icon";
import Asset from "@washingtonpost/wpds-assets/asset/add";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
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
  args: {
    children: "Text button",
    variant: "secondary",
    density: "compact",
    isOutline: false,
    icon: "none",
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

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  render: ({ children, ...args }, context) => {
    return (
      <>
        <Column>
          <Stack>
            <Button {...args} data-testid={`${context.theme}-skip-link`}>
              {children}
            </Button>
            <Button {...args}>
              <Icon size="100" label="">
                <Asset />
              </Icon>
              {children}
            </Button>
            <Button {...args} icon="center">
              <Icon size="100" label="Icon label">
                <Asset />
              </Icon>
            </Button>
          </Stack>

          <Stack>
            <Button {...args} variant="primary">
              {children}
            </Button>
            <Button {...args} variant="primary">
              <Icon size="100" label="">
                <Asset />
              </Icon>
              {children}
            </Button>
            <Button {...args} icon="center" variant="primary">
              <Icon size="100" label="Icon label">
                <Asset />
              </Icon>
            </Button>
          </Stack>

          <Stack>
            <Button {...args} variant="cta">
              {children}
            </Button>
            <Button {...args} variant="cta">
              <Icon size="100" label="">
                <Asset />
              </Icon>
              {children}
            </Button>
            <Button {...args} icon="center" variant="cta">
              <Icon size="100" label="Icon label">
                <Asset />
              </Icon>
            </Button>
          </Stack>
        </Column>

        <Column>
          <Stack>
            <Button {...args} isOutline variant="primary">
              {children}
            </Button>
            <Button {...args} isOutline variant="primary">
              <Icon size="100" label="">
                <Asset />
              </Icon>
              {children}
            </Button>
            <Button {...args} icon="center" isOutline variant="primary">
              <Icon size="100" label="Icon label">
                <Asset />
              </Icon>
            </Button>
          </Stack>

          <Stack
            css={{
              background: theme.colors.accessible,
            }}
          >
            <Button {...args} isOutline variant="secondary">
              {children}
            </Button>

            <Button {...args} isOutline variant="secondary">
              <Icon size="100" label="">
                <Asset />
              </Icon>
              {children}
            </Button>
            <Button {...args} icon="center" isOutline variant="secondary">
              <Icon size="100" label="Icon label">
                <Asset />
              </Icon>
            </Button>
          </Stack>

          <Stack>
            <Button {...args} isOutline variant="cta">
              {children}
            </Button>
            <Button {...args} isOutline variant="cta">
              <Icon size="100" label="">
                <Asset />
              </Icon>
              {children}
            </Button>
            <Button {...args} icon="center" isOutline variant="cta">
              <Icon size="100" label="Icon label">
                <Asset />
              </Icon>
            </Button>
          </Stack>
        </Column>

        <Column>
          <Stack>
            <Button
              {...args}
              density={"default"}
              isOutline
              variant="primary"
              icon="right"
            >
              {children}
            </Button>
            <Button
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
            </Button>
            <Button
              {...args}
              density={"default"}
              icon="center"
              isOutline
              variant="primary"
            >
              <Icon size="100" label="Icon label">
                <Asset />
              </Icon>
            </Button>
          </Stack>

          <Stack
            css={{
              background: theme.colors.accessible,
            }}
          >
            <Button
              {...args}
              density={"default"}
              isOutline
              variant="secondary"
              icon="right"
            >
              {children}
            </Button>
            <Button
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
            </Button>
            <Button
              {...args}
              icon="center"
              density={"default"}
              isOutline
              variant="secondary"
            >
              <Icon size="100" label="Icon label">
                <Asset />
              </Icon>
            </Button>
          </Stack>

          <Stack>
            <Button
              {...args}
              density={"default"}
              isOutline
              variant="cta"
              icon="right"
            >
              {children}
            </Button>
            <Button
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
            </Button>
            <Button
              {...args}
              density={"default"}
              icon="center"
              isOutline
              variant="cta"
            >
              <Icon size="100" label="Icon label">
                <Asset />
              </Icon>
            </Button>
          </Stack>
        </Column>
        <Column>
          <Stack>
            <Button
              {...args}
              disabled
              density={"default"}
              isOutline
              variant="cta"
              icon="right"
            >
              {children}
            </Button>

            <Button
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
            </Button>
          </Stack>
        </Column>
      </>
    );
  },
};

Default.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getByTestId("light-skip-link"));
  await expect(args.onClick).toHaveBeenCalled();
};
