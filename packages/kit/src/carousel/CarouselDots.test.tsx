import * as React from "react";
import { render, screen } from "@testing-library/react";
import { CarouselDots } from "./CarouselDots";

describe("CarouselDots", () => {
  test("renders visibly into the document", () => {
    render(<CarouselDots />);

    expect(screen.getByRole("progressbar")).toBeVisible();
  });
});
