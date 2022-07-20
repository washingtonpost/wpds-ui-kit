import React, { useEffect, useState } from "react";
import * as AllAssets from "@washingtonpost/wpds-assets/asset";
import MDXStyling from "~/components/Markdown/Styling";
import { toast } from "react-toastify";
import { Box, Icon, theme, AlertBanner } from "@washingtonpost/wpds-ui-kit";
import { paramCase } from "param-case";
export const logoList = [
  "voraciously",
  "amazon",
  "amazon-music",
  "apple-podcast",
  "apple",
  "by-the-way",
  "comments",
  "elections",
  "facebook-logo",
  "google-podcast",
  "olympics-dark",
  "olympics",
  "stitcher",
  "tooled-washington-post",
  "washington-post-magazine",
  "washington-post-white",
  "washington-post",
  "wp-mark-white",
  "wp-mark",
  "rss",
  "spotify",
  "google",
  "election-default",
  "election-redbackground",
  "election-bluebackground"
];

export const darkLogos = [
  "washington-post-white",
  "wp-mark-white",
  "washington-post-magazine",
  "olympics-dark",
];

export default function Logos() {
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
          setExampleToCopy(null);
          setName(null);
        },
      });
    }
  }, [ExampleToCopy]);
  function setVariables(example, Name) {
    setName(Name);
    setExampleToCopy(example);
  }

  const GetLogos = () => {
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

      if (!logoList.includes(componentName)) return;
      return (
        <MDXStyling.Cell key={i}>
          <Box
            onClick={() => setVariables(importExample, componentName)}
            css={{
              "&:hover": { opacity: 0.5 },
              display: "flex",
              justifyContent: "center",
              backgroundColor: darkLogos.includes(componentName)
                ? theme.colors["gray20-static"]
                : theme.colors.gray500,
              padding: theme.space[100],
              width: "100%",
            }}
          >
            <Icon
              label={componentName}
              size={componentName.includes("washington") ? "250px" : "150px"}
            >
              <Sample fill={theme.colors.primary} />
            </Icon>
          </Box>
        </MDXStyling.Cell>
      );
    });
  };

  return <GetLogos />;
}
