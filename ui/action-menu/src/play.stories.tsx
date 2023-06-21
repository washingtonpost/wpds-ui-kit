import * as React from "react";
import { ActionMenu as Component } from ".";
import { Button } from "@washingtonpost/wpds-button";
import { Diamond, ChevronRight } from "@washingtonpost/wpds-assets";

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
			<Component.Item>
				Action 1
			</Component.Item>
			<Component.Item leftIcon={<Diamond aria-label="Diamond" />}>
				Action 2
			</Component.Item>
			<Component.Item>
				Super suuuuuupppppper looooonggggggg acttionnnnnnnnnn
			</Component.Item>
			<Component.Sub>
				<Component.SubTrigger>
					More actions
				</Component.SubTrigger>
				<Component.SubContent>
					<Component.Item>
						Action 3
					</Component.Item>
					<Component.Item>
						Action 4
					</Component.Item>
					<Component.Item>
						Action 5
					</Component.Item>
					<Component.Item>
						Action 6
					</Component.Item>
					<Component.Item>
						Action 7
					</Component.Item>
					<Component.Item>
						Action 8
					</Component.Item>
					<Component.Item>
						Action 9
					</Component.Item>
					<Component.Item>
						Action 10 
					</Component.Item>
					<Component.Sub>
						<Component.SubTrigger>
							Even more actions
						</Component.SubTrigger>
						<Component.SubContent>
							<Component.Item>
								Action 11 
							</Component.Item>
							<Component.Item>
								Action 12 
							</Component.Item>
						</Component.SubContent>
					</Component.Sub>
				</Component.SubContent>
			</Component.Sub>
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