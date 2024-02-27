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

  test("triggers context callback on click", async () => {
    const user = userEvent.setup();
    const pageChangeHandler = jest.fn();
    renderWithContext(<CarouselNextButton />, {
      page: 0,
      totalPages: 2,
      setPage: pageChangeHandler,
    });

    await user.click(screen.getByRole("button"));
    expect(pageChangeHandler).toHaveBeenCalledWith(1);
  });

  test("triggers callback on click", async () => {
    const user = userEvent.setup();
    const clickHandler = jest.fn();
    renderWithContext(<CarouselNextButton onClick={clickHandler} />, {
      page: 0,
      totalPages: 2,
      setPage: () => undefined,
    });

    await user.click(screen.getByRole("button"));
    expect(clickHandler).toHaveBeenCalled();
  });

  test("renders custom content using asChild prop", () => {
    render(
      <CarouselNextButton asChild>
        <button>test</button>
      </CarouselNextButton>
    );
    expect(screen.getByRole("button")).toHaveTextContent("test");
  });
});
