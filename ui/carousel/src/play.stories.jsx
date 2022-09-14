import * as React from "react";
import { Carousel as Component } from "./";

export default {
  title: "Carousel",
  component: Component.Root,
  subcomponents: {
    CarouselTitle: Component.Title,
    CarouselHeader: Component.Header,
    CarouselHeaderContent: Component.HeaderContent,
    CarouselHeaderActions: Component.HeaderActions,
    CarouselPreviousButton: Component.PreviousButton,
    CarouselNextButton: Component.NextButton,
    CarouselContent: Component.Content,
    CarouselItem: Component.Item,
    CarouselFooter: Component.Footer,
    CarouselDots: Component.Dots,
  },
};

const Template = (args) => (
  <Component.Root {...args}>
    <Component.Header>
      <Component.HeaderContent>
        <Component.Title>My Carousel</Component.Title>
      </Component.HeaderContent>
      <Component.HeaderActions>
        <Component.PreviousButton />
        <Component.NextButton />
      </Component.HeaderActions>
    </Component.Header>
    <Component.Content>
      <Component.Item></Component.Item>
      <Component.Item></Component.Item>
      <Component.Item></Component.Item>
      <Component.Item></Component.Item>
      <Component.Item></Component.Item>
    </Component.Content>
    <Component.Footer>
      <Component.Dots />
    </Component.Footer>
  </Component.Root>
);

export const Carousel = Template.bind({});

Carousel.args = {};
