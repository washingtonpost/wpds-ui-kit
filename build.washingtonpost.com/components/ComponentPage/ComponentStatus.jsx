import * as React from "react";
import { AlertBanner } from "@washingtonpost/wpds-ui-kit";
import CustomLink from "../Markdown/Components/link";

export const ComponentStatus = ({ type }) => {
  const alphaVariant = "warning";

  const alphaContent = (
    <>
      <b>Alpha: </b> The component is available via code, but its documentation
      is still in refinement. That would mean that guidance can change, code
      examples might change, and content can be corrected, rephrased, and/or
      removed.
    </>
  );

  const betaVariant = "information";

  const betaContent = (
    <>
      <b>Beta: </b>The component design + documentation is finalized and
      available via code, but changes to the API of the component can still
      occur. This may include but is not limited to component props, structure,
      or implementation changes.
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
