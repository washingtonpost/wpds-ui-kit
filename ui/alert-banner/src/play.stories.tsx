import * as React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import * as AlertBanner from "./";
import { Box, styled } from "@washingtonpost/wpds-ui-kit";

export default {
  title: "Alert banner",
  component: AlertBanner.Root,
  subcomponents: {
    Trigger: AlertBanner.Trigger,
    Content: AlertBanner.Content,
  },
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    onClick: { action: "clicked" },
    position: {
      options: ["fixed", "sticky", "absolute", "relative"],
      control: "select",
    },
    shadow: {
      options: [true, false],
      control: "boolean",
    },
    variant: {
      options: ["error", "warning", "success", "information"],
    },
    dismissable: {
      options: [true, false],
      control: "boolean",
    },
  },
} as ComponentMeta<typeof AlertBanner.Root>;

const Column = styled("div", {
  display: "flex",
  flexDirection: "row",
  gap: "$100",
  alignItems: "center",
});

const Stack = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$100",
  alignItems: "center",
  borderRadius: "$075",
});

const Template: ComponentStory<typeof AlertBanner.Root> = ({
  children,
  ...args
}) => (
  <Column>
    <Stack>
      <AlertBanner.Root {...args} variant="error">
        <AlertBanner.Content as="p">
          <strong>Error: </strong> {children}
        </AlertBanner.Content>
        <AlertBanner.Trigger />
      </AlertBanner.Root>
      <AlertBanner.Root {...args} variant="success">
        <AlertBanner.Content as="p">
          <strong>Success: </strong> {children}
        </AlertBanner.Content>
        <AlertBanner.Trigger />
      </AlertBanner.Root>
      <AlertBanner.Root {...args} variant="warning">
        <AlertBanner.Content as="p">
          <strong>Warning: </strong> {children}
        </AlertBanner.Content>
        <AlertBanner.Trigger />
      </AlertBanner.Root>
      <AlertBanner.Root {...args} position="sticky">
        <AlertBanner.Content as="p">
          <strong>Information: </strong> ipsum dolor sit amet, consectetur
          adipiscing elit. Lorem eget vehicula velit, et adipiscing id et sit
          nunc. Fermentum mi lacus, fusce dui. Amet nunc sit urna quis aliquam,
          enim consequat, consectetur tempus. Auctor viverra tellus et enim
          tincidunt.
        </AlertBanner.Content>
        <AlertBanner.Trigger />
      </AlertBanner.Root>
    </Stack>
  </Column>
);

export const Play = Template.bind({});

Play.args = {
  children: "Message",
  css: {
    zIndex: "$shell",
    top: 0,
    left: 0,
  },
};

const Decorator = styled("div", {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "calc(100vh * 3);",
  px: "$100",
});

Play.decorators = [
  (Story) => (
    <Decorator>
      <Story />
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((i) => (
        <Box
          as="p"
          css={{
            display: "grid",
            gap: "$100",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel, ut in
          cras venenatis aliquam tellus cum posuere non. Dapibus diam lorem
          accumsan est scelerisque est viverra. Aliquam tristique est porttitor
          in amet, nisl pharetra ut enim. Luctus pulvinar maecenas consequat id
          sociis. Enim cursus felis elementum congue nascetur elit. Sit urna at
          posuere velit et nunc. Mauris, volutpat aliquet morbi ut. Egestas
          ultricies odio rhoncus blandit donec pharetra. Et arcu turpis diam
          ultrices semper leo. Iaculis eleifend posuere etiam erat. Pellentesque
          ac pretium fringilla gravida placerat mauris placerat a. Dictum vel id
          malesuada odio eu amet.
        </Box>
      ))}
    </Decorator>
  ),
];

Play.storyName = "Alert banner";
