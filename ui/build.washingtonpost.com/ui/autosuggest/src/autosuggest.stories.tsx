import * as React from "react";
import { Autosuggest } from "./autosuggest"

export default {
	title: "UI/Autosuggest",
	component: Autosuggest,
};

const Template = () => <Autosuggest defaultValue="garlic" />;

export const Play = Template.bind({})