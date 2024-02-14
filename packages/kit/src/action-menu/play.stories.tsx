import { useState } from "react";
import { ActionMenu } from ".";
import { Button } from "../button";
import { Icon } from "../icon";
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
  component: ActionMenu.Root,
};

const SimpleContent = (
  <ActionMenu.Content>
    <ActionMenu.Sub>
      <ActionMenu.SubTrigger>Action 1</ActionMenu.SubTrigger>
      <ActionMenu.SubContent>
        <ActionMenu.Sub>
          <ActionMenu.SubTrigger>Action 1.1</ActionMenu.SubTrigger>
          <ActionMenu.SubContent>
            <ActionMenu.Item>Action 1.1.1</ActionMenu.Item>
            <ActionMenu.Item>Action 1.1.2</ActionMenu.Item>
            <ActionMenu.Item>Action 1.1.3</ActionMenu.Item>
            <ActionMenu.Item>Action 1.1.4</ActionMenu.Item>
          </ActionMenu.SubContent>
        </ActionMenu.Sub>
        <ActionMenu.Item>Action 1.2</ActionMenu.Item>
        <ActionMenu.Item>Action 1.3</ActionMenu.Item>
        <ActionMenu.Item>Action 1.4</ActionMenu.Item>
      </ActionMenu.SubContent>
    </ActionMenu.Sub>
    <ActionMenu.Item>Action 2</ActionMenu.Item>
    <ActionMenu.Item>Action 3</ActionMenu.Item>
    <ActionMenu.Item>Action 4</ActionMenu.Item>
  </ActionMenu.Content>
);

const TriggersTemplate = (parameters) => (
  <div
    style={{
      width: "80%",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-evenly",
    }}
  >
    <ActionMenu.Root {...parameters}>
      <ActionMenu.Trigger asChild>
        <Button>Action button</Button>
      </ActionMenu.Trigger>
      <ActionMenu.Portal>{SimpleContent}</ActionMenu.Portal>
    </ActionMenu.Root>
    <ActionMenu.Root {...parameters}>
      <ActionMenu.Trigger asChild>
        <Button icon="center">
          <Icon label="Expand">
            <DotsVertical />
          </Icon>
        </Button>
      </ActionMenu.Trigger>
      <ActionMenu.Portal>{SimpleContent}</ActionMenu.Portal>
    </ActionMenu.Root>
    <ActionMenu.Root {...parameters}>
      <ActionMenu.Trigger
        css={{ fontWeight: "bold", textDecoration: "underline" }}
        asChild
      >
        <a>Action Link</a>
      </ActionMenu.Trigger>
      <ActionMenu.Portal>{SimpleContent}</ActionMenu.Portal>
    </ActionMenu.Root>
    <ActionMenu.Root {...parameters}>
      <ActionMenu.Trigger asChild>
        <Icon label="Actions">
          <MixerVertical />
        </Icon>
      </ActionMenu.Trigger>
      <ActionMenu.Portal>{SimpleContent}</ActionMenu.Portal>
    </ActionMenu.Root>
  </div>
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
  const [checkedA, setCheckedA] = useState(true);
  const [checkedB, setCheckedB] = useState(true);
  const [checkedC, setCheckedC] = useState(true);
  const [checkedD, setCheckedD] = useState(true);

  const [radioChecked, setRadioChecked] = useState("radio2");

  return (
    <ActionMenu.Root {...parameters}>
      <ActionMenu.Trigger asChild>
        <Button>Action button</Button>
      </ActionMenu.Trigger>
      <ActionMenu.Portal>
        <ActionMenu.Content>
          <ActionMenu.Label>Label</ActionMenu.Label>
          <ActionMenu.Item>
            <ActionMenu.Icon side="left">
              <Icon label="check">
                <Copy />
              </Icon>
            </ActionMenu.Icon>
            Copy Items
          </ActionMenu.Item>
          <ActionMenu.Group>
            <ActionMenu.Label>Checkbox Item Examples</ActionMenu.Label>
            <ActionMenu.CheckboxItem
              checked={checkedA}
              onCheckedChange={setCheckedA}
            >
              <ActionMenu.ItemIndicator />
              {/*
							<ActionMenu.Icon side="left">
								<Icon label="bookmark" size="100">
									<Bookmark />
								</Icon>
							</ActionMenu.Icon>
							*/}
              Left
            </ActionMenu.CheckboxItem>
            <ActionMenu.CheckboxItem
              checked={checkedB}
              onCheckedChange={setCheckedB}
            >
              <ActionMenu.ItemIndicator />
              Neither
            </ActionMenu.CheckboxItem>
            <ActionMenu.CheckboxItem
              checked={checkedC}
              onCheckedChange={setCheckedC}
            >
              <ActionMenu.ItemIndicator />
              Right
              <ActionMenu.Icon side="right">
                <Icon label="bell" size="100">
                  <Bookmark />
                </Icon>
              </ActionMenu.Icon>
            </ActionMenu.CheckboxItem>
            <ActionMenu.CheckboxItem
              checked={checkedD}
              onCheckedChange={setCheckedD}
            >
              <ActionMenu.ItemIndicator />
              Both
              <ActionMenu.Icon side="right">
                <Icon label="bell" size="100">
                  <Bookmark />
                </Icon>
              </ActionMenu.Icon>
            </ActionMenu.CheckboxItem>
          </ActionMenu.Group>
          <ActionMenu.Label>Radio Group Example</ActionMenu.Label>
          <ActionMenu.RadioGroup
            value={radioChecked}
            onValueChange={setRadioChecked}
          >
            <ActionMenu.RadioItem value="radio1">
              <ActionMenu.ItemIndicator />
              Radio 1
            </ActionMenu.RadioItem>
            <ActionMenu.RadioItem value="radio2">
              <ActionMenu.ItemIndicator />
              Radio 2
            </ActionMenu.RadioItem>
            <ActionMenu.RadioItem value="radio3">
              <ActionMenu.ItemIndicator />
              Radio 3
            </ActionMenu.RadioItem>
          </ActionMenu.RadioGroup>
          <ActionMenu.Sub>
            <ActionMenu.SubTrigger>More actions</ActionMenu.SubTrigger>
            <ActionMenu.SubContent>
              <ActionMenu.Item disabled>
                <ActionMenu.Icon side="left">
                  <Icon label="bookmark" size="100">
                    <Bookmark />
                  </Icon>
                </ActionMenu.Icon>
                Bookmarks
              </ActionMenu.Item>
              <ActionMenu.Item>
                <ActionMenu.Icon side="left">
                  <Icon label="bookmark" size="100">
                    <Bookmark />
                  </Icon>
                </ActionMenu.Icon>
                Bookmarks
              </ActionMenu.Item>
              <ActionMenu.Item>
                <ActionMenu.Icon side="left"></ActionMenu.Icon>
                Bookmarks
              </ActionMenu.Item>
              <ActionMenu.Sub>
                <ActionMenu.SubTrigger>Even more actions</ActionMenu.SubTrigger>
                <ActionMenu.SubContent>
                  <ActionMenu.Item>Action X</ActionMenu.Item>
                  <ActionMenu.Item>Action Z</ActionMenu.Item>
                </ActionMenu.SubContent>
              </ActionMenu.Sub>
            </ActionMenu.SubContent>
          </ActionMenu.Sub>
          <ActionMenu.Sub>
            <ActionMenu.SubTrigger>More actions</ActionMenu.SubTrigger>
            <ActionMenu.SubContent>
              <ActionMenu.Item disabled>
                <ActionMenu.Icon side="left">
                  <Icon label="Diamond">
                    <Circle />
                  </Icon>
                </ActionMenu.Icon>
                Action 7
              </ActionMenu.Item>
              <ActionMenu.Item>
                <ActionMenu.Icon side="left">
                  <Icon label="Bookmark">
                    <Circle />
                  </Icon>
                </ActionMenu.Icon>
                Action 8
              </ActionMenu.Item>
              <ActionMenu.Item>
                <ActionMenu.Icon side="left">
                  <Icon label="Print">
                    <Circle />
                  </Icon>
                </ActionMenu.Icon>
                Action 9
              </ActionMenu.Item>
              <ActionMenu.Sub>
                <ActionMenu.SubTrigger>Even more actions</ActionMenu.SubTrigger>
                <ActionMenu.SubContent>
                  <ActionMenu.Item>Action X</ActionMenu.Item>
                  <ActionMenu.Item>Action Z</ActionMenu.Item>
                </ActionMenu.SubContent>
              </ActionMenu.Sub>
            </ActionMenu.SubContent>
          </ActionMenu.Sub>
          <ActionMenu.Item>Action 4</ActionMenu.Item>
          <ActionMenu.Sub>
            <ActionMenu.SubTrigger>More actions</ActionMenu.SubTrigger>
            <ActionMenu.SubContent>
              <ActionMenu.Item disabled>
                <ActionMenu.Icon side="left">
                  <Icon label="Diamond">
                    <Circle />
                  </Icon>
                </ActionMenu.Icon>
                Action 7
              </ActionMenu.Item>
              <ActionMenu.Item>
                <ActionMenu.Icon side="left">
                  <Icon label="Bookmark">
                    <Circle />
                  </Icon>
                </ActionMenu.Icon>
                Action 8
              </ActionMenu.Item>
              <ActionMenu.Item>
                <ActionMenu.Icon side="left">
                  <Icon label="Print">
                    <Circle />
                  </Icon>
                </ActionMenu.Icon>
                Action 9
              </ActionMenu.Item>
              <ActionMenu.Sub>
                <ActionMenu.SubTrigger>Even more actions</ActionMenu.SubTrigger>
                <ActionMenu.SubContent>
                  <ActionMenu.Item>Action X</ActionMenu.Item>
                  <ActionMenu.Item>Action Z</ActionMenu.Item>
                </ActionMenu.SubContent>
              </ActionMenu.Sub>
            </ActionMenu.SubContent>
          </ActionMenu.Sub>
        </ActionMenu.Content>
      </ActionMenu.Portal>
    </ActionMenu.Root>
  );
};

export const ItemVariations = {
  render: ItemVariationsTemplate,
};

const InteractionsTemplate: StoryFn<typeof ActionMenu.Root> = (parameters) => (
  <ActionMenu.Root {...parameters}>
    <ActionMenu.Trigger asChild>
      <Button>Trigger</Button>
    </ActionMenu.Trigger>
    <ActionMenu.Content>
      <ActionMenu.Item>Level 1 Action</ActionMenu.Item>
      <ActionMenu.Item>
        <ActionMenu.Icon side="left">
          <Icon label="Diamond">
            <Diamond />
          </Icon>
        </ActionMenu.Icon>
        Level 1 Action
      </ActionMenu.Item>
      <ActionMenu.Sub>
        <ActionMenu.SubTrigger>Open Level 2</ActionMenu.SubTrigger>
        <ActionMenu.SubContent>
          <ActionMenu.Item disabled>
            <ActionMenu.Icon side="left">
              <Icon label="Diamond">
                <Diamond />
              </Icon>
            </ActionMenu.Icon>
            Level 2 Action
          </ActionMenu.Item>
          <ActionMenu.Item>
            <ActionMenu.Icon side="left">
              <Icon label="Bookmark">
                <Bookmark />
              </Icon>
            </ActionMenu.Icon>
            Level 2 Action
          </ActionMenu.Item>
          <ActionMenu.Item>
            <ActionMenu.Icon side="left">
              <Icon label="Print">
                <Print />
              </Icon>
            </ActionMenu.Icon>
            Level 2 Action
          </ActionMenu.Item>
          <ActionMenu.Sub>
            <ActionMenu.SubTrigger>Open Level 3</ActionMenu.SubTrigger>
            <ActionMenu.SubContent>
              <ActionMenu.Item>Level 3 Action</ActionMenu.Item>
              <ActionMenu.Item>Level 3 Action</ActionMenu.Item>
            </ActionMenu.SubContent>
          </ActionMenu.Sub>
        </ActionMenu.SubContent>
      </ActionMenu.Sub>
    </ActionMenu.Content>
  </ActionMenu.Root>
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
