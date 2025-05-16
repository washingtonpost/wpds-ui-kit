import * as React from "react";
import { render, screen } from "@testing-library/react";
import { PaginationDescriptiveDisplay as Descriptive } from "./PaginationDescriptiveDisplay";

const props = {
  compact: false,
  currentPage: 1,
  totalPages: 10,
  variant: "descriptive",
};

describe("PaginationDescriptiveDisplay", () => {
  test("renders visibly into the document", () => {
    render(<Descriptive {...props} />);

    expect(screen.getByText("1 of 10 pages")).toBeVisible();
  });
});
