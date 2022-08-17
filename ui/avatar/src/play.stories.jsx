import * as React from "react";
import { Avatar as Component } from "./";
import { styled, theme } from "@washingtonpost/wpds-theme";

export default {
  title: "Avatar",
  component: Component,
};

const myLoader = ({ src }) => {
  return `${src}`;
};

const DefaultArgs = {
  size: "200",
  css: {
    backgroundColor: theme.colors.subtle,
  },
};

const Container = styled("div", {
  textAlign: "center",
});
const Label = styled("h3", {
  color: theme.colors.primary,
  margin: 0,
  textAlign: "center",
});

export const Avatar = (args) => (
  <Container>
    <Label>
      Avatar with Element using <img /> tag
    </Label>
    <Component {...args}>
      <img
        src="https://i.pravatar.cc/300?u=test-user@wapo.com"
        alt="An avatar is an atomic component that represents an individual’s identity through a circular photo."
      />
    </Component>
  </Container>
);

Avatar.args = { ...DefaultArgs };
