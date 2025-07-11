import React from "react";
import { useListBox } from "react-aria";
import { inputSearchList } from './InputSearch.css';
import { InputSearchContext } from "./input-search-root-ve";
import { ListItem } from "./input-search-list-item-ve";
import { ListHeading } from "./input-search-list-heading-ve";
import type { CollectionChildren } from "@react-types/shared";

export type InputSearchListProps = {
  persistSelection?: boolean;
  css?: React.CSSProperties;
} & React.ComponentPropsWithRef<"ul">;

export const InputSearchListVE = ({
  children,
  persistSelection = false,
  css,
  style,
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
  }, [children, setCollectionChildren]);

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
  }, [state.isOpen, persistSelection, state.selectionManager, state.collection]);

  const { listBoxProps } = useListBox(contextProps, state, listBoxRef);

  return (
    <ul 
      {...listBoxProps} 
      ref={listBoxRef} 
      className={inputSearchList}
      style={{
        ...(css || {}),
        ...style,
      }}
      {...rest}
    >
      {Array.from(state.collection).map((item) =>
        item.type === "section" ? (
          <ListHeading key={item.key} section={item} state={state} />
        ) : (
          <ListItem key={item.key} item={item} state={state} />
        )
      )}
    </ul>
  );
};

InputSearchListVE.displayName = "InputSearchListVE";
