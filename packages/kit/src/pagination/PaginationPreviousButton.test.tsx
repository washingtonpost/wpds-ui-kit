import * as React from "react";
import { screen } from "@testing-library/react";
import { PaginationPreviousButton as PreviousButton } from "./PaginationPreviousButton";
import { renderWithContext } from "./paginationTestsHelpers";

const props = {
  setPage: () => null,
  page: 2,
  slug: "people/author/",
};

describe("PaginationPreviousButton", () => {
  test("renders visibly into the document", () => {
    renderWithContext(<PreviousButton />, { ...props });

    expect(screen.getByRole("link")).toHaveAttribute(
      "href",
      "people/author/?page=1"
    );
    expect(screen.getByRole("link")).toHaveAttribute("rel", "prev");
  });
});
