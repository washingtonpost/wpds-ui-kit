// disable eslint for this line because we want to import all assets
/*eslint import/namespace: ['error', { allowComputed: true }]*/
import * as AllAssets from "@washingtonpost/wpds-assets";
import Search from "@washingtonpost/wpds-assets/asset/search";
import { InputText } from "@washingtonpost/wpds-ui-kit";
import { AlertBanner, Box, Icon, theme } from "@washingtonpost/wpds-ui-kit";
import Fuse from "fuse.js";
import { paramCase } from "param-case";
import { pascalCase } from "pascal-case";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import MDXStyling from "~/components/Markdown/Styling";
import { Grid } from "../Components/Grid";
import { logoList } from "./LogoSamples";

/**
 * ICON SEARCH (adding this cause its hard to find this feature in codebase)
 */

const SuccessToast = ({ Name }) => {
  return (
    <AlertBanner.Root variant="success">
      <AlertBanner.Content css={{ minWidth: 250, paddingRight: "$050" }}>
        <b>Copied: </b>
        <Box as="span" css={{ fontSize: 16 }}>
          Import statement for{" "}
          <Box as="i" css={{ textTransform: "capitalize" }}>
            {Name}
          </Box>
        </Box>
      </AlertBanner.Content>
    </AlertBanner.Root>
  );
};

export default function Icons({ data }) {
  const [controlledValue, setControlledValue] = useState("");

  useEffect(() => {
    // if on window and has search query
    if (typeof window !== "undefined" && window.location.search) {
      const search = new URLSearchParams(window.location.search).get("search");
      setControlledValue(search);
    }
  }, []);

  // when search query changes
  useEffect(() => {
    if (controlledValue) {
      // debounce search
      const timeout = setTimeout(() => {
        handleChange({ target: { value: controlledValue } });

        // push search query to url
        if (typeof window !== "undefined") {
          window.history.pushState(
            {},
            "",
            `${window.location.pathname}?search=${controlledValue}`
          );
        }
      }, 300);

      return () => clearTimeout(timeout);
    }
  }, [controlledValue]);

  const fuse = new Fuse(data, {
    keys: ["name", "description"],
    threshold: 0.1,
  });

  const [ExampleToCopy, setExampleToCopy] = useState(null);
  const [Name, setName] = useState("");
  const [Filter, setFilter] = useState([]);

  useEffect(() => {
    if (ExampleToCopy) {
      window.navigator.clipboard.writeText(ExampleToCopy);

      toast(<SuccessToast Name={Name} />, {
        position: "top-center",
        closeButton: false,
        autoClose: 2000,
        hideProgressBar: true,
        draggable: false,
        onClose: () => {
          setName(null);
        },
      });
    }
  }, [ExampleToCopy, Name]);

  function setVariables(example, Name) {
    setName(Name);
    setExampleToCopy(example);
  }

  function handleChange(e) {
    const value = e.target.value;

    setControlledValue(value);

    const result = fuse.search(value);
    setFilter(result);
  }

  const GetIcons = () => {
    let list;

    if (Filter.length === 0) {
      list = Object.keys(AllAssets).filter(
        (asset) => !logoList.includes(paramCase(asset))
      );
    } else {
      list = Filter.map((filtered) =>
        pascalCase(filtered.item.name).replace("15", "Svg15")
      );
    }

    return list.map((Asset, i) => {
      const Sample = AllAssets[Asset];
      if (!Sample) {
        return;
      }
      const componentName = paramCase(Asset);

      const importExample = `import { ${Asset} } from "@washingtonpost/wpds-assets";`;

      return (
        <MDXStyling.Cell key={i}>
          <Box
            as="button"
            onClick={() => setVariables(importExample, componentName)}
            css={{
              display: "flex",
              width: "100%",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              gap: "$075",
              border: "none",
              "&:hover": { opacity: 0.5 },
              backgroundColor: theme.colors.gray500,
              padding: theme.space[100],
              color: "$primary",
            }}
          >
            <Icon size="$150">
              <Sample />
            </Icon>
            <Box as="span">{componentName}</Box>
          </Box>
        </MDXStyling.Cell>
      );
    });
  };

  return (
    <>
      <Box css={{ marginBottom: "$050" }}>
        <InputText
          onChange={handleChange}
          label="Search"
          icon="right"
          value={controlledValue}
        >
          <Icon label="">
            <Search />
          </Icon>
        </InputText>
      </Box>

      <Grid maxSize={"150px"}>
        <GetIcons />
      </Grid>
    </>
  );
}
