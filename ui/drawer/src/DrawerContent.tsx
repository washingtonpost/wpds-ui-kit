import * as React from "react";
import { CSSTransition } from "react-transition-group";
import { styled, theme } from "@washingtonpost/wpds-theme";
import type * as WPDS from "@washingtonpost/wpds-theme";
import { DrawerContext } from "./DrawerRoot";

const drawerTransition = `transform ${theme.transitions.normal} ${theme.transitions.inOut}, opacity ${theme.transitions.normal} ${theme.transitions.inOut}`;

const StyledContainer = styled("div", {
  backgroundColor: theme.colors.secondary,
  boxShadow: theme.shadows["300"],
  color: theme.colors.primary,
  maxHeight: "100%",
  overflow: "auto",
  position: "fixed",
  variants: {
    /** controls which side of the screen the drawer comes from @default bottom */
    position: {
      top: {
        top: 0,
        right: 0,
        left: 0,
        "&.wpds-drawer-enter": {
          opacity: 0,
          transform: "translateY(-100%)",
        },
        "&.wpds-drawer-enter-active": {
          opacity: 1,
          transform: "translateY(0%)",
          transition: drawerTransition,
        },
        "&.wpds-drawer-exit": {
          opacity: 1,
          transform: "translateY(0%)",
        },
        "&.wpds-drawer-exit-active": {
          opacity: 0,
          transform: "translateY(-100%)",
          transition: drawerTransition,
        },
      },
      right: {
        top: 0,
        right: 0,
        bottom: 0,
        "&.wpds-drawer-enter": {
          opacity: 0,
          transform: "translateX(100%)",
        },
        "&.wpds-drawer-enter-active": {
          opacity: 1,
          transform: "translateX(0%)",
          transition: drawerTransition,
        },
        "&.wpds-drawer-exit": {
          opacity: 1,
          transform: "translateX(0%)",
        },
        "&.wpds-drawer-exit-active": {
          opacity: 0,
          transform: "translateX(100%)",
          transition: drawerTransition,
        },
      },
      bottom: {
        right: 0,
        bottom: 0,
        left: 0,
        "&.wpds-drawer-enter": {
          opacity: 0,
          transform: "translateY(100%)",
        },
        "&.wpds-drawer-enter-active": {
          opacity: 1,
          transform: "translateY(0%)",
          transition: drawerTransition,
        },
        "&.wpds-drawer-exit": {
          opacity: 1,
          transform: "translateY(0%)",
        },
        "&.wpds-drawer-exit-active": {
          opacity: 0,
          transform: "translateY(100%)",
          transition: drawerTransition,
        },
      },
      left: {
        top: 0,
        bottom: 0,
        left: 0,
        "&.wpds-drawer-enter": {
          opacity: 0,
          transform: "translateX(-100%)",
        },
        "&.wpds-drawer-enter-active": {
          opacity: 1,
          transform: "translateX(0%)",
          transition: drawerTransition,
        },
        "&.wpds-drawer-exit": {
          opacity: 1,
          transform: "translateX(0%)",
        },
        "&.wpds-drawer-exit-active": {
          opacity: 0,
          transform: "translateX(-100%)",
          transition: drawerTransition,
        },
      },
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
  height?: number;
  /** Additional class names for inner drawer element */
  innerClassName?: string;
  /** Width for a left or right positioned drawer  @default 400 */
  width?: number;
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
      ...props
    },
    ref
  ) => {
    const context = React.useContext(DrawerContext);

    return (
      <CSSTransition
        mountOnEnter
        unmountOnExit
        in={context.open}
        timeout={300}
        classNames="wpds-drawer"
      >
        <StyledContainer
          id={context.contentId}
          ref={ref}
          style={{
            width:
              position === "left" || position === "right" ? width : undefined,
            height:
              position === "top" || position === "bottom" ? height : undefined,
            zIndex: context.zIndex as number,
          }}
          position={position}
          {...props}
        >
          <StyledInner className={innerClassName}>{children}</StyledInner>
        </StyledContainer>
      </CSSTransition>
    );
  }
);

DrawerContent.displayName = "DrawerContent";

export type { DrawerContentProps };
