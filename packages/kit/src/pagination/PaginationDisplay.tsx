import React from "react";
import { PaginationNumericDisplay as Numeric } from "./PaginationNumericDisplay";
import { PaginationDescriptiveDisplay as Descriptive } from "./PaginationDescriptiveDisplay";
import { PaginationCompactDisplay as Compact } from "./PaginationCompactDisplay";
import { Container } from "../container";
import type * as WPDS from "../theme";

import { PaginationContext } from "./PaginationRoot";

const NAME = "PaginationDisplay";

export type PaginationDisplayProps = {
  /** Override CSS */
  css?: WPDS.CSS;
};

export const PaginationDisplay = React.forwardRef<
  HTMLDivElement,
  PaginationDisplayProps
>(({ css }, ref) => {
  const { endlessPagination, page, setPage, slug, totalPages, variant } =
    React.useContext(PaginationContext);

  const numeric = variant === "numeric";
  const descriptive = variant === "descriptive";
  const compact = variant === "compact";

  if (!numeric && !descriptive && !compact) return null;

  return (
    <Container css={{ ...css }} ref={ref}>
      <Numeric
        changePage={setPage}
        compact={compact}
        currentPage={page}
        endlessPagination={endlessPagination}
        slug={slug}
        totalPages={totalPages}
        variant={variant}
      />
      <Descriptive
        compact={compact}
        currentPage={page}
        totalPages={totalPages}
        variant={variant}
      />
      <Compact
        currentPage={page}
        endlessPagination={endlessPagination}
        totalPages={totalPages}
        variant={variant}
      />
    </Container>
  );
});

PaginationDisplay.displayName = NAME;
