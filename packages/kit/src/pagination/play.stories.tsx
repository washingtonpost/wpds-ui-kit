import { useState } from "react";
import { Pagination as Component } from "./";

import type { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Pagination",
  component: Component,
} as ComponentMeta<typeof Component>;

const DefaultArgs = {
  changeCurrentPage: () => null,
  currentPage: 1,
  items: 153,
  showTotal: true,
  slug: "",
  totalPages: 15,
};

const NumericArgs = {
  ...DefaultArgs,
  variant: "numeric",
};

const NumericTemplate: ComponentStory<typeof Component> = (args) => {
  const [page, setPage] = useState(1);

  return <Component {...args} changeCurrentPage={setPage} currentPage={page} />;
};

export const Numeric = NumericTemplate.bind({});

Numeric.args = NumericArgs;

const DescriptiveArgs = {
  ...DefaultArgs,
  variant: "descriptive",
};

const DescriptiveTemplate: ComponentStory<typeof Component> = (args) => {
  const [page, setPage] = useState(1);

  return <Component {...args} changeCurrentPage={setPage} currentPage={page} />;
};

export const Descriptive = DescriptiveTemplate.bind({});

Descriptive.args = DescriptiveArgs;

const CompactArgs = {
  ...DefaultArgs,
  variant: "compact",
};

const CompactTemplate: ComponentStory<typeof Component> = (args) => {
  const [page, setPage] = useState(1);

  return <Component {...args} changeCurrentPage={setPage} currentPage={page} />;
};

export const Compact = CompactTemplate.bind({});

Compact.args = CompactArgs;

const NoDisplayArgs = {
  ...DefaultArgs,
  variant: "no-display",
};

const NoDisplayTemplate: ComponentStory<typeof Component> = (args) => {
  const [page, setPage] = useState(1);

  return <Component {...args} changeCurrentPage={setPage} currentPage={page} />;
};

export const NoDisplay = NoDisplayTemplate.bind({});

NoDisplay.args = NoDisplayArgs;
