import * as React from "react";
import { render, screen } from "@testing-library/react";
import { PaginationPreviousButton as PreviousButton } from "./PaginationPreviousButton";

const props = {
  changePage: () => null,
  css: {},
  currentPage: 2,
  slug: "people/author/",
  totalPages: 10,
};

describe("PaginationPreviousButton", () => {
  test("renders visibly into the document", () => {
    render(<PreviousButton {...props} />);

    expect(screen.getByRole("link")).toHaveAttribute(
      "href",
      "people/author/?page=1"
    );
    expect(screen.getByRole("link")).toHaveAttribute("rel", "prev");
  });
});
