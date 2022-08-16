import { DrawerRoot } from "./DrawerRoot";
import { DrawerContent } from "./DrawerContent";
import { DrawerTrigger } from "./DrawerTrigger";

type DrawerProps = {
  Root: typeof DrawerRoot;
  Content: typeof DrawerContent;
  Trigger: typeof DrawerTrigger;
};

export const Drawer: DrawerProps = {
  Root: DrawerRoot,
  Content: DrawerContent,
  Trigger: DrawerTrigger,
};

/* ------ */

//const StyledContainer = styled("div", {
//  backgroundColor: theme.colors.secondary,
//  color: theme.colors.primary,
//});
//
//interface DrawerProps extends React.ComponentPropsWithRef<"div"> {
//  /** Any React node may be used as a child */
//  children?: React.ReactNode;
//  /** Override CSS */
//  css?: WPDS.CSS;
//}
//
//export const Drawer = React.forwardRef<HTMLDivElement, DrawerProps>(
//  ({ children, css, ...props }, ref) => {
//    return (
//      <StyledContainer ref={ref} css={css} {...props}>
//        {children}
//      </StyledContainer>
//    );
//  }
//);
//
//Drawer.displayName = NAME;
//
//export type { DrawerProps };

/* ------ */

//import React, {
//  createContext,
//  useCallback,
//  useContext,
//  useEffect,
//  useState
//} from "react";
//import PropTypes from "prop-types";
//import { CSSTransition } from "react-transition-group";
//import { getClasses } from "@washingtonpost/front-end-utils";
//import { ButtonIcon } from "@washingtonpost/site-components/core/button-icon";
//import { Close16 } from "@washingtonpost/site-components/core/icon/close/16";
//import { Button } from "@washingtonpost/site-components/core/button";
//import { Scrim } from "@washingtonpost/site-components/core/scrim";

//export const DrawerTrigger = ({
//  as,
//  children,
//  className,
//  dataQa,
//  ...props
//}) => {
//  const context = useContext(Drawer);
//  return (
//    <Button
//      as={as}
//      className={className}
//      aria-haspopup="dialog"
//      aria-expanded={context.open}
//      aria-controls={context.contentId}
//      ref={context.triggerRef}
//      onClick={() => {
//        context.onOpenChange(true);
//      }}
//      // eslint-disable-next-line react/prop-types
//      dataQa={dataQa}
//      {...props}
//    >
//      {children}
//    </Button>
//  );
//};
//

//DrawerTrigger.propTypes = {
//  dataQa: PropTypes.string,
//  /** Uses Button component, accepts any Button props */
//  as: PropTypes.any,
//  children: PropTypes.node.isRequired,
//  className: PropTypes.string
//};
//
//export const CustomDrawerTrigger = ({
//  as,
//  children,
//  className,
//  dataQa,
//  ...props
//}) => {
//  const context = useContext(Drawer);
//  const ComponentAsElement = as ? as : "div";
//  return (
//    <ComponentAsElement
//      aria-haspopup="dialog"
//      aria-expanded={context.open}
//      aria-controls={context.contentId}
//      className={className}
//      // eslint-disable-next-line react/prop-types
//      data-qa={dataQa}
//      onClick={() => {
//        context.onOpenChange(true);
//      }}
//      onKeyPress={() => {
//        context.onOpenChange(true);
//      }}
//      ref={context.triggerRef}
//      role="button"
//      tabIndex={0}
//      {...props}
//    >
//      {children}
//    </ComponentAsElement>
//  );
//};

//
//CustomDrawerTrigger.propTypes = {
//  as: PropTypes.elementType,
//  dataQa: PropTypes.string,
//  children: PropTypes.node.isRequired,
//  className: PropTypes.string
//};
//
///**
// * ### Darkens and locks the page behind it.
// * Defaults to true for small screens
// * Defaults to false for not small screens
// */
//export const DrawerScrim = () => {
//  const context = useContext(Drawer);
//  return <Scrim context={context} />;
//};
//
//export const DrawerClose = ({ as, className, sticky = true, ...props }) => {
//  const context = useContext(Drawer);
//
//  return (
//    <ButtonIcon
//      size="small"
//      as={as}
//      onClick={() => {
//        context.onOpenChange(false);
//      }}
//      color="white"
//      renderIcon={Close16}
//      ariaLabel="Close Drawer"
//      className={getClasses("fr pointer", {
//        "sticky z-1 top-sm right-sm": sticky,
//        "mr-sm mt-sm": !sticky && !className,
//        [className]: className
//      })}
//      {...props}
//    />
//  );
//};
//
//DrawerClose.propTypes = {
//  as: PropTypes.string,
//  className: PropTypes.string,
//  /** Should the close button be fixed and sit above text on scroll */
//  sticky: PropTypes.bool
//};
//
//export const DrawerContent = ({
//  className,
//  inPlaceSelector,
//  innerClassName,
//  height = 500,
//  width = 400,
//  children,
//  position = "bottom",
//  ...props
//}) => {
//  const context = useContext(Drawer);
//  const [inPlaceStyles, setInPlaceStyles] = useState({});
//  const pickedZIndex = layers[context.zIndex + 1];
//  const drawerStyle =
//    position === "top" || position === "bottom" ? "height" : "width";
//  const drawerDepth =
//    position === "top" || position === "bottom" ? height : width;
//  const transform = {
//    top: `-translate-y-100`,
//    bottom: `translate-y-100`,
//    left: `-translate-x-100`,
//    right: `translate-x-100`,
//    "in-place": "translate3d(0, 0, 0)"
//  };
//
//  const memoizedRepositionModal = useCallback(() => {
//    let element = null;
//    if (inPlaceSelector && document) {
//      const pin = document.querySelector(inPlaceSelector);
//      if (pin) {
//        element = pin;
//      }
//    } else if (context.triggerRef && context.triggerRef.current) {
//      element = context.triggerRef.current;
//    }
//
//    if (element) {
//      const triggerBounds = element.getBoundingClientRect();
//      if (
//        typeof triggerBounds !== "object" ||
//        typeof triggerBounds.y !== "number" ||
//        typeof triggerBounds.height !== "number" ||
//        typeof triggerBounds.x !== "number" ||
//        typeof triggerBounds.width !== "number"
//      ) {
//        return;
//      }
//
//      setInPlaceStyles({
//        top: triggerBounds.y + triggerBounds.height,
//        left: triggerBounds.x - width / 2 + triggerBounds.width / 2
//      });
//    }
//  }, [context, inPlaceSelector, width]);
//
//  useEffect(() => {
//    if ("in-place" !== position) {
//      return;
//    }
//    memoizedRepositionModal();
//    document.addEventListener("scroll", memoizedRepositionModal);
//    document.addEventListener("resize", memoizedRepositionModal);
//    return () => {
//      document.removeEventListener("resize", memoizedRepositionModal);
//      document.removeEventListener("scroll", memoizedRepositionModal);
//    };
//  }, [memoizedRepositionModal, position]);
//
//  return (
//    <CSSTransition
//      mountOnEnter
//      unmountOnExit
//      in={context.open}
//      timeout={{
//        enter: 0,
//        exit: 500
//      }}
//      classNames={{
//        enter: `o-0 ${transform[position]}`,
//        enterDone: `o-1 transform-3d-zeroed`,
//        exit: `o-0 ${transform[position]}`,
//        exitActive: `o-0 ${transform[position]}`
//      }}
//    >
//      <div
//        role="dialog"
//        aria-modal
//        id={context.contentId}
//        className={getClasses(
//          "fixed shadow-4 overflow-auto ease-in-out duration-500 mw-100",
//          {
//            [className]: className,
//            [pickedZIndex]: context.zIndex,
//            "left-0 right-0 bottom-0": position === "bottom",
//            "left-0 right-0 top-0": position === "top",
//            "top-0 left-0 bottom-0": position === "left",
//            "right-0 top-0 bottom-0": position === "right"
//          }
//        )}
//        style={{
//          maxHeight: "100%",
//          [drawerStyle]: drawerDepth,
//          transitionProperty: "opacity, transform",
//          ...(position === "in-place" ? inPlaceStyles : {})
//        }}
//        {...props}
//      >
//        <div
//          className={getClasses("border-box pa-sm", {
//            [innerClassName]: innerClassName
//          })}
//        >
//          {children}
//        </div>
//      </div>
//    </CSSTransition>
//  );
//};
//
//DrawerContent.propTypes = {
//  children: PropTypes.node,
//  className: PropTypes.string,
//  /** Height for a top or bottom postioned drawer */
//  height: PropTypes.any,
//  /** Additional class names for inner drawer element */
//  innerClassName: PropTypes.string,
//  /** Override pinned location for in-place drawer. */
//  inPlaceSelector: PropTypes.string,
//  /** Width for a left or right postioned drawer */
//  width: PropTypes.any,
//  /** controls where the drawer comes from, either a side of screen or in-place */
//  position: PropTypes.oneOf(["bottom", "left", "right", "top", "in-place"])
//};
