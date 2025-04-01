import * as React from "react";
import { render, screen } from "@testing-library/react";
import { PaginationItemRangeIndicator as ItemRangeIndicator } from "./PaginationItemRangeIndicator";

const props = {
  css: {},
  currentPage: 1,
  endlessPagination: false,
  showTotal: true,
  items: 100,
  totalPages: 10,
  showItems: true,
};

describe("PaginationItemRangeIndicator", () => {
  test("renders visibly into the document", () => {
    render(<ItemRangeIndicator {...props} />);

    expect(screen.getByText("Showing 1 - 10 of 100 items")).toBeVisible();
  });

  test("showTotal is false", () => {
    const testProps = { ...props, showTotal: false };
    render(<ItemRangeIndicator {...testProps} />);

    expect(screen.getByText("Showing 1 - 10 items")).toBeVisible();
  });
});
