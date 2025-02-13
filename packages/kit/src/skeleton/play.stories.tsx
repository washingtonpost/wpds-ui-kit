import { Skeleton } from ".";
import { Box } from "../box";
import { StoryObj } from "@storybook/react";
import type { Meta } from "@storybook/react";

const meta: Meta<typeof Skeleton> = {
  title: "Skeleton",
  component: Skeleton,
  argTypes: {
    variant: {
      options: ["default", "rounded", "circle"],
      control: { type: "select" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
  args: {},
};

export const FullPage: Story = {
  render: () => (
    <Box css={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <Skeleton width={400} height={100} variant="rounded" />
      <Box css={{ display: "flex", gap: 16, alignItems: "center" }}>
        <Skeleton width={24} height={24} />
        <Skeleton width={365} height={16} variant="rounded" />
      </Box>
      <Skeleton width={400} height={188} />
      <Box css={{ display: "flex", gap: 8, alignItems: "center" }}>
        <Skeleton width={32} height={32} variant="circle" />
        <Skeleton width={32} height={32} variant="circle" />
        <Skeleton width={32} height={32} variant="circle" />
      </Box>
      <Box css={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <Skeleton width={400} height={16} variant="rounded" />
        <Skeleton width={400} height={16} variant="rounded" />
        <Skeleton width={400} height={16} variant="rounded" />
        <Skeleton width={200} height={16} variant="rounded" />
      </Box>
      <Skeleton width={100} height={32} variant="circle" />
    </Box>
  ),
};
