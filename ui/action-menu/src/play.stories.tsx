import * as React from "react";
import { ActionMenu as Component } from ".";
import { Button } from "@washingtonpost/wpds-button";
import { Box } from "@washingtonpost/wpds-box";
import { styled, theme } from "@washingtonpost/wpds-theme";
import { Icon } from "@washingtonpost/wpds-icon";
import {
  Bookmark,
  Check,
  Diamond,
  DotsVertical,
  MixerVertical,
  Print,
  Copy,
} from "@washingtonpost/wpds-assets";
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
    ActionMenuTrigger: Component.Trigger,
  },
};

const RightIcon = styled("div", {
  marginLeft: "auto",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
});

const LeftIcon = styled("div", {
  paddingRight: theme.space["050"],
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
});

const SimpleContent = (
  <Component.Content>
    <Component.Item>Action 1</Component.Item>
    <Component.Item>Action 2</Component.Item>
    <Component.Item>Action 3</Component.Item>
    <Component.Item>Action 4</Component.Item>
  </Component.Content>
);

const TriggersTemplate = (parameters) => (
  <Box
    css={{
      width: "80%",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-evenly",
    }}
  >
    <Component.Root {...parameters}>
      <Component.Trigger asChild>
        <Button>Action button</Button>
      </Component.Trigger>
      <Component.Portal>{SimpleContent}</Component.Portal>
    </Component.Root>
    <Component.Root {...parameters}>
      <Component.Trigger asChild>
        <Button icon="center">
          <Icon label="Expand">
            <DotsVertical />
          </Icon>
        </Button>
      </Component.Trigger>
      <Component.Portal>{SimpleContent}</Component.Portal>
    </Component.Root>
    <Component.Root {...parameters}>
      <Component.Trigger
        css={{ fontWeight: "bold", textDecoration: "underline" }}
        asChild
      >
        <a>Action Link</a>
      </Component.Trigger>
      <Component.Portal>{SimpleContent}</Component.Portal>
    </Component.Root>
    <Component.Root {...parameters}>
      <Component.Trigger asChild>
        <Icon label="Actions">
          <MixerVertical />
        </Icon>
      </Component.Trigger>
      <Component.Portal>{SimpleContent}</Component.Portal>
    </Component.Root>
  </Box>
);

export const Triggers = TriggersTemplate.bind({});

// Leading icon
// Leading icon with a check
// Trailing icons
// Trailing shortcuts

const Circle = (props) => (
  <svg {...props} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="32" />
  </svg>
);

const ItemVariationsTemplate = (parameters) => {
  const [checkedA, setCheckedA] = React.useState(true);
  const [checkedB, setCheckedB] = React.useState(true);
  const [checkedC, setCheckedC] = React.useState(true);
  const [checkedD, setCheckedD] = React.useState(true);

  const [radioChecked, setRadioChecked] = React.useState("radio2");

  return (
    <Component.Root {...parameters}>
      <Component.Trigger asChild>
        <Button>Action button</Button>
      </Component.Trigger>
      <Component.Portal>
        <Component.Content density="compact">
          <Component.Label>Label</Component.Label>
          <Component.Item>
            <LeftIcon>
              <Icon label="check">
                <Copy />
              </Icon>
            </LeftIcon>
            Copy Items
          </Component.Item>
          <Component.Group>
            <Component.Label>Checkbox Item Examples</Component.Label>
            <Component.CheckboxItem
              checked={checkedA}
              onCheckedChange={setCheckedA}
            >
              <Component.ItemIndicator>
                <Icon label="check">
                  <Check />
                </Icon>
              </Component.ItemIndicator>
              {/*
							<LeftIcon>
								<Icon label="bookmark" size="100">
									<Bookmark />
								</Icon>
							</LeftIcon>
							*/}
              Left
            </Component.CheckboxItem>
            <Component.CheckboxItem
              checked={checkedB}
              onCheckedChange={setCheckedB}
            >
              <Component.ItemIndicator>
                <Icon label="check" size="100">
                  <Check />
                </Icon>
              </Component.ItemIndicator>
              Neither
            </Component.CheckboxItem>
            <Component.CheckboxItem
              checked={checkedC}
              onCheckedChange={setCheckedC}
            >
              <Component.ItemIndicator>
                <Icon label="check">
                  <Check />
                </Icon>
              </Component.ItemIndicator>
              Right
              <RightIcon>
                <Icon label="bell" size="100">
                  <Bookmark />
                </Icon>
              </RightIcon>
            </Component.CheckboxItem>
            <Component.CheckboxItem
              checked={checkedD}
              onCheckedChange={setCheckedD}
            >
              <Component.ItemIndicator>
                <Icon label="check">
                  <Check />
                </Icon>
              </Component.ItemIndicator>
              {/*
							<LeftIcon>
								<Icon label="bell" size="100">
									<Bookmark />
								</Icon>
							</LeftIcon>
							*/}
              Both
              <RightIcon>
                <Icon label="bell" size="100">
                  <Bookmark />
                </Icon>
              </RightIcon>
            </Component.CheckboxItem>
          </Component.Group>
          <Component.Label>Radio Group Example</Component.Label>
          <Component.RadioGroup
            value={radioChecked}
            onValueChange={setRadioChecked}
          >
            <Component.RadioItem value="radio1">
              <Component.ItemIndicator>
                <Icon label="radio 1">
                  <Circle />
                </Icon>
              </Component.ItemIndicator>
              Radio 1
            </Component.RadioItem>
            <Component.RadioItem value="radio2">
              <Component.ItemIndicator>
                <Icon label="radio 2">
                  <Circle />
                </Icon>
              </Component.ItemIndicator>
              Radio 2
            </Component.RadioItem>
            <Component.RadioItem value="radio3">
              <Component.ItemIndicator>
                <Icon label="radio 3">
                  <Circle />
                </Icon>
              </Component.ItemIndicator>
              Radio 2
            </Component.RadioItem>
          </Component.RadioGroup>
          <Component.Sub>
            <Component.SubTrigger>More actions</Component.SubTrigger>
            <Component.SubContent>
              <Component.Item disabled>
                <LeftIcon>
                  <Icon label="bookmark" size="100">
                    <Bookmark />
                  </Icon>
                </LeftIcon>
                Bookmarks
              </Component.Item>
              <Component.Item>
                <LeftIcon>
                  <Icon label="bookmark" size="100">
                    <Bookmark />
                  </Icon>
                </LeftIcon>
                Bookmarks
              </Component.Item>
              <Component.Item>Bookmarks</Component.Item>
              <Component.Sub>
                <Component.SubTrigger>Even more actions</Component.SubTrigger>
                <Component.SubContent>
                  <Component.Item>Action X</Component.Item>
                  <Component.Item>Action Z</Component.Item>
                </Component.SubContent>
              </Component.Sub>
            </Component.SubContent>
          </Component.Sub>

          <Component.Sub>
            <Component.SubTrigger>More actions</Component.SubTrigger>
            <Component.SubContent>
              <Component.Item disabled>
                <LeftIcon>
                  <Icon label="Diamond">
                    <Circle />
                  </Icon>
                </LeftIcon>
                Action 7
              </Component.Item>
              <Component.Item>
                <LeftIcon>
                  <Icon label="Bookmark">
                    <Circle />
                  </Icon>
                </LeftIcon>
                Action 8
              </Component.Item>
              <Component.Item>
                <LeftIcon>
                  <Icon label="Print">
                    <Circle />
                  </Icon>
                </LeftIcon>
                Action 9
              </Component.Item>
              <Component.Sub>
                <Component.SubTrigger>Even more actions</Component.SubTrigger>
                <Component.SubContent>
                  <Component.Item>Action X</Component.Item>
                  <Component.Item>Action Z</Component.Item>
                </Component.SubContent>
              </Component.Sub>
            </Component.SubContent>
          </Component.Sub>
          <Component.Item>Action 4</Component.Item>

          <Component.Sub>
            <Component.SubTrigger>More actions</Component.SubTrigger>
            <Component.SubContent>
              <Component.Item disabled>
                <LeftIcon>
                  <Icon label="Diamond">
                    <Circle />
                  </Icon>
                </LeftIcon>
                Action 7
              </Component.Item>
              <Component.Item>
                <LeftIcon>
                  <Icon label="Bookmark">
                    <Circle />
                  </Icon>
                </LeftIcon>
                Action 8
              </Component.Item>
              <Component.Item>
                <LeftIcon>
                  <Icon label="Print">
                    <Circle />
                  </Icon>
                </LeftIcon>
                Action 9
              </Component.Item>
              <Component.Sub>
                <Component.SubTrigger>Even more actions</Component.SubTrigger>
                <Component.SubContent>
                  <Component.Item>Action X</Component.Item>
                  <Component.Item>Action Z</Component.Item>
                </Component.SubContent>
              </Component.Sub>
            </Component.SubContent>
          </Component.Sub>
        </Component.Content>
      </Component.Portal>
    </Component.Root>
  );
};

export const ItemVariations = ItemVariationsTemplate.bind({});

const InteractionsTemplate: ComponentStory<any> = (parameters) => (
  <Component.Root {...parameters}>
    <Component.Trigger asChild>
      <Button>Trigger</Button>
    </Component.Trigger>
    <Component.Content density="loose">
      <Component.Item>Level 1 Action</Component.Item>
      <Component.Item>
        <LeftIcon>
          <Icon label="Diamond">
            <Diamond />
          </Icon>
        </LeftIcon>
        Level 1 Action
      </Component.Item>
      <Component.Sub>
        <Component.SubTrigger>Open Level 2</Component.SubTrigger>
        <Component.SubContent>
          <Component.Item disabled>
            <LeftIcon>
              <Icon label="Diamond">
                <Diamond />
              </Icon>
            </LeftIcon>
            Level 2 Action
          </Component.Item>
          <Component.Item>
            <LeftIcon>
              <Icon label="Bookmark">
                <Bookmark />
              </Icon>
            </LeftIcon>
            Level 2 Action
          </Component.Item>
          <Component.Item>
            <LeftIcon>
              <Icon label="Print">
                <Print />
              </Icon>
            </LeftIcon>
            Level 2 Action
          </Component.Item>
          <Component.Sub>
            <Component.SubTrigger>Open Level 3</Component.SubTrigger>
            <Component.SubContent>
              <Component.Item>Level 3 Action</Component.Item>
              <Component.Item>Level 3 Action</Component.Item>
            </Component.SubContent>
          </Component.Sub>
        </Component.SubContent>
      </Component.Sub>
    </Component.Content>
  </Component.Root>
);

export const Interactions = InteractionsTemplate.bind({});

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

  content.forEach((item) => {
    checkVisible(item);
  });

  const subTrigger1 = screen.getAllByText("Open Level 2")[0];

  await userEvent.click(subTrigger1);

  await sleep(500);

  const subContent1 = screen.getAllByText("Level 2 Action");

  await expect(subContent1.length).toEqual(3);

  subContent1.forEach((item) => {
    checkVisible(item);
  });

  const subTrigger2 = screen.getAllByText("Open Level 3")[0];
  await userEvent.click(subTrigger2);
  const subContent2 = screen.getAllByText("Level 3 Action");

  await expect(subContent2.length).toEqual(2);
};
