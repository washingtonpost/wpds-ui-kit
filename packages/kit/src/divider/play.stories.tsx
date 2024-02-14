import { Divider } from "./";
import { theme, styled } from "../theme";

import type { Meta, StoryFn } from "@storybook/react";

export default {
  title: "Divider",
  component: Divider,
} as Meta<typeof Divider>;

const Container = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "calc(100vw - 2rem) ",
  height: "100px",
});

const Template: StoryFn<typeof Divider> = (args) => (
  <Container>
    <Divider {...args} />
  </Container>
);

export const Default = {
  render: Template,

  parameters: {
    chromatic: { disableSnapshot: true },
  },
};

const Grid = styled("div", {
  backgroundColor: theme.colors.secondary,
  display: "flex",
  padding: theme.space["100"],
  flex: 1,
  flexDirection: "column",
  width: "100%",
});

const Column = styled("div", {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
});

const HStack = styled("section", {
  flex: 1,
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "stretch",
});

const ChromaticTemplate: StoryFn<typeof Divider> = () => (
  <Grid>
    <Column>
      <Divider />
      <Divider variant="strong" />
    </Column>
    <HStack>
      <Divider orientation="vertical" css={{ height: "auto !important" }} />
      <Divider
        orientation="vertical"
        variant="strong"
        css={{ height: "auto !important" }}
      />
    </HStack>
  </Grid>
);

export const Chromatic = {
  render: ChromaticTemplate,
};
