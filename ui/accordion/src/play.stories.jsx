import * as React from "react";
import Image from "next/image";
import { Accordion, ACCORDION_DENSITY, ACCORDION_TYPE } from ".";
import { theme } from "@washingtonpost/wpds-theme";

export default {
  title: "Accordion",
  component: Accordion.Root,
  subcomponents: {
    Item: Accordion.Item,
    Header: Accordion.Header,
    Content: Accordion.Content,
  },
};

const Template = (args) => {
  const myHeaderRef = React.createRef();
  const myContentRef = React.createRef();

  const myLoader = ({ src }) => {
    return `${src}`;
  };

  return (
    <Accordion.Root {...args}>
      <Accordion.Item value={"item-1"}>
        <Accordion.Header density={args.density} ref={myHeaderRef} {...args}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in
          augue in felis pharetra finibus. In sagittis aliquam augue. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit.
        </Accordion.Header>
        <Accordion.Content ref={myContentRef}>
          No! You don't even believe that! Gus has cameras everywhere, please.
          Listen to yourself! No, he has known everything, all along. Where were
          you today? In the lab? And you don't think it's possible that Tyrus
          lifted the cigarette out of your locker? Come on! Don't you see? You
          are the last piece of the puzzle. You are everything that he's wanted.
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value={"item-2"}>
        <Accordion.Header density={args.density} ref={myHeaderRef} {...args}>
          How long will I have to social distance?
        </Accordion.Header>
        <Accordion.Content {...args} ref={myContentRef}>
          <Image
            loader={myLoader}
            src="https://i.pravatar.cc/300"
            width="100"
            height="100"
            layout="fixed"
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
};
