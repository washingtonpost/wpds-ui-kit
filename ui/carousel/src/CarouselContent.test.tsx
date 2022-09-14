import * as React from "react";
import { render, screen } from "@testing-library/react";
import { CarouselContent } from "./CarouselContent";

describe("CarouselContent", () => {
  test("renders visibly into the document", () => {
    render(<CarouselContent>Test</CarouselContent>);

    expect(screen.getByText("Test")).toBeVisible();
  });
});
