import { useState } from "react";
import { Pagination as Component } from "./";
import { styled } from "../theme";

import { Meta, StoryFn } from "@storybook/react";

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

const DefaultArgs = {
  setPage: () => null,
  css: {},
  page: 1,
  showItems: false,
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

// for item range indicator
const items = 100;
const showTotal = true;

const NumericTemplate: StoryFn<typeof Component.Root> = (args) => {
  const [page, setPage] = useState(1);
  const { css, showItems, slug, variant } = args;

  const MAX_RESULTS_PER_PAGE = 10;
  const totalPages = Math.ceil((items ?? 0) / MAX_RESULTS_PER_PAGE);
  const endlessPagination = totalPages > 15;

  return (
    <Component.Root
      css={css}
      endlessPagination={endlessPagination}
      page={page}
      setPage={setPage}
      showItems={showItems}
      slug={slug}
      totalPages={totalPages}
      variant={variant}
    >
      <Component.ItemRangeIndicator showTotal={showTotal} items={items} />
      <DisplayContainer>
        <Component.PreviousButton />
        <Component.Display />
        <Component.NextButton />
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

const DescriptiveTemplate: StoryFn<typeof Component.Root> = (args) => {
  const [page, setPage] = useState(1);
  const { css, showItems, slug, variant } = args;

  const MAX_RESULTS_PER_PAGE = 10;
  const totalPages = Math.ceil((items ?? 0) / MAX_RESULTS_PER_PAGE);
  const endlessPagination = totalPages > 15;

  return (
    <Component.Root
      css={css}
      endlessPagination={endlessPagination}
      page={page}
      setPage={setPage}
      showItems={showItems}
      slug={slug}
      totalPages={totalPages}
      variant={variant}
    >
      <Component.ItemRangeIndicator showTotal={showTotal} items={items} />
      <DisplayContainer>
        <Component.PreviousButton />
        <Component.Display />
        <Component.NextButton />
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

const CompactTemplate: StoryFn<typeof Component.Root> = (args) => {
  const [page, setPage] = useState(1);
  const { css, showItems, slug, variant } = args;

  const MAX_RESULTS_PER_PAGE = 10;
  const totalPages = Math.ceil((items ?? 0) / MAX_RESULTS_PER_PAGE);
  const endlessPagination = totalPages > 15;

  return (
    <Component.Root
      css={css}
      endlessPagination={endlessPagination}
      page={page}
      setPage={setPage}
      showItems={showItems}
      slug={slug}
      totalPages={totalPages}
      variant={variant}
    >
      <Component.ItemRangeIndicator showTotal={showTotal} items={items} />
      <DisplayContainer>
        <Component.PreviousButton />
        <Component.Display />
        <Component.NextButton />
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

const NoDisplayTemplate: StoryFn<typeof Component.Root> = (args) => {
  const [page, setPage] = useState(1);
  const { css, showItems, slug, variant } = args;

  const MAX_RESULTS_PER_PAGE = 10;
  const totalPages = Math.ceil((items ?? 0) / MAX_RESULTS_PER_PAGE);
  const endlessPagination = totalPages > 15;

  return (
    <Component.Root
      css={css}
      endlessPagination={endlessPagination}
      page={page}
      setPage={setPage}
      showItems={showItems}
      slug={slug}
      totalPages={totalPages}
      variant={variant}
    >
      <Component.ItemRangeIndicator showTotal={showTotal} items={items} />
      <DisplayContainer>
        <Component.PreviousButton />
        <Component.Display />
        <Component.NextButton />
      </DisplayContainer>
    </Component.Root>
  );
};

export const NoDisplay = NoDisplayTemplate.bind({});

NoDisplay.args = NoDisplayArgs;

const EndlessPaginationArgs = {
  ...DefaultArgs,
  variant: "numeric",
};

const EndlessPaginationTemplate: StoryFn<typeof Component.Root> = (args) => {
  const { css, showItems, slug, variant } = args;
  const [page, setPage] = useState(40);

  // for item range indicator
  const items = 1053;

  const MAX_RESULTS_PER_PAGE = 10;
  const totalPages = Math.ceil((items ?? 0) / MAX_RESULTS_PER_PAGE);
  const endlessPagination = totalPages > 15;

  return (
    <Component.Root
      css={css}
      endlessPagination={endlessPagination}
      page={page}
      setPage={setPage}
      showItems={showItems}
      slug={slug}
      totalPages={totalPages}
      variant={variant}
    >
      <Component.ItemRangeIndicator showTotal={showTotal} items={items} />
      <DisplayContainer>
        <Component.PreviousButton />
        <Component.Display />
        <Component.NextButton />
      </DisplayContainer>
    </Component.Root>
  );
};

export const EndlessPagination = EndlessPaginationTemplate.bind({});

EndlessPagination.args = EndlessPaginationArgs;
