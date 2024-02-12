import React, { useEffect, useState, useCallback } from "react";
import { styled } from "@washingtonpost/wpds-ui-kit";
import Tokens from "@washingtonpost/wpds-theme/src/wpds.tokens.json";
import { useTheme } from "next-themes";
import Fuse from "fuse.js";
import { InputSearch } from "@washingtonpost/wpds-ui-kit";


export default function ColorTokenTable() {
  const light = convertObjectToArray(Tokens.color.light, "");
  const dark = convertObjectToArray(Tokens.color.dark, "");
  const themePalette = convertObjectToArray(Tokens.color.theme, "");
  const staticColors = convertObjectToArray(Tokens.color.static, "-static");
  const [defaultPalette, setDefaultPalette] = useState([...light, ...staticColors, ...themePalette]);
  const [results, setResults] = useState([]);
  const [currentValue, setCurrentValue] = useState("")
  const { theme } = useTheme();

  const fuse = new Fuse([...light, ...staticColors, ...themePalette], {
    keys: ["name", "value"],
    threshold: 0.2,
  });


  useEffect(() => {
    if (theme === "dark") {
      fuse.setCollection([...dark, ...staticColors, ...themePalette]);
      setDefaultPalette([...dark, ...staticColors, ...themePalette]);
    } else {
      fuse.setCollection([...light, ...staticColors, ...themePalette]);
      setDefaultPalette([...light, ...staticColors, ...themePalette]);
    }
  }, [theme]);


  function handleChange(e) {
    setCurrentValue(e.target.value)
    const results = fuse.search(e.target.value);
    setCurrentValue(e.target.value);
    setResults(results);
  }

  const Container = styled("div", {
    overflowX: "auto",
    width: "100%",
  });

  const StyledTable = styled("table", {
    borderCollapse: "collapse",
    borderSpacing: "0",
    width: "100%",
    marginBottom: "calc($050 / 2)",
    "& th": {
      textAlign: "left",
      fontWeight: "$light",
      borderBottom: "1px solid $subtle",
      fontSize: "$100",
      color: "$accessible",
      paddingInlineStart: 0,
      py: "$100",
      paddingRight: "$200",
      "&.hide": {
        "@sm": {
          display: "none",
        },
      },
    },
    "& tr": {
      height: 80,
    },
    "& td": {
      minWidth: "auto",
      borderBottom: "1px solid $subtle",
      fontSize: "$100",
      paddingInlineStart: 0,
      paddingInlineEnd: "$100",
      color: "$accessible",
      py: "$100",
      paddingRight: "$200",
      "&.rgba": {
        minWidth: 200,
      },
      "&.upper": {
        textTransform: "uppercase",
      },
      "&.hide": {
        "@sm": {
          display: "none",
        },
      },
      "&.nowrap": {
        whiteSpace: "nowrap",
      },
    },
  });

  const Swatch = styled("div", {
    width: 20,
    height: 20,
    borderRadius: 4,
    border: "1px solid $faint",
  });

  function convertObjectToArray(obj, suffix) {
    return Object.entries(obj).map(([key, value]) => ({
      name: key + suffix,
      ...value,
    }));
  }

  function lookUpValue(item) {
    let value = item.value;
    let lookUpKey = value?.substring(1, value.length - 1);

    if (item.value.includes("-static")) {
      return Tokens.color.static[lookUpKey]?.value;
    } else if (theme === "dark") {
      value = item.valueDark;
      lookUpKey = value?.substring(1, value.length - 1);
      return Tokens.color.dark[lookUpKey]?.value;
    } else {
      return Tokens.color.light[lookUpKey]?.value;
    }
  }

  function formatToken(item) {
    let value = item.value;
    if (theme === "dark" && item?.valueDark) {
      value = item.valueDark;
    }
    return value && value.substring(1, value.length - 1);
  }

  const headers = ["Name", "Preview", "RGBA", "HEX", "Description"];

  return (
    <Container>
      <InputSearch.Root aria-label="Search token by key">
        <InputSearch.Input
          label="Search token by name"
          name="color-token-search"
          id="color-token-search"
          onChange={handleChange}
          value={currentValue}
        />
        <InputSearch.Popover>
          <InputSearch.List css={{ width: "100%" }}>
            {
              results.map((result, i) => (
                <InputSearch.ListItem
                  key={`${result.item.name}-${i}`}
                  value={result.item.name}
                />
              ))
            }
          </InputSearch.List>
        </InputSearch.Popover>
      </InputSearch.Root>
      <StyledTable>
        <thead>
          <tr>
            {headers.map((header, i) => (
              <th key={i} className={header === "Description" ? "hide" : ""}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {results.length > 0 ?
            results.map((result, i) => (
              <tr key={i}>
                <td>{result.item.name}</td>
                <td>
                  <Swatch
                    css={{
                      backgroundColor: result.item.value?.includes("{")
                        ? `$${formatToken(result.item)}`
                        : `$${result.item.name}`,
                    }}
                  />
                </td>
                <td className="nowrap rgba">
                  {result.item.value.includes("{") ? lookUpValue(result.item) : result.item.value}
                </td>
                <td className="upper nowrap">{result.item.hex}</td>
                <td className="hide">
                  {result.item.description === undefined ? "-" : result.item.description}
                </td>
              </tr>
            ))
            : defaultPalette.map((item, i) => (
              <tr key={i}>
                <td>{item.name}</td>
                <td>
                  <Swatch
                    css={{
                      backgroundColor: item.value?.includes("{")
                        ? `$${formatToken(item)}`
                        : `$${item.name}`,
                    }}
                  />
                </td>
                <td className="nowrap rgba">
                  {item.value.includes("{") ? lookUpValue(item) : item.value}
                </td>
                <td className="upper nowrap">{item.hex}</td>
                <td className="hide">
                  {item.description === undefined ? "-" : item.description}
                </td>
              </tr>
            ))}
        </tbody>
      </StyledTable>
    </Container>
  );
}
