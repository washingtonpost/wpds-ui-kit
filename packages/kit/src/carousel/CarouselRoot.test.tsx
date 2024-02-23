import { render, screen } from "@testing-library/react";
import { CarouselRoot } from "./CarouselRoot";

describe("CarouselRoot", () => {
  test("renders visibly into the document", () => {
    render(<CarouselRoot>Test</CarouselRoot>);

    expect(screen.getByText("Test")).toBeVisible();
  });
});
