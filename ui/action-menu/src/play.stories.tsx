import * as React from "react";
import { ActionMenu as Component } from ".";
import { Button } from "@washingtonpost/wpds-button";
import { Diamond, ChevronRight } from "@washingtonpost/wpds-assets";
import  { theme } from "@washingtonpost/wpds-theme";

export default {
	title: "ActionMenu",
	component: Component.Root,
	subcomponents: {
		ActionMenuTrigger: Component.Trigger,
		ActionMenuContent: Component.Content,
		ActionMenuItem: Component.Item,
	}
};

const Template = (parameters) => (
	<Component.Root {...parameters}>
		<Component.Trigger>
			<Button>Actions</Button>
		</Component.Trigger>
		<Component.Content>
			<Component.Item leftIcon={<Diamond />} rightIcon={<ChevronRight />}>
				Action 1
			</Component.Item>
			<Component.Item>
				Action 2
			</Component.Item>
			<Component.Item leftIcon={<Diamond />}>
				Action 3
			</Component.Item>
			<Component.Item rightIcon={<ChevronRight />}>
				Action 3
			</Component.Item>
		</Component.Content>
	</Component.Root>
);

export const ActionMenuRoot = Template.bind({});

/*
// ActionMenuRoot.parameters = {};

const TriggerTemplate = (args) => (
	<Component.Root {...args}>
		<Component.Trigger />
	</Component.Root>
);

export const ActionMenuTrigger = TriggerTemplate.bind({});

// ActionMenuRoot.parameters = {};

const ContentTemplate = (args) => (
	<Component.Root {...args}>
		<Component.Content />
	</Component.Root>
);

export const ActionMenuContent = ContentTemplate.bind({});
*/