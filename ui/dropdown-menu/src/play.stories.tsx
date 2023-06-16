import * as React from "react";
import { DropdownMenu as Component } from "./";

export default {
	title: "DropdownMenu",
	component: Component.Root,
	subcomponents: {
		DropdownMenuTrigger: Component.Trigger,

	}
};

const Template = (parameters) => (
	<Component.Root {...parameters} />
);

export const DropdownMenuRoot = Template.bind({});

// DropdownMenuRoot.parameters = {};

const TriggerTemplate = (args) => (
	<Component.Root {...args}>
		<Component.Trigger />
	</Component.Root>
);

export const DropdownMenuTrigger = TriggerTemplate.bind({});

// DropdownMenuRoot.parameters = {};