import React, { useEffect, useState } from "react";
import { styled, theme, globalCss, keyframes } from "../theme";
import type * as WPDS from "../theme";
import type { Token } from "@stitches/react/types/theme";
import type { StandardLonghandProperties } from "@stitches/react/types/css";

const NAME = "Scrim";

const fadeInAnimation = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
});

const fadeOutAnimation = keyframes({
  from: { opacity: 1 },
  to: { opacity: 0 },
});

const StyledContainer = styled("div", {
  backgroundColor: theme.colors.alpha50,
  position: "fixed",
  inset: 0,
  contentVisibility: "auto",
  "@reducedMotion": {
    animation: "none",
  },
  "&[data-state='open']": {
    animation: `${fadeInAnimation} ${theme.transitions.normal} ${theme.transitions.inOut}`,
  },
  "&[data-state='closed']": {
    animation: `${fadeOutAnimation} ${theme.transitions.normal} ${theme.transitions.inOut}`,
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

const htmlGlobalCSS = globalCss({
  html: {
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
    const [shouldRender, setShouldRender] = useState(false);

    htmlGlobalCSS();

    React.useEffect(() => {
      if (!lockScroll || typeof window === "undefined") return;

      if (open) {
        // this calculation needs to take place before the html is locked
        document.body.style.marginRight = `${
          window.innerWidth - document.body.clientWidth
        }px`;

        document.documentElement.dataset.scrimState = "open";
      }

      if (!open) {
        document.body.style.marginRight = "";

        document.documentElement.dataset.scrimState = "closed";
      }
    }, [open, lockScroll]);

    const handleAnimationEnd = () => {
      if (!open) {
        setShouldRender(false);
      }
    };

    useEffect(() => {
      if (open) {
        setShouldRender(true);
      }

      // This is a workaround for a bug in Jest where animations are not run
      // https://klaviyo.tech/hitting-a-moving-target-testing-javascript-animations-in-react-with-jest-8284a530a35a
      if (process.env.NODE_ENV === "test" && !open) {
        setShouldRender(false);
      }
    }, [open]);

    return shouldRender ? (
      <StyledContainer
        data-state={open ? "open" : "closed"}
        ref={ref}
        css={{ ...css, zIndex: zIndex }}
        aria-hidden={true}
        {...props}
        onAnimationEnd={handleAnimationEnd}
      ></StyledContainer>
    ) : null;
  }
);

Scrim.displayName = NAME;

export type { ScrimProps };
