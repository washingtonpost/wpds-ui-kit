import * as React from "react";
import { Avatar as Component } from "./";

export default {
	title: "Avatar",
	component: Component,
};

const DefaultArgs = {
	imgUrl: "https://i.pravatar.cc/300",
	size: '200',
	alt: "An avatar is an atomic component that represents an individual’s identity through a circular photo.",
  };

export const Avatar = (args) => (
  <Component {...args} />
);

Avatar.args = {...DefaultArgs};
