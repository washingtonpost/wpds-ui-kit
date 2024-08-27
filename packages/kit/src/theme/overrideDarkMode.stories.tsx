import type { Meta } from "@storybook/react";
import { Box } from "../box";
import { Card } from "../card";
import { theme, lightTheme } from "../theme";

const Template = () => {
  return (
    <Box css={{ color: theme.colors.onBackground }}>
      <h1>Override Darkmode</h1>
      <Box css={{ display: "flex", gap: theme.space["050"], width: "640px" }}>
        <Box css={{ flex: 1 }}>
          <Card>Responds to Dark</Card>
        </Box>
        <Box css={{ flex: 1 }} className={lightTheme}>
          <Card>Stays Light</Card>
        </Box>
      </Box>
    </Box>
  );
};

const meta: Meta<React.ComponentProps<typeof Template>> = {
  title: "Override Darkmode",
  component: Template,
};

export const Default = {};

export default meta;
