import * as React from "react";
import { screen, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { InputText as Component } from "./";
import { Icon } from "@washingtonpost/wpds-icon";
import Asset from "@washingtonpost/wpds-assets/asset/settings";
import { VisuallyHidden } from "@washingtonpost/wpds-visually-hidden";
import { styled } from "@washingtonpost/wpds-theme";

export default {
  title: "InputText",
  component: Component,
  argTypes: {
    label: {
      defaultValue: "Label",
    },
    type: {
      defaultValue: "text",
    },
    icon: {
      defaultValue: "left",
    },
    children: {
      options: ["None", "Settings Icon"],
      mapping: {
        None: undefined,
        "Settings Icon": (
          <Icon label="">
            <Asset />
          </Icon>
        ),
      },
    },
  },
};

const Template = (args) => <Component {...args} />;

export const InputText = Template.bind({});
InputText.parameters = {
  chromatic: { disableSnapshot: true },
};

const Column = styled("div", {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  gap: "$100",
});

const ChromaticTemplate = () => (
  <Column>
    <h4>Standard input</h4>
    <Component label="Label" />
    <Component label="Label" defaultValue="With value" />
    <Component
      label="Label"
      defaultValue="With value and"
      helperText="Helper text"
    />

    <h4>Icon Placements</h4>
    <Component label="Icon" defaultValue="Left" icon="left">
      <Icon label="">
        <Asset />
      </Icon>
    </Component>
    <Component
      label="Icon"
      defaultValue="Right"
      icon="right"
      buttonIconText="Settings"
    >
      <Icon label="">
        <Asset />
      </Icon>
    </Component>

    <h4>Types</h4>
    <Component label="Type" defaultValue="Search" type="search" />
    <Component label="Type" defaultValue="Url" type="url" />
    <Component label="Type" defaultValue="Tel" type="tel" />
    <Component label="Type" defaultValue="Email" type="email" />

    <h4>Behaviors</h4>
    <Component label="Behavior" defaultValue="Disabled" disabled />
    <Component
      label="Behavior"
      defaultValue="Error"
      error
      errorMessage="Error Message"
    />
    <Component label="Behavior" defaultValue="Success" success />
    <Component label="Behavior" defaultValue="Required" required />
    <Component
      label="Behavior"
      defaultValue="Overflow - Four score and seven years ago"
    />
  </Column>
);

export const Chromatic = ChromaticTemplate.bind({});

const InteractionsTemplate = (args) => (
  <Column>
    <Component label="Field 1" name="field-1" id="field-1" />
    <Component label="Field 2" name="field-2" id="field-2" />
    <Component
      label="Field 3"
      name="field-3"
      id="field-3"
      icon="right"
      onButtonIconClick={args.onButtonIconClick}
    >
      <>
        <VisuallyHidden>Settings</VisuallyHidden>
        <Icon>
          <Asset />
        </Icon>
      </>
    </Component>
  </Column>
);

export const Interactions = InteractionsTemplate.bind({});
Interactions.parameters = {
  chromatic: { disableSnapshot: true },
};

// Function to emulate pausing between interactions
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

Interactions.play = async ({ args }) => {
  // radix Label needs a tick to associate labels with inputs
  await sleep(0);
  const label1 = screen.getByText("Field 1");
  await expect(label1).toHaveStyle("font-size: 16px");
  await userEvent.type(screen.getByLabelText("Field 1"), "user text", {
    delay: 100,
  });
  await expect(label1).toHaveStyle("font-size: 12px");
  await userEvent.tab();
  await sleep(250);
  const label2 = screen.getByText("Field 2");
  await expect(label2).toHaveStyle("font-size: 12px");
  await userEvent.tab();
  await sleep(250);
  await expect(label2).toHaveStyle("font-size: 16px");
  await userEvent.click(screen.getByRole("button"));
  await expect(args.onButtonIconClick).toHaveBeenCalled();
};
