import * as React from "react";
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
