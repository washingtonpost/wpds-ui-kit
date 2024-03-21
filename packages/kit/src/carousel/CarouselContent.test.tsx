import * as React from "react";
import { render, screen } from "@testing-library/react";
import { CarouselContent } from "./CarouselContent";
import { CarouselContext } from "./CarouselRoot";

describe("CarouselContent", () => {
  const renderWithContext = (ui, contextProps) => {
    return render(
      <CarouselContext.Provider value={...contextProps}>
        {ui}
      </CarouselContext.Provider>
    );
  };

  test("renders visibly into the document", () => {
    renderWithContext(
      <CarouselContent>
        <span>Test</span>
      </CarouselContent>,
      {
        setTotalPages: () => undefined,
      }
    );

    expect(screen.getByText("Test")).toBeVisible();
  });
});
