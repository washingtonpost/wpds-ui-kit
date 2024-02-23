import { render, screen } from "@testing-library/react";
import { CarouselHeaderContent } from "./CarouselHeaderContent";

describe("CarouselHeaderContent", () => {
  test("renders visibly into the document", () => {
    render(<CarouselHeaderContent>Test</CarouselHeaderContent>);

    expect(screen.getByText("Test")).toBeVisible();
  });
});
