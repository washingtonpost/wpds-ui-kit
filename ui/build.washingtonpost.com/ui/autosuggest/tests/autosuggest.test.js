/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import { Primary } from "~/ui/autosuggest/stories/autosuggest.stories";

test("loads and displays autosuggest", () => {
	render(<Primary />);

	expect(screen.getByRole("combobox")).toHaveTextContent("garlic");
});
