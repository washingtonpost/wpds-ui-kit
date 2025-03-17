/** manage aria-activedescendant */
import { css, theme } from "../theme";
import { useState, useRef, useCallback } from "react";

const focused = css({
  outlineColor: theme.colors.signal,
  outlineStyle: "solid",
  outlineWidth: "2px",
});

type MapEntry = [
  string,
  { element: HTMLElement; children?: Map<string, { element: HTMLElement }> }
];

export const useActiveDescendant = (containerRef, firstChildActive = false) => {
  const [descendantId, setDescendantId] = useState<string>();
  const tree = useRef(new Map());
  const [activeParentId, setActiveParentId] = useState<string>();
  const [activeChildId, setActiveChildId] = useState<string>();
  const [hasFocus, setHasFocus] = useState(false);
  const clickFocus = useRef();
  const focusClassName = useCallback(
    (id) => {
      if (id === activeChildId && hasFocus) {
        return focused();
      } else {
        return "";
      }
    },
    [hasFocus, activeChildId]
  );

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

  function handleMouseDown(event) {
    const data = tree.current;
    const childId = event.target.id;
    data.forEach((value) => {
      if (value.children.has(childId)) {
        clickFocus.current = childId;
        event.preventDefault();
        if (document.activeElement !== containerRef.current) {
          containerRef.current.focus();
          setHasFocus(true);
        } else {
          const data = tree.current;
          data.forEach((value, key) => {
            if (value.children.has(childId)) {
              setActiveParentId(key);
              setActiveChildId(clickFocus.current);
              setDescendantId(clickFocus.current);
              setHasFocus(true);
            }
          });
        }
      }
    });
  }

  function handleDescendantFocus(id) {
    if (clickFocus.current) {
      const data = tree.current;
      const childId = clickFocus.current;
      data.forEach((value, key) => {
        if (value.children.has(childId)) {
          setActiveParentId(key);
          setActiveChildId(clickFocus.current);
          setDescendantId(clickFocus.current);
        }
      });
      clickFocus.current = undefined;
    } else {
      setActiveParentId(id);
      if (activeChildId) {
        setActiveChildId(undefined);
      }
      setDescendantId(id);
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
    if (!entry) {
      // set focus to the parent
      setDescendantId(activeParentId);
      setActiveChildId(undefined);
    } else {
      setDescendantId(entry[0]);
      setActiveChildId(entry[0]);
    }
  }

  return {
    addDescendant,
    handleDescendantFocus,
    contentProps: {
      onKeyDown: handleKeyDown,
      onKeyUp: handleKeyUp,
      onMouseDown: handleMouseDown,
      onFocus: () => {
        console.log("Container focused.");
        setHasFocus(true);
        // this should auto-activate first child on focus only if the firstChildActive is active and no active child is set.
        if (firstChildActive && !activeChildId) {
          const firstParentEntry = tree.current.entries().next().value;
          console.log("First parent entry:", firstParentEntry);
          if (firstParentEntry) {
            const [parentKey, parentData] = firstParentEntry;
            const firstChildEntry = parentData.children.entries().next().value;
            console.log("First child entry:", firstChildEntry);
            if (firstChildEntry) {
              const [childKey] = firstChildEntry;
              setActiveParentId(parentKey);
              setActiveChildId(childKey);
              setDescendantId(childKey);
              console.log("Auto-activated descendant:", childKey);
            } else {
              console.log("No child entry found for the first parent.");
            }
          } else {
            console.log("No parent entry found in the tree.");
          }
        }
      },
      onBlur: () => setHasFocus(false),
      "aria-activedescendant": descendantId,
    },
    focusClassName: focusClassName,
  };
};
