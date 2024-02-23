import { render, screen } from "@testing-library/react";
import { CarouselTitle } from "./CarouselTitle";

describe("CarouselTitle", () => {
  test("renders visibly into the document", () => {
    render(<CarouselTitle>Test</CarouselTitle>);

    expect(screen.getByText("Test")).toBeVisible();
  });
});
