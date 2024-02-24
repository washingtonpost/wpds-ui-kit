import React, { useState } from "react";
import { screen, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { Drawer as Component } from "./";
import { theme } from "../theme";
import { Box } from "../../box";
import { Select } from "../../select";

import type { Meta, StoryFn } from "@storybook/react";

export default {
  title: "Drawer",
  component: Component.Root,
  subcomponents: {
    DrawerContent: Component.Content,
    DrawerTrigger: Component.Trigger,
    DrawerClose: Component.Close,
    DrawerCustomTrigger: Component.CustomTrigger,
    DrawerScrim: Component.Scrim,
  },
  args: {
    id: "drawer-id",
  },
} as Meta<typeof Component.Root>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Template: StoryFn<any> = (args) => {
  const [open, setOpen] = useState(false);

  const handleChange = (val) => {
    setOpen(val);
  };

  return (
    <Component.Root {...args} onOpenChange={handleChange} open={open}>
      <Component.Trigger>Trigger Drawer</Component.Trigger>
      <Component.CustomTrigger as="span" css={{ color: theme.colors.primary }}>
        Custom Trigger
      </Component.CustomTrigger>
      <Component.Content>
        <Component.Close />
        Drawer
      </Component.Content>
      <Component.Scrim />
    </Component.Root>
  );
};

export const Drawer = {
  render: Template,

  parameters: {
    chromatic: { disableSnapshot: true },
  },
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FocusTemplate: StoryFn<any> = ({ loopFocus, ...args }) => (
  <Component.Root {...args}>
    <Component.Trigger>Trigger Drawer</Component.Trigger>
    <Component.Content position={"left"} width={200} loopFocus={loopFocus}>
      <Component.Close />
      Menu
      <ul
        style={{
          marginBlock: theme.space["100"].value,
          paddingInlineStart: 0,
          listStyle: "none",
        }}
      >
        <li>
          <a href="#">One</a>
        </li>
        <li>
          <a href="#">Two</a>
        </li>
        <li>
          <a href="#">Three</a>
        </li>
      </ul>
    </Component.Content>
    <Component.Scrim />
  </Component.Root>
);

export const Focus = {
  render: FocusTemplate,

  args: {
    loopFocus: true,
  },

  parameters: {
    chromatic: { disableSnapshot: true },
  },
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const PositionTemplate: StoryFn<any> = () => (
  <>
    <Component.Root id="top-id">
      <Component.Trigger>Top</Component.Trigger>
      <Component.Content position="top">
        <Component.Close />
        Drawer
      </Component.Content>
    </Component.Root>
    <div
      style={{
        display: "flex",
        gap: theme.space["050"].value,
        marginBlock: theme.space["050"].value,
      }}
    >
      <Component.Root id="left-id">
        <Component.Trigger>Left</Component.Trigger>
        <Component.Content position="left">
          <Component.Close />
          Drawer
        </Component.Content>
      </Component.Root>
      <Component.Root id="right-id">
        <Component.Trigger>Right</Component.Trigger>
        <Component.Content position="right">
          <Component.Close />
          Drawer
        </Component.Content>
      </Component.Root>
    </div>
    <Component.Root id="bottom-id">
      <Component.Trigger>Bottom</Component.Trigger>
      <Component.Content position="bottom">
        <Component.Close />
        Drawer
      </Component.Content>
    </Component.Root>
  </>
);

export const Position = {
  render: PositionTemplate,

  parameters: {
    chromatic: { disableSnapshot: true },
  },
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AutoSizeTemplate: StoryFn<any> = () => {
  const text = [
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua. Vestibulum
morbi blandit cursus risus at ultrices mi. Sit amet facilisis magna
etiam. Pellentesque pulvinar pellentesque habitant morbi tristique. Id
faucibus nisl tincidunt eget nullam non nisi. Donec enim diam
vulputate ut pharetra sit. Accumsan lacus vel facilisis volutpat est
velit egestas dui. Ullamcorper morbi tincidunt ornare massa eget
egestas purus viverra. Sed vulputate odio ut enim blandit volutpat
maecenas. Sed turpis tincidunt id aliquet risus feugiat. Quam
vulputate dignissim suspendisse in est ante in.`,
    `Scelerisque viverra mauris in aliquam sem fringilla. Adipiscing
bibendum est ultricies integer quis auctor elit. Sed elementum tempus
egestas sed. Purus non enim praesent elementum. Dictum at tempor
commodo ullamcorper a lacus vestibulum sed arcu. Rhoncus aenean vel
elit scelerisque mauris pellentesque pulvinar pellentesque habitant.
Duis at consectetur lorem donec massa sapien faucibus. Viverra
adipiscing at in tellus integer feugiat scelerisque varius morbi.
Scelerisque purus semper eget duis at tellus at. Elit at imperdiet dui
accumsan sit amet. Eu facilisis sed odio morbi quis commodo.`,
    `Cursus risus at ultrices mi tempus imperdiet. Enim blandit volutpat
maecenas volutpat blandit aliquam etiam. Urna molestie at elementum eu
facilisis. At erat pellentesque adipiscing commodo elit at imperdiet
dui. Sed risus ultricies tristique nulla. Id venenatis a condimentum
vitae sapien. Eu non diam phasellus vestibulum. Amet tellus cras
adipiscing enim eu turpis egestas pretium aenean. Sem fringilla ut
morbi tincidunt augue interdum velit euismod. Eu augue ut lectus arcu
bibendum. Pellentesque eu tincidunt tortor aliquam nulla. Neque
aliquam vestibulum morbi blandit. Elementum nisi quis eleifend quam
adipiscing vitae proin sagittis. Eget egestas purus viverra accumsan
in nisl nisi scelerisque eu. Aenean euismod elementum nisi quis
eleifend quam adipiscing vitae. Euismod in pellentesque massa placerat
duis. Dui sapien eget mi proin sed libero enim. Suspendisse potenti
nullam ac tortor vitae purus.`,
    `Velit egestas dui id ornare arcu odio ut. Sagittis id consectetur
purus ut faucibus pulvinar elementum integer enim. Mauris in aliquam
sem fringilla ut. Commodo viverra maecenas accumsan lacus vel
facilisis volutpat est velit. Proin nibh nisl condimentum id venenatis
a condimentum vitae sapien. Velit egestas dui id ornare arcu. Eu augue
ut lectus arcu. Molestie nunc non blandit massa. Amet risus nullam
eget felis eget nunc. Non tellus orci ac auctor augue mauris augue
neque gravida. Feugiat in ante metus dictum at. Nec tincidunt praesent
semper feugiat. Ridiculus mus mauris vitae ultricies leo integer
malesuada. Scelerisque in dictum non consectetur a erat. Eget sit amet
tellus cras adipiscing enim eu.`,
    `Vel quam elementum pulvinar etiam non quam lacus suspendisse. Id velit
ut tortor pretium viverra. Integer malesuada nunc vel risus commodo
viverra maecenas. Ligula ullamcorper malesuada proin libero nunc
consequat interdum. Senectus et netus et malesuada fames ac turpis
egestas maecenas. Lacus viverra vitae congue eu consequat. Gravida
neque convallis a cras. Enim eu turpis egestas pretium. Fringilla ut
morbi tincidunt augue interdum velit euismod in pellentesque. Id
faucibus nisl tincidunt eget nullam non nisi est sit. Sem et tortor
consequat id. Nunc sed velit dignissim sodales ut eu. Egestas egestas
fringilla phasellus faucibus scelerisque eleifend donec. Aliquet
porttitor lacus luctus accumsan. Orci ac auctor augue mauris augue
neque gravida in fermentum.`,
  ];
  const [textLength, setTextLength] = useState(5);
  return (
    <Component.Root id="interaction-drawer">
      <Component.Trigger css={{ marginBottom: "$050" }}>
        Open Drawer
      </Component.Trigger>
      <Box css={{ width: "180px" }}>
        <Select.Root
          value={String(textLength)}
          onValueChange={(val) => setTextLength(parseInt(val, 10))}
        >
          <Select.Trigger aria-label="example-2">
            <Select.Label>Number of paragraphs</Select.Label>
            <Select.Value />
          </Select.Trigger>
          <Select.Content>
            <Select.Item value="1">1</Select.Item>
            <Select.Item value="2">2</Select.Item>
            <Select.Item value="3">3</Select.Item>
            <Select.Item value="4">4</Select.Item>
            <Select.Item value="5">5</Select.Item>
          </Select.Content>
        </Select.Root>
      </Box>

      <Component.Content height="auto" position="bottom">
        <Component.Close />
        {text.slice(0, textLength).map((currentText, index) => (
          <p key={`p-${index}`}>{currentText}</p>
        ))}
      </Component.Content>
      <Component.Scrim />
    </Component.Root>
  );
};

export const AutoSize = {
  render: AutoSizeTemplate,

  parameters: {
    chromatic: { disableSnapshot: true },
  },
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ChromaticTemplate: StoryFn<any> = () => (
  <>
    <Component.Root id="top-id" defaultOpen={true}>
      <Component.Content position="top" height={200} css={{ opacity: "0.5" }}>
        <Component.Close />
        Drawer
      </Component.Content>
    </Component.Root>

    <Component.Root id="left-id" defaultOpen={true}>
      <Component.Content position="left" width={200} css={{ opacity: "0.5" }}>
        <Component.Close />
        Drawer
      </Component.Content>
    </Component.Root>

    <Component.Root id="right-id" defaultOpen={true}>
      <Component.Content position="right" width={200} css={{ opacity: "0.5" }}>
        <Component.Close />
        Drawer
      </Component.Content>
    </Component.Root>

    <Component.Root id="bottom-id" defaultOpen={true}>
      <Component.Content
        position="bottom"
        height={200}
        css={{ opacity: "0.5" }}
      >
        <Component.Close />
        Drawer
      </Component.Content>
    </Component.Root>
  </>
);

export const Chromatic = {
  render: ChromaticTemplate,

  parameters: {
    docs: { disable: true },
  },
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const InteractionsTemplate: StoryFn<any> = () => (
  <Component.Root id="interaction-drawer">
    <Component.Trigger>Trigger</Component.Trigger>
    <Component.Content>
      <Component.Close />
      Drawer Content
    </Component.Content>
    <Component.Scrim />
  </Component.Root>
);

export const Interactions = {
  render: InteractionsTemplate,

  parameters: {
    chromatic: { disableSnapshot: true },
  },

  play: async () => {
    const trigger = screen.getAllByText("Trigger")[0];
    await userEvent.click(trigger);
    await sleep(300);
    const content = screen.getAllByText("Drawer Content")[0];
    await expect(content).toBeVisible();
    const close = screen.getByLabelText("Close Drawer");
    await userEvent.click(close);
    await sleep(300);
    await expect(content).not.toBeInTheDocument();
  },
};

// Function to emulate pausing between interactions
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
