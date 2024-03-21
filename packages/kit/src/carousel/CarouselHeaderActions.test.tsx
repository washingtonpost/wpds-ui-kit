import { render, screen } from "@testing-library/react";
import { CarouselHeaderActions } from "./CarouselHeaderActions";

describe("CarouselHeader", () => {
  test("renders visibly into the document", () => {
    render(<CarouselHeaderActions>Test</CarouselHeaderActions>);

    expect(screen.getByText("Test")).toBeVisible();
  });
});
