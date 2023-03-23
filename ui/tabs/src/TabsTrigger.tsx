import * as React from "react";
import { CSSTransition } from "react-transition-group";

import * as TabsPrimitive from "@radix-ui/react-tabs";

import { styled, theme } from "@washingtonpost/wpds-theme";
import { TabsTriggerContent } from "./TabsTriggerContent";

import type * as WPDS from "@washingtonpost/wpds-theme";

const afterConsts = {
  content: "",
  position: "absolute",
  width: "100%",
  insetBlockEnd: 0,
  insetInline: 0,
};

const StyledTabsTrigger = styled(TabsPrimitive.Trigger, {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  height: "fit-content",
  cursor: "pointer",
  border: "none",
  background: "transparent",
  appearance: "none",
  fontFamily: "$subhead",
  fontSize: theme.fontSizes[100],
  padding: "$075 0",
  color: theme.colors.primary,
  position: "relative",
  gap: "$075",
  flexShrink: 0,

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

          "@reducedMotion": {
            transition: "none",
          },
        },

        "&.move-enter-active::after": {
          transform: "translateX(0)",
          transition: "transform 300ms",

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
    color: theme.colors.subtle,
    "&:hover::after": {
      ...afterConsts,
      borderBottom: `1px solid ${theme.colors.faint}`,
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
  /** The value for the selected tab, if controlled */
  value: string;
  /** The value whether the trigger should be disabled */
  disabled?: boolean;
  /** Overrides for the input text styles. Padding overrides affect the input container and  */
  css?: WPDS.CSS;
  /** Whether the current tabs trigger is currently active */
  active?: boolean;
  /** Keeps track of the previously active tab location */
  previousRect?: DOMRect;
  /** setter for the previously active tab location */
  setPreviousRect?: React.Dispatch<React.SetStateAction<DOMRect>>;
} & TriggerCombinedProps;

export const TabsTrigger = ({
  active,
  previousRect,
  setPreviousRect,
  onClick,
  children,
  value,
  ...props
}: TabsTriggerProps) => {
  const internalRef = React.useRef<HTMLButtonElement | null>(null);

  let startx = "0px";
  if (previousRect && internalRef.current) {
    startx = `${
      previousRect.left - internalRef.current.getBoundingClientRect().left
    }px`;
  }

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
        style={{ "--startx": startx } as React.CSSProperties}
        ref={internalRef}
        active={active}
        value={value}
        onClick={onClick}
        {...props}
      >
        <TabsTriggerContent>{children}</TabsTriggerContent>
      </StyledTabsTrigger>
    </CSSTransition>
  );
};

TabsTrigger.displayName = "TabsTrigger";
