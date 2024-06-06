import React from "react";
import { styled, theme, css as wpCSS } from "../theme";
import type * as WPDS from "../theme";
import type { Token } from "@stitches/react/types/theme";
import type { StandardLonghandProperties } from "@stitches/react/types/css";

const NAME = "Scrim";

const scrimTransition = `opacity ${theme.transitions.normal} ${theme.transitions.inOut}`;

const StyledContainer = styled("div", {
  backgroundColor: theme.colors.alpha50,
  position: "fixed",
  transition: scrimTransition,
  inset: 0,
  "@reducedMotion": {
    transition: "none",
  },
  "&[data-state='open']": {
    opacity: 1,
  },
  "&[data-state='closed']": {
    opacity: 0,
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

    const [isMounted, setIsMounted] = React.useState(false);

    React.useEffect(() => {
      if (open) {
        setIsMounted(true);
      }
    }, [open]);

    const handleTransitionEnd = () => {
      if (!open) {
        setIsMounted(false);
      }
    };

    return isMounted ? (
      <StyledContainer
        data-state={open ? "open" : "closed"}
        ref={ref}
        css={{ ...css, zIndex: zIndex }}
        aria-hidden={true}
        {...props}
        onTransitionEnd={handleTransitionEnd}
      ></StyledContainer>
    ) : null;
  }
);

Scrim.displayName = NAME;

export type { ScrimProps };
