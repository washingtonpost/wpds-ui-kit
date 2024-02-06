import * as React from "react";
import { within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { Box } from "@washingtonpost/wpds-box";
import { theme, styled } from "@washingtonpost/wpds-theme";

import type { ComponentStory } from "@storybook/react";

export default {
  title: "Breakpoints",
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
};

const StyledBox = styled(Box, {
  width: "80px",
  height: "80px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: theme.radii["050"],

  variants: {
    breakpointActive: {
      true: {
        backgroundColor: theme.colors.success,
        color: theme.colors.secondary,
        fontWeight: theme.fontWeights.bold,
      },
      false: {
        backgroundColor: theme.colors.subtle,
      },
    },
  },
});

const Row = styled(Box, { display: "flex", gap: "$050" });

const Template: ComponentStory<typeof Box> = () => {
  const [windowWidth, setWindowWidth] = React.useState(0);

  React.useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Box
        css={{
          position: "fixed",
          top: "3rem",
          left: 0,
          borderInline: `2px solid ${theme.colors.cta}`,
          width: "calc(100% - 4px)",
          textAlign: "center",
          backgroundImage: `linear-gradient(0deg, transparent 0 50%, ${theme.colors.cta} 50% calc(50% + 2px), transparent calc(50% + 2px));`,
          fontFamily: "monospace",
          fontSize: theme.fontSizes["075"],
          paddingBlockEnd: theme.space["100"],
          color: theme.colors.cta,
          fontWeight: theme.fontWeights.bold,
        }}
      >
        {windowWidth}px
      </Box>
      <Box css={{ paddingBlock: "1px", fontFamily: theme.fonts.meta }}>
        <Box as="h1" css={{ marginBlockStart: 0, marginBlockEnd: "0.5rem" }}>
          Breakpoints
        </Box>
        <Box
          as="ul"
          css={{
            display: "flex",
            paddingInlineStart: 0,
            gap: theme.space["150"],
            listStyle: "none",
            marginBlock: 0,
            fontSize: theme.fontSizes["075"],
          }}
        >
          <li>
            <strong>sm</strong>: 0px - 767px
          </li>
          <li>
            <strong>md</strong>: 768px - 900px
          </li>
          <li>
            <strong>lg</strong>: 901px - 1024px
          </li>
          <li>
            <strong>xl</strong>: 1025px - 1280px
          </li>
          <li>
            <strong>xxl</strong>: 1281px - 1440px
          </li>
        </Box>
        <h2>
          Individual{" "}
          <Box
            as="span"
            css={{
              fontSize: theme.fontSizes["112"],
              color: theme.colors.accessible,
              fontWeight: theme.fontWeights.regular,
            }}
          >
            targets only the breakpoint range
          </Box>
        </h2>
        <Row>
          <StyledBox breakpointActive={{ "@initial": false, "@sm": true }}>
            @sm
          </StyledBox>
          <StyledBox breakpointActive={{ "@initial": false, "@md": true }}>
            @md
          </StyledBox>
          <StyledBox breakpointActive={{ "@initial": false, "@lg": true }}>
            @lg
          </StyledBox>
          <StyledBox breakpointActive={{ "@initial": false, "@xl": true }}>
            @xl
          </StyledBox>
          <StyledBox breakpointActive={{ "@initial": false, "@xxl": true }}>
            @xxl
          </StyledBox>
        </Row>
        <h2>
          Mobile First{" "}
          <Box
            as="span"
            css={{
              fontSize: theme.fontSizes["112"],
              color: theme.colors.accessible,
              fontWeight: theme.fontWeights.regular,
            }}
          >
            targets the end of the breakpoint range and above
          </Box>
        </h2>
        <Row>
          <StyledBox breakpointActive={{ "@initial": false, "@notSm": true }}>
            @notSm
          </StyledBox>
          <StyledBox breakpointActive={{ "@initial": false, "@notMd": true }}>
            @notMd
          </StyledBox>
          <StyledBox breakpointActive={{ "@initial": false, "@notLg": true }}>
            @notLg
          </StyledBox>
          <StyledBox breakpointActive={{ "@initial": false, "@notXl": true }}>
            @notXl
          </StyledBox>
          <StyledBox breakpointActive={{ "@initial": false, "@notXxl": true }}>
            @notXxl
          </StyledBox>
        </Row>
        <h2>
          Desktop First{" "}
          <Box
            as="span"
            css={{
              fontSize: theme.fontSizes["112"],
              color: theme.colors.accessible,
              fontWeight: theme.fontWeights.regular,
            }}
          >
            targets the end of the breakpoint range and below
          </Box>
        </h2>
        <Row>
          <StyledBox breakpointActive={{ "@initial": false, "@maxSm": true }}>
            @maxSm
          </StyledBox>
          <StyledBox breakpointActive={{ "@initial": false, "@maxMd": true }}>
            @maxMd
          </StyledBox>
          <StyledBox breakpointActive={{ "@initial": false, "@maxLg": true }}>
            @maxLg
          </StyledBox>
          <StyledBox breakpointActive={{ "@initial": false, "@maxXl": true }}>
            @maxXl
          </StyledBox>
          <StyledBox breakpointActive={{ "@initial": false, "@maxXxl": true }}>
            @maxXxl
          </StyledBox>
        </Row>
      </Box>
    </>
  );
};

// Function to emulate pausing between interactions
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const activeStyle = `background-color: ${theme.colors.green80.value}`;
const inactiveStyle = `background-color: ${theme.colors.alpha400.value}`;

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

export const InteractionsResponsive = Template.bind({});

export const InteractionsSmall = Template.bind({});

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

InteractionsSmall.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await sleep(500);
  await expect(canvas.getByText("@sm")).toHaveStyle(activeStyle);
  await expect(canvas.getByText("@md")).toHaveStyle(inactiveStyle);
  await expect(canvas.getByText("@maxSm")).toHaveStyle(activeStyle);
};

export const InteractionsMedium = Template.bind({});

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

InteractionsMedium.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await sleep(500);
  await expect(canvas.getByText("@md")).toHaveStyle(activeStyle);
  await expect(canvas.getByText("@lg")).toHaveStyle(inactiveStyle);
  await expect(canvas.getByText("@notSm")).toHaveStyle(activeStyle);
  await expect(canvas.getByText("@maxMd")).toHaveStyle(activeStyle);
};

export const InteractionsLarge = Template.bind({});

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

InteractionsLarge.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await sleep(500);
  await expect(canvas.getByText("@lg")).toHaveStyle(activeStyle);
  await expect(canvas.getByText("@xl")).toHaveStyle(inactiveStyle);
  await expect(canvas.getByText("@notMd")).toHaveStyle(activeStyle);
  await expect(canvas.getByText("@maxLg")).toHaveStyle(activeStyle);
};

export const InteractionsExtraLarge = Template.bind({});

InteractionsExtraLarge.parameters = {
  viewport: {
    defaultViewport: "xlarge",
  },
  chromatic: {
    modes: {
      desktop: allModes["xl"],
    },
  },
};

InteractionsExtraLarge.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await sleep(500);
  await expect(canvas.getByText("@xl")).toHaveStyle(activeStyle);
  await expect(canvas.getByText("@xxl")).toHaveStyle(inactiveStyle);
  await expect(canvas.getByText("@notLg")).toHaveStyle(activeStyle);
  await expect(canvas.getByText("@maxXl")).toHaveStyle(activeStyle);
};

export const InteractionsExtraExtraLarge = Template.bind({});

InteractionsExtraExtraLarge.parameters = {
  viewport: {
    defaultViewport: "xxlarge",
  },
  chromatic: {
    modes: {
      desktop: allModes["xxl"],
    },
  },
};

InteractionsExtraExtraLarge.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await sleep(500);
  await expect(canvas.getByText("@xxl")).toHaveStyle(activeStyle);
  await expect(canvas.getByText("@notXxl")).toHaveStyle(inactiveStyle);
  await expect(canvas.getByText("@maxXxl")).toHaveStyle(activeStyle);
};
