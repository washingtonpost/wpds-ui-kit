import { render, screen } from "@testing-library/react";
import { ActionMenuRoot } from "./ActionMenuRoot";

describe("ActionMenuRoot", () => {
  test("renders visibly into the document", () => {
    render(<ActionMenuRoot>Test</ActionMenuRoot>);

    expect(screen.getByText("Test")).toBeInTheDocument();
  });
});
