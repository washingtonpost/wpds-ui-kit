import * as React from "react";
import { InputTextarea as Component } from "./";

export default {
  title: "InputTextarea",
  component: Component,
};

const Template = (args) => <Component {...args} />;

export const Play = Template.bind({});

Play.storyName = "InputTextarea";

Play.args = {
  canResize: false,
  name: "text-area-1",
  id: "text-area-1",
  label: "Label",
};

Play.argTypes = {
  helperText: { control: "text" },
};

export const Error = Template.bind({});

Error.args = {
  canResize: false,
  name: "text-area-2",
  id: "text-area-2",
  label: "Label",
  error: true,
  errorMessage: "Error message",
};
