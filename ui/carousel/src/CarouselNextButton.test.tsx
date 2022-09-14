import * as React from "react";
import { render, screen } from "@testing-library/react";
import { CarouselNextButton } from "./CarouselNextButton";

describe("CarouselNextButton", () => {
  test("renders visibly into the document", () => {
    render(<CarouselNextButton />);

    expect(screen.getByRole("button")).toBeVisible();
  });
});
