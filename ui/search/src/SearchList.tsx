import * as React from "react";

import { styled, theme } from "@washingtonpost/wpds-theme";
import type * as WPDS from "@washingtonpost/wpds-theme";

import { ComboboxList, useComboboxContext } from "@reach/combobox";

export type SearchListProps = {
  /** Any React node may be used as a child to allow for formatting */
  children?: React.ReactNode;
  /** Override CSS */
  css?: WPDS.CSS;
};

const StyledList = styled(ComboboxList, {
  background: theme.colors.secondary,
  marginBlock: 0,
  maxHeight: "300px",
  overflowY: "scroll",
  paddingInlineStart: 0,
  position: "relative",
});

export const SearchList = ({ children, css, ...rest }: SearchListProps) => {
  const { navigationValue, state } = useComboboxContext();

  const listRef = React.useRef<HTMLUListElement>(null);

  React.useEffect(() => {
    if (state === "NAVIGATING") {
      const listEl = listRef.current;
      if (!listEl) return;

      const selectedEl = listEl.querySelector(
        '[aria-selected = "true"]'
      ) as HTMLElement;
      if (!selectedEl) return;

      const lTop = listEl.scrollTop;
      const lBottom = lTop + listEl.clientHeight;

      const eTop = selectedEl.offsetTop;
      const eBottom = eTop + selectedEl.clientHeight;

      if (eTop < lTop) {
        listEl.scrollTop -= lTop - eTop;
      } else if (eBottom > lBottom) {
        listEl.scrollTop += eBottom - lBottom;
      }
    }
  }, [navigationValue, state]);

  return (
    <StyledList {...rest} css={css} ref={listRef}>
      {children}
    </StyledList>
  );
};

SearchList.displayName = "SearchList";
