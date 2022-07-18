import * as React from "react";
import { PaginationDots as Component } from "./";
import { theme, styled } from "@washingtonpost/wpds-theme";


export default {
  title: "PaginationDots",
  component: Component,
};

const DefaultArgs = {
  amount: 6,
  index: 1,
};

const Container = styled("div", {
  textAlign: "center",
});
const Label = styled("h3", {
  textAlign: "center",
  [".wpds-dark &"]: { color: theme.colors.primary }
});

export const PaginationDots = (args) => (
  <Container>
    <Label css={{ fontSize: "$150" }}>Pagination Dots</Label>
    <br />
    <Label>Interactive (with controls)</Label>
    <Component {...args} />
    <br />
    <Label>First item active, 5 or less items</Label>
    <Component amount={5} index={1}/>
    <br />
    <Label>First item active, more than 5 items</Label>
    <Component amount={6} index={1} />
    <br />
    <Label>Middle item active, 5 or less items</Label>
    <Component amount={5} index={3}/>
    <br />
    <Label>Middle item active, more than 5 items</Label>
    <Component amount={7} index={4} />
    <br />
    <Label>Last item active, 5 or less items</Label>
    <Component amount={5} index={5}/>
    <br />
    <Label>Last item active, more than 5 items</Label>
    <Component amount={6} index={6}/>
  </Container>
);

PaginationDots.args = { ...DefaultArgs };
