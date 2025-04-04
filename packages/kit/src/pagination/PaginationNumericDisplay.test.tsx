import * as React from "react";
import { render, screen } from "@testing-library/react";
import { PaginationNumericDisplay as Numeric } from "./PaginationNumericDisplay";

const props = {
  changePage: () => null,
  compact: false,
  currentPage: 1,
  endlessPagination: false,
  slug: "people/author/",
  totalPages: 10,
  variant: "numeric",
};

describe("PaginationNumericDisplay", () => {
  test("renders visibly into the document", () => {
    render(<Numeric {...props} />);

    // Returns <1 2 3 4 5 ... 10>
    expect(screen.getAllByRole("link")[0]).toHaveTextContent("1");
    expect(screen.getAllByRole("link")[5]).toHaveTextContent("10");
  });
});
