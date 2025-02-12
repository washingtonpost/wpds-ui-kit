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
  items: 627,
  showTotal: true,
  slug: "",
  totalPages: 63,
  variant: "numeric",
};

const Template: ComponentStory<typeof Component> = (args) => {
  const [page, setPage] = useState(1);

  return <Component {...args} changeCurrentPage={setPage} currentPage={page} />;
};

export const Pagination = Template.bind({});

Pagination.args = DefaultArgs;
