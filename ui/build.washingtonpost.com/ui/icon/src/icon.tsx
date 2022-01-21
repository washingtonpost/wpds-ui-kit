import * as React from "react";
import * as VH from "@washingtonpost/wpds-visually-hidden";

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

export const Icon: React.FC<IconProps> = ({ children, size = "16", label }) => {
	const child = React.Children.only(children);

	return (
		<>
			{React.cloneElement(child as React.ReactElement, {
				"aria-hidden": true,
				focusable: false,
				width: size,
				height: size,
				role: "img",
			})}
			<VH.VisuallyHidden>{label}</VH.VisuallyHidden>
		</>
	);
};

Icon.displayName = NAME;

export type { IconProps };
