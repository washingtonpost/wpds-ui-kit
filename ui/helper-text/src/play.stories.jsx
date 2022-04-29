import * as React from "react";
import { HelperText as Component } from "./";

export default {
  title: "HelperText",
  component: Component,
};

const Template = (args) => <Component {...args} />;

export const HelperText = Template.bind({});

HelperText.args = {
  children: "Helper Text",
  id: "my-helper-text",
};
