import * as React from "react";
import { InputLabel as Component } from "./";

export default {
  title: "InputLabel",
  component: Component,
};

const Template = (args) => <Component {...args} />;

export const InputLabel = Template.bind({});

InputLabel.args = {
  children: "Label",
};
