/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import { Primary } from "~/ui/autosuggest/stories/autosuggest.stories";

/**
 * This is a costly test with zero upside
 */
test("loads and displays autosuggest", () => {
	render(<Primary />);

	expect(screen.getByTestId("suggestion")).toHaveTextContent("garlic");
});
