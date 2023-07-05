import * as React from "react";
import { ActionMenu as Component } from ".";
import { Button } from "@washingtonpost/wpds-button";
import { Icon } from "@washingtonpost/wpds-icon";

import type { ComponentMeta, ComponentStory } from "@storybook/react";

import { Box } from "@washingtonpost/wpds-box";
import { theme, styled } from "@washingtonpost/wpds-theme";
import { Check, Diamond, Bookmark, Print, DotsVertical, MixerVertical } from "@washingtonpost/wpds-assets";
import { expect } from "@storybook/jest";
import { screen, userEvent } from "@storybook/testing-library";

export default {
	title: "Action Menu",
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

const SubMenusTemplate = (parameters, context) => (
	<Component.Root {...parameters}>
		<Component.Trigger asChild>
			<Button>{`${context.theme} trigger`}</Button>
		</Component.Trigger>
		<Component.Content>
			<Component.Item>
				<LeftIconPlaceholder />
				Action 1
			</Component.Item>
			<Component.Item>
				<LeftIcon label="Diamond"><Diamond /></LeftIcon>
				Action 2
			</Component.Item >
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
				</Component.SubContent >
			</Component.Sub >
		</Component.Content >
	</Component.Root >
);

export const SubMenus = SubMenusTemplate.bind({});

const StyledActionMenuItem = styled("span", {
	display: "flex",
	flexDirection: "row",
	justifyContent: "flex-start",
	width: "100%",
})

const EverythingTemplate: ComponentStory<typeof Component.Root> = (parameters, context) => {
	const [bookmarksChecked, setBookmarksChecked] = React.useState(true);
	const [urlsChecked, setUrlsChecked] = React.useState(false);
	const [person, setPerson] = React.useState('pedro');

	return (
		<Component.Root>
			<Component.Trigger asChild>
				<Button aria-label="Customise options">
					<StyledActionMenuItem>Hello <div>boop</div></StyledActionMenuItem>
				</Button>
			</Component.Trigger>
			<Component.Portal>
				<Component.Content sideOffset={5}>
					<Component.Label>Initial Label</Component.Label>
					<Component.Item>
						<StyledActionMenuItem>New Tab <div>⌘+T</div></StyledActionMenuItem>
					</Component.Item>
					<Component.Item>
						<StyledActionMenuItem>New Window <div>⌘+N</div></StyledActionMenuItem>
					</Component.Item>
					<Component.Item disabled>
						<StyledActionMenuItem>New Private Window <div>⇧+⌘+N</div></StyledActionMenuItem>
					</Component.Item>
					<Component.Sub>
						<Component.SubTrigger>
							More Tools
							<div>
								<div>boop</div>
							</div>
						</Component.SubTrigger>
						<Component.Portal>
							<Component.SubContent
								sideOffset={2}
								alignOffset={-5}
							>
								<Component.Item>
									<StyledActionMenuItem>Save Page As… <div>⌘+S</div></StyledActionMenuItem>
								</Component.Item>
								<Component.Item>
									<StyledActionMenuItem>Create Shortcut…</StyledActionMenuItem>
								</Component.Item>
								<Component.Item>
									<StyledActionMenuItem>Create Shortcut…</StyledActionMenuItem>
									Name Window…</Component.Item>
								<Component.Separator />
								<Component.Item>
									<StyledActionMenuItem>Developer Tools</StyledActionMenuItem>
								</Component.Item>
							</Component.SubContent>
						</Component.Portal>
					</Component.Sub>
					<Component.Separator />
					<Component.CheckboxItem
						checked={bookmarksChecked}
						onCheckedChange={setBookmarksChecked}
					>
						<StyledActionMenuItem>
							<Component.ItemIndicator>
								<Icon label="checked"><Check /></Icon>
							</Component.ItemIndicator>
							Show Bookmarks <div>⌘+B</div>
						</StyledActionMenuItem>

					</Component.CheckboxItem>
					<Component.CheckboxItem
						checked={urlsChecked}
						onCheckedChange={setUrlsChecked}
					>
						<StyledActionMenuItem>
							<Component.ItemIndicator>
								<Component.ItemIndicator>
									<Icon label="checked"><Check /></Icon>
								</Component.ItemIndicator>
							</Component.ItemIndicator>
							Show Full URLs
						</StyledActionMenuItem>
					</Component.CheckboxItem>
					<Component.Separator />
					<Component.Label>People</Component.Label>
					<Component.RadioGroup value={person} onValueChange={setPerson}>
						<Component.RadioItem value="pedro">
							<StyledActionMenuItem>
								<Component.ItemIndicator>
									<Component.ItemIndicator>
										<Icon label="checked"><Check /></Icon>
									</Component.ItemIndicator>
								</Component.ItemIndicator>
								Pedro Duarte
							</StyledActionMenuItem>
						</Component.RadioItem>
						<Component.RadioItem value="colm">
							<StyledActionMenuItem>
								<Component.ItemIndicator>
									<Component.ItemIndicator>
										<Icon label="checked"><Check /></Icon>
									</Component.ItemIndicator>
								</Component.ItemIndicator>
								Colm Tuite
							</StyledActionMenuItem>
						</Component.RadioItem>
					</Component.RadioGroup>
					{/* <Component.Arrow className="ComponentArrow" /> */}
				</Component.Content>
			</Component.Portal>
		</Component.Root>
	);
}

export const ActionMenuEverything = EverythingTemplate.bind({});

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
				</Component.Item >
			</Component.Content >
		</Component.Portal >
	</Component.Root >
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