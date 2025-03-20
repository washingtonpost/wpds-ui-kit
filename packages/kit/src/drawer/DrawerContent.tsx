import React, { useState, useEffect, useTransition } from "react";
import { FocusScope } from "@radix-ui/react-focus-scope";
import { styled, theme, keyframes } from "../theme";
import type * as WPDS from "../theme";
import { DrawerContext } from "./DrawerRoot";

const drawerTransition = `transform ${theme.transitions.normal} ${theme.transitions.inOut}, opacity ${theme.transitions.normal} ${theme.transitions.inOut}`;

const animateInFromTop = keyframes({
  from: { transform: "translateY(-100%)" },
  to: { transform: "translateY(0)" },
});

const animationOutFromTop = keyframes({
  from: { transform: "translateY(0)" },
  to: { transform: "translateY(-100%)" },
});

const animateInFromRight = keyframes({
  from: { transform: "translateX(100%)" },
  to: { transform: "translateX(0)" },
});

const animateInFromBottom = keyframes({
  from: { transform: "translateY(100%)" },
  to: { transform: "translateY(0)" },
});

const animateInFromLeft = keyframes({
  from: { transform: "translateX(-100%)" },
  to: { transform: "translateX(0)" },
});

const StyledContainer = styled("div", {
  backgroundColor: theme.colors.secondary,
  boxShadow: theme.shadows["300"],
  color: theme.colors.primary,
  maxHeight: "100%",
  overflow: "auto",
  position: "fixed",
  transition: drawerTransition,
  contentVisibility: "auto",
  variants: {
    position: {
      top: { top: 0, right: 0, left: 0 },
      right: { top: 0, right: 0, bottom: 0 },
      bottom: { right: 0, bottom: 0, left: 0 },
      left: { top: 0, bottom: 0, left: 0 },
    },
  },
  "@reducedMotion": {
    transition: "none",
  },
  "&[data-state='open']": {
    opacity: 1,
    // data=position="top" or "bottom" or "left" or "right"
    "&[data-position='top']": {
      animation: `${animateInFromTop} ${theme.transitions.normal} ${theme.transitions.inOut}`,
      transform: "translateY(0)",
    },
    "&[data-position='right']": {
      animation: `${animateInFromRight} ${theme.transitions.normal} ${theme.transitions.inOut}`,
      transform: "translateX(0)",
    },
    "&[data-position='bottom']": {
      animation: `${animateInFromBottom} ${theme.transitions.normal} ${theme.transitions.inOut}`,
      transform: "translateY(0)",
    },
    "&[data-position='left']": {
      animation: `${animateInFromLeft} ${theme.transitions.normal} ${theme.transitions.inOut}`,
      transform: "translateX(0)",
    },
  },
  // data-state="closed"
  "&[data-state='closed']": {
    opacity: 0,
    // data=position="top" or "bottom" or "left" or "right"
    "&[data-position='top']": {
      animate: `${animationOutFromTop} ${theme.transitions.normal} ${theme.transitions.inOut}`,
      transform: "translateY(-100%)",
    },
    "&[data-position='right']": {
      animate: `${animateInFromRight} ${theme.transitions.normal} ${theme.transitions.inOut}`,
      transform: "translateX(100%)",
    },
    "&[data-position='bottom']": {
      animate: `${animateInFromBottom} ${theme.transitions.normal} ${theme.transitions.inOut}`,
      transform: "translateY(100%)",
    },
    "&[data-position='left']": {
      animate: `${animateInFromLeft} ${theme.transitions.normal} ${theme.transitions.inOut}`,
      transform: "translateX(-100%)",
    },
  },
});

const StyledInner = styled("div", {
  padding: theme.space["100"],
});

interface DrawerContentProps
  extends React.ComponentPropsWithRef<typeof StyledContainer> {
  /** Override CSS */
  css?: WPDS.CSS;
  /** Height for a top or bottom positioned drawer  @default 500 */
  height?: number | "auto";
  /** Additional class names for inner drawer element */
  innerClassName?: string;
  /** When `true`, tabbing from last item will focus first tabbable and shift+tab from first item will focus last tababble. @defaultValue true */
  loopFocus?: boolean;
  /** When `true`, focus cannot escape the `Content` via keyboard, pointer, or a programmatic focus  @defaultValue false */
  trapFocus?: boolean;
  /** Width for a left or right positioned drawer  @default 400 */
  width?: number | "auto";
}

export const DrawerContent = React.forwardRef<
  HTMLDivElement,
  DrawerContentProps
>(
  (
    {
      children,
      height = 500,
      width = 400,
      position = "bottom",
      innerClassName,
      loopFocus = true,
      trapFocus = false,
      ...props
    },
    ref
  ) => {
    const context = React.useContext(DrawerContext);
    const [isPending, startTransition] = useTransition();

    const handleTransitionEnd = () => {
      if (!context.open) {
        handleExit();
        setShouldRender(false);
      }
    };

    const handleEnter = () => {
      document.addEventListener("keydown", handleKeyDown);
    };

    const handleExit = () => {
      document.removeEventListener("keydown", handleKeyDown);
    };

    const handleKeyDown = (event: { key: string }) => {
      if (event.key === "Escape") {
        context.onOpenChange(false);
      }
    };

    useEffect(() => {
      startTransition(() => {
        if (context.open) {
          handleEnter();
        } else {
          handleExit();
        }
      });
    }, [context.open]);

    const [shouldRender, setShouldRender] = useState(false);

    useEffect(() => {
      if (context.open) {
        setShouldRender(true);
      }

      // This is a workaround for a bug in Jest where animations are not run
      // https://klaviyo.tech/hitting-a-moving-target-testing-javascript-animations-in-react-with-jest-8284a530a35a
      if (process.env.NODE_ENV === "test" && !context.open) {
        setShouldRender(false);
      }
    }, [context.open]);

    const handleAnimationEnd = () => {
      if (!isPending && !context.open) {
        setShouldRender(false);
      }
    };

    return shouldRender ? (
      <FocusScope loop={loopFocus} trapped={trapFocus} asChild>
        <StyledContainer
          ref={ref}
          role="drawer"
          id={context.contentId}
          data-position={position}
          data-state={context.open ? "open" : "closed"}
          style={{
            width:
              position === "left" || position === "right" ? width : undefined,
            height:
              position === "top" || position === "bottom" ? height : undefined,
            zIndex: context.zIndex as number,
          }}
          position={position}
          onTransitionEnd={handleTransitionEnd}
          onAnimationStart={handleEnter}
          onAnimationEnd={handleAnimationEnd}
          {...props}
        >
          <StyledInner className={innerClassName}>{children}</StyledInner>
        </StyledContainer>
      </FocusScope>
    ) : null;
  }
);

DrawerContent.displayName = "DrawerContent";

export type { DrawerContentProps };
