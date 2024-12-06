import React from "react";
import { Item } from "react-stately";
import { useOption } from "react-aria";
import { styled, theme } from "../theme";

import type { Node, ListState, ComboBoxState } from "react-stately";

const StyledListItem = styled("li", {
  color: theme.colors.primary,
  fontFamily: theme.fonts.meta,
  fontSize: theme.fontSizes["100"],
  fontWeight: theme.fontWeights.light,
  paddingBlock: "$050",
  paddingInline: "$075",
  "& > span > mark": {
    backgroundColor: "transparent",
    fontWeight: theme.fontWeights.bold,
  },
  variants: {
    selected: {
      true: {
        backgroundColor: theme.colors.gray400,
      },
    },
    focused: {
      true: {
        backgroundColor: theme.colors.gray400,
      },
    },
    disabled: {
      true: {
        color: theme.colors.onDisabled,
      },
    },
  },
});

export type InputSearchListItemProps = { value?: string } & Omit<
  React.ComponentPropsWithRef<typeof StyledListItem>,
  "index"
>;

/*
  To extend react-stately's Item component without errors we return an empty function and attach its getCollectionNode static method to it. https://github.com/nextui-org/nextui/issues/1761#issuecomment-1790586620
*/

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const InputSearchListItem = (props: InputSearchListItemProps) => {
  return null;
};

InputSearchListItem.getCollectionNode = (props, context) => {
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

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { children, textValue, ...itemProps } = item.props;

  return (
    <StyledListItem
      {...itemProps}
      {...optionProps}
      ref={ref}
      selected={isSelected}
      focused={isFocused}
      disabled={isDisabled}
    >
      {highlighted ? (
        <span dangerouslySetInnerHTML={{ __html: highlighted }} />
      ) : (
        item.rendered
      )}
    </StyledListItem>
  );
};

ListItem.displayName = "InputSearchListItem";
