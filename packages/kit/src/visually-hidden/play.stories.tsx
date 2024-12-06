import React from "react";
import { within, userEvent } from "@storybook/test";
import { styled, theme } from "../theme";
import { VisuallyHidden } from "./visually-hidden";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof VisuallyHidden> = {
  title: "VisuallyHidden",
  component: VisuallyHidden,
};
export default meta;

type Story = StoryObj<typeof meta>;

const Disclaimer = styled("div", {
  color: "$primary",
});

export const Default: Story = {
  render: (args, context) => (
    <>
      <Disclaimer>
        This story is used to test the visually hidden component.
      </Disclaimer>
      <VisuallyHidden
        as="a"
        href="#hello-world"
        css={{
          color: theme.colors.cta,
        }}
        data-testid={`${context.theme}-skip-link`}
        onClick={function onClickHandler(event) {
          event.preventDefault();
        }}
      >
        Hello, World!
      </VisuallyHidden>
    </>
  ),
};

Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await userEvent.tab();

  await userEvent.click(canvas.getByTestId("light-skip-link"));
};
