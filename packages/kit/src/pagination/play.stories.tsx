import { useState } from "react";
import { Pagination as Component } from "./";
import { styled, theme } from "../theme";

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

export const Numeric = {
  render: NumericTemplate,
  args: NumericArgs,
  parameters: {
    css: {
      containerStyles: {},
      panelStyles: {
        minHeight: "50vh",
        lightTheme: { backgroundColor: theme.colors.surface },
      },
    },
    stacked: true,
  },
};

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

export const Descriptive = {
  render: DescriptiveTemplate,
  args: DescriptiveArgs,
  parameters: {
    css: {
      containerStyles: {},
      panelStyles: {
        lightTheme: { backgroundColor: theme.colors.surface },
      },
    },
  },
};

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

export const Compact = {
  render: CompactTemplate,
  args: CompactArgs,
  parameters: {
    css: {
      containerStyles: {},
      panelStyles: {
        lightTheme: { backgroundColor: theme.colors.surface },
      },
    },
  },
};

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

export const NoDisplay = {
  render: NoDisplayTemplate,
  args: NoDisplayArgs,
  parameters: {
    css: {
      containerStyles: {},
      panelStyles: {
        lightTheme: { backgroundColor: theme.colors.surface },
      },
    },
  },
};

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

export const EndlessPagination = {
  render: EndlessPaginationTemplate,
  args: EndlessPaginationArgs,
  parameters: {
    css: {
      containerStyles: {},
      panelStyles: {
        lightTheme: { backgroundColor: theme.colors.surface },
      },
    },
  },
};
