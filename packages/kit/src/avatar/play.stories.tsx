import React from "react";
import { Avatar as Component } from "./";
import { styled, theme } from "../theme";
import type { StoryObj, Meta } from "@storybook/react";

export default {
  title: "Avatar",
  component: Component,
  argTypes: {
    size: {
      options: [
        "025",
        "050",
        "075",
        "087",
        "100",
        "125",
        "150",
        "175",
        "200",
        "225",
        "250",
        "275",
        "300",
        "350",
        "400",
        "450",
        "500",
      ],
      control: { type: "select" },
    },
  },
} as Meta<typeof Component>;

const defaultArgs = {
  size: 200,
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

export const Avatar: StoryObj<typeof Component> = {
  render: (args) => (
    <Container>
      <Label>Avatar with Element using &lt;img /&gt; tag</Label>
      <Component {...args}>
        <img
          src="https://i.pravatar.cc/300?u=test-user@wapo.com"
          alt="An avatar is an atomic component that represents an individual’s identity through a circular photo."
        />
      </Component>
    </Container>
  ),

  args: { ...defaultArgs },
};

export const Responsive = {
  render: (args) => {
    return (
      <Component
        {...args}
        size={{
          "@initial": 100,
          "@notSm": 300,
          "@notLg": 500,
        }}
      >
        <img
          src="https://i.pravatar.cc/300?u=test-user@wapo.com"
          alt="An avatar is an atomic component that represents an individual’s identity through a circular photo."
        />
      </Component>
    );
  },
};

const Row = styled("div", {
  display: "flex",
  gap: theme.space["100"],
});

export const StyledOverride: StoryObj<typeof Component> = {
  render: (args) => {
    const StyledComponent = styled(Component, {
      boxShadow: theme.shadows["300"],
      "&.override": {
        width: "150px",
        height: "150px",
      },
    });

    return (
      <Row>
        <StyledComponent {...args} className="override">
          <img
            src="https://i.pravatar.cc/300?u=test-user@wapo.com"
            alt="An avatar is an atomic component that represents an individual’s identity through a circular photo."
          />
        </StyledComponent>
        <Component {...args} css={{ width: "150px", height: "150px" }}>
          <img
            src="https://i.pravatar.cc/300?u=test-user@wapo.com"
            alt="An avatar is an atomic component that represents an individual’s identity through a circular photo."
          />
        </Component>
      </Row>
    );
  },
};

export const TokenForSize: StoryObj<typeof Component> = {
  render: (args) => {
    return (
      <Row>
        <Component size={theme.sizes["100"]} {...args}>
          <img
            src="https://i.pravatar.cc/300?u=test-user@wapo.com"
            alt="An avatar is an atomic component that represents an individual’s identity through a circular photo."
          />
        </Component>
        <Component size={theme.sizes["200"]} {...args}>
          <img
            src="https://i.pravatar.cc/300?u=test-user@wapo.com"
            alt="An avatar is an atomic component that represents an individual’s identity through a circular photo."
          />
        </Component>
        <Component size={theme.sizes["300"]} {...args}>
          <img
            src="https://i.pravatar.cc/300?u=test-user@wapo.com"
            alt="An avatar is an atomic component that represents an individual’s identity through a circular photo."
          />
        </Component>
      </Row>
    );
  },
};
