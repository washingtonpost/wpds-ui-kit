import React, { useEffect, useState } from "react";
import * as styles from "./Scrim.css";
import { sprinkles } from "../theme/sprinkles.css";
import type { Sprinkles } from "../theme/sprinkles.css";
import { vars } from "../theme/vanilla-extract";

const NAME = "Scrim";

interface ScrimVEProps
  extends Omit<React.ComponentPropsWithRef<"div">, keyof Sprinkles | "zIndex">,
    Omit<Sprinkles, "zIndex"> {
  /** Additional CSS classes */
  className?: string;
  /** Whether scrollbars should be hidden and scroll locked when the scrim is shown @default true */
  lockScroll?: boolean;
  /** Controlled value to open and close the scrim */
  open?: boolean;
  /** Css z-index of scrim @default theme.zIndices.shell */
  zIndex?: React.CSSProperties["zIndex"];
}

export const ScrimVE = React.forwardRef<HTMLDivElement, ScrimVEProps>(
  (
    {
      lockScroll = true,
      open,
      zIndex = vars.zIndices.shell,
      className,
      style: inlineStyle,
      ...props
    },
    ref
  ) => {
    const [shouldRender, setShouldRender] = useState(false);

    // Extract sprinkle props
    const sprinkleProps: Partial<Sprinkles> = {};
    const otherProps: Omit<
      React.ComponentPropsWithRef<"div">,
      keyof Sprinkles | "style" | "zIndex"
    > = {};

    Object.entries(props).forEach(([key, value]) => {
      if (
        key !== "zIndex" &&
        sprinkles.properties.has(key as keyof Sprinkles)
      ) {
        (sprinkleProps as Record<string, unknown>)[key] = value;
      } else if (key !== "zIndex") {
        (otherProps as Record<string, unknown>)[key] = value;
      }
    });

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

    const scrimClassName = [
      styles.scrimContainer,
      sprinkles(sprinkleProps),
      className,
    ]
      .filter(Boolean)
      .join(" ");

    const combinedStyle = {
      ...inlineStyle,
      zIndex,
    };

    return shouldRender ? (
      <div
        data-state={open ? "open" : "closed"}
        ref={ref}
        className={scrimClassName}
        style={combinedStyle}
        aria-hidden={true}
        {...otherProps}
        onAnimationEnd={handleAnimationEnd}
      />
    ) : null;
  }
);

ScrimVE.displayName = NAME;

export type { ScrimVEProps };
