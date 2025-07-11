import React, { useState, useEffect, useTransition } from "react";
import { FocusScope } from "@radix-ui/react-focus-scope";
import { DrawerContextVE } from "./drawer-root-ve";
import { drawerContainerStyles, drawerInnerStyles } from "./Drawer.css";

interface DrawerContentVEProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Height for a top or bottom positioned drawer  @default 500 */
  height?: number | "auto";
  /** Additional class names for inner drawer element */
  innerClassName?: string;
  /** When `true`, tabbing from last item will focus first tabbable and shift+tab from first item will focus last tababble. @defaultValue true */
  loopFocus?: boolean;
  /** Position of the drawer @default bottom */
  position?: "top" | "right" | "bottom" | "left";
  /** When `true`, focus cannot escape the `Content` via keyboard, pointer, or a programmatic focus  @defaultValue false */
  trapFocus?: boolean;
  /** Width for a left or right positioned drawer  @default 400 */
  width?: number | "auto";
}

export const DrawerContentVE = React.forwardRef<
  HTMLDivElement,
  DrawerContentVEProps
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
      className,
      ...props
    },
    ref
  ) => {
    const context = React.useContext(DrawerContextVE);
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

    const containerClass = drawerContainerStyles({
      position,
      state: context.open ? "open" : "closed",
    });

    return shouldRender ? (
      <FocusScope loop={loopFocus} trapped={trapFocus} asChild>
        <div
          ref={ref}
          role="dialog"
          id={context.contentId}
          data-position={position}
          data-state={context.open ? "open" : "closed"}
          className={`${containerClass} ${className || ""}`}
          style={{
            width:
              position === "left" || position === "right" ? width : undefined,
            height:
              position === "top" || position === "bottom" ? height : undefined,
            zIndex: context.zIndex as number,
          }}
          onTransitionEnd={handleTransitionEnd}
          onAnimationStart={handleEnter}
          onAnimationEnd={handleAnimationEnd}
          {...props}
        >
          <div className={`${drawerInnerStyles} ${innerClassName || ""}`}>
            {children}
          </div>
        </div>
      </FocusScope>
    ) : null;
  }
);

DrawerContentVE.displayName = "DrawerContentVE";

export type { DrawerContentVEProps };
