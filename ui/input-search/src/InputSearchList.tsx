import * as React from "react";

import { styled } from "@washingtonpost/wpds-theme";
import type * as WPDS from "@washingtonpost/wpds-theme";

import { ComboboxList, useComboboxContext } from "@reach/combobox";

export type InputSearchListProps = {
  /** Any React node may be used as a child to allow for formatting */
  children?: React.ReactNode;
  /** Override CSS */
  css?: WPDS.CSS;
};

const StyledList = styled(ComboboxList, {
  marginBlock: 0,
  paddingInlineStart: 0,
  position: "relative",
  listStyleType: "none",
});

export const InputSearchList = ({
  children,
  css,
  ...rest
}: InputSearchListProps) => {
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

      const parentEl = listEl.parentElement;
      if (!parentEl) return;

      const listTop = parentEl.scrollTop;
      const listBottom = listTop + parentEl.clientHeight;

      const selectedTop = selectedEl.offsetTop;
      const selectedBottom = selectedTop + selectedEl.clientHeight;

      if (selectedTop < listTop) {
        parentEl.scrollTop -= listTop - selectedTop;
      } else if (selectedBottom > listBottom) {
        parentEl.scrollTop += selectedBottom - listBottom;
      }
    }
  }, [navigationValue, state]);

  return (
    <StyledList {...rest} css={css} ref={listRef}>
      {children}
    </StyledList>
  );
};

InputSearchList.displayName = "InputSearchList";
