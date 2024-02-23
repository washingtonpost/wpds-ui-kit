import * as React from "react";
import { createPortal } from "react-dom";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { CSSTransition } from "react-transition-group";
import { usePopper } from "react-popper";
import maxSize from "popper-max-size-modifier";
import { styled, theme } from "@washingtonpost/wpds-theme";

import type * as WPDS from "@washingtonpost/wpds-theme";
import type { Modifier } from "@popperjs/core";

const NAME = "NavigationMenuContent";

const StyledNavigationMenuContent = styled(NavigationMenuPrimitive.Content, {
  background: theme.colors.secondary,
  border: `solid 1px ${theme.colors.subtle}`,
  borderRadius: theme.radii["012"],
  boxShadow: theme.shadows["200"],
  minWidth: "150px",
  maxHeight: "inherit",
  overflow: "auto",
  padding: theme.space["050"],
  display: "none",
  "&.wpds-nav-menu-content-enter": {
    display: "block",
    opacity: 0,
    transform: "translate(var(--initialposition))",
  },
  "&.wpds-nav-menu-content-enter-active": {
    opacity: 1,
    transform: "translate(0)",
    transition: `all ${theme.transitions.fast} ${theme.transitions.inOut}`,
  },
  "&.wpds-nav-menu-content-enter-done": {
    display: "block",
  },
  "&.wpds-nav-menu-content-exit": {
    display: "block",
    opacity: 1,
    transform: "translate(0)",
  },
  "&.wpds-nav-menu-content-exit-active": {
    opacity: 0,
    transform: "translate(var(--initialposition))",
    transition: `all ${theme.transitions.fast} ${theme.transitions.inOut}`,
  },
  "&.wpds-nav-menu-content-exit-done": {
    display: "none",
  },
});

const applyMaxSize: Modifier<"applyMaxSize", Record<string, unknown>> = {
  name: "applyMaxSize",
  enabled: true,
  phase: "beforeWrite",
  requires: ["maxSize"],
  fn: ({ state }) => {
    const { height } = state.modifiersData.maxSize;
    state.styles.popper = {
      ...state.styles.popper,
      maxHeight: `${height}px`,
    };
  },
};

export type NavigationMenuContentProps = {
  /** Any React node may be used as a child to allow for formatting */
  children?: React.ReactNode;
  /** Override CSS */
  css?: WPDS.CSS;
  /** Trigger dom element used for positioning */
  referenceElement?: HTMLButtonElement;
  /** The preferred side of the trigger to render against when open. */
  side?: "bottom" | "left" | "right" | "top";
  /** The preferred alignment against the anchor. */
  align?: "center" | "end" | "start";
  /** Popper options object to pass to internal popper */
  popperOptions?: Parameters<typeof usePopper>[2];
} & React.ComponentPropsWithRef<typeof StyledNavigationMenuContent>;

export const NavigationMenuContent = React.forwardRef<
  HTMLDivElement,
  NavigationMenuContentProps
>(
  (
    {
      children,
      referenceElement,
      side = "bottom",
      align = "start",
      popperOptions,
      ...props
    },
    ref
  ) => {
    const [transitionIn, setTransitionIn] = React.useState(false);
    const nodeRef = React.useRef(null);
    const datasetRef = React.useCallback((node) => {
      if (node !== null) {
        nodeRef.current = node;
        if (ref) {
          typeof ref === "function" ? ref(node) : (ref.current = node);
        }
        setTransitionIn(node.dataset.state === "open");
      }
    }, []);

    const [popperElement, setPopperElement] =
      React.useState<HTMLDivElement | null>(null);

    const { styles, attributes } = usePopper(referenceElement, popperElement, {
      placement: align === "center" ? side : `${side}-${align}`,
      modifiers: [
        {
          name: "offset",
          options: {
            offset: [0, 8],
          },
        },
        maxSize,
        applyMaxSize,
        ...(popperOptions && popperOptions.modifiers
          ? popperOptions.modifiers
          : []),
      ],
      strategy: popperOptions?.strategy,
      onFirstUpdate: popperOptions?.onFirstUpdate,
    });

    const offset = theme.sizes["025"].value;
    let initialPosition = `0, 0`;

    switch (side) {
      case "top":
        initialPosition = `0, ${offset}`;
        break;
      case "right":
        initialPosition = `-${offset}, 0`;
        break;
      case "bottom":
        initialPosition = `0, -${offset}`;
        break;
      case "left":
        initialPosition = `${offset}, 0`;
        break;
    }

    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
      setMounted(true);
    }, []);

    return mounted
      ? createPortal(
          <div
            ref={setPopperElement}
            style={{ zIndex: theme.zIndices.page.value, ...styles.popper }}
            {...attributes.popper}
            data-testid="wpds-nav-menu-content-popper"
          >
            <CSSTransition
              in={transitionIn}
              nodeRef={nodeRef}
              timeout={200}
              classNames="wpds-nav-menu-content"
            >
              <StyledNavigationMenuContent
                forceMount={true}
                {...props}
                ref={datasetRef}
                style={
                  {
                    "--initialposition": initialPosition,
                  } as React.CSSProperties
                }
              >
                {children}
              </StyledNavigationMenuContent>
            </CSSTransition>
          </div>,
          document.body
        )
      : null;
  }
);

NavigationMenuContent.displayName = NAME;
