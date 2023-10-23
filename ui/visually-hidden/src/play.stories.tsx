import * as React from "react";
import { within, userEvent } from "@storybook/testing-library";
import { styled } from "@washingtonpost/wpds-ui-kit";
import { VisuallyHidden as Component } from "./visually-hidden";

import type { ComponentMeta, ComponentStory } from "@storybook/react";

const Disclaimer = styled("div", {
  color: "$primary",
});

export default {
  title: "Visually Hidden",
  component: Component,
} as ComponentMeta<typeof Component>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Template: ComponentStory<any> = (args, context) => (
  <React.Fragment>
    <Disclaimer>
      This story is used to test the visually hidden component.
    </Disclaimer>
    <Component
      as="a"
      href="#hello-world"
      css={{
        color: "$cta",
      }}
      data-testid={`skip-link`}
      onClick={function onClickHandler(event) {
        event.preventDefault();
      }}
      {...args}
    >
      Hello, World!
    </Component>
  </React.Fragment>
);

export const VisuallyHidden = Template.bind({});

VisuallyHidden.args = {};

VisuallyHidden.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await userEvent.tab();

  await userEvent.click(canvas.getByTestId("skip-link"));
};
