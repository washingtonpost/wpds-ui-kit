import { render, screen } from "@testing-library/react";
import { CarouselFooter } from "./CarouselFooter";

describe("CarouselFooter", () => {
  test("renders visibly into the document", () => {
    render(<CarouselFooter>Test</CarouselFooter>);

    expect(screen.getByText("Test")).toBeVisible();
  });
});
