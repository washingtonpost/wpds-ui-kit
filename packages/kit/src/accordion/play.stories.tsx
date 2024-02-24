// /* eslint-disable @next/next/no-img-element */
import React, { useRef } from "react";
import { Accordion, ACCORDION_DENSITY, ACCORDION_TYPE } from ".";
import { userEvent, waitFor, within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import type { Meta, StoryFn } from "@storybook/react";

export default {
  title: "Accordion",
  component: Accordion.Root,
  argTypes: {
    density: {
      options: [
        ACCORDION_DENSITY.compact,
        ACCORDION_DENSITY.default,
        ACCORDION_DENSITY.loose,
      ],
      control: "select",
    },
    type: {
      options: [ACCORDION_TYPE.single, ACCORDION_TYPE.multiple],
      control: "select",
    },
    disabled: {
      options: [true, false],
      control: "boolean",
    },
  },
} as Meta<typeof Accordion.Root>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Template: StoryFn<any> = (args) => {
  const myTriggerRef = useRef<HTMLButtonElement>(null);
  const myContentRef = useRef<HTMLDivElement>(null);

  return (
    <Accordion.Root {...args}>
      <Accordion.Item value={"item-1"}>
        <Accordion.Trigger {...args} ref={myTriggerRef}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in
          augue in felis pharetra finibus. In sagittis aliquam augue. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit.
        </Accordion.Trigger>
        <Accordion.Content ref={myContentRef} data-testid="content-0">
          <div>
            No! You don&apos;t even believe that! Gus has cameras everywhere,
            please. Listen to yourself! No, he has known everything, all along.
            Where were you today? In the lab? And you don&apos;t think it&apos;s
            possible that Tyrus lifted the cigarette out of your locker? Come
            on! Don&apos;t you see? You are the last piece of the puzzle. You
            are everything that he&apos;s wanted.
          </div>
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value={"item-2"}>
        <Accordion.Trigger {...args} ref={myTriggerRef}>
          How long will I have to social distance?
        </Accordion.Trigger>
        <Accordion.Content {...args} ref={myContentRef} data-testid="content-1">
          <img
            src="https://i.pravatar.cc/300/300"
            alt="An avatar is an atomic component that represents an individual’s identity through a circular photo."
          />
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
};

export const Play = {
  render: Template,

  args: {
    density: ACCORDION_DENSITY.compact,
    type: ACCORDION_TYPE.single,
    defaultValue: "item-1",
  },

  name: "Accordion",
};

export const Interactions = {
  render: Template,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getAllByRole("button")[0]);
    await expect(canvas.getByTestId("content-0")).toBeVisible();
    await userEvent.click(canvas.getAllByRole("button")[1]);
    await expect(canvas.getByTestId("content-1")).toBeVisible();
    await waitFor(() =>
      expect(canvas.getByTestId("content-0")).not.toBeVisible()
    );
  },
};
