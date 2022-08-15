import * as React from "react";
import { globalCss } from "@stitches/react";
import { Drawer as Component } from "./";

export default {
  title: "Drawer",
  component: Component.Root,
  subcomponents: {
    DrawerContent: Component.Content,
  },
};

const globalStyles = globalCss({
  ".wpds-dark": {
    display: "none !important",
  },
});

const Template = (args) => {
  globalStyles();
  const [open, setOpen] = React.useState(false);

  const handleChange = (val) => {
    setOpen(val);
  };

  return (
    <div style={{ position: "absolute", top: 16, left: 16 }}>
      <Component.Root {...args} onOpenChange={handleChange} open={open}>
        <Component.Trigger>Trigger Drawer</Component.Trigger>
        <Component.Content>Drawer</Component.Content>
      </Component.Root>
    </div>
  );
};

export const Drawer = Template.bind({});

Drawer.args = {
  id: "my-drawer",
};
