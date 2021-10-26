import React from "react";
import { styled } from "@washingtonpost/ui-theme";

const Input = styled("input", {
	border: "1px solid $gray300",
	background: "$gray600",
	fontSize: "$100",
	lineHeight: "$meta",
	color: "$gray80",
	fontFamily: "$meta",
	fontWeight: "$light",
	height: "$300",
	border: "$space$1 solid $gray300",
	borderRadius: "$125",
	px: "$100",

	"&::-webkit-search-cancel-button": {
		"-webkit-appearance": "none",
		appearance: "none",
	},

	"&:focus": {
		color: "$gray20",
		borderColor: "$blue200",
	},

	"&:focus-visible": {
		color: "$gray20",
		borderColor: "$blue200",
		outline: "none",
	},

	"&::placeholder": {
		color: "inherit",
	},

	"&:disabled": {
		color: "$gray100",
		background: "$gray300",
		borderColor: "$gray300",
	},

	"&:invalid": {
		borderColor: "$red100",
	},

	variants: {
		state: {
			hasValue: {
				color: "$gray80",
				paddingTop: "$125",
			},
		},
	},
});

const Label = styled("span", {
	position: "absolute",
	transition: "all $fast $inOut",
	fontSize: "$100",
	lineHeight: "$meta",
	color: "$gray80",
	fontFamily: "$meta",
	fontWeight: "$light",
	top: "50%",
	transform: "translateY(-50%)",
	paddingLeft: "$100",
	pointerEvents: "none",
	borderLeft: "1px solid transparent",

	variants: {
		state: {
			isFloating: {
				transform: "translateY(0%)",
				top: "$75",
				fontSize: "$75",
			},
			isDisabled: {
				color: "$gray100",
			},
		},
	},
});

const Suggestions = styled("ul", {
	backgroundColor: "$gray600",
	fontFamily: "$body",
	fontSize: "$75",
	padding: "$10",
	"@sm": {
		backgroundColor: "black",
		color: "white",
	},
});

const Suggestion = styled("li", {
	border: "1px solid white",
	"@sm": {
		border: "1px solid black",
	},
});

const Container = styled("label", {
	boxSizing: "border-box",
	position: "relative",
	display: "flex",
	flexDirection: "column",

	[`&:focus-within ${Label}`]: {
		color: "$blue200",
		fontSize: "$50",
		lineHeight: "$meta",
		top: "$75",
	},
});

export const Autosuggest = {};

/**
 * Autosuggest Input
 */
Autosuggest.Input = React.forwardRef(
	(
		{
			children,
			id,
			name,
			label,
			placeholder = "",
			value,
			onFocus,
			onBlur,
			icon,
			disabled,
			...props
		},
		ref
	) => {
		const [isFocused, setFocus] = React.useState(false);

		const handleFocus = (event) => {
			setTimeout(() => {
				setFocus(true);
			}, 0);
			if (typeof onFocus === "function") {
				onFocus(event);
			}
		};

		const handleBlur = (event) => {
			setTimeout(() => {
				setFocus(false);
			}, 200);
			if (typeof onBlur === "function") {
				onBlur(event);
			}
		};

		return (
			<Container htmlFor={id}>
				<Input
					{...props}
					disabled={disabled}
					id={id}
					name={name}
					aria-labelledby={`label-${name}`}
					onFocus={handleFocus}
					onBlur={handleBlur}
					ref={ref}
					role="combobox"
					aria-expanded="true"
					aria-controls="garlic"
					placeholder={""}
					value={value}
					state={value || isFocused ? "hasValue" : ""}
					type="search"
				/>
				<Label
					id={`label-${name}`}
					htmlFor={id}
					state={
						value || isFocused
							? "isFloating"
							: disabled
							? "isDisabled"
							: ""
					}
				>
					{label}
				</Label>
			</Container>
		);
	}
);

/**
 * Autosuggest Result
 */
Autosuggest.Result = React.forwardRef(({ children, ...props }, ref) => {
	return (
		<Suggestions id="garlic" {...props}>
			<Suggestion data-testid="suggestion">{children}garlic</Suggestion>
		</Suggestions>
	);
});
