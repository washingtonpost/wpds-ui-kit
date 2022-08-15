import * as React from "react";
import { CSSTransition } from "react-transition-group";
import { styled, theme } from "@washingtonpost/wpds-theme";
import type * as WPDS from "@washingtonpost/wpds-theme";
import { DrawerContext } from "./DrawerRoot";

const drawerTransition = `transform ${theme.transitions.normal} ${theme.transitions.inOut}`;

const StyledContainer = styled("div", {
  backgroundColor: theme.colors.secondary,
  boxShadow: theme.shadows["300"],
  color: theme.colors.primary,
  maxHeight: "100%",
  overflow: "auto",
  position: "fixed",
  variants: {
    /** controls where the drawer comes from,
     * either a side of screen or in-place
     * @default bottom
     */
    position: {
      top: {
        top: 0,
        right: 0,
        left: 0,
      },
      right: {
        top: 0,
        right: 0,
        bottom: 0,
      },
      bottom: {
        right: 0,
        bottom: 0,
        left: 0,
        "&.wpds-drawer-enter": {
          transform: "translateY(100%)",
        },
        "&.wpds-drawer-enter-active": {
          transform: "translateY(0%)",
          transition: drawerTransition,
        },
        "&.wpds-drawer-exit": {
          transform: "translateY(0%)",
        },
        "&.wpds-drawer-exit-active": {
          transform: "translateY(100%)",
          transition: drawerTransition,
        },
      },
      left: {
        top: 0,
        bottom: 0,
        left: 0,
      },
      "in-place": {},
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
  /** Override pinned location for in-place drawer. */
  inPlaceSelector?: string;
  /** Width for a left or right positioned drawer  @default 400 */
  width?: number;
}

export const DrawerContent = React.forwardRef<
  HTMLDivElement,
  DrawerContentProps
>(
  (
    { children, css, height = 500, width = 400, position = "bottom", ...props },
    ref
  ) => {
    const context = React.useContext(DrawerContext);
    return (
      <CSSTransition
        mountOnEnter
        unmountOnExit
        in={context?.open}
        timeout={10000}
        classNames="wpds-drawer"
      >
        <StyledContainer
          id={context?.contentId}
          ref={ref}
          css={{
            ...css,
            width:
              position === "left" || position === "right" ? width : undefined,
            height:
              position === "top" || position === "bottom" ? height : undefined,
          }}
          position={position}
          {...props}
        >
          <StyledInner>{children}</StyledInner>
        </StyledContainer>
      </CSSTransition>
    );
  }
);

DrawerContent.displayName = "DrawerContent";

export type { DrawerContentProps };

// import * as React from "react";
// import { CSSTransition } from "react-transition-group";
// import { theme, styled } from "@washingtonpost/wpds-theme";
// import { DrawerContext } from "./DrawerRoot";
//
// const layers = {
//   0: "z-0",
//   1: "z-1",
//   2: "z-2",
//   3: "z-3",
//   4: "z-4",
//   5: "z-5",
//   6: "z-6",
//   7: "z-7",
// };
//
// const StyledContainer = styled("div", {
//   backgroundColor: theme.colors.secondary,
//   boxShadow: theme.shadows["300"],
//   color: theme.colors.primary,
//   overflow: "auto",
//   position: "fixed",
//   variants: {
//     /** controls where the drawer comes from, either a side of screen or    // in-place */
//     position: {
//       top: {
//         top: 0,
//         right: 0,
//         left: 0,
//       },
//       right: {
//         top: 0,
//         right: 0,
//         bottom: 0,
//       },
//       bottom: {
//         right: 0,
//         bottom: 0,
//         left: 0,
//       },
//       left: {
//         top: 0,
//         bottom: 0,
//         left: 0,
//       },
//       "in-place": {},
//     },
//   },
// });
//
// const StyledInner = styled("div", {
//   padding: theme.space["100"],
// });
//
// interface DrawerContentProps
//   extends React.ComponentPropsWithRef<typeof StyledContainer> {
//   /** Height for a top or bottom positioned drawer */
//   height?: number;
//   /** Additional class names for inner drawer element */
//   innerClassName?: string;
//   /** Override pinned location for in-place drawer. */
//   inPlaceSelector?: string;
//   /** Width for a left or right positioned drawer */
//   width?: number;
// }
//
// export const DrawerContent = React.forwardRef<
//   HTMLDivElement,
//   DrawerContentProps
// >(
//   (
//     {
//       //className,
//       inPlaceSelector,
//       innerClassName,
//       height = 500,
//       width = 400,
//       children,
//       position = "bottom",
//       ...props
//     },
//     ref
//   ) => {
//     const context = React.useContext(DrawerContext);
//     const [inPlaceStyles, setInPlaceStyles] = React.useState({});
//     //const pickedZIndex =
//     //layers[context?.zIndex ? (context?.zIndex as number) + 1 : 1];
//     const drawerStyle =
//       position === "top" || position === "bottom" ? "height" : "width";
//     const drawerDepth =
//       position === "top" || position === "bottom" ? height : width;
//     const transform = {
//       top: `-translate-y-100`,
//       bottom: `translate-y-100`,
//       left: `-translate-x-100`,
//       right: `translate-x-100`,
//       "in-place": "translate3d(0, 0, 0)",
//     };
//
//     const memoizedRepositionModal = React.useCallback(() => {
//       let element;
//       if (inPlaceSelector && document) {
//         const pin = document.querySelector(inPlaceSelector);
//         if (pin) {
//           element = pin;
//         }
//       } else if (context?.triggerRef && context.triggerRef.current) {
//         element = context.triggerRef.current;
//       }
//
//       if (element) {
//         const triggerBounds = element.getBoundingClientRect();
//         if (
//           typeof triggerBounds !== "object" ||
//           typeof triggerBounds.y !== "number" ||
//           typeof triggerBounds.height !== "number" ||
//           typeof triggerBounds.x !== "number" ||
//           typeof triggerBounds.width !== "number"
//         ) {
//           return;
//         }
//
//         setInPlaceStyles({
//           top: triggerBounds.y + triggerBounds.height,
//           left: triggerBounds.x - width / 2 + triggerBounds.width / 2,
//         });
//       }
//     }, [context, inPlaceSelector, width]);
//
//     React.useEffect(() => {
//       if ("in-place" !== position) {
//         return;
//       }
//       memoizedRepositionModal();
//       document.addEventListener("scroll", memoizedRepositionModal);
//       document.addEventListener("resize", memoizedRepositionModal);
//       return () => {
//         document.removeEventListener("resize", memoizedRepositionModal);
//         document.removeEventListener("scroll", memoizedRepositionModal);
//       };
//     }, [memoizedRepositionModal, position]);
//
//     return (
//       <CSSTransition
//         mountOnEnter
//         unmountOnExit
//         in={context?.open}
//         timeout={{
//           enter: 0,
//           exit: 500,
//         }}
//         classNames={{
//           enter: `o-0 ${transform[position as keyof typeof transform]}`,
//           enterDone: `o-1 transform-3d-zeroed`,
//           exit: `o-0 ${transform[position as keyof typeof transform]}`,
//           exitActive: `o-0 ${transform[position as keyof typeof transform]}`,
//         }}
//       >
//         <StyledContainer
//           role="dialog"
//           aria-modal
//           id={context?.contentId}
//           ref={ref}
//           position={position}
//           /*
//         className={getClasses(
//           "fixed shadow-4 overflow-auto ease-in-out duration-500 mw-100",
//           {
//             [className]: className,
//             [pickedZIndex]: context.zIndex,
//           }
//         )}
//         */
//           style={{
//             maxHeight: "100%",
//             [drawerStyle]: drawerDepth,
//             transitionProperty: "opacity, transform",
//             ...(position === "in-place" ? inPlaceStyles : {}),
//           }}
//           {...props}
//         >
//           <StyledInner className={innerClassName}>{children}</StyledInner>
//         </StyledContainer>
//       </CSSTransition>
//     );
//   }
// );
//
// DrawerContent.displayName = "Drawer.Content";
//
// export type { DrawerContentProps };
