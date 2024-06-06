import React, { useState, useEffect, useTransition } from "react";
import { FocusScope } from "@radix-ui/react-focus-scope";
import { styled, theme } from "../theme";
import type * as WPDS from "../theme";
import { DrawerContext } from "./DrawerRoot";

const drawerTransition = `transform ${theme.transitions.normal} ${theme.transitions.inOut}, opacity ${theme.transitions.normal} ${theme.transitions.inOut}`;

const StyledContainer = styled("div", {
  backgroundColor: theme.colors.secondary,
  boxShadow: theme.shadows["300"],
  color: theme.colors.primary,
  maxHeight: "100%",
  overflow: "auto",
  position: "fixed",
  transition: drawerTransition,
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
    transform: "translateX(0)",
    opacity: 1,
    // data=position="top" or "bottom" or "left" or "right"
    "&[data-position='top']": {
      transform: "translateY(0)",
    },
    "&[data-position='right']": {
      transform: "translateX(0)",
    },
    "&[data-position='bottom']": {
      transform: "translateY(0)",
    },
    "&[data-position='left']": {
      transform: "translateX(0)",
    },
  },
  // data-state="closed"
  "&[data-state='closed']": {
    transform: "translateX(100%)",
    opacity: 0,
    // data=position="top" or "bottom" or "left" or "right"
    "&[data-position='top']": {
      transform: "translateY(-100%)",
    },
    "&[data-position='right']": {
      transform: "translateX(100%)",
    },
    "&[data-position='bottom']": {
      transform: "translateY(100%)",
    },
    "&[data-position='left']": {
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
    const [isVisible, setIsVisible] = useState(context.open);
    const [, startTransition] = useTransition();

    useEffect(() => {
      if (context.open) {
        setIsVisible(true);
      }
    }, [context.open]);

    const handleTransitionEnd = () => {
      if (!context.open) {
        setIsVisible(false);
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

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
      setIsMounted(true);
    }, []);

    return isMounted ? (
      <FocusScope loop={loopFocus} trapped={trapFocus} asChild>
        <StyledContainer
          ref={ref}
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
