import * as React from "react";
import { render, screen } from "@testing-library/react";
import { PaginationNextButton as NextButton } from "./PaginationNextButton";

const props = {
  changePage: () => null,
  css: {},
  currentPage: 1,
  slug: "people/author/",
  totalPages: 10,
};

describe("PaginationNextButton", () => {
  test("renders visibly into the document", () => {
    render(<NextButton {...props} />);

    expect(screen.getByRole("link")).toHaveAttribute(
      "href",
      "people/author/?page=2"
    );
    expect(screen.getByRole("link")).toHaveAttribute("rel", "next");
  });
});
