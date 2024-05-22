import * as React from "react";
import { Meta, Story } from "@storybook/react";
import { within } from "@storybook/test";

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
  minXxl: {
    viewport: "infinity",
  },
};

export default {
  title: "useResponsiveScreenSize",
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

// Function to emulate pausing between interactions
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const InteractionsSmall = Template.bind({});

InteractionsSmall.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await sleep(500);

  const screenSize = canvas.getByText("Current screen size: small");
  expect(screenSize).toBeInTheDocument();
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
  expect(screenSize).toBeInTheDocument();
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
  expect(screenSize).toBeInTheDocument();
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
  expect(screenSize).toBeInTheDocument();
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
  expect(screenSize).toBeInTheDocument();
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

export const InteractionsInfinity = Template.bind({});

InteractionsInfinity.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await sleep(500);

  const screenSize = canvas.getByText("Current screen size: infinity");
  expect(screenSize).toBeInTheDocument();
};

InteractionsInfinity.parameters = {
  viewport: {
    defaultViewport: "responsive",
  },
  chromatic: {
    modes: {
      desktop: allModes["minXxl"],
    },
  },
};
