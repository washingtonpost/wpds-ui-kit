import React from "react";
import { useSeparator } from "react-aria";
import { inputSearchListHeading } from "./InputSearch.css";

import type { Node, ListState } from "react-stately";

export type InputSearchListHeadingProps = {
  /** Any React node may be used as a child to allow for formatting */
  children?: React.ReactNode;
  /** Override CSS */
  css?: React.CSSProperties;
  /** A string, will be displayed as an additional line under title */
  title?: string;
} & React.ComponentPropsWithRef<"li">;

/*
  To extend react-stately's Item component without errors we return an empty function and attach its getCollectionNode static method to it. https://github.com/nextui-org/nextui/issues/1761#issuecomment-1790586620
*/

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const InputSearchListHeadingVE = (
  props: InputSearchListHeadingProps
) => {
  return null;
};

/* 
  ListHeading component rendered by InputSearchList from a Collection in state. 
  Any props assigned will get passed through from InputSearchListHeading
*/

interface ListHeadingComponentProps {
  section: Node<unknown>;
  state: ListState<unknown>;
}

export const ListHeading = ({ section, state }: ListHeadingComponentProps) => {
  const { separatorProps } = useSeparator({
    elementType: "li",
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { title, children, css, style, ...itemProps } = section.props;

  const variant = title ? "with-title" : "default";

  return (
    <li
      {...separatorProps}
      {...itemProps}
      className={inputSearchListHeading[variant]}
      style={{
        ...(css || {}),
        ...(style || {}),
      }}
    >
      {title && <div>{title}</div>}
      {Array.from(state.collection.getChildren?.(section.key) || []).map(
        (item) => (
          <React.Fragment key={item.key}>{item.rendered}</React.Fragment>
        )
      )}
    </li>
  );
};

ListHeading.displayName = "InputSearchListHeading";
