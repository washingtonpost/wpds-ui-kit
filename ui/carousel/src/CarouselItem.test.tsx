import * as React from "react";
import { render, screen } from "@testing-library/react";
import { CarouselItem } from "./CarouselItem";

describe("CarouselItem", () => {
  test("renders visibly into the document", () => {
    render(<CarouselItem>Test</CarouselItem>);

    expect(screen.getByText("Test")).toBeVisible();
  });
});
