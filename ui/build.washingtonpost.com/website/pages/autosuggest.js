import * as React from "react";
import { Autosuggest } from "@washingtonpost/ui-autosuggest";

export default function AutosuggestPage() {
	const [value, setValue] = React.useState("");
	const [testValue, setTestValue] = React.useState("washpost.com");

	return (
		<>
			<h1>Autosuggest</h1>
			<Autosuggest.Root id="autosuggest-default">
				<Autosuggest.Input
					id="autosuggest-default"
					name="autosuggest-default"
					placeholder="Find your state"
					label="Optional label"
					value={value}
					onChange={(e) => setValue(e.target.value)}
					searchIcon={<span>🔍</span>}
				/>
			</Autosuggest.Root>
		</>
	);
}
