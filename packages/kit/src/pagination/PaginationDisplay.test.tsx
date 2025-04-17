import * as React from "react";
import { screen } from "@testing-library/react";
import { PaginationDisplay } from "./PaginationDisplay";
import { renderWithContext } from "./paginationTestsHelpers";

const props = {
  setPage: () => null,
  page: 1,
  endlessPagination: false,
  slug: "people/author/",
  totalPages: 10,
  variant: "numeric",
};

describe("PaginationDisplay", () => {
  test("renders visibly into the document -- numeric", () => {
    renderWithContext(<PaginationDisplay />, { ...props });

    expect(screen.getAllByRole("link")[0]).toHaveTextContent("1");
    expect(screen.getAllByRole("link")[5]).toHaveTextContent("10");
  });

  test("renders visibly into the document -- descriptive", () => {
    renderWithContext(<PaginationDisplay />, {
      ...props,
      variant: "descriptive",
    });

    expect(screen.getByText("1 of 10 pages")).toBeVisible();
  });

  test("renders visibly into the document -- compact", () => {
    renderWithContext(<PaginationDisplay />, {
      ...props,
      variant: "compact",
    });

    expect(screen.getByText("1/10")).toBeVisible();
  });
});
