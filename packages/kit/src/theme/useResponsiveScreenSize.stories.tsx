import React from "react";
import { within, waitFor } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { useResponsiveScreenSize } from "./useResponsiveScreenSize";

import type { Meta, StoryObj } from "@storybook/react";

const Template = () => {
  const screenSize = useResponsiveScreenSize();

  return (
    <div>
      <h1>Responsive Screen Size</h1>
      <p>Current screen size: {screenSize}</p>
    </div>
  );
};

const meta: Meta<typeof Template> = {
  title: "useResponsiveScreenSize",
  component: Template,
  parameters: {
    viewport: {
      viewports: {
        small: {
          name: "Small",
          styles: {
            height: "590px",
            width: "767px",
          },
          type: "mobile",
        },
        medium: {
          name: "Medium",
          styles: {
            height: "590px",
            width: "900px",
          },
          type: "tablet",
        },
        large: {
          name: "Large",
          styles: {
            height: "590px",
            width: "1024px",
          },
          type: "tablet",
        },
        xlarge: {
          name: "Extra Large",
          styles: {
            height: "590px",
            width: "1280px",
          },
          type: "desktop",
        },
        xxlarge: {
          name: "Extra Extra Large",
          styles: {
            height: "590px",
            width: "1440px",
          },
          type: "desktop",
        },
        infinity: {
          name: "Infinity",
          styles: {
            height: "590px",
            width: "1442px",
          },
          type: "desktop",
        },
      },
      defaultViewport: "responsive",
    },
  },
};
export default meta;

const allModes = {
  sm: {
    viewport: "small",
  },
  md: {
    viewport: "medium",
  },
  lg: {
    viewport: "large",
  },
  xl: {
    viewport: "xlarge",
  },
  xxl: {
    viewport: "xxlarge",
  },
  minXxl: {
    viewport: "infinity",
  },
};

type Story = StoryObj<typeof meta>;

export const InteractionsSmall: Story = {
  parameters: {
    viewport: {
      defaultViewport: "small",
    },
    chromatic: {
      modes: {
        mobile: allModes["sm"],
      },
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await waitFor(() => {
      const screenSize = canvas.getByText("Current screen size: small");
      expect(screenSize).toBeInTheDocument();
    });
  },
};

export const InteractionsMedium = {
  parameters: {
    viewport: {
      defaultViewport: "medium",
    },
    chromatic: {
      modes: {
        tablet: allModes["md"],
      },
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await waitFor(() => {
      const screenSize = canvas.getByText("Current screen size: medium");
      expect(screenSize).toBeInTheDocument();
    });
  },
};

export const InteractionsLarge: Story = {
  parameters: {
    viewport: {
      defaultViewport: "large",
    },
    chromatic: {
      modes: {
        tablet: allModes["lg"],
      },
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await waitFor(() => {
      const screenSize = canvas.getByText("Current screen size: large");
      expect(screenSize).toBeInTheDocument();
    });
  },
};

export const InteractionsXLarge: Story = {
  parameters: {
    viewport: {
      defaultViewport: "xlarge",
    },
    chromatic: {
      modes: {
        desktop: allModes["xl"],
      },
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await waitFor(() => {
      const screenSize = canvas.getByText("Current screen size: xlarge");
      expect(screenSize).toBeInTheDocument();
    });
  },
};

export const InteractionsXXLarge: Story = {
  parameters: {
    viewport: {
      defaultViewport: "xxlarge",
    },
    chromatic: {
      modes: {
        desktop: allModes["xxl"],
      },
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await waitFor(() => {
      const screenSize = canvas.getByText("Current screen size: xxlarge");
      expect(screenSize).toBeInTheDocument();
    });
  },
};

export const InteractionsInfinity: Story = {
  parameters: {
    viewport: {
      defaultViewport: "responsive",
    },
    chromatic: {
      modes: {
        desktop: allModes["minXxl"],
      },
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await waitFor(() => {
      const screenSize = canvas.getByText("Current screen size: infinity");
      expect(screenSize).toBeInTheDocument();
    });
  },
};
