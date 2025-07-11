import React from "react";
import { createPortal } from "react-dom";
import { useComboBoxState } from "react-stately";
import { useComboBox } from "react-aria";
import { inputSearchRoot } from "./InputSearch.css";

import type { ComboBoxState, Key } from "react-stately";
import type { AriaListBoxOptions } from "react-aria";
import type { CollectionChildren } from "@react-types/shared";

type InputSearchContextProps = {
  state: ComboBoxState<object>;
  inputRef: React.MutableRefObject<null>;
  listBoxRef: React.MutableRefObject<null>;
  popoverRef: React.MutableRefObject<null>;
  containerRef: React.MutableRefObject<null>;
  inputProps: React.InputHTMLAttributes<HTMLInputElement>;
  listBoxProps: AriaListBoxOptions<object>;
  setCollectionChildren: React.Dispatch<
    React.SetStateAction<CollectionChildren<object> | undefined>
  >;
  setDisabledKeys: React.Dispatch<
    React.SetStateAction<Iterable<Key> | undefined>
  >;
  isDisabled?: boolean;
  setUsePortal: React.Dispatch<React.SetStateAction<boolean | undefined>>;
  setPortalDomNode: React.Dispatch<React.SetStateAction<HTMLElement | null>>;
};

export const InputSearchContext = React.createContext(
  {} as InputSearchContextProps
);

export type InputSearchRootProps = {
  /** Defines a string value that labels the current element.  */
  "aria-label"?: string;
  /** Identifies the element (or elements) that labels the current element. */
  "aria-labelledby"?: string;
  /** InputSearch.Root expects to receive InputSearch.Input and InputSearch.Popover as children.*/
  children?: React.ReactNode;
  /** Override CSS */
  css?: React.CSSProperties;
  /** Whether the input field should be disabled or not */
  disabled?: boolean;
  /** If true, the popover opens when focus is on the text box. */
  openOnFocus?: boolean;
  /** Called with the selection value when the user makes a selection from the list. */
  onSelect?: (value: string) => void;
} & React.ComponentPropsWithoutRef<"div">;

export const InputSearchRootVE = ({
  children,
  css,
  disabled,
  openOnFocus,
  onSelect,
  style,
  ...props
}: InputSearchRootProps) => {
  const [collectionChildren, setCollectionChildren] =
    React.useState<CollectionChildren<object>>();
  const [disabledKeys, setDisabledKeys] = React.useState<Iterable<Key>>();

  const state = useComboBoxState({
    children: collectionChildren,
    disabledKeys,
    allowsCustomValue: true,
    allowsEmptyCollection: true,
    menuTrigger: openOnFocus ? "focus" : "input",
    ...props,
  });

  const inputRef = React.useRef(null);
  const listBoxRef = React.useRef(null);
  const popoverRef = React.useRef(null);

  const { inputProps, listBoxProps } = useComboBox(
    {
      label: "Search",
      ...props,
      inputRef,
      listBoxRef,
      popoverRef,
    },
    state
  );

  const prevSelectedKey = React.useRef(state.selectedKey);
  React.useEffect(() => {
    if (!onSelect) return;
    if (prevSelectedKey.current !== state.selectedKey) {
      if (state.selectedItem) {
        onSelect(
          state.selectedItem.textValue ||
            (state.selectedItem.rendered as string)
        );
      } else if (state.selectedItem === null) {
        onSelect("");
      }
      prevSelectedKey.current = state.selectedKey;
    }
  }, [state.selectedItem, onSelect]);

  const containerRef = React.useRef(null);

  const [usePortal, setUsePortal] = React.useState<boolean>();
  const [portalDomNode, setPortalDomNode] = React.useState<HTMLElement | null>(
    null
  );

  const rootClassName = usePortal === false ? "portal-false" : "portal";

  return (
    <InputSearchContext.Provider
      value={{
        state,
        inputRef,
        listBoxRef,
        popoverRef,
        containerRef,
        inputProps,
        listBoxProps,
        setCollectionChildren,
        setDisabledKeys,
        setUsePortal,
        setPortalDomNode,
        isDisabled: disabled,
      }}
    >
      <div
        ref={containerRef}
        className={inputSearchRoot[rootClassName]}
        style={{
          ...(css || {}),
          ...style,
        }}
        {...props}
      >
        {children}
        {/* 
        react-aria's ariaHideOutside utility assumes popover is visible when the global state.isOpen is true. This isn't always the case for conditional rendering, especially when async data is involved. Use root level containers to avoid errors and respond correctly to clicks
        */}
        {usePortal ? (
          portalDomNode !== null &&
          createPortal(
            <div data-testid="popover-container" ref={popoverRef} />,
            portalDomNode
          )
        ) : (
          <div data-testid="popover-container" ref={popoverRef} />
        )}
      </div>
    </InputSearchContext.Provider>
  );
};

InputSearchRootVE.displayName = "InputSearchRootVE";
