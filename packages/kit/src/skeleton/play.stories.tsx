import { Skeleton } from ".";
import { Box } from "../box";
import { Card } from "../card";
import { StoryObj } from "@storybook/react";

import type { Meta } from "@storybook/react";
import type { SkeletonRootProps } from "./SkeletonRoot";
import type { SkeletonBlockProps } from "./SkeletonBlock";
import { theme } from "../theme";

const meta: Meta<typeof Skeleton.Root> = {
  title: "Skeleton",
  component: Skeleton.Root,
};

export default meta;
type Story = StoryObj<
  SkeletonRootProps & { aspectRatio: SkeletonBlockProps["aspectRatio"] }
>;

export const Default: Story = {
  render: () => (
    <Skeleton.Root width={200} height={200}>
      <Skeleton.Block width={50} />
      <Skeleton.Circle width={50} height={50} x={54} />
      <Skeleton.Line width={50} height={24} x={108} />
    </Skeleton.Root>
  ),
};

export const Block: Story = {
  argTypes: {
    aspectRatio: {
      options: ["1:1", "2:1", "3:2", "4:3", "5:4", "16:9", "16:10", "21:9"],
      control: "select",
    },
  },
  render: (args) => (
    <Skeleton.Root width={"300"} height={"300"}>
      <Skeleton.Block aspectRatio={args.aspectRatio} />
    </Skeleton.Root>
  ),
};

export const Circle: Story = {
  render: () => (
    <Skeleton.Root width={244} height={200}>
      <Skeleton.Circle />
      <Skeleton.Circle density="compact" x="124" />
      <Skeleton.Circle height={64} y="56" />
    </Skeleton.Root>
  ),
};

export const Line: Story = {
  render: () => (
    <Skeleton.Root width={200} height={200}>
      <Skeleton.Line />
      <Skeleton.Line y="32" textAlign="right" />
    </Skeleton.Root>
  ),
};

export const CardLoading: Story = {
  render: () => (
    <Card css={{ padding: "0", maxWidth: "200px", height: "fit-content" }}>
      <Skeleton.Root width="198" height="149">
        <Skeleton.Block width="198" aspectRatio="4:3" />
      </Skeleton.Root>
      <Box css={{ padding: theme.space["100"] }}>
        <Skeleton.Root width="166px" height="120px">
          <Skeleton.Line fontSize="112" />
          <Skeleton.Line fontSize="112" textAlign="left" y="24" />
          <Skeleton.Line fontSize="087" y="52" width="20%" />
          <Skeleton.Circle width="40" height="20" y="90" />
          <Skeleton.Circle width="20" height="20" x="145" y="90" />
        </Skeleton.Root>
      </Box>
    </Card>
  ),
};
