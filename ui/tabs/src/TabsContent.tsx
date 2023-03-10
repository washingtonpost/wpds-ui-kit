import * as React from "react";
import { useEffect } from "react";

import { styled } from "@washingtonpost/wpds-theme";
import type * as WPDS from "@washingtonpost/wpds-theme";
import { Tooltip } from "@washingtonpost/wpds-tooltip";

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

const isTruncated = (el) => {
  return el && el.scrollWidth > el.clientWidth;
};

export type TabsTriggerProps = {
  children?: React.ReactNode;
  /** Overrides for the input text styles. Padding overrides affect the input container and  */
  css?: WPDS.CSS;
} & React.ComponentPropsWithRef<typeof StyledContainer>;

export const TabsContent = ({ children }) => {
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
};
