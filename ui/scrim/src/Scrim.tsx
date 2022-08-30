import * as React from "react";
import { CSSTransition } from "react-transition-group";
import { styled, theme } from "@washingtonpost/wpds-theme";
import type * as WPDS from "@washingtonpost/wpds-theme";
import type { Token } from "@stitches/react/types/theme";
import type { StandardLonghandProperties } from "@stitches/react/types/css";

const NAME = "Scrim";

const scrimTransition = `opacity ${theme.transitions.normal} ${theme.transitions.inOut}`;

const StyledContainer = styled("div", {
  backgroundColor: theme.colors.alpha50,
  position: "fixed",
  inset: 0,
  "&.wpds-scrim-enter": {
    opacity: 0,
  },
  "&.wpds-scrim-enter-active": {
    opacity: 1,
    transition: scrimTransition,
  },
  "&.wpds-scrim-exit": {
    opacity: 1,
  },
  "&.wpds-scrim-exit-active": {
    opacity: 0,
    transition: scrimTransition,
  },
});

interface ScrimProps extends React.ComponentPropsWithRef<"div"> {
  /** Override CSS */
  css?: WPDS.CSS;
  /**  */
  context: {
    lockScroll: boolean;
    open: boolean;
    defaultOpen: boolean | undefined;
    zIndex:
      | StandardLonghandProperties["zIndex"]
      | Token<"shell", string, "zIndices", "wpds">;
    onOpenChange: (boolean) => void;
  };
}

export const Scrim = React.forwardRef<HTMLDivElement, ScrimProps>(
  (
    {
      context: { zIndex, defaultOpen, onOpenChange, open, lockScroll },
      ...props
    },
    ref
  ) => {
    return (
      <CSSTransition
        mountOnEnter
        unmountOnExit
        in={open}
        timeout={{
          enter: 300,
          exit: 300,
        }}
        classNames="wpds-scrim"
      >
        <StyledContainer
          ref={ref}
          style={{ zIndex: `calc(${zIndex} - 1)` }}
          aria-hidden={true}
          onClick={() => {
            onOpenChange(false);
          }}
          {...props}
        ></StyledContainer>
      </CSSTransition>
    );
  }
);

Scrim.displayName = NAME;

export type { ScrimProps };

/**
 * const layers = {
  0: "z-0",
  1: "z-1",
  2: "z-2",
  3: "z-3",
  4: "z-4",
  5: "z-5",
  6: "z-6",
  7: "z-7"
};

export const Scrim = ({
  context: {
    zIndex,
    defaultOpen,
    onOpenChange,
    open,
    customScrimBackgroundClass,
    lockScroll
  },
  ...props
}) => {
  const bodyRef = useRef();
  const documentRef = useRef();
  const pickedZIndex = layers[zIndex];

  useEffect(() => {
    const bodyClassList = ["mh-vh-100", "relative", "border-box"];

    if (lockScroll === false) {
      return () => {};
    }

    if (typeof window !== "undefined") {
      bodyRef.current = document.querySelector("body");
      documentRef.current = document;
    }

    if (open && typeof window !== "undefined") {
      documentRef.current.body.style.paddingRight = `${
        window.innerWidth - documentRef.current.body.clientWidth
      }px`;
      bodyRef.current.classList.add(...bodyClassList);
      documentRef.current.body.style.width = "100%";
      // derive scrollbar width from this math
    }

    if (open === false && typeof window !== "undefined") {
      bodyRef.current.classList.remove(...bodyClassList);
      documentRef.current.body.style.width = "";
      documentRef.current.body.style.paddingRight = "";
    }
  }, [defaultOpen, open, lockScroll]);

  useEffect(() => {
    const escapeListener = event => {
      if (event.key === "Escape") {
        onOpenChange(false);
      }
    };

    if (typeof window !== "undefined") {
      documentRef.current = document;
      documentRef.current.addEventListener("keydown", escapeListener, false);
    }

    return () => {
      if (typeof window !== "undefined") {
        documentRef.current.removeEventListener(
          "keydown",
          escapeListener,
          false
        );
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <CSSTransition
      mountOnEnter
      unmountOnExit
      in={open}
      timeout={{
        enter: 0,
        exit: 200
      }}
      classNames={{
        enter: "o-0",
        enterDone: "o-100",
        exit: "o-0",
        exitActive: "o-0"
      }}
    >
      <div
        aria-hidden={true}
        onClick={() => {
          onOpenChange(false);
        }}
        onKeyDown={() => {
          onOpenChange(false);
        }}
        data-qa="wpds-scrim"
        className={getClasses(
          "fixed top-0 left-0 right-0 bottom-0 pointer ease-in-out duration-200",
          {
            ["bg-gray-darkest-alpha-25"]: !customScrimBackgroundClass,
            [pickedZIndex]: zIndex,
            ...(customScrimBackgroundClass
              ? {
                  [customScrimBackgroundClass]: true
                }
              : {})
          }
        )}
        style={{
          transitionProperty: "opacity, backgroundColor"
        }}
        {...props}
      />
    </CSSTransition>
  );
};
 */
