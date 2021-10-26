import { globalStyles } from "@washingtonpost/ui-theme";

export default function FrameComponent({ theme, children }) {
	globalStyles();

	return children;
}
