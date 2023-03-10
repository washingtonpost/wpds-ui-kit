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
  fontSize: "$100",
  padding: "$075 0",
  color: theme.colors.primary,
  position: "relative",
  gap: "$075",
  flexShrink: 0,

  // overflow: "hidden",
  // maxWidth: "24ch", // ch value is based on the width of the font 0. This is a rough approximation
  // textOverflow: "ellipsis",
  // whiteSpace: "nowrap",

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
    icon: {
      true: {
        alignItems: "center",
        gap: "$025",
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
  // value?: string;
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
  // display: "flex",
  flex: "1 0 auto",
  maxWidth: "24ch", // ch value is based on the width of the font 0. This is a rough approximation
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  // minWidth: 0,
  // maxWidth: "fit-content",
});

const TabContent = React.forwardRef<any, any>(
  ({ children, innerText, ...props }, ref) => {
    const [truncated, setTruncated] = React.useState(false);
    // const truncated = false;
    const childrenArray = React.Children.toArray(children);
    const hasMoreThanOneChild = childrenArray.length > 1;

    useEffect(() => {
      const element = ref?.current;
      setTruncated(isTruncated(element));
    }, []);

    // return truncated ? (
    //   <Tooltip.Provider>
    //     <Tooltip.Root data-testid="tabs-trigger-tooltip">
    //       <Tooltip.Trigger>
    //         <StyledTabText>{children}</StyledTabText>
    //       </Tooltip.Trigger>
    //       <Tooltip.Content>{innerText}</Tooltip.Content>
    //     </Tooltip.Root>
    //   </Tooltip.Provider>
    // ) : (
    // );
    return (
      <StyledContainer>
        {hasMoreThanOneChild ? (
          <>
            {childrenArray[0]}
            <StyledTabText>{childrenArray[1]}</StyledTabText>{" "}
          </>
        ) : (
          <StyledTabText>{children}</StyledTabText>
        )}
      </StyledContainer>
    );
  }
);

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
    const internalRef = React.useRef<HTMLButtonElement>(null);

    // const [truncated, setTruncated] = React.useState(false);

    // console.log({ props });

    // useEffect(() => {
    //   const element = internalRef.current;
    //   // setTruncated(isTruncated(element));
    // }, []);

    let startx = "0px";
    if (previousRect && internalRef.current) {
      startx = `${
        previousRect.left - internalRef.current.getBoundingClientRect().left
      }px`;
    }

    return (
      // <>
      <CSSTransition
        nodeRef={ref}
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
          ref={ref}
          active={active}
          onClick={(e) => {
            onClick && onClick(e);
          }}
          {...props}
        >
          <TabContent ref={internalRef}>{children}</TabContent>
        </StyledTabsTrigger>
      </CSSTransition>
      // </>
    );
  }
);

TabsTrigger.displayName = "TabsTrigger";

{
  /* {truncated ? (
    <Tooltip.Provider>
      <Tooltip.Root data-testid="tabs-trigger-tooltip">
        <Tooltip.Trigger>
          <TabsTriggerWithAnimation
            startx={startx}
            ref={internalRef}
            active={active}
            {...props}
          />
        </Tooltip.Trigger>
        <Tooltip.Content>
          {internalRef.current?.innerText}
        </Tooltip.Content>
      </Tooltip.Root>
    </Tooltip.Provider>
  ) : (
    <TabsTriggerWithAnimation
      startx={startx}
      ref={internalRef}
      active={active}
      {...props}
    />
  )} */
}
