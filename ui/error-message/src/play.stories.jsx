import * as React from "react";
import { ErrorMessage as Component } from "./";

export default {
  title: "ErrorMessage",
  component: Component,
};

const Template = (args) => <Component {...args} />;

export const ErrorMessage = Template.bind({});

ErrorMessage.args = {
  children: "Error Message",
  id: "my-error-message",
};
