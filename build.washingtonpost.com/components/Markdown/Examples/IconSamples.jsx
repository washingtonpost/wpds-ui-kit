import React, { useEffect, useState } from "react";
import * as AllAssets from "@washingtonpost/wpds-assets/asset";
import { toast } from "react-toastify";
import MDXStyling from "~/components/Markdown/Styling";
import { Grid } from "../Components/Grid";
import { InputText } from "@washingtonpost/wpds-input-text";
import Search from "@washingtonpost/wpds-assets/asset/search";
import { Icon, theme, AlertBanner, Box } from "@washingtonpost/wpds-ui-kit";
import { paramCase } from "param-case";
import { logoList } from "./LogoSamples";

const Icons = () => {
  const [exampleToCopy, setExampleToCopy] = useState(null);
  const [name, setName] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const SuccessToast = () => (
      <AlertBanner.Root variant="success">
        <AlertBanner.Content css={{ minWidth: 250, paddingRight: "$050" }}>
          <b>Copied: </b>
          <Box as="span" css={{ fontSize: 16 }}>
            Import statement for{" "}
            <Box as="i" css={{ textTransform: "capitalize" }}>
              {name}
            </Box>
          </Box>
        </AlertBanner.Content>
      </AlertBanner.Root>
    );

    if (exampleToCopy) {
      window.navigator.clipboard.writeText(exampleToCopy);
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
  }, [exampleToCopy, name]);

  function setVariables(example, name) {
    setName(name);
    setExampleToCopy(example);
  }

  function handleChange(e) {
    const value = e.target.value;
    setFilter(value.toLowerCase());
  }
  const GetIcons = () => {
    return Object.keys(AllAssets).map((Asset, i) => {
      const Sample = AllAssets[Asset];
      const componentName = paramCase(Asset);

      const importExample = `import ${Asset.replace(
        "Svg",
        ""
      )} from "@washingtonpost/wpds-assets/asset/${componentName.replace(
        "svg",
        ""
      )}";`;

      if (logoList.includes(componentName)) return;
      if (filter != "" && !componentName.includes(filter)) return;
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
};

export default Icons;
