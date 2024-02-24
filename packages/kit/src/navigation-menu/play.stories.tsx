import React from "react";
import { userEvent, screen } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { NavigationMenu } from ".";
import { Button } from "../button";
import { Icon } from "../icon";
import { theme } from "../theme";
import { ChevronRight, ChevronDown, Menu } from "@washingtonpost/wpds-assets";
import NextLink from "next/link";

import type { Meta, StoryFn } from "@storybook/react";

import states from "./states.json";

export default {
  title: "NavigationMenu",
  component: NavigationMenu.Root,
  subcomponents: {
    List: NavigationMenu.List,
    Item: NavigationMenu.Item,
    Link: NavigationMenu.Link,
    Trigger: NavigationMenu.Trigger,
    Content: NavigationMenu.Content,
    Sub: NavigationMenu.Sub,
  },
} as Meta<typeof NavigationMenu.Root>;

const Template: StoryFn<typeof NavigationMenu.Root> = (args) => {
  console.log(args);
  return (
    <NavigationMenu.Root {...args}>
      <NavigationMenu.List>
        <NavigationMenu.Item>
          <NavigationMenu.Trigger asChild>
            <Button icon="left">
              <Icon label="">
                <Menu />
              </Icon>
              Menu
            </Button>
          </NavigationMenu.Trigger>
          <NavigationMenu.Content>
            <NavigationMenu.Sub orientation="vertical">
              <NavigationMenu.List>
                <NavigationMenu.Item>
                  <NavigationMenu.Link href="#">Apples</NavigationMenu.Link>
                </NavigationMenu.Item>
                <NavigationMenu.Item>
                  <NavigationMenu.Link href="#" active>
                    Bananas
                  </NavigationMenu.Link>
                </NavigationMenu.Item>
                <NavigationMenu.Item>
                  <NavigationMenu.Link href="#">Oranges</NavigationMenu.Link>
                </NavigationMenu.Item>
                <NavigationMenu.Item>
                  <NavigationMenu.Link href="#">Pears</NavigationMenu.Link>
                </NavigationMenu.Item>
              </NavigationMenu.List>
            </NavigationMenu.Sub>
          </NavigationMenu.Content>
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
};

export const Default = {
  render: Template,
};

const UseNextLinkTemplate: StoryFn<typeof NavigationMenu.Root> = (args) => {
  console.log(args);
  return (
    <NavigationMenu.Root {...args}>
      <NavigationMenu.List>
        <NavigationMenu.Item>
          <NextLink href="#" passHref legacyBehavior>
            <NavigationMenu.Link>Next Link</NavigationMenu.Link>
          </NextLink>
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
};

export const UseNextLink = {
  render: UseNextLinkTemplate,
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SideAlignTemplate: StoryFn<any> = (args) => {
  console.log("args", args);
  return (
    <NavigationMenu.Root {...args}>
      <NavigationMenu.List>
        <NavigationMenu.Item>
          <NavigationMenu.Trigger asChild>
            <Button icon="left">
              <Icon label="">
                <Menu />
              </Icon>
              Menu
            </Button>
          </NavigationMenu.Trigger>
          <NavigationMenu.Content side={args.side} align={args.align}>
            <NavigationMenu.Sub orientation="vertical">
              <NavigationMenu.List>
                <NavigationMenu.Item>
                  <NavigationMenu.Link href="#">Apples</NavigationMenu.Link>
                </NavigationMenu.Item>
                <NavigationMenu.Item>
                  <NavigationMenu.Link href="#">Bananas</NavigationMenu.Link>
                </NavigationMenu.Item>
                <NavigationMenu.Item>
                  <NavigationMenu.Link href="#">Oranges</NavigationMenu.Link>
                </NavigationMenu.Item>
                <NavigationMenu.Item>
                  <NavigationMenu.Link href="#">Pears</NavigationMenu.Link>
                </NavigationMenu.Item>
              </NavigationMenu.List>
            </NavigationMenu.Sub>
          </NavigationMenu.Content>
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
};

export const SideAlign = {
  render: SideAlignTemplate,

  argTypes: {
    side: {
      options: ["top", "bottom", "left", "right"],
      control: { type: "select" },
    },
    align: {
      options: ["start", "center", "end"],
      control: { type: "select" },
    },
  },

  args: {
    side: "bottom",
    align: "start",
  },
};

const HorizontalTemplate: StoryFn<typeof NavigationMenu.Root> = (args) => {
  return (
    <NavigationMenu.Root {...args}>
      <NavigationMenu.List>
        <NavigationMenu.Item>
          <NavigationMenu.Link href="https://www.washingtonpost.com/election-results/2022/house/">
            House
          </NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Link href="https://www.washingtonpost.com/election-results/2022/governors">
            Governors
          </NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Trigger>
            Results By State
            <Icon
              label=""
              size="150"
              css={{
                marginBlock: "-2px",
                transition: `transform ${theme.transitions.fast} ${theme.transitions.inOut}`,
                "[aria-expanded='true'] > &": {
                  transform: "rotate(-180deg)",
                },
              }}
            >
              <ChevronDown />
            </Icon>
          </NavigationMenu.Trigger>
          <NavigationMenu.Content>
            <NavigationMenu.Sub orientation="vertical">
              <NavigationMenu.List>
                {states.map((state, i) => (
                  <NavigationMenu.Item key={state}>
                    <NavigationMenu.Link
                      href={
                        i !== 1
                          ? `https://www.washingtonpost.com/election-results/2022/${state.toLowerCase()}/`
                          : undefined
                      }
                      active={i === 0}
                    >
                      {state}
                    </NavigationMenu.Link>
                  </NavigationMenu.Item>
                ))}
              </NavigationMenu.List>
            </NavigationMenu.Sub>
          </NavigationMenu.Content>
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
};

export const Horizontal = {
  render: HorizontalTemplate,
};

const VerticalTemplate: StoryFn<typeof NavigationMenu.Root> = (args) => {
  const subsections = [
    {
      text: "The Post's View",
      link: "https://www.washingtonpost.com/opinions/the-posts-view/?itid=nb_opinions_the-post%27s-view",
    },
    {
      text: "Columns",
      link: "https://www.washingtonpost.com/opinions/columns/",
    },
    {
      text: "Editorial Cartoons",
      link: "https://www.washingtonpost.com/opinions/cartoons/",
    },
  ];

  return (
    <NavigationMenu.Root {...args} orientation="vertical">
      <NavigationMenu.List>
        <NavigationMenu.Item>
          <NavigationMenu.Link href="https://www.washingtonpost.com/">
            Home Page
          </NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Link href="https://www.washingtonpost.com/politics/">
            Politics
          </NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Trigger asChild>
            <NavigationMenu.Link
              href="https://www.washingtonpost.com/opinions/"
              css={{ display: "flex" }}
            >
              Opinions
              <Icon label="" size="150" css={{ marginBlock: "-2px" }}>
                <ChevronRight />
              </Icon>
            </NavigationMenu.Link>
          </NavigationMenu.Trigger>
          <NavigationMenu.Content side="right" align="center">
            <NavigationMenu.Sub orientation="vertical">
              <NavigationMenu.List>
                {subsections.map((sub) => (
                  <NavigationMenu.Item key={sub.text}>
                    <NavigationMenu.Link href={sub.link}>
                      {sub.text}
                    </NavigationMenu.Link>
                  </NavigationMenu.Item>
                ))}
              </NavigationMenu.List>
            </NavigationMenu.Sub>
          </NavigationMenu.Content>
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
};

export const Vertical = {
  render: VerticalTemplate,
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const InteractionsTemplate: StoryFn<any> = () => (
  <NavigationMenu.Root>
    <NavigationMenu.List>
      <NavigationMenu.Item>
        <NavigationMenu.Trigger asChild>
          <Button icon="left">
            <Icon label="">
              <Menu />
            </Icon>
            Menu
          </Button>
        </NavigationMenu.Trigger>
        <NavigationMenu.Content>
          <NavigationMenu.Sub orientation="vertical">
            <NavigationMenu.List>
              <NavigationMenu.Item>
                <NavigationMenu.Link href="#">Apples</NavigationMenu.Link>
              </NavigationMenu.Item>
              <NavigationMenu.Item>
                <NavigationMenu.Link href="#">Bananas</NavigationMenu.Link>
              </NavigationMenu.Item>
              <NavigationMenu.Item>
                <NavigationMenu.Link href="#">Oranges</NavigationMenu.Link>
              </NavigationMenu.Item>
              <NavigationMenu.Item>
                <NavigationMenu.Link href="#">Pears</NavigationMenu.Link>
              </NavigationMenu.Item>
            </NavigationMenu.List>
          </NavigationMenu.Sub>
        </NavigationMenu.Content>
      </NavigationMenu.Item>
    </NavigationMenu.List>
  </NavigationMenu.Root>
);

export const Interactions = {
  render: InteractionsTemplate,

  parameters: {
    chromatic: { disableSnapshot: true },
  },

  play: async () => {
    userEvent.tab();
    userEvent.keyboard("{Enter}");
    await sleep(350);
    const content = screen.getByText("Apples");
    await expect(content).toBeVisible();
    userEvent.keyboard("{Escape}");
    await sleep(350);
    await expect(content).not.toBeVisible();
  },
};

// Function to emulate pausing between interactions
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
