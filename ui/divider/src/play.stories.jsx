import * as React from "react";
import { styled } from "@washingtonpost/wpds-theme";
import { Divider as Component } from "./";

export default {
  title: "Divider",
  component: Component,
};

const Container = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "calc(100vw - 2rem) ",
  height: "100px",
});

const Template = (args) => (
  <Container>
    <Component {...args} />
  </Container>
);

export const Divider = Template.bind({});

Divider.parameters = {
  chromatic: { disableSnapshot: true },
};

const Grid = styled("div", {
  alignItems: "stretch",
  display: "flex",
  width: "calc(100vw - 2rem) ",
  height: "100px",
});

const Column = styled("div", {
  justifyContent: "center",
  display: "flex",
  flex: 1,
  flexDirection: "column",
  gap: "$200",
});

const HStack = styled("section", {
  justifyContent: "center",
  display: "flex",
  flex: 1,
  flexDirection: "row",
  gap: "$200",
});

const ChromaticTemplate = () => (
  <Grid>
    <Column>
      <Component />
      <Component variant="strong" />
    </Column>
    <HStack>
      <Component orientation="vertical" />
      <Component orientation="vertical" variant="strong" />
    </HStack>
  </Grid>
);

export const Chromatic = ChromaticTemplate.bind({});
