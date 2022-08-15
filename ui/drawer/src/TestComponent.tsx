import * as React from "react";
import { Drawer } from ".";

export const TestComponent: React.FC = (props) => {
  console.log(props);
  const [open, setOpen] = React.useState(false);

  const handleChange = (val) => {
    console.log("handleChange", val);
    setOpen(val);
  };

  return (
    <div style={{ position: "absolute", top: 16, left: 16 }}>
      <Drawer.Root id={"my-id"} onOpenChange={handleChange} open={open}>
        <Drawer.Trigger>Toggle Drawer</Drawer.Trigger>
        <Drawer.Content>Drawer</Drawer.Content>
      </Drawer.Root>
    </div>
  );
};
