import * as React from "react";
import { ActionMenu as Component } from ".";
import { Button } from "@washingtonpost/wpds-button";
import { theme, styled } from "@washingtonpost/wpds-theme";
import { Icon } from "@washingtonpost/wpds-icon";
import { Diamond, Bookmark, Print } from "@washingtonpost/wpds-assets";
import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { screen, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

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
};

const LeftIcon = styled(Icon, {
  color: theme.colors.accessible,
  fill: theme.colors.primary,
  display: "flex",
  variants: {
    isDisabled: {
      true: {
        color: "inherit",
      },
    },
  },
  marginRight: theme.sizes["050"]
});

const LeftIconPlaceholder = styled("div", {
  width: theme.sizes["100"],
  marginRight: theme.sizes["050"],
});

const Template = (parameters) => (
	<Component.Root {...parameters}>
		<Component.Trigger>
			<Button>Actions</Button>
		</Component.Trigger>
		<Component.Content density="loose">
			<Component.Item>
				<LeftIconPlaceholder />
				Action 1
			</Component.Item>
			<Component.Item>
				<LeftIcon label="Diamond"><Diamond /></LeftIcon>
				Action 2
			</Component.Item>
			<Component.Sub>
				<Component.SubTrigger>
					<LeftIconPlaceholder />
					More actions
				</Component.SubTrigger>
				<Component.SubContent>
					<Component.Item disabled>
						<LeftIcon label="Diamond"><Diamond /></LeftIcon>
						Action 3
					</Component.Item>
					<Component.Item >
						<LeftIcon label="Bookmark"><Bookmark /></LeftIcon>
						Action 4
					</Component.Item>
					<Component.Item>
						<LeftIcon label="Print"><Print /></LeftIcon>
						Action 5
					</Component.Item>
					<Component.Sub>
						<Component.SubTrigger>
							<LeftIconPlaceholder />
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
				<Component.Item>
					Action 1
				</Component.Item>
				<Component.Item>
					Action 2
				</Component.Item>
				<Component.Item>
					Action 3
				</Component.Item>
				<Component.Item>
					Action 4
				</Component.Item>
			</Component.Content>
		</Component.Portal>
	</Component.Root>
);

export const ActionMenuPortal = PortalTemplate.bind({});

const InteractionsTemplate: ComponentStory<any> = () => (
	<Component.Root>
		<Component.Trigger>
			<Button>Trigger</Button>
		</Component.Trigger>
		<Component.Content density="loose">
			<Component.Item>
				<LeftIconPlaceholder />
				Level 1 Action
			</Component.Item>
			<Component.Item>
				<LeftIcon label="Diamond"><Diamond /></LeftIcon>
				Level 1 Action
			</Component.Item>
			<Component.Sub>
				<Component.SubTrigger>
					<LeftIconPlaceholder />
					More actions
				</Component.SubTrigger>
				<Component.SubContent>
					<Component.Item disabled>
						<LeftIcon label="Diamond"><Diamond /></LeftIcon>
						Level 2 Action
					</Component.Item>
					<Component.Item >
						<LeftIcon label="Bookmark"><Bookmark /></LeftIcon>
						Level 2 Action
					</Component.Item>
					<Component.Item>
						<LeftIcon label="Print"><Print /></LeftIcon>
						Level 2 Action
					</Component.Item>
					<Component.Sub>
						<Component.SubTrigger>
							<LeftIconPlaceholder />
							Even more actions
						</Component.SubTrigger>
						<Component.SubContent>
							<Component.Item>
								Level 3 Action
							</Component.Item>
							<Component.Item>
								Level 3 Action
							</Component.Item>
						</Component.SubContent>
					</Component.Sub>
				</Component.SubContent>
			</Component.Sub>
		</Component.Content>
	</Component.Root>
);

export const Interactions = InteractionsTemplate.bind({})
Interactions.parameters = {
  chromatic: { disableSnapshot: true },
};

// Function to emulate pausing between interactions
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

Interactions.play = async () => {
	const trigger = screen.getAllByText("Trigger")[0];
	await sleep(500);
	await userEvent.click(trigger);
	const content = screen.getAllByText("Level 1 Action");

	const checkVisible = async function(item) {
		await expect(item).toBeVisible();
	};

	await expect(content.length).toEqual(2);
	content.forEach(item => {
		checkVisible(item);
	})

	await sleep(500);
	const subTrigger1 = screen.getAllByText("More actions")[0];
	await userEvent.click(subTrigger1);
	const subContent1 = screen.getAllByText("Level 2 Action");

	await expect(subContent1.length).toEqual(3);
	subContent1.forEach(item => {
		checkVisible(item);
	})

}

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