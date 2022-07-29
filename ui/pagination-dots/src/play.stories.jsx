import * as React from "react";
import { PaginationDots as Component } from "./";
import { theme, styled, darkTheme } from "@washingtonpost/wpds-theme";
import { Stack, HStack } from "../../../app/pages/index.tsx";
import { Button } from "@washingtonpost/wpds-button";
import { InputText } from "@washingtonpost/wpds-ui-kit";
import { within, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

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
  <Stack css={{ position: "relative" }}>
    <Label>Pagination Dots</Label>
    <Component {...args} />
  </Stack>
);

PaginationDots.args = { ...DefaultArgs };

const Template = (args, context) => {
  const id = React.useMemo(() => `${Math.random()}-amount`.slice(2), []);
  const [amount, setAmount] = React.useState(5);
  const [index, setIndex] = React.useState(1);

  React.useEffect(() => setAmount(amount), [amount]);
  console.log(context.theme);

  return (
    <Stack css={{ position: "relative" }}>
      <Label>Pagination Dots with Controller</Label>
      <InputText
        data-testid={`${context.theme}-input-text`}
        id={id}
        type="number"
        min="0"
        value={amount}
        defaultValue={5}
        onChange={(e) => setAmount(e.target.value)}
        label="Total dots"
      />
      <HStack css={{ alignItems: "center" }}>
        <Button
          data-testid={`${context.theme}-dec-btn`}
          onClick={() => setIndex(index - 1)}
        >
          -
        </Button>
        <Label
          css={{
            fontSize: theme.fontSizes[100],
            fontWeight: theme.fontWeights["regular"],
          }}
        >
          increase/decrease index
        </Label>
        <Button
          data-testid={`${context.theme}-inc-btn`}
          css={{ float: "right" }}
          onClick={() => setIndex(index + 1)}
        >
          +
        </Button>
      </HStack>
      <Component
        index={index ? index : 1}
        amount={amount ? amount : 5}
        // label="Pagination Dots controlled by buttons and input text"
        label={`${context.theme}-pagination`}
      />
    </Stack>
  );
};

export const WithControls = Template.bind({});
// Function to emulate pausing between interactions
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const Interactions = Template.bind({});
Interactions.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const dotties = canvas.getByLabelText("light-pagination");

  // change amount of dots
  userEvent.type(canvas.getByTestId("light-input-text"), "{backspace}6");
  await sleep(500);
  // check incrementing index changes ariaValueNow
  userEvent.click(canvas.getByTestId("light-inc-btn"));
  expect(dotties.ariaValueNow).toBe("2");
  await sleep(500);

  // traverse all dots
  for (let i = 0; i < 9; i++) {
    var btn = i < 4 ? "light-inc-btn" : "light-dec-btn";
    userEvent.click(canvas.getByTestId(btn));
    await sleep(500);
  }

  // test ariaValueMax change on amount change
  userEvent.type(canvas.getByTestId("light-input-text"), "{backspace}12");
  await sleep(500);
  expect(dotties.ariaValueMax).toBe("12");

  // test dots never go below 0
  userEvent.type(
    canvas.getByTestId("light-input-text"),
    "{backspace}{backspace}0"
  );
  await sleep(500);
  expect(dotties.ariaValueMax).toBe("1");
  expect(dotties.ariaValueNow).toBe("1");

  // tests a large number of dots doesn't modify other elements
  userEvent.type(canvas.getByTestId("light-input-text"), "{backspace}100");
  await sleep(500);
};

export const Chromatic = () => (
  <Stack>
    <Stack css={{ position: "relative" }}>
      <Label>First item active, 5 or less items</Label>
      <Component amount={5} index={1} label="Sample label" />
    </Stack>
    <Stack css={{ position: "relative" }}>
      <Label>First item active, more than 5 items</Label>
      <Component amount={6} index={1} label="Sample label" />
    </Stack>
    <Stack css={{ position: "relative" }}>
      <Label>Middle item active, 5 or less items</Label>
      <Component amount={5} index={3} label="Sample label" />
    </Stack>
    <Stack css={{ position: "relative" }}>
      <Label>Middle item active, more than 5 items</Label>
      <Component amount={7} index={4} label="Sample label" />
    </Stack>
    <Stack css={{ position: "relative" }}>
      <Label>Last item active, 5 or less items</Label>
      <Component amount={5} index={5} label="Sample label" />
    </Stack>
    <Stack css={{ position: "relative" }}>
      <Label>Last item active, more than 5 items</Label>
      <Component amount={6} index={6} label="Sample label" />
    </Stack>
  </Stack>
);
