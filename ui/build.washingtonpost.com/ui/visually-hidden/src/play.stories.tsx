import * as React from "react";
import { Story, Meta } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";
import { styled } from "@washingtonpost/wpds-ui-kit";
import { VisuallyHidden } from "./visually-hidden";

const Disclaimer = styled("div", {
	color: "$primary",
});

export default {
	title: "VisuallyHidden",
	component: VisuallyHidden,
} as Meta<typeof VisuallyHidden>;

const Template: Story<typeof VisuallyHidden> = (args) => (
	<React.Fragment>
		<Disclaimer>
			This story is used to test the visually hidden component.
		</Disclaimer>
		<VisuallyHidden
			as="a"
			href="#hello-world"
			css={{
				color: "$cta",
			}}
			data-testid="skip-link"
			onClick={function onClickHandler(event: {
				preventDefault: () => void;
			}) {
				event.preventDefault();
			}}
			{...args}
		>
			Hello, World!
		</VisuallyHidden>
	</React.Fragment>
);

export const Play = Template.bind({});

Play.storyName = "👀";

Play.args = {};

Play.play = async ({ canvasElement }) => {
	const canvas = within(canvasElement);

	userEvent.tab();

	userEvent.click(canvas.getByTestId("skip-link"));
};
