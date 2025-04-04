import { useState } from "react";
import { Pagination as Component } from "./";
import { styled } from "../theme";

import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Pagination",
  component: Component.Root,
  subcomponents: {
    PaginationDisplay: Component.Display,
    PaginationItemRangeIndicator: Component.ItemRangeIndicator,
    PaginationPreviousButton: Component.PreviousButton,
    PaginationNextButton: Component.NextButton,
  },
} as Meta<typeof Component.Root>;

type Story = StoryObj<typeof Component.Root>;

const DefaultArgs = {
  changeCurrentPage: () => null,
  css: {},
  currentPage: 1,
  items: 100,
  showItems: false,
  showTotal: true,
  slug: "",
};

const NumericArgs = {
  ...DefaultArgs,
  showItems: true,
  variant: "numeric",
};

const DisplayContainer = styled("div", {
  gap: "$025",
  display: "flex",
  flexWrap: "nowrap",
  alignItems: "center",
});

const NumericTemplate: ComponentStory<typeof Component.Root> = (args) => {
  const [page, setPage] = useState(1);
  const { css, items, showItems, showTotal, slug, variant } = args;
  const MAX_RESULTS_PER_PAGE = 10;
  const totalPages = Math.ceil((items ?? 0) / MAX_RESULTS_PER_PAGE);
  const endlessPagination = totalPages > 15;

  return (
    <Component.Root css={css} showItems={showItems}>
      <Component.ItemRangeIndicator
        currentPage={page}
        endlessPagination={endlessPagination}
        showTotal={showTotal}
        items={items}
        totalPages={totalPages}
        showItems={showItems}
      />
      <DisplayContainer>
        <Component.PreviousButton
          changePage={setPage}
          currentPage={page}
          slug={slug}
          totalPages={totalPages}
        />
        <Component.Display
          changeCurrentPage={setPage}
          compact={variant === "compact"}
          currentPage={page}
          endlessPagination={endlessPagination}
          slug={slug}
          totalPages={totalPages}
          variant={variant}
        />
        <Component.NextButton
          changePage={setPage}
          currentPage={page}
          slug={slug}
          totalPages={totalPages}
          data-testid="pagination-next-button"
        />
      </DisplayContainer>
    </Component.Root>
  );
};

export const Numeric = NumericTemplate.bind({});

Numeric.args = NumericArgs;

const DescriptiveArgs = {
  ...DefaultArgs,
  showItems: true,
  variant: "descriptive",
};

const DescriptiveTemplate: ComponentStory<typeof Component.Root> = (args) => {
  const [page, setPage] = useState(1);
  const { items, showItems, showTotal, slug, variant } = args;
  const MAX_RESULTS_PER_PAGE = 10;
  const totalPages = Math.ceil((items ?? 0) / MAX_RESULTS_PER_PAGE);
  const endlessPagination = totalPages > 15;

  return (
    <Component.Root showItems={showItems}>
      <Component.ItemRangeIndicator
        currentPage={page}
        endlessPagination={endlessPagination}
        showTotal={showTotal}
        items={items}
        totalPages={totalPages}
        showItems={showItems}
      />
      <DisplayContainer>
        <Component.PreviousButton
          changePage={setPage}
          currentPage={page}
          slug={slug}
          totalPages={totalPages}
        />
        <Component.Display
          changeCurrentPage={setPage}
          compact={variant === "compact"}
          currentPage={page}
          endlessPagination={endlessPagination}
          slug={slug}
          totalPages={totalPages}
          variant={variant}
        />
        <Component.NextButton
          changePage={setPage}
          currentPage={page}
          slug={slug}
          totalPages={totalPages}
        />
      </DisplayContainer>
    </Component.Root>
  );
};

export const Descriptive = DescriptiveTemplate.bind({});

Descriptive.args = DescriptiveArgs;

const CompactArgs = {
  ...DefaultArgs,
  variant: "compact",
};

const CompactTemplate: ComponentStory<typeof Component.Root> = (args) => {
  const [page, setPage] = useState(1);
  const { items, showItems, showTotal, slug, variant } = args;
  const MAX_RESULTS_PER_PAGE = 10;
  const totalPages = Math.ceil((items ?? 0) / MAX_RESULTS_PER_PAGE);
  const endlessPagination = totalPages > 15;

  return (
    <Component.Root showItems={showItems}>
      <Component.ItemRangeIndicator
        currentPage={page}
        endlessPagination={endlessPagination}
        showTotal={showTotal}
        items={items}
        totalPages={totalPages}
        showItems={showItems}
      />
      <DisplayContainer>
        <Component.PreviousButton
          changePage={setPage}
          currentPage={page}
          slug={slug}
          totalPages={totalPages}
        />
        <Component.Display
          changeCurrentPage={setPage}
          compact={variant === "compact"}
          currentPage={page}
          endlessPagination={endlessPagination}
          slug={slug}
          totalPages={totalPages}
          variant={variant}
        />
        <Component.NextButton
          changePage={setPage}
          currentPage={page}
          slug={slug}
          totalPages={totalPages}
        />
      </DisplayContainer>
    </Component.Root>
  );
};

export const Compact = CompactTemplate.bind({});

Compact.args = CompactArgs;

const NoDisplayArgs = {
  ...DefaultArgs,
  variant: "no-display",
};

const NoDisplayTemplate: ComponentStory<typeof Component.Root> = (args) => {
  const [page, setPage] = useState(1);
  const { items, showItems, showTotal, slug, variant } = args;
  const MAX_RESULTS_PER_PAGE = 10;
  const totalPages = Math.ceil((items ?? 0) / MAX_RESULTS_PER_PAGE);
  const endlessPagination = totalPages > 15;

  return (
    <Component.Root showItems={showItems}>
      <Component.ItemRangeIndicator
        currentPage={page}
        endlessPagination={endlessPagination}
        showTotal={showTotal}
        items={items}
        totalPages={totalPages}
        showItems={showItems}
      />
      <DisplayContainer>
        <Component.PreviousButton
          changePage={setPage}
          currentPage={page}
          slug={slug}
          totalPages={totalPages}
        />
        <Component.Display
          changeCurrentPage={setPage}
          compact={variant === "compact"}
          currentPage={page}
          endlessPagination={endlessPagination}
          slug={slug}
          totalPages={totalPages}
          variant={variant}
        />
        <Component.NextButton
          changePage={setPage}
          currentPage={page}
          slug={slug}
          totalPages={totalPages}
        />
      </DisplayContainer>
    </Component.Root>
  );
};

export const NoDisplay = NoDisplayTemplate.bind({});

NoDisplay.args = NoDisplayArgs;

const EndlessPaginationArgs = {
  ...DefaultArgs,
  currentPage: 40,
  items: 1053,
  variant: "numeric",
};

const EndlessPaginationTemplate: ComponentStory<typeof Component.Root> = (
  args
) => {
  const { currentPage, items, showItems, showTotal, slug, variant } = args;
  const [page, setPage] = useState(currentPage);
  const MAX_RESULTS_PER_PAGE = 10;
  const totalPages = Math.ceil((items ?? 0) / MAX_RESULTS_PER_PAGE);
  const endlessPagination = totalPages > 15;

  return (
    <Component.Root showItems={showItems}>
      <Component.ItemRangeIndicator
        currentPage={page}
        endlessPagination={endlessPagination}
        showTotal={showTotal}
        items={items}
        totalPages={totalPages}
        showItems={showItems}
      />
      <DisplayContainer>
        <Component.PreviousButton
          changePage={setPage}
          currentPage={page}
          slug={slug}
          totalPages={totalPages}
        />
        <Component.Display
          changeCurrentPage={setPage}
          compact={variant === "compact"}
          currentPage={page}
          endlessPagination={endlessPagination}
          slug={slug}
          totalPages={totalPages}
          variant={variant}
        />
        <Component.NextButton
          changePage={setPage}
          currentPage={page}
          slug={slug}
          totalPages={totalPages}
        />
      </DisplayContainer>
    </Component.Root>
  );
};

export const EndlessPagination = EndlessPaginationTemplate.bind({});

EndlessPagination.args = EndlessPaginationArgs;
