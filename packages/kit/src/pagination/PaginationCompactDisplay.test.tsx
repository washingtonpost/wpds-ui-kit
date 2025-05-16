import * as React from "react";
import { render, screen } from "@testing-library/react";
import { PaginationCompactDisplay as Compact } from "./PaginationCompactDisplay";

const props = {
  currentPage: 1,
  endlessPagination: false,
  totalPages: 10,
  variant: "compact",
};

describe("PaginationCompactDisplay", () => {
  test("renders visibly into the document", () => {
    render(<Compact {...props} />);

    expect(screen.getByText("1/10")).toBeVisible();
  });

  test("renders visibly into the document", () => {
    const testProps = { ...props, currentPage: 40, endlessPagination: true };
    render(<Compact {...testProps} />);

    expect(screen.getByText("Page 40")).toBeVisible();
  });
});
