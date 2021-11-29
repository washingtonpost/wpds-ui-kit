import * as React from "react";
import { Story } from "@storybook/react";
import { Box } from "./box";

export default {
	title: "Box",
	component: Box,
};

const Template: Story = (args) => (
	<Box
		as="h1"
		css={{
			color: "$primary",
		}}
		{...args}
	>
		Hello, World!
	</Box>
);

export const Play = Template.bind({});

Play.storyName = "👀";

Play.args = {};
