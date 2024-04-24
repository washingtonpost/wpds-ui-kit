import React, { useEffect, useState } from "react";
import { Box, styled, AlertBanner, theme } from "@washingtonpost/wpds-ui-kit";
import { toast } from "react-toastify";
import Tokens from "@washingtonpost/wpds-ui-kit/src/theme/hexcodes.tokens.json";
import { StyledItem, StyledToggleGroup } from "../Components/ToggleGroupRadix";
import { Grid } from "../Components/Grid";

// to regenerate tokens, go to ui/theme and run the build:createHex script

const HexRGBAColorSamples = ({ group }) => {
  const [colorGroupObj, setColorGroupObj] = useState({});
  const [copyText, setCopyText] = useState("");
  const [hex, setHex] = useState(false);

  // grab only the colors for the group selected
  useEffect(() => {
    setColorGroupObj(Tokens[group]);
  }, [group]);

  // handles the toast banner for copying values
  useEffect(() => {
    const SuccessToast = () => (
      <AlertBanner.Root variant="success">
        <AlertBanner.Content css={{ minWidth: 250, paddingRight: "$050" }}>
          <b>Copied: </b>
          <Box as="span" css={{ fontSize: theme.fontSizes[100] }}>
            <Box as="i">{copyText}</Box>
          </Box>
        </AlertBanner.Content>
      </AlertBanner.Root>
    );

    if (copyText) {
      window.navigator.clipboard.writeText(copyText);
      toast(<SuccessToast />, {
        position: "top-center",
        closeButton: false,
        autoClose: 2000,
        hideProgressBar: true,
        draggable: false,
        onClose: () => {
          setCopyText(null);
        },
      });
    }
  }, [copyText]);

  // defines color swatch, variant for dark theme
  const Swatch = styled("button", {
    backgroundColor: "transparent",
    border: "1px solid $subtle",
    "&:hover": {
      opacity: 0.5,
    },
    variants: {
      type: {
        dark: { backgroundColor: "$primary", border: "1px solid $accessible" },
      },
    },
  });

  const ColorInSwatch = styled("div", {
    minHeight: "$500",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  });

  const Text = styled("p", {
    fontSize: "14px",
    padding: "2px",
    fontFamily: "$meta",
    color: "$primary",
    overflow: "hidden",
    variants: {
      type: {
        dark: { color: "$gray700" },
      },
    },
  });

  const ToggleDiv = styled({
    paddingBottom: "$100",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: "$100",
    color: theme.colors.accessible,
  });

  return (
    <>
      <ToggleDiv>
        Toggle to copy:
        <StyledToggleGroup
          type="single"
          defaultValue="center"
          aria-label="Text alignment"
        >
          <StyledItem
            value="left"
            aria-label="RGBA"
            onClick={() => setHex(false)}
            data-state={hex ? "off" : "on"}
          >
            Copy RGBA
          </StyledItem>
          <StyledItem
            value="right"
            aria-label="HEX"
            onClick={() => setHex(true)}
            data-state={hex ? "on" : "off"}
          >
            Copy HEX
          </StyledItem>
        </StyledToggleGroup>
      </ToggleDiv>
      <Grid maxSize={"128px"}>
        {Object.keys(colorGroupObj).map((key, i) => (
          <Swatch
            key={i}
            onClick={() =>
              setCopyText(
                hex
                  ? `#${colorGroupObj[key]["hex"]}`
                  : `${colorGroupObj[key]["rgba"]}`
              )
            }
            type={group}
          >
            <ColorInSwatch
              css={{
                backgroundColor: `#${colorGroupObj[key]["hex"]}`,
              }}
            />
            <Text css={{ fontSize: "$100" }} type={group}>
              {key}
            </Text>
            <Text type={group}>{colorGroupObj[key]["rgba"]}</Text>
            <Text type={group}>#{colorGroupObj[key]["hex"]}</Text>
          </Swatch>
        ))}
      </Grid>
    </>
  );
};

HexRGBAColorSamples.displayName = "Color Samples";

export default HexRGBAColorSamples;
