import * as React from "react";
import { screen } from "@testing-library/react";
import { PaginationItemRangeIndicator as ItemRangeIndicator } from "./PaginationItemRangeIndicator";
import { renderWithContext } from "./paginationTestsHelpers";

const props = {
  css: {},
  page: 1,
  endlessPagination: false,
  showTotal: true,
  items: 100,
  totalPages: 10,
  showItems: true,
};

describe("PaginationItemRangeIndicator", () => {
  test("renders visibly into the document", () => {
    renderWithContext(
      <ItemRangeIndicator items={props.items} showTotal={props.showTotal} />,
      { ...props }
    );

    expect(screen.getByText("Showing 1 - 10 of 100 items")).toBeVisible();
  });

  test("showTotal is false", () => {
    renderWithContext(
      <ItemRangeIndicator items={props.items} showTotal={false} />,
      { ...props }
    );

    expect(screen.getByText("Showing 1 - 10 items")).toBeVisible();
  });
});
