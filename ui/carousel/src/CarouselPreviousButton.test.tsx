import * as React from "react";
import { render, screen } from "@testing-library/react";
import { CarouselPreviousButton } from "./CarouselPreviousButton";

describe("CarouselPreviousButton", () => {
  test("renders visibly into the document", () => {
    render(<CarouselPreviousButton />);

    expect(screen.getByRole("button")).toBeVisible();
  });
});
