import { render, screen } from "@testing-library/react";
import { PaginationRoot } from "./PaginationRoot";
import { PaginationItemRangeIndicator as ItemRangeIndicator } from "./PaginationItemRangeIndicator";
import { PaginationPreviousButton as PreviousButton } from "./PaginationPreviousButton";
import { PaginationDisplay as Display } from "./PaginationDisplay";
import { PaginationNextButton as NextButton } from "./PaginationNextButton";

const props = {
  css: {},
  endlessPagination: false,
  items: 150,
  page: 1,
  setPage: () => null,
  showItems: true,
  showTotal: true,
  slug: "",
  totalPages: 15,
  variant: "numeric",
};

describe("PaginationRoot", () => {
  test("renders visibly into the document", () => {
    const { items, showTotal, ...rest } = props;

    render(
      <PaginationRoot {...rest}>
        <ItemRangeIndicator items={items} showTotal={showTotal} />
        <PreviousButton />
        <Display />
        <NextButton />
      </PaginationRoot>
    );

    expect(screen.getByText("Showing 1 - 10 of 150 items")).toBeVisible();
  });
});
