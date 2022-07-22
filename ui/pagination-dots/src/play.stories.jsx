import * as React from "react";
import { PaginationDots as Component } from "./";
import { theme, styled, darkTheme } from "@washingtonpost/wpds-theme";
import { Stack } from "../../../app/pages/index.tsx";

export default {
  title: "PaginationDots",
  component: Component,
};

const DefaultArgs = {
  amount: 6,
  index: 1,
  label: "Progress Bar",
};

const Label = styled("h3", {
  textAlign: "center",
  [`.${darkTheme} &`]: { color: theme.colors.primary },
});

export const PaginationDots = (args) => (
  <Stack>
    <Label>Pagination Dots</Label>
    <Component {...args} />
  </Stack>
);

export const Chromatic = () => (
  <Stack>
    <Label>First item active, 5 or less items</Label>
    <Component amount={5} index={1} label="Sample label" />
    <Label>First item active, more than 5 items</Label>
    <Component amount={6} index={1} label="Sample label" />
    <Label>Middle item active, 5 or less items</Label>
    <Component amount={5} index={3} label="Sample label" />
    <Label>Middle item active, more than 5 items</Label>
    <Component amount={7} index={4} label="Sample label" />
    <Label>Last item active, 5 or less items</Label>
    <Component amount={5} index={5} label="Sample label" />
    <Label>Last item active, more than 5 items</Label>
    <Component amount={6} index={6} label="Sample label" />
  </Stack>
);

PaginationDots.args = { ...DefaultArgs };
