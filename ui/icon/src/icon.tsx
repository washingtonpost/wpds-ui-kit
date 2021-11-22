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
 * Create an assistive accessible icon
 * 
 * # Icon

```jsx
import { Icon } from "@washingtonpost/ui-icon";
import { Garlic } from "@washingtonpost/wpds-assets";

function Component() {
	return (
		<Icon size="16" label="garlic">
			<Garlic />
		</Icon>
	);
}
```

## Component API

-   size (["16", "24", "32"]), width and height of our icons from the system
-   label, The accessibility label for the icon. This label will be visually hidden but read aloud by VoiceOver and other screenreaders to describe the icon.

## Do's and Don'ts

-   fill color will be set on the SVG icon component. not this component
-   the svg icon component will be hidden from the a11y tree. it's presentational. The SVG's title node should be removed as well.

 * 
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
				role: "img",
			})}
			<VisuallyHidden>{label}</VisuallyHidden>
		</>
	);
};

Icon.displayName = NAME;

export { Icon };
export type { IconProps };
