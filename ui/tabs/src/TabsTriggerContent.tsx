import * as React from "react";

import { styled, theme } from "@washingtonpost/wpds-theme";
import type * as WPDS from "@washingtonpost/wpds-theme";
import { Tooltip } from "@washingtonpost/wpds-tooltip";

const StyledContainer = styled("div", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "$025",
});

const StyledTabText = styled("div", {
  display: "inline-flex",
  flexDirection: "column",
  maxWidth: "14rem", // use rems, as ch value shifts when text is active bold
  "&::after": {
    content: "attr(data-text)",
    fontWeight: theme.fontWeights.bold,
    height: 0,
    visibility: "hidden",
  },
});

const Truncate = styled("span", {
  maxWidth: "100%",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
});

const isTruncated = (el) => {
  return el && el.scrollWidth > el.clientWidth;
};

export type TabsTriggerContentProps = {
  children?: React.ReactNode;
  /** Overrides for the input text styles. Padding overrides affect the input container and  */
  css?: WPDS.CSS;
} & React.ComponentPropsWithoutRef<typeof StyledContainer>;

export const TabsTriggerContent = ({ children }: TabsTriggerContentProps) => {
  const internalRef = React.useRef<HTMLSpanElement | null>(null);

  const [truncated, setTruncated] = React.useState(false);
  React.useEffect(() => {
    const element = internalRef?.current;
    setTruncated(isTruncated(element));
  }, []);

  const childrenArray = React.Children.toArray(children);

  // the StyledTabText component is set to inline flex to include bolded spacer text
  // that prevents shifting. Additional Truncate is needed to show the ellipsis. Other
  // components like icons are simply returned
  const content = childrenArray.map((child) => {
    if (typeof child === "string") {
      return (
        <StyledTabText data-text={child} key={child}>
          <Truncate ref={internalRef}>{child}</Truncate>
        </StyledTabText>
      );
    }
    return child;
  });

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
};

TabsTriggerContent.displayName = "TabsTriggerContent";
