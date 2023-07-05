import * as React from "react";
import { ActionMenu as Component } from ".";
import { Button } from "@washingtonpost/wpds-button";
import { Box } from "@washingtonpost/wpds-box";
import { theme, styled } from "@washingtonpost/wpds-theme";
import { Icon } from "@washingtonpost/wpds-icon";
import { Check, Diamond, Bookmark, Print, DotsVertical, MixerVertical } from "@washingtonpost/wpds-assets";
import { screen, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

import type { ComponentStory } from "@storybook/react";

export default {
	title: "Action Menu",
	component: Component.Root,
	subcomponents: {
		ActionMenuCheckboxItem: Component.CheckboxItem,
		ActionMenuContent: Component.Content,
		ActionMenuGroup: Component.Group,
		ActionMenuItem: Component.Item,
		ActionMenuItemIndicator: Component.ItemIndicator,
		ActionMenuLabel: Component.Label,
		ActionMenuPortal: Component.Portal,
		ActionMenuRadioGroup: Component.RadioGroup,
		ActionMenuRadioItem: Component.RadioItem,
		ActionMenuRoot: Component.Root,
		ActionMenuSeparator: Component.Separator,
		ActionMenuSub: Component.Sub,
		ActionMenuSubContent: Component.SubContent,
		ActionMenuSubTrigger: Component.SubTrigger,
		ActionMenuTrigger: Component.Trigger
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

const SubMenusTemplate = (parameters) => (
	<Component.Root {...parameters}>
		<Component.Trigger asChild>
			<Button>Actions</Button>
		</Component.Trigger>
		<Component.Content>
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
					<Component.Item>
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

export const SubMenus = SubMenusTemplate.bind({});

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

const SimpleContent = (
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
);

const TriggersTemplate = (parameters) => (
	<Box css={{
		width: "80%",
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-evenly",
	}}>
		<Component.Root {...parameters}>
			<Component.Trigger asChild>
				<Button>Action button</Button>
			</Component.Trigger>
			<Component.Portal>
				{SimpleContent}
			</Component.Portal>
		</Component.Root>
		<Component.Root {...parameters}>
			<Component.Trigger asChild>
				<Button icon="center"><Icon label="Expand"><DotsVertical /></Icon></Button>
			</Component.Trigger>
			<Component.Portal>
				{SimpleContent}
			</Component.Portal>
		</Component.Root>
		<Component.Root {...parameters}>
			<Component.Trigger css={{ fontWeight: "bold", textDecoration: "underline" }} asChild>
				<a>Action Link</a>
			</Component.Trigger>
			<Component.Portal>
				{SimpleContent}
			</Component.Portal>
		</Component.Root>
		<Component.Root {...parameters}>
			<Component.Trigger asChild>
				<Icon label="Actions"><MixerVertical /></Icon>
			</Component.Trigger>
			<Component.Portal>
				{SimpleContent}
			</Component.Portal>
		</Component.Root>
	</Box>
);

export const Triggers = TriggersTemplate.bind({});

// Leading icon
// Leading icon with a check
// Trailing icons
// Trailing shortcuts

const ItemVariationsTemplate = (parameters) => (
	<Box css={{
		width: "80%",
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-evenly",
	}}>
		<Component.Root {...parameters}>
			<Component.Trigger asChild>
				<Button>Action button</Button>
			</Component.Trigger>
			<Component.Portal>
				<Component.Content>
					<Component.CheckboxItem>
						<Component.ItemIndicator>
							<Check />
						</Component.ItemIndicator>
						Show Bookmarks <div className="RightSlot">⌘+B</div>
					</Component.CheckboxItem>
					<Component.CheckboxItem>
						<Component.ItemIndicator>
							<Check />
						</Component.ItemIndicator>
						Checkbox Action
					</Component.CheckboxItem>
					<Component.Item>
						Action 3
					</Component.Item>
					<Component.Item>
						Action 4
					</Component.Item>
				</Component.Content>
			</Component.Portal>
		</Component.Root>
	</Box>
);

export const ItemVariations = ItemVariationsTemplate.bind({});

const InteractionsTemplate: ComponentStory<any> = (parameters) => (
	<Component.Root {...parameters}>
		<Component.Trigger asChild>
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
					Open Level 2
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
							Open Level 3
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

// Function to emulate pausing between interactions
function sleep(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

Interactions.play = async ({ parameters }) => {
	console.log("Start Interaction");

	const trigger = screen.getAllByText("Trigger")[0];
	await sleep(500);

	await userEvent.click(trigger);
	await sleep(500);

	const content = screen.getAllByText("Level 1 Action");
	const checkVisible = async function (item) {
		await expect(item).toBeVisible();
	};
	await expect(content.length).toEqual(2);

	content.forEach(item => {
		checkVisible(item);
	});

	const subTrigger1 = screen.getAllByText("Open Level 2")[0];

	await userEvent.click(subTrigger1);

	await sleep(500);

	const subContent1 = screen.getAllByText("Level 2 Action");

	await expect(subContent1.length).toEqual(3);

	subContent1.forEach(item => {
		checkVisible(item);
	});

	const subTrigger2 = screen.getAllByText("Open Level 3")[0];
	await userEvent.click(subTrigger2);
	const subContent2 = screen.getAllByText("Level 3 Action");

	await expect(subContent2.length).toEqual(2);
}
