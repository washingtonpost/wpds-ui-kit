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
        },

        "&.move-enter-active::after": {
          transform: "translateX(0)",
          transition: "transform 300ms",
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

const isTruncated = (el) => {
  return el && el.scrollWidth > el.clientWidth;
};

export type TabsTriggerProps = {
  children?: React.ReactNode;
  /** The value for the selected tab, if controlled */
  value?: string;
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
} & React.ComponentPropsWithRef<typeof StyledTabsTrigger>;

const StyledContainer = styled("div", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "$025",
});

const StyledTabText = styled("div", {
  flex: "1 0 auto",
  maxWidth: "24ch", // ch value is based on the width of the font 0. This is a rough approximation
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
});

const TabContent = React.forwardRef<any, any>(({ children }, ref) => {
  const internalRef = React.useRef<HTMLDivElement | null>(null);

  const [truncated, setTruncated] = React.useState(false);

  const childrenArray = React.Children.toArray(children);
  const hasMoreThanOneChild = childrenArray.length > 1;

  useEffect(() => {
    const element = internalRef?.current;
    setTruncated(isTruncated(element));
  }, []);

  // the parent container is flex, but the StyledTabText component cannot be set to
  // flex since we want to show the ellipsis. For this reason, we need to split the
  // children components
  const content = hasMoreThanOneChild ? (
    <>
      {childrenArray[0]}
      <StyledTabText ref={internalRef}>{childrenArray[1]}</StyledTabText>
    </>
  ) : (
    <StyledTabText ref={internalRef}>{children}</StyledTabText>
  );

  return (
    <>
      {truncated ? (
        <Tooltip.Provider>
          <Tooltip.Root>
            <Tooltip.Trigger>
              <StyledContainer data-testid="tabs-tooltip-trigger">
                {content}
              </StyledContainer>
            </Tooltip.Trigger>
            <Tooltip.Content>
              <span data-testid="tabs-tooltip-content">
                {internalRef?.current?.innerText}
              </span>
            </Tooltip.Content>
          </Tooltip.Root>
        </Tooltip.Provider>
      ) : (
        <StyledContainer>{content}</StyledContainer>
      )}
    </>
  );
});

//TODO: Remove <any> type and figure out why typing issue is happening
export const TabsTrigger: React.FC<any> = React.forwardRef<
  HTMLButtonElement,
  TabsTriggerProps
>(
  (
    {
      active,
      previousRect,
      setPreviousRect,
      onClick,
      children,
      ...props
    }: TabsTriggerProps,
    ref
  ) => {
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
          if (internalRef.current) {
            setPreviousRect &&
              setPreviousRect(internalRef.current.getBoundingClientRect());
          }
        }}
      >
        <StyledTabsTrigger
          style={{ "--startx": startx } as React.CSSProperties}
          ref={internalRef}
          active={active}
          onClick={(e) => {
            onClick && onClick(e);
          }}
          {...props}
        >
          <TabContent ref={internalRef}>{children}</TabContent>
        </StyledTabsTrigger>
      </CSSTransition>
    );
  }
);

TabsTrigger.displayName = "TabsTrigger";
