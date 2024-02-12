import React, { useEffect, useState } from "react";
import { Box, styled, AlertBanner, theme } from "@washingtonpost/wpds-ui-kit";
import { toast } from "react-toastify";
import Tokens from "@washingtonpost/wpds-theme/src/wpds.tokens.json";

import { Grid } from "../Components/Grid";

const ColorSamples = ({ group }) => {
  const [colorGroupArray, setColorGroupArray] = useState([]);
  const [copyText, setCopyText] = useState("");

  useEffect(() => {
    const colorArray = handleColor(group);
    setColorGroupArray(colorArray);
  }, [group]);

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

  const handleColor = (group) => {
    const colorNamesArray = Object.keys(Tokens.color[group]);

    return colorNamesArray.filter((colorName) =>
      Object.prototype.hasOwnProperty.call(
        Tokens.color[group][colorName],
        "value"
      )
    );
  };

  const Swatch = styled("button", {
    backgroundColor: "transparent",
    border: "1px solid $subtle",
    display: "flex",
    gap: "$050",
    textAlign: "left",
    alignItems: "center",
    padding: 0,
    "&:hover": {
      opacity: 0.5,
    },
  });

  const ColorExample = styled("div", {
    height: "60px",
    width: "60px",
    display: "flex",

    alignItems: "center",
    justifyContent: "center",
  });
  const ColorID = styled("p", {
    fontSize: "$100",
    marginBlock: 0,
    padding: "$025",
    fontFamily: "$meta",
    color: "$primary",
  });

  return (
    <>
      <Grid maxSize={"200px"}>
        {colorGroupArray.map((key, i) => (
          <Swatch
            key={i}
            onClick={() =>
              setCopyText(
                `$${key.toLowerCase()}${group == "static" ? "-static" : ""}`
              )
            }
          >
            <ColorExample
              css={{
                backgroundColor: `$${key}${group == "static" ? "-static" : ""}`,
              }}
            />
            <ColorID>{key}</ColorID>
          </Swatch>
        ))}
      </Grid>
    </>
  );
};

ColorSamples.displayName = "Color Samples";

export default ColorSamples;
