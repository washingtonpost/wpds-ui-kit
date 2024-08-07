import React from "react";
import { CSSTransition } from "react-transition-group";

import * as TabsPrimitive from "@radix-ui/react-tabs";

import { styled, theme } from "../theme";
import { TabsTriggerContent } from "./TabsTriggerContent";
import { TabsContext } from "./context";

import type * as WPDS from "../theme";

const afterConsts = {
  content: "",
  position: "absolute",
  width: "100%",
  insetBlockEnd: 0,
  insetInline: 0,
};

const StyledTabsTrigger = styled(TabsPrimitive.Trigger, {
  cursor: "pointer",
  border: "none",
  background: "transparent",
  appearance: "none",
  fontFamily: "$subhead",
  fontSize: theme.fontSizes[100],
  color: theme.colors.primary,
  position: "relative",
  paddingBlock: theme.space["075"],
  paddingInline: 0,
  variants: {
    active: {
      true: {
        fontWeight: theme.fontWeights.bold,

        "&::after": {
          ...afterConsts,
          borderBottom: `1px solid ${theme.colors.primary}`,
          transformOrigin: "top left",
        },

        "&:hover::after": {
          borderBottom: `1px solid ${theme.colors.primary}`,
        },

        "&.move-enter::after": {
          transform: "translateX(var(--startx)) scaleX(var(--startscale))",

          "@reducedMotion": {
            transition: "none",
          },
        },

        "&.move-enter-active::after": {
          transform: "translateX(0) scaleX(1)",
          transition: `transform ${theme.transitions.normal} ${theme.transitions.inOut}`,

          "@reducedMotion": {
            transition: "none",
          },
        },
      },
    },
    density: {
      compact: { fontSize: theme.fontSizes["087"] },
      default: {},
      loose: { fontSize: theme.fontSizes[112] },
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

  // styling when the element is disabled
  "&[disabled]": {
    color: theme.colors.outline,
    "&:hover::after": {
      ...afterConsts,
      borderBottom: `1px solid ${theme.colors.outline}`,
    },
  },
});

type TabsTriggerVariants = WPDS.VariantProps<typeof StyledTabsTrigger>;
type TriggerCombinedProps = React.ComponentPropsWithoutRef<
  typeof StyledTabsTrigger
> &
  TabsTriggerVariants;

export type TabsTriggerProps = {
  children?: React.ReactNode;
  /** A unique value that associates the trigger with a content. */
  value: string;
  /** The value whether the trigger should be disabled */
  disabled?: boolean;
  /** Overrides for the input text styles. Padding overrides affect the input container and  */
  css?: WPDS.CSS;
} & TriggerCombinedProps;

export const TabsTrigger = ({
  children,
  value,
  ...props
}: TabsTriggerProps) => {
  const internalRef = React.useRef<HTMLButtonElement | null>(null);
  const { currentValue, previousRect, setPreviousRect } =
    React.useContext(TabsContext);
  const active = value === currentValue;

  let startscale = "100%";
  let startx = "0px";
  if (internalRef.current && previousRect) {
    const rectangle = internalRef.current.getBoundingClientRect();
    startscale = `${(previousRect.width / rectangle.width) * 100}%`;
    startx = `${previousRect.left - rectangle.left}px`;
  }

  React.useEffect(() => {
    if (active && !previousRect && internalRef.current) {
      setPreviousRect(internalRef.current.getBoundingClientRect());
    }
  }, []);

  return (
    <CSSTransition
      nodeRef={internalRef}
      in={active}
      timeout={300}
      classNames="move"
      onEntered={() => {
        if (internalRef.current && setPreviousRect) {
          setPreviousRect(internalRef.current.getBoundingClientRect());
        }
      }}
    >
      <StyledTabsTrigger
        style={
          {
            "--startx": startx,
            "--startscale": startscale,
          } as React.CSSProperties
        }
        ref={internalRef}
        active={active}
        value={value}
        {...props}
      >
        <TabsTriggerContent>{children}</TabsTriggerContent>
      </StyledTabsTrigger>
    </CSSTransition>
  );
};

TabsTrigger.displayName = "TabsTrigger";
