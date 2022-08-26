import React, { useEffect, useState } from "react";
import Fuse from "fuse.js";
import * as AllAssets from "@washingtonpost/wpds-assets/asset";
import { toast } from "react-toastify";
import MDXStyling from "~/components/Markdown/Styling";
import { Grid } from "../Components/Grid";
import { InputText } from "@washingtonpost/wpds-input-text";
import Search from "@washingtonpost/wpds-assets/asset/search";
import {
  Icon,
  theme,
  Button,
  AlertBanner,
  Box,
  styled,
} from "@washingtonpost/wpds-ui-kit";
import { paramCase } from "param-case";
import { pascalCase } from "pascal-case";
import { logoList } from "./LogoSamples";

export default function Icons({ data }) {
  const fuse = new Fuse(data, {
    keys: ["name", "description"],
    threshold: 0.5,
  });
  const SuccessToast = () => {
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
  const [ExampleToCopy, setExampleToCopy] = useState(null);
  const [Name, setName] = useState("");
  const [inFocus, setInFocus] = useState(false);
  const [Filter, setFilter] = useState([]);
  useEffect(() => {
    if (ExampleToCopy) {
      window.navigator.clipboard.writeText(ExampleToCopy);
      toast(<SuccessToast />, {
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
  }, [ExampleToCopy]);

  function setVariables(example, Name) {
    setName(Name);
    setExampleToCopy(example);
  }

  function handleChange(e) {
    const value = e.target.value;
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

      const importExample = `import ${Asset.replace(
        "Svg",
        ""
      )} from "@washingtonpost/wpds-assets/asset/${componentName.replace(
        "svg",
        ""
      )}";`;

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
        <InputText onChange={handleChange} label="Search" icon="right">
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
