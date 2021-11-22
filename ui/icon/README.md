# Icon

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
