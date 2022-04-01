import * as React from "react";
import { InputText as Component } from "./";
import { Icon } from "@washingtonpost/wpds-icon";
import Asset from "@washingtonpost/wpds-assets/asset/settings";
/*
import Asset from "@washingtonpost/wpds-assets/asset/add";
import { Icon } from "@washingtonpost/wpds-icon";
*/
export default {
  title: "InputText",
  component: Component,
  argTypes: {
    label: {
      defaultValue: "Label",
    },
  },
};

const Template = (args) => (
  <>
    <Component {...args} />
  </>
);

export const InputText = Template.bind({});

InputText.args = {};

const ChromaticTemplate = () => (
  <>
    <h4>Standard input</h4>
    <Component label="Label" />
    <Component label="Label" defaultValue="With value" />

    <h4>Icon Placements</h4>
    <Component label="Icon" defaultValue="Left" icon="left">
      <Icon label="">
        <Asset />
      </Icon>
    </Component>
    <Component label="Icon" defaultValue="Right" icon="right">
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
    <Component label="Behavior" defaultValue="Error" error />
    <Component label="Behavior" defaultValue="Success" success />
    <Component label="Behavior" defaultValue="Required" required />
    <Component
      label="Behavior"
      defaultValue="Overflow - Four score and seven years ago"
    />
  </>
);

export const Chromatic = ChromaticTemplate.bind({});
