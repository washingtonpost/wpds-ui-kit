import * as React from "react";
import { useEffect } from "react";

import * as TabsPrimitive from "@radix-ui/react-tabs";

import { styled, theme } from "@washingtonpost/wpds-theme";
import { Tooltip } from "@washingtonpost/wpds-tooltip";

import type * as WPDS from "@washingtonpost/wpds-theme";

const afterConsts = {
  content: "",
  position: "absolute",
  width: "100%",
  bottom: "0",
  left: "0",
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

  // when truncating and using the tooltip trigger, the data-state gets overwritten
  // so checking for aria-selected instead of data-state
  '&[aria-selected="true"]': {
    fontWeight: theme.fontWeights.bold,

    "&::after": {
      ...afterConsts,
      borderBottom: `1px solid ${theme.colors.primary}`,
    },

    "&:hover::after": {
      borderBottom: `1px solid ${theme.colors.primary}`,
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
  value: string;
  /** The value whether the trigger should be disabled */
  disabled?: boolean;
  /** Overrides for the input text styles. Padding overrides affect the input container and  */
  css?: WPDS.CSS;
} & React.ComponentPropsWithRef<typeof StyledTabsTrigger>;

// TODO: implement trigger animation, implement animation toggle
export const TabsTrigger = React.forwardRef<
  HTMLButtonElement,
  TabsTriggerProps
>(({ ...props }: TabsTriggerProps, ref) => {
  const internalRef = React.useRef<HTMLButtonElement>(null);

  const [truncated, setTruncated] = React.useState(false);

  useEffect(() => {
    const element = internalRef.current;
    setTruncated(isTruncated(element));
  }, []);

  return (
    <>
      {truncated ? (
        <Tooltip.Provider>
          <Tooltip.Root>
            <Tooltip.Trigger>
              <StyledTabsTrigger {...props} ref={internalRef} />
            </Tooltip.Trigger>
            <Tooltip.Content>{internalRef.current?.innerText}</Tooltip.Content>
          </Tooltip.Root>
        </Tooltip.Provider>
      ) : (
        <StyledTabsTrigger css={{}} {...props} ref={internalRef} />
      )}
    </>
  );
});

TabsTrigger.displayName = "TabsTrigger";
