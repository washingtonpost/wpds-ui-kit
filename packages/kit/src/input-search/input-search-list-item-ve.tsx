import React from "react";
import { Item } from "react-stately";
import { useOption } from "react-aria";
import { inputSearchListItem } from './InputSearch.css';
import { InputSearchContext } from "./input-search-root-ve";

import type { Node, ListState, ComboBoxState } from "react-stately";

export type InputSearchListItemProps = { 
  value?: string;
  css?: React.CSSProperties;
} & Omit<React.ComponentPropsWithRef<"li">, "index">;

/*
  To extend react-stately's Item component without errors we return an empty function and attach its getCollectionNode static method to it. https://github.com/nextui-org/nextui/issues/1761#issuecomment-1790586620
*/

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const InputSearchListItemVE = (props: InputSearchListItemProps) => {
  return null;
};

InputSearchListItemVE.getCollectionNode = (props, context) => {
  const alteredProps = { ...props };
  // handle the previously used value prop from @reach/combobox

  if (props.value) {
    alteredProps.textValue = props.value;
    if (!props.children) {
      alteredProps.children = props.value;
    }
    delete alteredProps.value;
  }
  // @ts-expect-error - static method is excluded from the type definition https://github.com/adobe/react-spectrum/blob/main/packages/%40react-stately/collections/src/Item.ts#L78
  return Item.getCollectionNode(alteredProps, context);
};

/* 
  ListItem component rendered by InputSearchList from a Collection in state. 
  Any props assigned will get passed through from InputSearchListItem
*/

interface ListItemProps {
  item: Node<unknown>;
  state: ListState<unknown>;
}

export const ListItem = ({ item, state }: ListItemProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { children, textValue, disabled, css, style, ...itemProps } = item.props;

  const { setDisabledKeys } = React.useContext(InputSearchContext);
  React.useEffect(() => {
    if (disabled && !state.disabledKeys.has(item.key)) {
      setDisabledKeys((prev) => {
        if (prev) {
          const next = new Set(prev);
          next.add(item.key);
          return next;
        } else {
          return new Set([item.key]);
        }
      });
    }
  }, [disabled, setDisabledKeys, state.disabledKeys, item.key]);

  const ref = React.useRef<HTMLLIElement>(null);
  const { optionProps, isDisabled, isSelected, isFocused } = useOption(
    {
      key: item.key,
    },
    state,
    ref
  );

  let highlighted;

  const escape = (string) => {
    return string.replace(/[.*+\-?^${}()|[\]\\]/g, "\\$&");
  };

  if (typeof item.rendered === "string") {
    const val = escape((state as ComboBoxState<object>).inputValue);
    highlighted = item.rendered.replace(new RegExp(val, "gi"), (match) =>
      match ? `<mark>${match}</mark>` : ""
    );
  }

  // Determine the variant class based on state
  let variant = 'default';
  if (isSelected && isFocused && isDisabled) {
    variant = 'selected-focused-disabled';
  } else if (isSelected && isDisabled) {
    variant = 'selected-disabled';
  } else if (isFocused && isDisabled) {
    variant = 'focused-disabled';
  } else if (isSelected && isFocused) {
    variant = 'selected-focused';
  } else if (isSelected) {
    variant = 'selected';
  } else if (isFocused) {
    variant = 'focused';
  } else if (isDisabled) {
    variant = 'disabled';
  }

  return (
    <li
      {...itemProps}
      {...optionProps}
      ref={ref}
      className={inputSearchListItem[variant]}
      style={{
        ...(css || {}),
        ...(style || {}),
      }}
    >
      {highlighted ? (
        <span dangerouslySetInnerHTML={{ __html: highlighted }} />
      ) : (
        item.rendered
      )}
    </li>
  );
};

ListItem.displayName = "InputSearchListItem";
