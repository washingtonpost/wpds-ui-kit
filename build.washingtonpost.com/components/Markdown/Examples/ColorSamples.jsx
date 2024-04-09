import React, { useEffect, useState } from "react";
import { styled, theme } from "@washingtonpost/wpds-ui-kit";
const uiKit = theme;
import Tokens from "@washingtonpost/wpds-ui-kit/src/theme/wpds.tokens.json";
import { hex, score } from "wcag-contrast";
import { useTheme } from "next-themes";

const xMapping = [0, 20, 40, 60, 80, 100, 200, 300, 400, 500, 600, 700];
const yMapping = [
  "red",
  "blue",
  "green",
  "orange",
  "teal",
  "gold",
  "mustard",
  "purple",
  "pink",
  "yellow",
  "gray",
];

const PaletteGrid = styled("div", {
  display: "grid",
  gridTemplateColumns: "30px repeat(12, 1fr)",
  gridTemplateRows: "repeat(11, 1fr)", // Adjusted to match yMapping length
  gap: "$025",
});

const Swatch = styled("div", {
  minWidth: 20,
  minHeight: 40,
  width: "100%",
  height: "100%",
  borderRadius: uiKit.radii["012"],
  borderColor: uiKit.colors.outline,
  borderWidth: "1px",
  borderStyle: "solid",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  color: uiKit.colors["gray0"], // Default text color
  "@sm": {
    minWidth: "unset",
    minHeight: "unset",
  },
  "& div": {
    "@sm": {
      display: "none",
    },
  },
});
const AxisLabel = styled("div", {
  fontWeight: "bold",
  display: "flex",
  alignItems: "end",
  justifyContent: "center",
});

export default function ColorGrid() {
  const { theme } = useTheme();
  const [context, setContext] = useState(Tokens.color.light);

  useEffect(() => {
    setContext(theme === "dark" ? Tokens.color.dark : Tokens.color.light);
  }, [theme]);

  function lookUpValue(item) {
    let value = item.value;

    let lookUpKey = value?.substring(1, value.length - 1);

    if (theme === "dark") {
      value = item.valueDark;
      lookUpKey = value?.substring(1, value.length - 1);
      return Tokens.color.dark[lookUpKey]?.hex;
    } else {
      return Tokens.color.light[lookUpKey]?.hex;
    }
  }

  const GetSwatchesWithLabels = () => {
    let elements = [];
    const background = lookUpValue(Tokens.color.theme.background);

    // Y-axis labels
    yMapping.forEach((label, index) => {
      elements.push(
        <AxisLabel
          key={`y-label-${index}`}
          css={{
            textTransform: "capitalize",
            gridColumn: index + 2,
            gridRow: 1,
            "@sm": {
              display: "none",
            },
          }}
        >
          {label}
        </AxisLabel>
      );
    });

    // X-axis labels
    xMapping.forEach((label, index) => {
      elements.push(
        <AxisLabel
          key={`x-label-${index}`}
          style={{
            justifySelf: "end",
            alignSelf: "center",
            paddingRight: 4,
            gridRow: index + 2,
            gridColumn: 1,
          }}
        >
          {label}
        </AxisLabel>
      );
    });

    // Swatches
    yMapping.forEach((color, yIndex) => {
      xMapping.forEach((_, xIndex) => {
        const key = `${color.toLowerCase()}${xMapping[xIndex]}`;
        const hexColor = context[key]?.hex || "transparent"; // Use transparent for empty swatches
        const contrast =
          hexColor != undefined &&
          hexColor !== "transparent" &&
          hex(hexColor, background).toFixed(2);
        const TokenScore = contrast && score(contrast);
        elements.push(
          <Swatch
            css={{
              backgroundColor: `$${key}`,
              gridRow: xIndex + 2, // Offset by 1 due to labels
              gridColumn: yIndex + 2, // Offset by 1 due to labels
              color:
                TokenScore && TokenScore !== "AA Large" && TokenScore !== "Fail"
                  ? uiKit.colors.gray700
                  : uiKit.colors.gray0,
            }}
            key={key}
          >
            <div>{contrast}</div>
          </Swatch>
        );
      });
    });

    return elements;
  };
  return <PaletteGrid>{GetSwatchesWithLabels()}</PaletteGrid>;
}
