import * as React from "react";
import { theme } from "@washingtonpost/wpds-theme";
import { Accordion, ACCORDION_DENSITY, ACCORDION_TYPE } from ".";

export default {
  title: "Accordion",
  component: Accordion.Root,
  subcomponents: {
    Item: Accordion.Item,
    Header: Accordion.Header,
    Content: Accordion.Content,
  },
  argTypes: {
    density: {
      options: [
        ACCORDION_DENSITY.compact,
        ACCORDION_DENSITY.default,
        ACCORDION_DENSITY.loose,
      ],
      control: "select",
    },
    type: {
      options: [ACCORDION_TYPE.single, ACCORDION_TYPE.multiple],
      control: "select",
    },
    disabled: {
      options: [true, false],
      control: "boolean",
    },
  },
};

const Template = (args) => {
  const myHeaderRef = React.createRef();
  const myContentRef = React.createRef();

  return (
    <Accordion.Root {...args}>
      <Accordion.Item value={"item-1"}>
        <Accordion.Trigger
          css={{ backgroundColor: theme.colors.gray700 }}
          density={args.density}
          ref={myHeaderRef}
          {...args}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in
          augue in felis pharetra finibus. In sagittis aliquam augue. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit.
        </Accordion.Trigger>
        <Accordion.Content
          css={{ background: theme.colors.gray700 }}
          ref={myContentRef}
        >
          <div>
            No! You don't even believe that! Gus has cameras everywhere, please.
            Listen to yourself! No, he has known everything, all along. Where
            were you today? In the lab? And you don't think it's possible that
            Tyrus lifted the cigarette out of your locker? Come on! Don't you
            see? You are the last piece of the puzzle. You are everything that
            he's wanted.
          </div>
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value={"item-2"}>
        <Accordion.Trigger
          css={{ backgroundColor: theme.colors.gray700 }}
          density={args.density}
          ref={myHeaderRef}
          {...args}
        >
          How long will I have to social distance?
        </Accordion.Trigger>
        <Accordion.Content
          {...args}
          ref={myContentRef}
          css={{ background: theme.colors.gray700 }}
        >
          <img
            src="https://i.pravatar.cc/300"
            alt="An avatar is an atomic component that represents an individual’s identity through a circular photo."
          />
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
};

export const Play = Template.bind({});

Play.args = {
  density: ACCORDION_DENSITY.compact,
  type: ACCORDION_TYPE.single,
  defaultValue: "item-1",
};

Play.storyName = "Accordion";
