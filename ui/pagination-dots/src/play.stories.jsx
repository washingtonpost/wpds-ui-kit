import * as React from "react";
import { PaginationDots as Component } from "./";
import { theme, styled, darkTheme } from "@washingtonpost/wpds-theme";
import { Stack, HStack } from "../../../app/pages/index.tsx";
import { Button } from "@washingtonpost/wpds-button";
import { InputText } from "@washingtonpost/wpds-ui-kit";

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

export const WithControls = (args) => {
  const id = React.useMemo(() => `${Math.random()}-amount`.slice(2), []);
  const [amount, setAmount] = React.useState(5);
  const [index, setIndex] = React.useState(1);

  React.useEffect(() => setAmount(amount), [amount]);

  return (
    <Stack>
      <Label>Pagination Dots with Controller</Label>
      <InputText
        id={id}
        type="number"
        min="0"
        value={amount}
        defaultValue={5}
        onChange={(e) => setAmount(e.target.value)}
        label="Total dots"
      />
      <HStack css={{ alignItems: "center" }}>
        <Button onClick={() => setIndex(index - 1)}>-</Button>
        <Label
          css={{
            fontSize: theme.fontSizes[100],
            fontWeight: theme.fontWeights["regular"],
          }}
        >
          increase/decrease index
        </Label>
        <Button css={{ float: "right" }} onClick={() => setIndex(index + 1)}>
          +
        </Button>
      </HStack>
      <Component index={index ? index : 1} amount={amount ? amount : 5} />
    </Stack>
  );
};

PaginationDots.args = { ...DefaultArgs };
