import * as React from "react";
import { ActionMenu as Component } from ".";
import { Button } from "@washingtonpost/wpds-button";
import { Box } from "@washingtonpost/wpds-box";
import { Icon } from "@washingtonpost/wpds-icon";
import {
  Bookmark,
  Diamond,
  DotsVertical,
  MixerVertical,
  Print,
  Copy,
} from "@washingtonpost/wpds-assets";
import { screen, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

import type { StoryFn } from "@storybook/react";

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

const SimpleContent = (
  <Component.Content>
    <Component.Sub>
      <Component.SubTrigger>Action 1</Component.SubTrigger>
      <Component.SubContent>
        <Component.Sub>
          <Component.SubTrigger>Action 1.1</Component.SubTrigger>
          <Component.SubContent>
            <Component.Item>Action 1.1.1</Component.Item>
            <Component.Item>Action 1.1.2</Component.Item>
            <Component.Item>Action 1.1.3</Component.Item>
            <Component.Item>Action 1.1.4</Component.Item>
          </Component.SubContent>
        </Component.Sub>
        <Component.Item>Action 1.2</Component.Item>
        <Component.Item>Action 1.3</Component.Item>
        <Component.Item>Action 1.4</Component.Item>
      </Component.SubContent>
    </Component.Sub>
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

export const Triggers = {
  render: TriggersTemplate,
};

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
        <Component.Content>
          <Component.Label>Label</Component.Label>
          <Component.Item>
            <Component.Icon side="left">
              <Icon label="check">
                <Copy />
              </Icon>
            </Component.Icon>
            Copy Items
          </Component.Item>
          <Component.Group>
            <Component.Label>Checkbox Item Examples</Component.Label>
            <Component.CheckboxItem
              checked={checkedA}
              onCheckedChange={setCheckedA}
            >
              <Component.ItemIndicator />
              {/*
							<Component.Icon side="left">
								<Icon label="bookmark" size="100">
									<Bookmark />
								</Icon>
							</Component.Icon>
							*/}
              Left
            </Component.CheckboxItem>
            <Component.CheckboxItem
              checked={checkedB}
              onCheckedChange={setCheckedB}
            >
              <Component.ItemIndicator />
              Neither
            </Component.CheckboxItem>
            <Component.CheckboxItem
              checked={checkedC}
              onCheckedChange={setCheckedC}
            >
              <Component.ItemIndicator />
              Right
              <Component.Icon side="right">
                <Icon label="bell" size="100">
                  <Bookmark />
                </Icon>
              </Component.Icon>
            </Component.CheckboxItem>
            <Component.CheckboxItem
              checked={checkedD}
              onCheckedChange={setCheckedD}
            >
              <Component.ItemIndicator />
              Both
              <Component.Icon side="right">
                <Icon label="bell" size="100">
                  <Bookmark />
                </Icon>
              </Component.Icon>
            </Component.CheckboxItem>
          </Component.Group>
          <Component.Label>Radio Group Example</Component.Label>
          <Component.RadioGroup
            value={radioChecked}
            onValueChange={setRadioChecked}
          >
            <Component.RadioItem value="radio1">
              <Component.ItemIndicator />
              Radio 1
            </Component.RadioItem>
            <Component.RadioItem value="radio2">
              <Component.ItemIndicator />
              Radio 2
            </Component.RadioItem>
            <Component.RadioItem value="radio3">
              <Component.ItemIndicator />
              Radio 3
            </Component.RadioItem>
          </Component.RadioGroup>
          <Component.Sub>
            <Component.SubTrigger>More actions</Component.SubTrigger>
            <Component.SubContent>
              <Component.Item disabled>
                <Component.Icon side="left">
                  <Icon label="bookmark" size="100">
                    <Bookmark />
                  </Icon>
                </Component.Icon>
                Bookmarks
              </Component.Item>
              <Component.Item>
                <Component.Icon side="left">
                  <Icon label="bookmark" size="100">
                    <Bookmark />
                  </Icon>
                </Component.Icon>
                Bookmarks
              </Component.Item>
              <Component.Item>
                <Component.Icon side="left"></Component.Icon>
                Bookmarks
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
          <Component.Sub>
            <Component.SubTrigger>More actions</Component.SubTrigger>
            <Component.SubContent>
              <Component.Item disabled>
                <Component.Icon side="left">
                  <Icon label="Diamond">
                    <Circle />
                  </Icon>
                </Component.Icon>
                Action 7
              </Component.Item>
              <Component.Item>
                <Component.Icon side="left">
                  <Icon label="Bookmark">
                    <Circle />
                  </Icon>
                </Component.Icon>
                Action 8
              </Component.Item>
              <Component.Item>
                <Component.Icon side="left">
                  <Icon label="Print">
                    <Circle />
                  </Icon>
                </Component.Icon>
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
                <Component.Icon side="left">
                  <Icon label="Diamond">
                    <Circle />
                  </Icon>
                </Component.Icon>
                Action 7
              </Component.Item>
              <Component.Item>
                <Component.Icon side="left">
                  <Icon label="Bookmark">
                    <Circle />
                  </Icon>
                </Component.Icon>
                Action 8
              </Component.Item>
              <Component.Item>
                <Component.Icon side="left">
                  <Icon label="Print">
                    <Circle />
                  </Icon>
                </Component.Icon>
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

export const ItemVariations = {
  render: ItemVariationsTemplate,
};

const InteractionsTemplate: StoryFn<typeof Component.Root> = (parameters) => (
  <Component.Root {...parameters}>
    <Component.Trigger asChild>
      <Button>Trigger</Button>
    </Component.Trigger>
    <Component.Content>
      <Component.Item>Level 1 Action</Component.Item>
      <Component.Item>
        <Component.Icon side="left">
          <Icon label="Diamond">
            <Diamond />
          </Icon>
        </Component.Icon>
        Level 1 Action
      </Component.Item>
      <Component.Sub>
        <Component.SubTrigger>Open Level 2</Component.SubTrigger>
        <Component.SubContent>
          <Component.Item disabled>
            <Component.Icon side="left">
              <Icon label="Diamond">
                <Diamond />
              </Icon>
            </Component.Icon>
            Level 2 Action
          </Component.Item>
          <Component.Item>
            <Component.Icon side="left">
              <Icon label="Bookmark">
                <Bookmark />
              </Icon>
            </Component.Icon>
            Level 2 Action
          </Component.Item>
          <Component.Item>
            <Component.Icon side="left">
              <Icon label="Print">
                <Print />
              </Icon>
            </Component.Icon>
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

export const Interactions = {
  render: InteractionsTemplate,

  play: async () => {
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
  },
};

// Function to emulate pausing between interactions
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
