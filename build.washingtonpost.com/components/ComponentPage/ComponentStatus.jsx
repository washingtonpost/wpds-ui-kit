import * as React from "react";
import { AlertBanner } from "@washingtonpost/wpds-ui-kit";
import CustomLink from "../Markdown/Components/link";

export const ComponentStatus = ({ type }) => {
  const alphaVariant = "warning";

  const alphaContent = (
    <>
      <b>Alpha: </b>This status indicates that the component is available via
      code, but BREAKING CHANGES can be expected and the documentation is still
      in refinement. That would mean that guidance can change, code examples
      might change and content can be corrected, rephrased and/or removed.
    </>
  );

  const betaVariant = "information";

  const betaContent = (
    <>
      <b>Beta: </b>This status indicates that the component design +
      documentation is finalized and it is available via code. Additive changes
      may still occur but no breaking changes will occur unless a security fix
      is needed.
    </>
  );

  function getVariant(type) {
    switch (type) {
      case "Alpha":
        return alphaVariant;
      case "Beta":
        return betaVariant;
    }
  }

  function getContent(type) {
    switch (type) {
      case "Alpha":
        return alphaContent;
      case "Beta":
        return betaContent;
    }
  }

  return (
    <AlertBanner.Root
      css={{
        marginBottom: "$200",
        maxWidth: "767px",
        "& > div": {
          marginBlockStart: 0,
        },
      }}
      variant={getVariant(type)}
    >
      <AlertBanner.Content>
        {getContent(type)}{" "}
        <CustomLink
          href="/support/component-status"
          css={{ textDecoration: "underline" }}
        >
          Learn more about our component statuses
        </CustomLink>
      </AlertBanner.Content>
    </AlertBanner.Root>
  );
};
