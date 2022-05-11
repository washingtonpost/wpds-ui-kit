import * as React from "react";
import { Fieldset as Component } from "./";

export default {
  title: "Fieldset",
  component: Component,
};

const Template = (args) => <Component {...args}>Content</Component>;

export const Fieldset = Template.bind({});

Fieldset.args = {
  legend: "Fieldset",
};
