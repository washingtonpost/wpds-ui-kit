import * as React from "react";

export const AutoSuggest = React.forwardRef(({ children }, ref) => {
	return (
		<>
			<div
				ref={ref}
				role="combobox"
				aria-expanded="true"
				aria-controls="garlic"
				aria-label="autosuggest"
			>
				{children} garlic
			</div>
			<div id="garlic"></div>
		</>
	);
});
