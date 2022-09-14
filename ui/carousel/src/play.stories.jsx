import * as React from "react";
import { Carousel as Component } from "./";

export default {
  title: "Carousel",
  component: Component.Root,
  subcomponents: {
    CarouselTitle: Component.Title,
    CarouselPreviousButton: Component.PreviousButton,
    CarouselNextButton: Component.NextButton,
  },
};

const Template = (args) => (
  <Component.Root {...args}>
    <Component.Title>My Carousel</Component.Title>
    <Component.PreviousButton />
    <Component.NextButton />
  </Component.Root>
);

export const Carousel = Template.bind({});

Carousel.args = {};
