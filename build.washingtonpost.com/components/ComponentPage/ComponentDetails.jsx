import * as React from "react";
import { Box, theme } from "@washingtonpost/wpds-ui-kit";
import CustomLink from "~/components/Typography/link";
import CopyCodeButton from "~/components/Markdown/Components/CopyToClipBoard";

export const ComponentDetails = ({
  current,
  bundleSize,
  componentName,
  openSourceLink,
}) => {
  return (
    <Box
      css={{
        marginBlockStart: "$100",
        display: "flex",
        rowGap: "$100",
        flexDirection: "column",
        fontFamily: "$meta",
        fontSize: "$075",

        pre: {
          display: "inline",
        },
      }}
    >
      <Box
        css={{
          display: "flex",
          fontWeight: "$bold",
          textDecoration: "none",
          color: "inherit",
        }}
      >
        Bundle size:&nbsp;
        <CustomLink
          css={{
            color: theme.colors.accessible,
            textDecoration: "underline",
            fontWeight: theme.fontWeights.regular,
            "&:focus": {
              outlineColor: "$signal",
              outlineStyle: "solid",
              outlineOffset: "2px",
              outlineWidth: "2px",
            },
          }}
          href={`https://bundlephobia.com/package/@washingtonpost/wpds-${current}`}
          title={"Learn more about the bundle size at Bundlephobia.com"}
        >
          {bundleSize}
        </CustomLink>
      </Box>
      <Box
        css={{
          fontWeight: "$bold",
        }}
      >
        Install:{" "}
        <pre>
          <CopyCodeButton
            as="code"
            css={{
              display: "inline",
              fontWeight: "$light",
              borderRadius: "$012",
              backgroundColor: "$gray500",
              color: "$accessible",
              padding: "$025",
            }}
            textToCopy={`npm install @washingtonpost/wpds-ui-kit`}
          >
            npm install @washingtonpost/wpds-ui-kit
          </CopyCodeButton>
        </pre>
      </Box>
      <Box
        css={{
          fontWeight: "$bold",
        }}
      >
        Usage:{" "}
        <pre>
          <CopyCodeButton
            as="code"
            css={{
              display: "inline",
              fontWeight: "$light",
              borderRadius: "$012",
              backgroundColor: "$gray500",
              color: "$accessible",
              padding: "$025",
            }}
            textToCopy={`import { ${componentName} } from "@washingtonpost/wpds-ui-kit";`}
          >
            import {"{"} {componentName} {"}"} from
            &quot;@washingtonpost/wpds-ui-kit&quot;
          </CopyCodeButton>
        </pre>
      </Box>
      <Box
        css={{
          display: "flex",
          fontWeight: "$bold",
          textDecoration: "none",
          color: "inherit",
        }}
      >
        Storybook: &nbsp;
        <CustomLink
          css={{
            color: theme.colors.accessible,
            textDecoration: "underline",
            fontWeight: theme.fontWeights.regular,
            "&:focus": {
              outlineColor: "$signal",
              outlineStyle: "solid",
              outlineOffset: "2px",
              outlineWidth: "2px",
            },
          }}
          href={`https://wpds-ui-kit-storybook.preview.now.washingtonpost.com/?path=/story/${current}`}
          title={"View on Storybook"}
        >
          View on Storybook
        </CustomLink>
      </Box>
      <Box
        css={{
          display: "flex",
          fontWeight: "$bold",
          textDecoration: "none",
          color: "inherit",
        }}
      >
        Source: &nbsp;
        <CustomLink
          css={{
            color: theme.colors.accessible,
            textDecoration: "underline",
            fontWeight: theme.fontWeights.regular,
            "&:focus": {
              outlineColor: "$signal",
              outlineStyle: "solid",
              outlineOffset: "2px",
              outlineWidth: "2px",
            },
          }}
          href={`https://github.com/washingtonpost/wpds-ui-kit/tree/main/packages/kit/src/${current}`}
          title={"View on Github"}
        >
          View on Github
        </CustomLink>
      </Box>
      {openSourceLink && (
        <Box
          css={{
            display: "flex",
            fontWeight: "$bold",
            textDecoration: "none",
            color: "inherit",
          }}
        >
          Primitive: &nbsp;
          <CustomLink
            css={{
              color: theme.colors.accessible,
              textDecoration: "underline",
              fontWeight: theme.fontWeights.regular,
              "&:focus": {
                outlineColor: "$signal",
                outlineStyle: "solid",
                outlineOffset: "2px",
                outlineWidth: "2px",
              },
            }}
            href={openSourceLink}
            title={"View their docs"}
          >
            View their docs
          </CustomLink>
        </Box>
      )}
    </Box>
  );
};
