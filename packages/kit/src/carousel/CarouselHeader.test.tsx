import { render, screen } from "@testing-library/react";
import { CarouselHeader } from "./CarouselHeader";

describe("CarouselHeader", () => {
  test("renders visibly into the document", () => {
    render(<CarouselHeader>Test</CarouselHeader>);

    expect(screen.getByText("Test")).toBeVisible();
  });
});
