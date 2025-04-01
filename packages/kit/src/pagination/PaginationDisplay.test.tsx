import * as React from "react";
import { render, screen } from "@testing-library/react";
import { PaginationDisplay } from "./PaginationDisplay";

const props = {
  changeCurrentPage: () => null,
  compact: false,
  css: {},
  currentPage: 1,
  endlessPagination: false,
  slug: "people/author/",
  totalPages: 10,
  variant: "numeric",
};

describe("PaginationDisplay", () => {
  test("renders visibly into the document -- numeric", () => {
    render(<PaginationDisplay {...props} />);

    expect(screen.getAllByRole("link")[0]).toHaveTextContent("1");
    expect(screen.getAllByRole("link")[5]).toHaveTextContent("10");
  });

  test("renders visibly into the document -- descriptive", () => {
    const testProps = { ...props, variant: "descriptive" };
    render(<PaginationDisplay {...testProps} />);

    expect(screen.getByText("1 of 10 pages")).toBeVisible();
  });

  // Fix
  // test("renders visibly into the document -- compact", () => {
  //   render(<PaginationDisplay {...props} />);

  //   expect(screen.getByText("1/10")).toBeVisible();
  // });
});
