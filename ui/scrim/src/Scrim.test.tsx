import * as React from "react";
import { render, screen } from "@testing-library/react";
import { Scrim } from "./Scrim";

describe("Scrim", () => {
  test("renders visibly into the document", () => {
    render(<Scrim data-testid="test" open={true} />);
    expect(screen.getByTestId("test")).toBeVisible();
  });
});
