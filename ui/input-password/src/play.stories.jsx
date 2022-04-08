import * as React from "react";
import { screen, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { InputPassword as Component } from "./";
import { styled } from "@washingtonpost/wpds-theme";

export default {
  title: "InputPassword",
  component: Component,
};

const Template = (args) => <Component {...args} />;

export const InputPassword = Template.bind({});

InputPassword.parameters = {
  chromatic: { disableSnapshot: true },
};

const Column = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$100",
});

const ChromaticTemplate = () => (
  <Column>
    <h4>Standard password</h4>
    <Component />
    <Component defaultValue="With value" />

    <h4>Behaviors</h4>
    <Component defaultValue="Disabled" disabled helperText="Disabled" />
    <Component defaultValue="Error" error errorMessage="Error Message" />
    <Component defaultValue="Success" success helperText="Success" />
    <Component defaultValue="Required" required helperText="Required" />
    <Component
      defaultValue="Overflow - Four score and seven years ago"
      helperText="Overflow"
    />
  </Column>
);

export const Chromatic = ChromaticTemplate.bind({});

const InteractionsTemplate = () => <Component />;

export const Interactions = InteractionsTemplate.bind({});
Interactions.parameters = {
  chromatic: { disableSnapshot: true },
};

// Function to emulate pausing between interactions
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

Interactions.play = async () => {
  // radix Label needs a tick to associate labels with inputs
  await sleep(0);
  const input = screen.getByLabelText("Password");
  await userEvent.type(input, "123456", {
    delay: 100,
  });
  const toggle = screen.getByRole("button");
  await userEvent.click(toggle);
  await expect(input).toHaveAttribute("type", "text");
  await sleep(500);
  await userEvent.click(toggle);
  await expect(input).toHaveAttribute("type", "password");
};
