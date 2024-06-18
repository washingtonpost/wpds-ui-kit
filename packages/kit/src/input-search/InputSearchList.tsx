import React from "react";
import { useListBox } from "react-aria";
import { styled } from "../theme";
import { InputSearchContext } from "./InputSearchRoot";
import { ListItem } from "./InputSearchListItem";
import { ListHeading } from "./InputSearchListHeading";
import type { CollectionChildren } from "@react-types/shared";

const StyledList = styled("ul", {
  marginBlock: 0,
  maxHeight: "300px",
  overflowY: "auto",
  paddingInlineStart: 0,
  position: "relative",
  listStyleType: "none",
});

export type InputSearchListProps = {
  persistSelection?: boolean;
} & React.ComponentPropsWithRef<typeof StyledList>;

export const InputSearchList = ({
  children,
  persistSelection = false,
  ...rest
}: InputSearchListProps) => {
  const {
    listBoxProps: contextProps,
    listBoxRef,
    state,
    setCollectionChildren,
  } = React.useContext(InputSearchContext);

  React.useEffect(() => {
    if (children) {
      setCollectionChildren(children as CollectionChildren<object>);
    }
  }, [children]);

  React.useEffect(() => {
    if (state.isOpen) {
      // Focus on the first item when the list opens
      if (persistSelection) {
        const selectedKey = state.selectionManager.selectedKeys
          .values()
          .next().value;
        if (selectedKey) {
          state.selectionManager.setFocusedKey(selectedKey);
        }
        //state.selectionManager.setFocusedKey(state.collection.getFirstKey());
      }
    }
  }, [state.isOpen]);

  const { listBoxProps } = useListBox(contextProps, state, listBoxRef);

  return (
    <StyledList {...listBoxProps} ref={listBoxRef} {...rest}>
      {[...state.collection].map((item) =>
        item.type === "section" ? (
          <ListHeading key={item.key} section={item} state={state} />
        ) : (
          <ListItem key={item.key} item={item} state={state} />
        )
      )}
    </StyledList>
  );
};

InputSearchList.displayName = "InputSearchList";
