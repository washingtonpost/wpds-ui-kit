import React, { useState, useEffect } from "react";
import { theme, styled, Box } from "@washingtonpost/wpds-ui-kit";

const Ruler = styled("div", {
  zIndex: "$offer",
  position: "fixed",
  top: "3rem",
  left: 0,
  borderInline: `2px solid ${theme.colors.cta}`,
  width: "calc(100% - 4px)",
  textAlign: "center",
  backgroundImage: `linear-gradient(0deg, transparent 0 50%, ${theme.colors.cta} 50% calc(50% + 2px), transparent calc(50% + 2px));`,
  backgroundColor: "$ctaContainer",
  fontFamily: "monospace",
  fontSize: theme.fontSizes["075"],
  paddingBlockEnd: theme.space["100"],
  color: theme.colors.cta,
  fontWeight: theme.fontWeights.bold,
});

const Body = styled("div", {
  paddingBlock: "1px",
  fontFamily: theme.fonts.meta,
  placeItems: "left"
});

const PointsList = styled("ul", {
  display: "flex",
  paddingInlineStart: 0,
  gap: theme.space["150"].value,
  listStyle: "none",
  marginBlock: 0,
  fontSize: theme.fontSizes["075"].value,
});

const StyledBox = styled("div", {
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

const Row = styled("div", { display: "flex", gap: "$050" });

const Description = styled("span", {
  fontSize: theme.fontSizes["112"],
  color: theme.colors.accessible,
  fontWeight: theme.fontWeights.regular,
});

const Template = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Ruler>{windowWidth}px</Ruler>
      <Body>
        <h1 style={{ marginBlockStart: 0, marginBlockEnd: "0.5rem" }}>
          Breakpoints
        </h1>
        <PointsList>
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
        </PointsList>
        <h2>
          Individual{" "}
          <Description>targets only the breakpoint range</Description>
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
          <Description>
            targets the end of the breakpoint range and above
          </Description>
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
          <Description>
            targets the end of the breakpoint range and below
          </Description>
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
      </Body>
    </>
  );
};

const Breakpoints = () => {
  return (
    <Box>
      <Template />
    </Box>
  );
};

export default Breakpoints;