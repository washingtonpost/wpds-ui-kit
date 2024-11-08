import * as React from "react";
import { LoadingState as Component } from ".";

import type { ComponentMeta, ComponentStory } from "@storybook/react";


export default {
	title: "LoadingState",
	component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
	<Component {...args} />
);

export const LoadingState = Template.bind({});

LoadingState.args = {};
