import React from "react";
import { styled, css } from "@washingtonpost/ui-theme";

const Input = styled("input", {
	$$inputBackground: "$colors$background",
	$$inputColor: "$colors$primary",
	$$inputBorderColor: "$colors$secondary",
	background: "$$inputBackground",
	color: "$$inputColor",
	border: "$space$1 solid $$inputBorderColor",
	fontSize: "$100",
	lineHeight: "$meta",
	fontFamily: "$meta",
	fontWeight: "$light",
	height: "$300",
	borderRadius: "$125",
	px: "$75",
	transition: "$allFast",

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

	variants: {
		state: {
			hasValue: {
				color: "$primary",
				paddingTop: "$100",
			},
		},
		hasSearchIcon: {
			true: {
				paddingRight: "$225",
			},
		},
		hasError: {
			true: {
				borderColor: "$red100",
			},
		},
	},
});

const Label = styled("span", {
	position: "absolute",
	transition: "all $fast $inOut",
	fontSize: "$100",
	lineHeight: "$meta",
	color: "$primary",
	fontFamily: "$meta",
	fontWeight: "$light",
	top: "50%",
	transform: "translateY(-50%)",
	paddingLeft: "$75",
	pointerEvents: "none",
	borderLeft: "1px solid transparent",

	variants: {
		state: {
			isActive: {
				transform: "translateY(0%)",
				top: "$50",
				fontSize: "$75",
			},
			isDisabled: {
				color: "$gray100",
			},
			isReady: {},
		},
	},

	defaultVariants: {
		state: "isReady",
	},
});

const icon = css({
	position: "absolute",
	top: "50%",
	transform: "translateY(-50%)",
	right: "$100",
});

export const Autosuggest = {};

/**
 * Autosuggest Input
 */
Autosuggest.Input = React.forwardRef(function AutosuggestInput(args, ref) {
	const {
		children,
		id,
		name,
		label,
		placeholder = "",
		value,
		onChange,
		onFocus,
		onBlur,
		disabled,
		searchIcon, // TODO: rename to icon
		hasError, // TODO: how do we want to render error UI
		state, // TODO: can be controlled by parent
		...props
	} = args;

	const [isFocused, setFocus] = React.useState(false);
	const [labelState, setLabelState] = React.useState("");

	React.useEffect(() => {
		if (isFocused || value !== "") {
			setLabelState("isActive");
		} else {
			setLabelState("");
		}

		if (disabled) {
			setLabelState("isDisabled");
		}
	}, [isFocused, value, disabled]);

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
		<>
			<Input
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
				onChange={onChange}
				value={value}
				state={value !== "" || isFocused ? "hasValue" : ""}
				hasSearchIcon={searchIcon ? true : false}
				hasError={hasError}
				type="search"
				{...props}
			/>
			<span
				className={icon({
					css: {
						visibility:
							isFocused && value !== "" ? "visible" : "hidden",
						opacity: isFocused && value !== "" ? "1" : "0",
						transition: "all $fast $inOut",
						paddingRight: searchIcon && "$175",
					},
				})}
				aria-label="Clear Input"
			>
				✖️
			</span>
			{searchIcon &&
				React.cloneElement(searchIcon, {
					className: icon(),
				})}
			<Label id={`label-${name}`} htmlFor={id} state={labelState}>
				{label}
			</Label>
		</>
	);
});

const Results = styled("ul", {
	top: "$300",
	position: "absolute",
	fontSize: "$100",
	zIndex: "1",
	background: "$bgPrimary",
	width: "100%",
});

/**
 * Autosuggest Result
 */
Autosuggest.Results = React.forwardRef(({ children, ...props }, ref) => {
	return (
		<Results {...props} ref={ref}>
			{children}
		</Results>
	);
});

const Result = styled("li", {
	height: "$225",
	pY: "$75",
	fontFamily: "$meta",
	fontWeight: "$light",
	lineHeight: "$meta",
	listStyle: "none",
	alignItems: "center",
	display: "flex",
});

/**
 * Autosuggest Result
 */
Autosuggest.Result = React.forwardRef(({ children, ...props }, ref) => {
	return (
		<Result data-testid="result" {...props} ref={ref}>
			{children}
		</Result>
	);
});

Autosuggest.ResultIcon = React.forwardRef(function AutosuggestResultIcon(
	args,
	ref
) {
	const { children, ...props } = args;
	return (
		<span ref={ref} {...props}>
			{children}
		</span>
	);
});

const ErrorMessage = styled("span", {
	color: "$red100",
});

Autosuggest.ErrorMessage = React.forwardRef(function AutosuggestErrorMessage(
	args,
	ref
) {
	const { children, as, ...props } = args;

	return (
		<ErrorMessage as={as} ref={ref} {...props}>
			{children}
		</ErrorMessage>
	);
});

const Root = styled("label", {
	boxSizing: "border-box",
	position: "relative",
	display: "flex",
	flexDirection: "column",

	[`&:focus-within ${Label}`]: {
		color: "$blue200",
		fontSize: "$50",
		lineHeight: "$meta",
		top: "$50",
	},

	"&:focus-within": {
		boxShadow: "$100",
	},
});

Autosuggest.Root = React.forwardRef(function AutosuggestRoot(args, ref) {
	const { children, id, ...props } = args;

	return (
		<Root htmlFor={id} ref={ref} {...props}>
			{children}
		</Root>
	);
});

Autosuggest.SearchIcon = React.forwardRef(function SearchIcon(args, ref) {
	const { children } = args;

	return React.cloneElement(children, {
		className: icon(),
		ref,
	});
});
