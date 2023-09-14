/** manage aria-activedescendant */
import { css, theme } from "@washingtonpost/wpds-theme";
import { useState, useRef } from "react";

const focused = css({
  outlineColor: theme.colors.signal,
  outlineStyle: "solid",
  outlineWidth: "2px",
});

type MapEntry = [
  string,
  { element: HTMLElement; children?: Map<string, { element: HTMLElement }> }
];

export const useActiveDescendant = () => {
  const [descendantId, setDescendantId] = useState<string>();
  const tree = useRef(new Map());
  const [activeParentId, setActiveParentId] = useState<string>();
  const [activeChildId, setActiveChildId] = useState<string>();
  const focusClassName = focused();

  function addDescendant({
    element,
    id,
    parentId,
  }: {
    element: HTMLElement | null;
    id: string;
    parentId: string;
  }) {
    const data = tree.current;
    if (element) {
      if (!data.has(parentId)) {
        data.set(parentId, { children: new Map() });
      }
      const parent = data.get(parentId);
      parent.children.set(id, { element: element });
    } else {
      data.forEach((value) => {
        if (value.children.has(id)) {
          value.children.delete(id);
        }
      });
    }
  }

  function handleDescendantFocus(id) {
    setActiveParentId(id);
    if (activeChildId) {
      const activeParent = tree.current.get(activeParentId);
      const activeChild = activeParent.children.get(activeChildId);
      activeChild.element.classList.remove(focusClassName);
      setActiveChildId(undefined);
    }
  }

  function handleFocus() {
    if (activeChildId) {
      const activeParent = tree.current.get(activeParentId);
      const activeChild = activeParent.children.get(activeChildId);
      activeChild.element.classList.add(focusClassName);
    }
  }

  function handleBlur() {
    if (activeChildId) {
      const activeParent = tree.current.get(activeParentId);
      const activeChild = activeParent.children.get(activeChildId);
      activeChild.element.classList.remove(focusClassName);
    }
  }

  function handleKeyDown(event) {
    let activeParent;
    let activeChild;
    let previousChild;
    let nextChild;
    let name;
    switch (event.key) {
      case "ArrowUp":
        activeParent = tree.current.get(activeParentId);
        previousChild = getPreviousSibling(
          activeChildId,
          activeParent.children
        );
        focusChild(previousChild);
        event.preventDefault();
        break;
      case "ArrowDown":
        activeParent = tree.current.get(activeParentId);
        nextChild = getNextSibling(activeChildId, activeParent.children);
        if (nextChild) {
          focusChild(nextChild);
        }
        event.preventDefault();
        break;
      case "Enter":
        if (activeChildId) {
          activeParent = tree.current.get(activeParentId);
          activeChild = activeParent.children.get(activeChildId);
          name = activeChild.element.nodeName.toLowerCase();
          if (name === "a" || name === "button") {
            activeChild.element.click();
          }
        }
        break;
      default:
        break;
    }
  }

  function handleKeyUp(event) {
    switch (event.key) {
      case " ":
        if (activeChildId) {
          const activeParent = tree.current.get(activeParentId);
          const activeChild = activeParent.children.get(activeChildId);
          const name = activeChild.element.nodeName.toLowerCase();
          if (name === "button" || name === "input" || name === "select") {
            activeChild.element.click();
          }
        }
        break;
      default:
        break;
    }
  }

  function getNextSibling(
    id: string | undefined,
    data: Map<string, { element: HTMLElement }> | undefined
  ) {
    if (!data) {
      return;
    }
    if (!id) {
      return data.entries().next().value;
    }
    let nextSibling: MapEntry | undefined;
    let takeNext = false;
    data.forEach((value, key) => {
      if (takeNext) {
        nextSibling = [key, value];
        takeNext = false;
      }
      if (key === id) {
        takeNext = true;
      }
    });
    return nextSibling;
  }

  function getPreviousSibling(
    id: string | undefined,
    data: Map<string, { element: HTMLElement }> | undefined
  ) {
    if (!data) {
      return;
    }
    if (!id) {
      return;
    }
    let previousSibling: MapEntry | undefined;
    let tempEntry: MapEntry | undefined;
    data.forEach((value, key) => {
      if (key === id) {
        previousSibling = tempEntry;
      }
      tempEntry = [key, value];
    });
    return previousSibling;
  }

  function focusChild(entry: MapEntry | undefined) {
    if (activeChildId) {
      const activeParent = tree.current.get(activeParentId);
      const activeChild = activeParent.children.get(activeChildId);
      activeChild.element.classList.remove(focusClassName);
    }
    if (!entry) {
      // set focus to the parent
      setDescendantId(activeParentId);
      setActiveChildId(undefined);
    } else {
      setDescendantId(entry[0]);
      setActiveChildId(entry[0]);
      entry[1].element.classList.add(focusClassName);
    }
  }

  return {
    addDescendant,
    handleDescendantFocus,
    contentProps: {
      onKeyDown: handleKeyDown,
      onKeyUp: handleKeyUp,
      onFocus: handleFocus,
      onBlur: handleBlur,
      "aria-activedescendant": descendantId,
    },
  };
};
