import * as React from "react";
import { render, screen } from "@testing-library/react";
import { PaginationPageButton as Button } from "./PaginationPageButton";

const props = {
  changePage: () => null,
  currentPage: 1,
  num: 1,
  slug: "people/author/",
};

describe("PaginationPageButton", () => {
  test("renders visibly into the document", () => {
    render(<Button {...props} />);

    expect(screen.getByRole("link")).toHaveTextContent("1");
    expect(screen.getByRole("link")).toHaveAttribute(
      "href",
      "people/author/?page=1"
    );
  });
});
