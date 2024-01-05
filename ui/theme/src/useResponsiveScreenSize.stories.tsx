import React from "react";
import { Meta, Story } from "@storybook/react";
import { within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { Box } from "@washingtonpost/wpds-box";
import { useResponsiveScreenSize } from "./useResponsiveScreenSize";

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
};

export default {
  title: "Hooks/useResponsiveScreenSize",
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
      },
      defaultViewport: "responsive",
    },
  },
} as Meta;

const Template: Story<typeof Box> = () => {
  const screenSize = useResponsiveScreenSize();

  return (
    <div>
      <h1>Responsive Screen Size</h1>
      <p>Current screen size: {screenSize}</p>
    </div>
  );
};

export const Default = Template.bind({});

// Function to emulate pausing between interactions
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const InteractionsSmall = Template.bind({});

InteractionsSmall.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await sleep(500);

  const screenSize = canvas.getByText("Current screen size: small");
  expect(screenSize).toBeTruthy();
};

InteractionsSmall.parameters = {
  viewport: {
    defaultViewport: "small",
  },
  chromatic: {
    modes: {
      mobile: allModes["sm"],
    },
  },
};

export const InteractionsMedium = Template.bind({});
InteractionsMedium.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await sleep(500);

  const screenSize = canvas.getByText("Current screen size: medium");
  expect(screenSize).toBeTruthy();
};

InteractionsMedium.parameters = {
  viewport: {
    defaultViewport: "medium",
  },
  chromatic: {
    modes: {
      tablet: allModes["md"],
    },
  },
};

export const InteractionsLarge = Template.bind({});
InteractionsLarge.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await sleep(500);

  const screenSize = canvas.getByText("Current screen size: large");
  expect(screenSize).toBeTruthy();
};

InteractionsLarge.parameters = {
  viewport: {
    defaultViewport: "large",
  },
  chromatic: {
    modes: {
      tablet: allModes["lg"],
    },
  },
};

export const InteractionsXLarge = Template.bind({});
InteractionsXLarge.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await sleep(500);

  const screenSize = canvas.getByText("Current screen size: xlarge");
  expect(screenSize).toBeTruthy();
};

InteractionsXLarge.parameters = {
  viewport: {
    defaultViewport: "xlarge",
  },
  chromatic: {
    modes: {
      desktop: allModes["xl"],
    },
  },
};

export const InteractionsXXLarge = Template.bind({});

InteractionsXXLarge.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await sleep(500);

  const screenSize = canvas.getByText("Current screen size: xxlarge");
  expect(screenSize).toBeTruthy();
};

InteractionsXXLarge.parameters = {
  viewport: {
    defaultViewport: "xxlarge",
  },
  chromatic: {
    modes: {
      desktop: allModes["xxl"],
    },
  },
};

// for unknown screen size
export const InteractionsUnknown = Template.bind({});

InteractionsUnknown.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await sleep(500);

  const screenSize = canvas.getByText("Current screen size: unknown");
  expect(screenSize).toBeTruthy();
};

InteractionsUnknown.parameters = {
  viewport: {
    defaultViewport: "responsive",
  },
  chromatic: {
    modes: {
      mobile: allModes["sm"],
    },
  },
};
