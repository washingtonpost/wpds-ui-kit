import * as React from "react";
import { ComboboxList, useComboboxContext } from "@reach/combobox";
import { styled } from "@washingtonpost/wpds-theme";

const StyledList = styled(ComboboxList, {
  marginBlock: 0,
  maxHeight: "300px",
  overflowY: "auto",
  paddingInlineStart: 0,
  position: "relative",
  listStyleType: "none",
});

export type InputSearchListProps = React.ComponentPropsWithRef<
  typeof StyledList
>;

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

      const listTop = listEl.scrollTop;
      const listBottom = listTop + listEl.clientHeight;

      const selectedTop = selectedEl.offsetTop;
      const selectedBottom = selectedTop + selectedEl.clientHeight;

      if (selectedTop < listTop) {
        listEl.scrollTop -= listTop - selectedTop;
      } else if (selectedBottom > listBottom) {
        listEl.scrollTop += selectedBottom - listBottom;
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
