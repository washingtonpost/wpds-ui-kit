import * as React from "react";
import { Autosuggest } from "../src/autosuggest";
import { tokens } from "@washingtonpost/ui-theme";

function createStitchesTokens(input) {
	const light = {};
	const dark = {};
	const staticColors = {};
	const sizes = {};
	const space = {};
	const radii = {};

	Object.keys(input.color).forEach((color) => {
		Object.keys(input.color[color]).forEach((key) => {
			if (color === "light") {
				light[key] = input.color[color][key].value;
			}

			if (color === "dark") {
				dark[key] = input.color[color][key].value;
			}

			if (color === "static") {
				staticColors[`${key}static`] = input.color[color][key].value;
			}
		});

		return color;
	});

	Object.keys(input.size).forEach((size) => {
		// console.log(size, input.size[size].value);
		sizes[size] = `calc(1rem * ${input.size[size].value}`; // calc(1rem * 0.125)
		space[size] = input.size[size].value;
		radii[size] = input.size[size].value;
	});

	console.log(sizes, space, radii);

	return { light, dark, staticColors, sizes, space, radii };
}

createStitchesTokens(tokens);

export default {
	title: "UI/Autosuggest",
	component: Autosuggest.Input,
	subcomponents: {
		"Autosuggest.Result": Autosuggest.Result,
	},
	parameters: {
		controls: { hideNoControlsWarning: true, disabled: true },
	},
};

const Template = (args) => <Autosuggest.Input {...args} />;

export const Play = Template.bind({});

Play.args = {
	label: "Find your state",
};

Play.parameters = {
	chromatic: { disable: true },
};

export const Tests = () => {
	const [value, setValue] = React.useState("");
	const [testValue, setTestValue] = React.useState("washpost.com");
	const [matchingResultsValue, setMatchingResultsValue] =
		React.useState("Fac");

	return (
		<>
			<h1>Autosuggest</h1>
			<h2>Default</h2>
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
			<h2>With Value</h2>
			<Autosuggest.Root id="autosuggest-with-value">
				<Autosuggest.Input
					id="autosuggest-with-value"
					name="autosuggest-with-value"
					value="North Car"
					label="Optional label"
					readOnly
				/>
			</Autosuggest.Root>

			<h2>Disabled</h2>
			<Autosuggest.Root id="autosuggest-disabled">
				<Autosuggest.Input
					id="autosuggest-disabled"
					name="autosuggest-disabled"
					disabled
					label="Find your state"
				/>
			</Autosuggest.Root>
			<h2>Error</h2>
			<Autosuggest.Root id="autosuggest-error">
				<Autosuggest.Input
					id="autosuggest-error"
					name="autosuggest-error"
					label="Enter you email address"
					value="washpost.com"
					required
					value={testValue}
					onChange={(e) => setTestValue(e.target.value)}
					hasError
				/>
				<Autosuggest.SearchIcon>
					<span>🔍</span>
				</Autosuggest.SearchIcon>
				<Autosuggest.Results>
					<Autosuggest.ErrorMessage as="div">
						Sorry no match was found
					</Autosuggest.ErrorMessage>
					<Autosuggest.Result>
						<Autosuggest.ResultIcon>
							<span>☕️</span>
						</Autosuggest.ResultIcon>
						Fauci says he supports vaccine mandates for air travel
					</Autosuggest.Result>
				</Autosuggest.Results>
			</Autosuggest.Root>

			<h2>Matching Results</h2>
			<Autosuggest.Root id="autosuggest-matching-result">
				<Autosuggest.Input
					id="autosuggest-matching-result"
					name="autosuggest-matching-result"
					label="Enter you email address"
					value="washpost.com"
					required
					value={matchingResultsValue}
					onChange={(e) => setMatchingResultsValue(e.target.value)}
				/>
				<Autosuggest.SearchIcon>
					<span>🔍</span>
				</Autosuggest.SearchIcon>
				<Autosuggest.Results>
					<Autosuggest.Result>
						<Autosuggest.ResultIcon>
							<span>☕️</span>
						</Autosuggest.ResultIcon>
						Fauci says he supports vaccine mandates for air travel
					</Autosuggest.Result>
					<Autosuggest.Result>
						<Autosuggest.ResultIcon>
							<span>📃</span>
						</Autosuggest.ResultIcon>
						Fauci says he supports vaccine mandates for air travel
					</Autosuggest.Result>
					<Autosuggest.Result>
						<Autosuggest.ResultIcon>
							<span>📸</span>
						</Autosuggest.ResultIcon>
						Fauci says he supports vaccine mandates for air travel
					</Autosuggest.Result>
				</Autosuggest.Results>
			</Autosuggest.Root>
		</>
	);
};
