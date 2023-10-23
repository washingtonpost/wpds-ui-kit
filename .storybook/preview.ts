import {
  globalStyles,
  darkModeGlobalStyles,
  theme,
} from "@washingtonpost/wpds-theme";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

import type { Preview } from "@storybook/react";

globalStyles();
darkModeGlobalStyles();

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "story",
      values: [
        {
          name: "story",
          value: theme.colors.gray500,
        },
      ],
    },
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
};

export default preview;

