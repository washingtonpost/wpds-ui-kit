import * as React from "react";
import { ActionMenu as Component } from ".";
import { Button } from "@washingtonpost/wpds-button";
import { Diamond, ChevronRight, Bookmark, Print } from "@washingtonpost/wpds-assets";
import type { ComponentMeta, ComponentStory } from "@storybook/react";

// import { expect } from "@storybook/jest";
// import { within, userEvent } from "@storybook/testing-library";

export default {
	title: "ActionMenu",
	component: Component.Root,
	subcomponents: {
		ActionMenuTrigger: Component.Trigger,
		ActionMenuContent: Component.Content,
		ActionMenuItem: Component.Item,
		ActionMenuPortal: Component.Portal,
		ActionMenuSub: Component.Sub,
		ActionMenuSubContent: Component.SubContent,
		ActionMenuSubTrigger: Component.SubTrigger,
	}
} as ComponentMeta<typeof Component.Root>;

const Template: ComponentStory<typeof Component.Root> = (parameters) => (
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
			<Component.Sub>
				<Component.SubTrigger>
					More actions
				</Component.SubTrigger>
				<Component.SubContent>
					<Component.Item leftIcon={<Diamond aria-label="Diamond" />} disabled>
						Action 3
					</Component.Item>
					<Component.Item leftIcon={<Bookmark aria-label="Bookmark" />}>
						Action 4
					</Component.Item>
					<Component.Item leftIcon={<Print aria-label="Print" />}>
						Action 5
					</Component.Item>
					<Component.Sub>
						<Component.SubTrigger>
							Even more actions
						</Component.SubTrigger>
						<Component.SubContent>
							<Component.Item>
								Action 6
							</Component.Item>
							<Component.Item>
								Action 7
							</Component.Item>
						</Component.SubContent>
					</Component.Sub>
				</Component.SubContent>
			</Component.Sub>
		</Component.Content>
	</Component.Root>
);

export const ActionMenuRoot = Template.bind({});

const PortalTemplate = (parameters) => (
	<Component.Root {...parameters}>
		<Component.Trigger asChild>
			<Button>Actions</Button>
		</Component.Trigger>
		<Component.Portal>
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
		</Component.Portal>
	</Component.Root>
);

export const ActionMenuPortal = PortalTemplate.bind({});

ActionMenuRoot.args = {

}

ActionMenuRoot.play = async ({ args, canvasElement }) => {
	// const canvas = within(canvasElement);
	// await userEvent.click(canvas.getByTestId("light-skip-link"));
	// await expect(args.onClick).toHaveBeenCalled();
};


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