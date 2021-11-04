import * as React from "react";
import { Autosuggest } from "@washingtonpost/ui-autosuggest";
import { styled } from "@washingtonpost/ui-theme";

const H1 = styled("h1", {
	color: "$gray0",
});

export default function AutosuggestPage() {
	const [value, setValue] = React.useState("");
	const [testValue, setTestValue] = React.useState("washpost.com");

	return (
		<>
			<H1>Autosuggest</H1>
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
