import * as React from "react";
import * as UI from "@washingtonpost/ui-theme";

const NAME = "Icon";

interface IconProps {
	/**
	 * size of the icon
	 * @default '16'
	 * @memberof IconProps
	 * @example
	 * <Icon size={16}><AddIcon />/Icon>
	 * <Icon size={24}><AddIcon />/Icon>
	 * <Icon size={32}><AddIcon />/Icon>
	 */
	size?: "16" | "24" | "32";
	/**
	 * The accessibility label for the icon. This label will be visually hidden but read aloud by VoiceOver and other screenreaders to describe the icon.
	 * @type string
	 * @memberof IconProps
	 * @example
	 * <Icon label="Add" size={16}><AddIcon /></Icon>
	 */
	label: string;
}

const VisuallyHidden = UI.styled("span", {
	position: "absolute",
	width: 1,
	height: 1,
	border: 0,
	padding: 0,
	margin: -1,
	overflow: "hidden",
	clip: "rect(0, 0, 0, 0)",
	whiteSpace: "nowrap",
	wordWrap: "normal",
});

/**
 * @washingtonpost/ui-icon
 * @description Create an assistive accessible icon
 * @component
 * @see IconProps
 */
const Icon: React.FC<IconProps> = ({ children, size = "16", label }) => {
	const child = React.Children.only(children);
	return (
		<>
			{React.cloneElement(child as React.ReactElement, {
				"aria-hidden": true,
				focusable: false,
				width: size,
				height: size,
			})}
			<VisuallyHidden>{label}</VisuallyHidden>
		</>
	);
};

Icon.displayName = NAME;

export { Icon };
export type { IconProps };
