import * as React from "react";
import { CSSTransition } from "react-transition-group";
import { styled, theme, css as wpCSS } from "@washingtonpost/wpds-theme";
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
    "@reducedMotion": {
      transition: "none",
    },
  },
  "&.wpds-scrim-exit": {
    opacity: 1,
  },
  "&.wpds-scrim-exit-active": {
    opacity: 0,
    transition: scrimTransition,
    "@reducedMotion": {
      transition: "none",
    },
  },
});

interface ScrimProps extends React.ComponentPropsWithRef<"div"> {
  /** Override CSS */
  css?: WPDS.CSS;
  /** Whether scrollbars should be hidden and scroll locked when the scrim is shown @default true */
  lockScroll?: boolean;
  /** Controlled value to open and close the scrim */
  open?: boolean;
  /** Css z-index of scrim @default theme.zIndices.shell */
  zIndex?:
    | StandardLonghandProperties["zIndex"]
    | Token<"shell", string, "zIndices", "wpds">;
}

export const Scrim = React.forwardRef<HTMLDivElement, ScrimProps>(
  (
    { lockScroll = true, open, zIndex = theme.zIndices.shell, css, ...props },
    ref
  ) => {
    React.useEffect(() => {
      if (!lockScroll || typeof window === "undefined") return;

      const htmlCSS = wpCSS({
        maxHeight: "100vh",
        overflow: "hidden",
      })();

      if (open) {
        document.body.style.marginRight = `${
          window.innerWidth - document.body.clientWidth
        }px`;
        document.documentElement.classList.add(htmlCSS.className);
      }

      if (!open) {
        document.documentElement.classList.remove(htmlCSS.className);
        document.body.style.marginRight = "";
      }
    }, [open, lockScroll]);

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
          css={{ ...css, zIndex: zIndex }}
          aria-hidden={true}
          {...props}
        ></StyledContainer>
      </CSSTransition>
    );
  }
);

Scrim.displayName = NAME;

export type { ScrimProps };
