import * as React from "react";

import { styled } from "../theme";
import type * as WPDS from "../theme";

const NAME = "PaginationRoot";

export type PaginationRootProps = {
  /** Override CSS */
  css?: WPDS.CSS;
  /** Whether to show item range indicator */
  showItems: boolean;
} & React.ComponentPropsWithRef<"div">;

const PaginationContainer = styled("div", {
  gap: "$050",
  display: "flex",
  flexWrap: "nowrap",
  alignItems: "center",
  variants: {
    showItems: {
      true: {
        "@notSm": {
          justifyContent: "space-between",
          width: "100%",
        },
      },
    },
  },
});

export const PaginationRoot = React.forwardRef<
  HTMLDivElement,
  PaginationRootProps
>(({ children, css, showItems }, ref) => {
  return (
    <PaginationContainer css={{ ...css }} showItems={showItems}>
      {children}
    </PaginationContainer>
  );
});

PaginationRoot.displayName = NAME;
