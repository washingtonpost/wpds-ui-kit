import * as React from "react";

import { screen, userEvent } from "@storybook/testing-library";
import { expect, jest } from "@storybook/jest";
import type { ComponentMeta, ComponentStory } from "@storybook/react";

import { Icon } from "@washingtonpost/wpds-icon";
import { Button } from "@washingtonpost/wpds-button";
import Asset from "@washingtonpost/wpds-assets/asset/settings";
import { VisuallyHidden } from "@washingtonpost/wpds-visually-hidden";
import { styled, theme } from "@washingtonpost/wpds-theme";

import { InputText as Component } from "./";

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
    onButtonIconClick: jest.fn(),
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
  args: {
    label: "Label",
    type: "text",
    icon: "left",
    onButtonIconClick: jest.fn(),
  },
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args} />
);

export const InputText = Template.bind({});
InputText.parameters = {
  chromatic: { disableSnapshot: true },
};

export const AutoFocus = Template.bind({});

AutoFocus.args = {
  autoFocus: true,
};

const SynchContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: theme.space["050"],
});

const SynchTemplate = () => {
  const [val1, setVal1] = React.useState("Value");
  const [val2, setVal2] = React.useState("");

  return (
    <SynchContainer>
      <Component
        label="Value 1"
        name="v1"
        id="v1"
        value={val1}
        onChange={(e) => setVal1(e.target.value)}
      />
      <div>
        <Button onClick={() => setVal2(val1)}>Synch</Button>
        <Button onClick={() => setVal2("")}>Clear</Button>
      </div>
      <Component
        label="Value 2"
        name="v2"
        id="v2"
        value={val2}
        onChange={(e) => setVal2(e.target.value)}
      />
    </SynchContainer>
  );
};

export const InputSynch = SynchTemplate.bind({});
InputText.parameters = {
  chromatic: { disableSnapshot: true },
};

const Column = styled("div", {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  gap: "$100",
});

const Heading = styled("h2", {
  color: theme.colors.primary,
  fontSize: theme.fontSizes["100"],
  marginBlock: 0,
});

const ChromaticTemplate = () => (
  <Column>
    <Heading>Standard input</Heading>
    <Component label="Label" name={""} id={""} />
    <Component label="Label" defaultValue="With value" name={""} id={""} />
    <Component
      label="Label"
      defaultValue="With value and"
      helperText="Helper text"
      name={""}
      id={""}
    />

    <Heading>Icon Placements</Heading>
    <Component label="Icon" defaultValue="Left" icon="left" name={""} id={""}>
      <Icon label="">
        <Asset />
      </Icon>
    </Component>
    <Component
      label="Icon"
      defaultValue="Right"
      icon="right"
      buttonIconText="Settings"
      name={""}
      id={""}
    >
      <Icon label="">
        <Asset />
      </Icon>
    </Component>

    <Heading>Types</Heading>
    <Component
      label="Type"
      defaultValue="Search"
      type="search"
      name={""}
      id={""}
    />
    <Component label="Type" defaultValue="Url" type="url" name={""} id={""} />
    <Component label="Type" defaultValue="Tel" type="tel" name={""} id={""} />
    <Component
      label="Type"
      defaultValue="Email"
      type="email"
      name={""}
      id={""}
    />

    <Heading>Behaviors</Heading>
    <Component
      label="Behavior"
      defaultValue="Disabled"
      disabled
      name={""}
      id={""}
    />
    <Component
      label="Behavior"
      defaultValue="Error"
      error
      errorMessage="Error Message"
      name={""}
      id={""}
    />
    <Component
      label="Behavior"
      defaultValue="Success"
      success
      name={""}
      id={""}
    />
    <Component
      label="Behavior"
      defaultValue="Required"
      required
      name={""}
      id={""}
    />
    <Component
      label="Behavior"
      defaultValue="Overflow - Four score and seven years ago"
      name={""}
      id={""}
    />
    <Component
      label="Placeholder"
      placeholder="Example input"
      name={""}
      id={""}
    />
  </Column>
);

export const Chromatic = ChromaticTemplate.bind({});

const FormTemplate: ComponentStory<typeof Component> = (args) => {
  const [iconClicked, setIconClicked] = React.useState(false);
  const [submitClicked, setSubmitClicked] = React.useState(false);

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSubmitClicked(true);
        }}
      >
        <Component
          label="Form test"
          name="ft"
          id="ft"
          type="search"
          onButtonIconClick={() => {
            setIconClicked(true);
          }}
          buttonIconType={args.buttonIconType}
        />
      </form>
      <div>icon clicked: {iconClicked.toString()}</div>
      <div>submit clicked: {submitClicked.toString()}</div>
    </div>
  );
};

export const SearchTypeInForm = FormTemplate.bind({});

SearchTypeInForm.args = {
  buttonIconType: "button",
};

SearchTypeInForm.parameters = {
  chromatic: { disableSnapshot: true },
};

SearchTypeInForm.argTypes = {
  buttonIconText: { table: { disable: true } },
  disabled: { table: { disable: true } },
  error: { table: { disable: true } },
  label: { table: { disable: true } },
  icon: { table: { disable: true } },
  name: { table: { disable: true } },
  id: { table: { disable: true } },
  placeholder: { table: { disable: true } },
  required: { table: { disable: true } },
  success: { table: { disable: true } },
  value: { table: { disable: true } },
  defaultValue: { table: { disable: true } },
  type: { table: { disable: true } },
  css: { table: { disable: true } },
  errorMessage: { table: { disable: true } },
  helperText: { table: { disable: true } },
  children: { table: { disable: true } },
};

const InteractionsTemplate: ComponentStory<typeof Component> = (args) => (
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
        <Icon label={""}>
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
  const label1 = screen.getAllByText("Field 1")[0];
  await expect(label1).toHaveStyle("font-size: 16px");
  await userEvent.type(screen.getByLabelText("Field 1"), "user text", {
    delay: 100,
  });
  await expect(label1).toHaveStyle("font-size: 12px");
  await userEvent.tab();
  await sleep(250);
  const label2 = screen.getAllByText("Field 2")[0];
  await expect(label2).toHaveStyle("font-size: 12px");
  await userEvent.tab();
  await sleep(250);
  await expect(label2).toHaveStyle("font-size: 16px");
  await userEvent.click(screen.getAllByRole("button")[0]);
  await expect(args.onButtonIconClick).toHaveBeenCalled();
};

export const TypeSearch = Template.bind({});
TypeSearch.args = {
  type: "search",
};
TypeSearch.parameters = {
  chromatic: { disableSnapshot: true },
};

export const AutoFilledTypeText = Template.bind({});
AutoFilledTypeText.args = {
  type: "text",
  name: "my-name",
  autoComplete: "given-name",
  id: "my-name",
};
AutoFilledTypeText.parameters = {
  chromatic: { disableSnapshot: true },
};
