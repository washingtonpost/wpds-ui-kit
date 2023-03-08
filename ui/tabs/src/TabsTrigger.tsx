import * as React from "react";
import { useEffect } from "react";
import { CSSTransition } from "react-transition-group";

import * as TabsPrimitive from "@radix-ui/react-tabs";

import { styled, theme } from "@washingtonpost/wpds-theme";
import { Tooltip } from "@washingtonpost/wpds-tooltip";

import type * as WPDS from "@washingtonpost/wpds-theme";

const afterConsts = {
  content: "",
  position: "absolute",
  width: "100%",
  insetBlockEnd: 0,
  insetInline: 0,
};

const StyledTabsTrigger = styled(TabsPrimitive.Trigger, {
  all: "unset",
  fontFamily: "inherit",
  padding: "$075 0",
  color: theme.colors.primary,
  position: "relative",
  cursor: "pointer",

  flexShrink: 0,
  overflow: "hidden",
  maxWidth: "24ch", // ch value is based on the width of the font 0. This is a rough approximation
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",

  variants: {
    active: {
      true: {
        fontWeight: theme.fontWeights.bold,

        "&::after": {
          ...afterConsts,
          borderBottom: `1px solid ${theme.colors.primary}`,
        },

        "&:hover::after": {
          borderBottom: `1px solid ${theme.colors.primary}`,
        },
        "&.move-enter::after": {
          transform: "translateX(var(--startx))",
        },

        "&.move-enter-active::after": {
          transform: "translateX(0)",
          transition: "transform 300ms",
        },
      },
    },
  },

  "&:hover::after": {
    ...afterConsts,
    borderBottom: `1px solid ${theme.colors.gray300}`,
  },

  // adding back the default focus outline
  "&:focus-visible": {
    outline: "-webkit-focus-ring-color auto 1px",
    "&::after": {
      // remove border so that blue outline is visible below the element
      borderBottom: "none",
    },
  },

  // styling when the element is disabled. Radix updates the data-state
  // and it's the only way to know if the element is disabled
  "&[disabled]": {
    color: theme.colors.subtle,
    "&:hover::after": {
      ...afterConsts,
      borderBottom: `1px solid ${theme.colors.faint}`,
    },
  },
});

const isTruncated = (el) => {
  return el && el.scrollWidth > el.clientWidth;
};

export type TabsTriggerProps = {
  children?: React.ReactNode;
  /** The value for the selected tab, if controlled */
  value: string;
  /** The value whether the trigger should be disabled */
  disabled?: boolean;
  /** Overrides for the input text styles. Padding overrides affect the input container and  */
  css?: WPDS.CSS;
  /** Whether the current tabs trigger is currently active */
  active: boolean;
  /** Keeps track of the previously active tab location */
  previousRect?: DOMRect;
  /** setter for the previously active tab location */
  setPreviousRect: React.Dispatch<React.SetStateAction<DOMRect>>;
} & React.ComponentPropsWithRef<typeof StyledTabsTrigger>;

export const TabsTrigger = React.forwardRef<
  HTMLButtonElement,
  TabsTriggerProps
>(
  (
    {
      active,

      previousRect,
      setPreviousRect,
      ...props
    }: TabsTriggerProps,
    ref
  ) => {
    const internalRef = React.useRef<HTMLButtonElement | null>(null);

    const [truncated, setTruncated] = React.useState(false);

    let startx = "0px";
    if (previousRect && internalRef.current) {
      startx = `${
        previousRect.left - internalRef.current.getBoundingClientRect().left
      }px`;
    }

    useEffect(() => {
      const element = internalRef.current;
      setTruncated(isTruncated(element));
    }, []);

    const TabsTriggerWithAnimation = () => (
      <CSSTransition
        nodeRef={internalRef}
        in={active}
        timeout={300}
        classNames="move"
        onEntered={() => {
          if (internalRef.current) {
            setPreviousRect(internalRef.current.getBoundingClientRect());
          }
        }}
      >
        <StyledTabsTrigger
          {...props}
          ref={internalRef}
          active={active}
          style={{ "--startx": startx } as React.CSSProperties}
        />
      </CSSTransition>
    );

    return (
      <>
        {truncated ? (
          <Tooltip.Provider>
            <Tooltip.Root>
              <Tooltip.Trigger>
                <TabsTriggerWithAnimation />
              </Tooltip.Trigger>
              <Tooltip.Content>
                {internalRef.current?.innerText}
              </Tooltip.Content>
            </Tooltip.Root>
          </Tooltip.Provider>
        ) : (
          <TabsTriggerWithAnimation />
        )}
      </>
    );
  }
);

TabsTrigger.displayName = "TabsTrigger";
