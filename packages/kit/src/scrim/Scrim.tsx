import React, { useTransition } from "react";
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
  contentVisibility: "auto",
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

const htmlGlobalCSS = wpCSS({
  html: {
    contain: "layout style",
    "&[data-scrim-state='open']": {
      maxHeight: "100vh",
      overflow: "hidden",
    },
    "&[data-scrim-state='closed']": {
      maxHeight: "",
      overflow: "",
    },
  },
});

export const Scrim = React.forwardRef<HTMLDivElement, ScrimProps>(
  (
    { lockScroll = true, open, zIndex = theme.zIndices.shell, css, ...props },
    ref
  ) => {
    const [isPending, startTransition] = useTransition();
    const [isMounted, setIsMounted] = React.useState(false);

    htmlGlobalCSS();

    React.useEffect(() => {
      if (!lockScroll || typeof window === "undefined") return;

      startTransition(() => {
        if (open) {
          document.body.style.marginRight = `${
            window.innerWidth - document.body.clientWidth
          }px`;
          document.documentElement.dataset.scrimState = "open";
        }

        if (!open) {
          document.documentElement.dataset.scrimState = "closed";
          document.body.style.marginRight = "";
        }
      });
    }, [open, lockScroll]);

    React.useEffect(() => {
      startTransition(() => {
        if (open) {
          setIsMounted(true);
        }
      });
    }, [open]);

    const handleTransitionEnd = () => {
      if (!open) {
        startTransition(() => {
          setIsMounted(false);
        });
      }
    };

    return isMounted || isPending ? (
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
