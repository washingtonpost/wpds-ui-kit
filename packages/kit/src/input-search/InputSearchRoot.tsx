import React from "react";
import { createPortal } from "react-dom";
import { useComboBoxState } from "react-stately";
import { useComboBox } from "react-aria";
import { styled, theme } from "../theme";

import type { ComboBoxState } from "react-stately";
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
  isDisabled?: boolean;
  setUsePortal: React.Dispatch<React.SetStateAction<boolean | undefined>>;
  setPortalDomNode: React.Dispatch<React.SetStateAction<HTMLElement | null>>;
};

export const InputSearchContext = React.createContext(
  {} as InputSearchContextProps
);

const StyledRoot = styled("div", {
  width: "100%",
  position: "relative",
  variants: {
    portal: {
      false: {
        "&:focus-within::after": {
          content: "",
          borderRadius: theme.radii["012"],
          border: `1px solid ${theme.colors.signal}`,
          inset: 0,
          position: "absolute",
          pointerEvents: "none",
          zIndex: 1,
        },
      },
    },
  },
});

export type InputSearchRootProps = {
  /** Whether the input field should be disabled or not */
  disabled?: boolean;
  /** If true, the popover opens when focus is on the text box. */
  openOnFocus?: boolean;
  /** Called with the selection value when the user makes a selection from the list. */
  onSelect?: (value: string) => void;
} & React.ComponentPropsWithoutRef<typeof StyledRoot>;

export const InputSearchRoot = ({
  children,
  css,
  disabled,
  openOnFocus,
  onSelect,
  ...props
}: InputSearchRootProps) => {
  const [collectionChildren, setCollectionChildren] =
    React.useState<CollectionChildren<object>>();

  const state = useComboBoxState({
    children: collectionChildren,
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

  React.useEffect(() => {
    if (state.selectedItem && onSelect) {
      onSelect(
        state.selectedItem.textValue || (state.selectedItem.rendered as string)
      );
    }
  }, [state.selectedItem, onSelect]);

  const containerRef = React.useRef(null);

  const [usePortal, setUsePortal] = React.useState<boolean>();
  const [portalDomNode, setPortalDomNode] = React.useState<HTMLElement | null>(
    null
  );

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
        setUsePortal,
        setPortalDomNode,
        isDisabled: disabled,
      }}
    >
      <StyledRoot ref={containerRef} css={css} portal={usePortal} {...props}>
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
      </StyledRoot>
    </InputSearchContext.Provider>
  );
};

InputSearchRoot.displayName = "InputSearchRoot";
