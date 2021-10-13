import * as React from "react";
import { AutoSuggest } from "../src/";

export default {
	title: "UI/AutoSuggest",
	component: AutoSuggest,
	parameters: {
		playroom: {
			code: "<AutoSuggest />",
		},
	},
};

const Template = (args) => <AutoSuggest {...args} />;

export const Primary = Template.bind({});

Primary.args = {};
