import React from "react";
import { Section } from "react-stately";
import { useListBoxSection } from "react-aria";
import { styled, theme } from "../theme";
import { ListItem } from "./InputSearchListItem";

import type { ListState } from "react-stately";
import type { Node } from "@react-types/shared";
import type * as WPDS from "../theme";

const StyledListItem = styled("li", {
  borderBlockStart: `1px solid ${theme.colors.outline}`,
  color: theme.colors.accessible,
  fontSize: theme.fontSizes["087"],
  marginBlockStart: "$050",
  marginInline: "$075",
  paddingBlock: "$050",
});

const UnstyledList = styled("ul", {
  listStyleType: "none",
  marginBlock: 0,
  marginInline: `calc(-1*${theme.space["075"]})`,
  paddingInlineStart: 0,
});

export type InputSearchListHeadingProps = {
  /** Any React node may be used as a child */
  children?: React.ReactNode;
  /** Override CSS */
  css?: WPDS.CSS;
  //** Title when used to wrap items*/
  title?: string;
};

/*
  To extend react-stately's Section component without errors we return an empty function and attach its getCollectionNode static method to it. https://github.com/nextui-org/nextui/issues/1761#issuecomment-1790586620
*/

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const InputSearchListHeading = (props: InputSearchListHeadingProps) => {
  return null;
};

InputSearchListHeading.getCollectionNode = (props) => {
  const alteredProps = { ...props };
  // handle the previously used child text as title
  if (props.children && !props.title) {
    alteredProps.title = props.children;
    alteredProps.children = undefined;
  }
  // @ts-expect-error - static method is excluded from the type definition https://github.com/adobe/react-spectrum/blob/main/packages/%40react-stately/collections/src/Section.ts#L57
  return Section.getCollectionNode(alteredProps);
};

/* 
  ListHeading component rendered by InputSearchList from a Collection in state. 
  Any props assigned will get passed through from InputSearchListItem
*/

interface SectionProps {
  section: Node<unknown>;
  state: ListState<unknown>;
}

export const ListHeading = ({ section, state }: SectionProps) => {
  const { itemProps, headingProps, groupProps } = useListBoxSection({
    heading: section.rendered,
    "aria-label": section["aria-label"],
  });

  const childNodesArr = Array.from(section.childNodes);
  const childNodeLength = childNodesArr.length;
  return (
    <StyledListItem {...itemProps}>
      {section.rendered && <span {...headingProps}>{section.rendered}</span>}
      {childNodeLength > 0 && (
        <UnstyledList {...groupProps}>
          {childNodesArr.map((node) => (
            <ListItem key={node.key} item={node} state={state} />
          ))}
        </UnstyledList>
      )}
    </StyledListItem>
  );
};

ListHeading.displayName = "InputSearchListHeading";
