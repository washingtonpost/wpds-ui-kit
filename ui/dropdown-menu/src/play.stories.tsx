import * as React from "react";
import { DropdownMenu as Component } from "./";
import { Button } from "@washingtonpost/wpds-button";

export default {
	title: "DropdownMenu",
	component: Component.Root,
	subcomponents: {
		DropdownMenuTrigger: Component.Trigger,
		DropdownMenuContent: Component.Content,
		DropdownMenuArrow: Component.Arrow,
	}
};

const Template = (parameters) => (
	<Component.Root {...parameters}>
		<Component.Trigger>
			<Button>Actions</Button>
		</Component.Trigger>
		<Component.Content>
			<Component.Arrow />
			<p>Action 1</p>
			<p>Action 2</p>
			<p>Action 3</p>
		</Component.Content>
	</Component.Root>
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

const ContentTemplate = (args) => (
	<Component.Root {...args}>
		<Component.Content />
	</Component.Root>
);
export const DropdownMenuContent = ContentTemplate.bind({});