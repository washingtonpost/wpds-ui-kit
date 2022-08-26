import * as React from "react";
import { screen, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { Drawer as Component } from "./";
import { theme } from "@washingtonpost/wpds-theme";

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
};

const Template = (args) => {
  const [open, setOpen] = React.useState(false);

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

export const Drawer = Template.bind({});
Drawer.parameters = {
  chromatic: { disableSnapshot: true },
};

const PositionTemplate = () => (
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
        gap: theme.space["050"],
        marginBlock: theme.space["050"],
      }}
    >
      <Component.Root id="left-id">
        <Component.Trigger>Left</Component.Trigger>
        <Component.Content position="left">
          <Component.Close />
          Drawer
        </Component.Content>
      </Component.Root>
      <Component.Root id="in-place-id">
        <Component.Trigger>In Place</Component.Trigger>
        <Component.Content position="in-place">
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

export const Position = PositionTemplate.bind({});
Position.parameters = {
  chromatic: { disableSnapshot: true },
};

const ChromaticTemplate = () => (
  <>
    <Component.Root id="top-id" defaultOpen={true}>
      <Component.Content position="top" height="200px" css={{ opacity: "0.5" }}>
        <Component.Close />
        Drawer
      </Component.Content>
    </Component.Root>

    <Component.Root id="left-id" defaultOpen={true}>
      <Component.Content position="left" width="200px" css={{ opacity: "0.5" }}>
        <Component.Close />
        Drawer
      </Component.Content>
    </Component.Root>

    <Component.Root id="in-place-id" defaultOpen={true}>
      <Component.Trigger>In Place</Component.Trigger>
      <Component.Content position="in-place">
        <Component.Close />
        Drawer
      </Component.Content>
    </Component.Root>

    <Component.Root id="right-id" defaultOpen={true}>
      <Component.Content
        position="right"
        width="200px"
        css={{ opacity: "0.5" }}
      >
        <Component.Close />
        Drawer
      </Component.Content>
    </Component.Root>

    <Component.Root id="bottom-id" defaultOpen={true}>
      <Component.Content
        position="bottom"
        height="200px"
        css={{ opacity: "0.5" }}
      >
        <Component.Close />
        Drawer
      </Component.Content>
    </Component.Root>
  </>
);

export const Chromatic = ChromaticTemplate.bind({});

const InteractionsTemplate = () => (
  <Component.Root>
    <Component.Trigger>Trigger</Component.Trigger>
    <Component.Content>
      <Component.Close />
      Drawer Content
    </Component.Content>
    <Component.Scrim />
  </Component.Root>
);

export const Interactions = InteractionsTemplate.bind({});
Interactions.parameters = {
  chromatic: { disableSnapshot: true },
};

// Function to emulate pausing between interactions
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

Interactions.play = async () => {
  const trigger = screen.getAllByText("Trigger")[0];
  await userEvent.click(trigger);
  await sleep(300);
  const content = screen.getAllByText("Drawer Content")[0];
  await expect(content).toBeVisible();
  const close = screen.getByLabelText("Close Drawer");
  await userEvent.click(close);
  await sleep(300);
  await expect(content).not.toBeInTheDocument();
};
