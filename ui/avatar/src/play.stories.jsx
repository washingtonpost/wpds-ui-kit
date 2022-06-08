import * as React from "react";
import { Avatar as Component } from "./";

export default {
	title: "Avatar",
	component: Component,
	subcomponent: { Avatar },
	parameters: {
		componentSubtitle:
		  "An avatar is an atomic component that represents an individual’s identity through a circular photo.",
		controls: {
		  sort: "requiredFirst"
		}
	  },
	  argTypes: {
		as: {
		  control: {
			type: "text"
		  },
		  table: {
			category: "common props"
		  }
		},
		className: {
		  control: "text",
		  table: {
			category: "common props"
		  }
		},
		size: {
		  control: "select",
		  table: {
			category: "common props"
		  }
		}
	  }
};

const DefaultArgs = {
	imgUrl: "https://i.pravatar.cc/300",
	color: "",
	alt: "An avatar is an atomic component that represents an individual’s identity through a circular photo.",
  };

const Template = (args) => (
  <Component {...args} />
);

export const Single = args => {
	return <Avatar {...args} />;
  };
  
Single.args = {
...DefaultArgs
};

export const Avatar = Template.bind({});

Avatar.args = {};
