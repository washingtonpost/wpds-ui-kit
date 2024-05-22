import React from "react";
import { screen, userEvent } from "@storybook/test";

import { InputPassword as Component } from "./";
import { styled, theme } from "../theme";
import type { Meta, StoryFn } from "@storybook/react";

export default {
  title: "InputPassword",
  component: Component,
} as Meta<typeof Component>;

export const InputPassword = {
  parameters: {
    chromatic: { disableSnapshot: true },
  },
};

const Column = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$100",
});

const Heading = styled("h2", {
  color: theme.colors.primary,
  fontSize: theme.fontSizes["100"],
  marginBlock: 0,
});

const ChromaticTemplate = () => (
  <Column>
    <Heading>Standard password</Heading>
    <Component name={""} id={""} />
    <Component defaultValue="With value" name={""} id={""} />

    <Heading>Behaviors</Heading>
    <Component
      defaultValue="Disabled"
      disabled
      helperText="Disabled"
      name={""}
      id={""}
    />
    <Component
      defaultValue="Error"
      error
      errorMessage="Error Message"
      name={""}
      id={""}
    />
    <Component
      defaultValue="Success"
      success
      helperText="Success"
      name={""}
      id={""}
    />
    <Component
      defaultValue="Required"
      required
      helperText="Required"
      name={""}
      id={""}
    />
    <Component
      defaultValue="Overflow - Four score and seven years ago"
      helperText="Overflow"
      name={""}
      id={""}
    />
  </Column>
);

export const Chromatic = {
  render: ChromaticTemplate,
};

const InteractionsTemplate: StoryFn<typeof Component> = () => (
  <Component id="test-id" name={""} />
);

export const Interactions = {
  render: InteractionsTemplate,

  parameters: {
    chromatic: { disableSnapshot: true },
  },

  play: async () => {
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
  },
};

// Function to emulate pausing between interactions
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
