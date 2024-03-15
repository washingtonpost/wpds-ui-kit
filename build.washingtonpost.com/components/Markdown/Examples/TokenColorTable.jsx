import React, { useEffect, useState } from "react";
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
  const [defaultPalette, setDefaultPalette] = useState([
    ...light,
    ...staticColors,
    ...themePalette,
  ]);
  const [results, setResults] = useState([]);
  const [currentValue, setCurrentValue] = useState("");
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
    const results = fuse.search(currentValue);
    setResults(results);
  }, [theme]);

  function handleChange(e) {
    setCurrentValue(e.target.value);
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
      "@sm": {
        paddingRight: "0px",
      },
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
      borderBottom: "1px solid $subtle",
      fontSize: "$100",
      paddingInlineStart: 0,
      paddingInlineEnd: "$100",
      color: "$accessible",
      py: "$100",
      paddingRight: "$200",
      "@sm": {
        paddingRight: "0px",
      },
      "&.rgba": {
        minWidth: 200,
        "@sm": {
          minWidth: "unset",
        },
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
    width: 40,
    height: 40,
    borderRadius: 4,
    border: "1px solid $faint",
  });

  function convertObjectToArray(obj, suffix) {
    return Object.entries(obj).map(([key, value]) => ({
      name: key + suffix,
      ...value,
    }));
  }

<<<<<<< HEAD
  function lookUpValue(item = {}) {
    let value = item?.value ?? "";
    let lookUpKey = value?.substring(1, value.length - 1);

    if (value.includes("-static")) {
=======
  function lookUpValue(item) {
    let value = item.value;
    let lookUpKey = value?.substring(1, value.length - 1);

    if (item.value.includes("-static")) {
>>>>>>> main
      return Tokens.color.static[lookUpKey];
    } else if (theme === "dark") {
      value = item.valueDark;
      lookUpKey = value?.substring(1, value.length - 1);
      return Tokens.color.dark[lookUpKey];
    } else {
      return Tokens.color.light[lookUpKey];
    }
  }

<<<<<<< HEAD
  function formatToken(item = {}) {
    let value = item?.value ?? "";
    if (theme === "dark" && item?.valueDark) {
      value = item?.valueDark;
=======
  function formatToken(item) {
    let value = item.value;
    if (theme === "dark" && item?.valueDark) {
      value = item.valueDark;
>>>>>>> main
    }
    return value && value.substring(1, value.length - 1);
  }

  const headers = ["Name", "Preview", "RGBA", "HEX", "Description"];

  return (
    <>
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
            {results.length > 0 ? (
              results.map((result, i) => (
                <InputSearch.ListItem
                  key={`${result.item.name}-${i}`}
                  value={result.item.name}
                />
              ))
            ) : (
              <InputSearch.EmptyState />
            )}
          </InputSearch.List>
        </InputSearch.Popover>
      </InputSearch.Root>
      <Container>
        <StyledTable>
          <thead>
            <tr>
              {headers.map((header, i) => (
                <th
                  key={i}
                  className={
                    header === "Description" ||
                    header == "Preview" ||
                    header == "HEX"
                      ? "hide"
                      : ""
                  }
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {results.length > 0
              ? results.map((result, i) => (
                  <tr key={i}>
                    <td>{result.item.name}</td>
                    <td className="hide">
                      <Swatch
                        css={{
                          backgroundColor: result.item.value?.includes("{")
                            ? `$${formatToken(result.item)}`
                            : `$${result.item.name}`,
                        }}
                      />
                    </td>
                    <td className="nowrap rgba">
<<<<<<< HEAD
                      {result.item.value?.includes("{")
=======
                      {result.item.value.includes("{")
>>>>>>> main
                        ? lookUpValue(result.item)?.value
                        : result.item.value}
                    </td>
                    <td className="upper nowrap hide">
                      {" "}
<<<<<<< HEAD
                      {result.item.value?.includes("{")
=======
                      {result.item.value.includes("{")
>>>>>>> main
                        ? lookUpValue(result.item)?.hex
                        : result.item.hex}
                    </td>
                    <td className="hide">
                      {result.item.description === undefined
                        ? "-"
                        : result.item.description}
                    </td>
                  </tr>
                ))
              : defaultPalette.map((item, i) => (
                  <tr key={i}>
                    <td>{item.name}</td>
                    <td className="hide">
                      <Swatch
                        css={{
                          backgroundColor: item.value?.includes("{")
                            ? `$${formatToken(item)}`
                            : `$${item.name}`,
                        }}
                      />
                    </td>
                    <td className="nowrap rgba">
<<<<<<< HEAD
                      {item.value?.includes("{")
=======
                      {item.value.includes("{")
>>>>>>> main
                        ? lookUpValue(item)?.value
                        : item.value}
                    </td>
                    <td className="upper hide nowrap">
<<<<<<< HEAD
                      {item.value?.includes("{")
=======
                      {item.value.includes("{")
>>>>>>> main
                        ? lookUpValue(item)?.hex
                        : item.hex}
                    </td>
                    <td className="hide">
                      {item.description === undefined ? "-" : item.description}
                    </td>
                  </tr>
                ))}
          </tbody>
        </StyledTable>
      </Container>
    </>
  );
}
