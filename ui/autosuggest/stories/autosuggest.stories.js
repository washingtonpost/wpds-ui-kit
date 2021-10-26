import * as React from "react";
import { Autosuggest } from "./../src/autosuggest";

export default {
	title: "UI/Autosuggest",
	component: Autosuggest.Input,
	subcomponents: {
		"Autosuggest.Result": Autosuggest.Result,
	},
	parameters: {
		playroom: {
			code: "<Autosuggest.Input />",
		},
	},
};

const Template = (args) => <Autosuggest.Input {...args} />;

export const Primary = Template.bind({});

Primary.args = {};
