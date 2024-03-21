import * as React from "react";
import { render, screen } from "@testing-library/react";
import { CarouselItem } from "./CarouselItem";
import { CarouselContext } from "./CarouselRoot";

describe("CarouselItem", () => {
  const renderWithContext = (ui, contextProps) => {
    return render(
      <CarouselContext.Provider value={...contextProps}>
        {ui}
      </CarouselContext.Provider>
    );
  };

  test("renders visibly into the document", () => {
    render(<CarouselItem>Test</CarouselItem>);

    expect(screen.getByText("Test")).toBeVisible();
  });

  test("sets width based on items per page", () => {
    renderWithContext(<CarouselItem>Test</CarouselItem>, {
      itemsPerPage: 2,
      totalPages: 1,
    });

    // eslint-disable-next-line jest-dom/prefer-to-have-class
    expect(screen.getByText("Test")).toHaveAttribute(
      "class",
      expect.stringContaining("wpds")
    );
  });
});
