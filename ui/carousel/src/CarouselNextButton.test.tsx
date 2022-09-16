import * as React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CarouselNextButton } from "./CarouselNextButton";
import { CarouselContext } from "./CarouselRoot";

describe("CarouselNextButton", () => {
  const renderWithContext = (ui, contextProps) => {
    return render(
      <CarouselContext.Provider value={...contextProps}>
        {ui}
      </CarouselContext.Provider>
    );
  };

  test("renders visibly into the document", () => {
    render(<CarouselNextButton />);

    expect(screen.getByRole("button")).toBeVisible();
  });

  test("triggers callback on click", () => {
    const pageChangeHandler = jest.fn();
    renderWithContext(<CarouselNextButton />, {
      page: 0,
      totalPages: 2,
      setPage: pageChangeHandler,
    });

    userEvent.click(screen.getByRole("button"));
    expect(pageChangeHandler).toHaveBeenCalledWith(1);
  });

  test("triggers callback on click", () => {
    const clickHandler = jest.fn();
    renderWithContext(<CarouselNextButton onClick={clickHandler} />, {
      page: 0,
      totalPages: 2,
      setPage: () => undefined,
    });

    userEvent.click(screen.getByRole("button"));
    expect(clickHandler).toHaveBeenCalled();
  });
});
