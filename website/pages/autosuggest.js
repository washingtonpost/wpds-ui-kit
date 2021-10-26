import * as React from "react";
import { Autosuggest } from "@washingtonpost/ui-autosuggest";

export default function AutosuggestPage() {
	const [value, setValue] = React.useState("");
	const [testValue, setTestValue] = React.useState("washpost.com");

	return (
		<>
			<h1>Autosuggest</h1>
			<h2>Default</h2>
			<Autosuggest.Input
				id="autosuggest-default"
				name="autosuggest-default"
				placeholder="Find your state"
				label="Optional label"
				value={value}
				onChange={(e) => setValue(e.target.value)}
			/>
			<h2>With Value</h2>
			<Autosuggest.Input
				value="North Car"
				label="Optional label"
				readOnly
			/>
			<h2>Disabled</h2>
			<Autosuggest.Input disabled label="Find your state" />
			<h2>Error</h2>
			<Autosuggest.Input
				label="Enter you email address"
				value="washpost.com"
				required
				value={testValue}
				onChange={(e) => setTestValue(e.target.value)}
				pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
			/>
			<Autosuggest.Result />
		</>
	);
}
