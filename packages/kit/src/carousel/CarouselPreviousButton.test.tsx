import * as React from "react";
import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { CarouselPreviousButton } from "./CarouselPreviousButton";
import { CarouselContext } from "./CarouselRoot";

describe("CarouselPreviousButton", () => {
  const renderWithContext = (ui, contextProps) => {
    return render(
      <CarouselContext.Provider value={{ ...contextProps }}>
        {ui}
      </CarouselContext.Provider>
    );
  };

  test("renders visibly into the document", () => {
    render(<CarouselPreviousButton />);

    expect(screen.getByRole("button")).toBeVisible();
  });

  test("triggers context callback on click", async () => {
    const user = userEvent.setup();
    const pageChangeHandler = jest.fn();
    renderWithContext(<CarouselPreviousButton />, {
      page: 1,
      totalPages: 2,
      setPage: pageChangeHandler,
    });

    await user.click(screen.getByRole("button"));
    expect(pageChangeHandler).toHaveBeenCalledWith(0);
  });

  test("triggers callback on click", async () => {
    const user = userEvent.setup();
    const clickHandler = jest.fn();
    renderWithContext(<CarouselPreviousButton onClick={clickHandler} />, {
      page: 1,
      totalPages: 2,
      setPage: () => undefined,
    });

    await user.click(screen.getByRole("button"));
    expect(clickHandler).toHaveBeenCalled();
  });

  test("renders custom content using asChild prop", () => {
    render(
      <CarouselPreviousButton asChild>
        <button>test</button>
      </CarouselPreviousButton>
    );
    expect(screen.getByRole("button")).toHaveTextContent("test");
  });
});
