import * as React from "react";
import { ActionMenu as Component } from ".";
import { Button } from "@washingtonpost/wpds-button";
import { Icon } from "@washingtonpost/wpds-icon";

// import { Diamond, ChevronRight, Bookmark, Print } from "@washingtonpost/wpds-assets";
import { Check } from "@washingtonpost/wpds-assets";
import type { ComponentMeta, ComponentStory } from "@storybook/react";

import { expect } from "@storybook/jest";
import { within, userEvent } from "@storybook/testing-library";
import { theme, styled } from "@washingtonpost/wpds-theme";
import { Diamond, ChevronRight, Bookmark, Print } from "@washingtonpost/wpds-assets";

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

const Template = (parameters, context) => (
	<Component.Root {...parameters}>
		<Component.Trigger asChild>
			<Button>{`${context.theme} trigger`}</Button>
		</Component.Trigger>
		<Component.Content density="loose">
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

export const ActionMenuRoot = Template.bind({});

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
					Action 3
				</Component.Item>
			</Component.Content>
		</Component.Portal>
	</Component.Root>
);

export const ActionMenuPortal = PortalTemplate.bind({});

export const ActionMenuInteractions = Template.bind({});

ActionMenuInteractions.args = {
	// open: false,
}

ActionMenuInteractions.play = async ({ args, canvasElement }) => {
	const canvas = within(canvasElement);

	await userEvent.click(canvas.getByText("light trigger"));

	await expect(args.onOpenChange).toHaveBeenCalled();

	// await userEvent.click(canvasElement);
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