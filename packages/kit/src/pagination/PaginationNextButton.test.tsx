import * as React from "react";
import { screen } from "@testing-library/react";
import { PaginationNextButton as NextButton } from "./PaginationNextButton";
import { renderWithContext } from "./paginationTestsHelpers";

const props = {
  setPage: () => null,
  page: 1,
  slug: "people/author/",
};

describe("PaginationNextButton", () => {
  test("renders visibly into the document", () => {
    renderWithContext(<NextButton />, { ...props });

    expect(screen.getByRole("link")).toHaveAttribute(
      "href",
      "people/author/?page=2"
    );
    expect(screen.getByRole("link")).toHaveAttribute("rel", "next");
  });
});
